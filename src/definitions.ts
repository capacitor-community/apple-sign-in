declare module "@capacitor/core" {
  interface PluginRegistry {
    SignInWithApple: SignInWithApplePlugin;
  }
}

export interface SignInWithApplePlugin {
  Authorize(): Promise<ResponseSignInWithApplePlugin>;
}

export interface ResponseSignInWithApplePlugin {
  response: {
    user: string;
    email: string;
    givenName: string;
    familyName: string;
    identityToken: string;
    authorizationCode: string;
  }
}
