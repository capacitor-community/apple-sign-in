export interface SignInWithApplePlugin {
  authorize(options?: SignInWithAppleOptions): Promise<SignInWithAppleResponse>;
}

export interface SignInWithAppleOptions {
  clientId: string;
  redirectURI: string;
  scopes?: string;
  state?: string;
  nonce?: string;
  usePopup?: boolean;
}

export interface SignInWithAppleResponse {
  response: {
    user: string | null;
    email: string | null;
    givenName: string | null;
    familyName: string | null;
    identityToken: string;
    authorizationCode: string;
  };
}
