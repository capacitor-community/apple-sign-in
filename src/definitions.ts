declare module "@capacitor/core" {
  interface PluginRegistry {
    SignInWithApple: SignInWithApplePlugin;
  }
}

export interface SignInWithApplePlugin {
  authorize(options?: SignInWithAppleOptions): Promise<SignInWithAppleResponse>;
}

export interface SignInWithAppleOptions {
  clientId: string;
  redirectURI: string;
  scopes?: string;
  state?: string;
  nonce?: string;
}

export interface SignInWithAppleResponse {
  response: {
    user: string;
    email: string | null;
    givenName: string | null;
    familyName: string | null;
    identityToken: string;
    authorizationCode: string;
  };
}
