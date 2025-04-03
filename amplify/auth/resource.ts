import { defineAuth, secret } from '@aws-amplify/backend';

export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      facebook: {
        clientId: secret('FACEBOOK_CLIENT_ID'),
        clientSecret: secret('FACEBOOK_CLIENT_SECRET'),
        scopes: [ 'public_profile', 'email', 'openid' ],
        attributeMapping: {
          email: 'email',
          givenName: 'first_name',
          familyName: 'last_name',
        },
      },
      callbackUrls: [
        'http://localhost:3000/',
      ],
      logoutUrls: [
        'http://localhost:3000/',
      ],
    }
  },
});
