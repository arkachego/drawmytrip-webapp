// Libraries
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';

// Constants
import AMPLIFY_CONFIG from "@/amplify_outputs.json";

export const config = {
  runtime: 'nodejs',  // Use Node.js runtime
  matcher: ['/api/:path*'], // Apply middleware only to API routes
};

export async function middleware(request: NextRequest) {
  try {
    // Extract Authorization Header
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error('Forbidden');
    }

    // Extract Authorization Token
    const authToken = authHeader.substring(7);
    const decoded = jwt.decode(authToken, { complete: true });

    // Fetch Cognito JWKs
    const res = await fetch(
      `https://cognito-idp.${AMPLIFY_CONFIG.auth.aws_region}.amazonaws.com/${AMPLIFY_CONFIG.auth.user_pool_id}/.well-known/jwks.json`
    );
    const { keys } = await res.json();
    const key = keys.find((k) => k.kid === decoded.header.kid);
    if (!key) {
      throw new Error('Forbidden');
    }
  
    // Extract Authorization Payload
    const payload = jwt.verify(
      authToken,
      jwkToPem(key),
      { algorithms: ['RS256'] }
    );

    // Set Headers for Next Handler
    const responseWithHeaders = NextResponse.next();
    responseWithHeaders.headers.set('X-User-Id', payload.sub as unknown as string);
    responseWithHeaders.headers.set('X-User-Email', payload.email);
    return responseWithHeaders;
  }
  catch (error) {
    console.log(error);
    return new NextResponse('Forbidden', { status: 403 });
  }
};
