declare module "@capacitor/core" {
  interface PluginRegistry {
    SignInWithApple: SignInWithApplePlugin;
  }
}

export interface SignInWithApplePlugin {
  authorize(
    options?: SignInWithAppleOptions
  ): Promise<SignInWithApplePluginResponse>;
}

export interface SignInWithAppleOptions {
  clientId: string;
  redirectURI: string;
  scope?: string;
  state?: string;
  nonce?: string;
}

export interface SignInWithApplePluginResponse {
  response: {
    user: string;
    email: string | null;
    givenName: string | null;
    familyName: string | null;
    identityToken: string;
    authorizationCode: string;
  };
}
