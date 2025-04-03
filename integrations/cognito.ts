// Libraries
import { NextRequest } from 'next/server';
import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';
import jwkToPem from 'jwk-to-pem';

// Constants
import AMPLIFY_CONFIG from "@/amplify_outputs.json";

export const verifyRequestor: (request: NextRequest) => Promise<JwtPayload> = async (request) => {
  // Extract Authorization Token
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Forbidden');
  }
  const authToken = authHeader.substring(7);

  // Decode Token
  const decoded: Jwt | null = jwt.decode(authToken, { complete: true });
  if (!decoded) {
    throw new Error('Forbidden');
  }

  // Fetch Cognito JWKs
  const res = await fetch(
    `https://cognito-idp.${AMPLIFY_CONFIG.auth.aws_region}.amazonaws.com/${AMPLIFY_CONFIG.auth.user_pool_id}/.well-known/jwks.json`
  );
  const { keys } = await res.json();
  const key = keys.find((k: any) => k.kid === decoded?.header?.kid || '');
  if (!key) {
    throw new Error('Forbidden');
  }

  // Extract Authorization Payload
  const payload: JwtPayload | string = jwt.verify(
    authToken,
    jwkToPem(key),
    { algorithms: ['RS256'] }
  );

  return payload as unknown as JwtPayload;
};
