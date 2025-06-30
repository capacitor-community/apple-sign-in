# Capacitor Sign in With Apple

Capacitor plugin to support [Sign in With Apple](https://developer.apple.com/sign-in-with-apple/get-started/)

<!-- Badges -->
<a href="https://npmjs.com/package/@capacitor-community/apple-sign-in">
  <img src="https://img.shields.io/npm/v/@capacitor-community/apple-sign-in.svg">
</a>
<a href="https://npmjs.com/package/@capacitor-community/apple-sign-in">
  <img src="https://img.shields.io/npm/l/@capacitor-community/apple-sign-in.svg">
</a>

## Installation

- `npm i @capacitor-community/apple-sign-in`
- `npx cap update`

## Usage (iOS, Web)

```ts
import {
  SignInWithApple,
  SignInWithAppleResponse,
  SignInWithAppleOptions,
} from '@capacitor-community/apple-sign-in';

const options: SignInWithAppleOptions = {
  clientId: 'com.your.webservice',
  redirectURI: 'https://www.yourfrontend.com/login',
  scopes: 'email name',
  state: '12345',
  nonce: 'nonce',
};

SignInWithApple.authorize(options)
  .then((result: SignInWithAppleResponse) => {
    // Handle user information
    // Validate token with server and create new session
  })
  .catch(error => {
    // Handle error
  });
```

###

## Instructions (Android)

Not supported.
