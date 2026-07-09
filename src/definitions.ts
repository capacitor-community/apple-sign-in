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
    user: string | null;
    email: string | null;
    givenName: string | null;
    familyName: string | null;
    identityToken: string;
    authorizationCode: string;
    /**
     * The state value passed in via `SignInWithAppleOptions.state`, echoed
     * back by Apple. Use this to verify CSRF binding — the value here must
     * match the state your application generated before calling `authorize`.
     *
     * Will be `null` if no state was sent or if Apple did not echo it back
     * (older iOS versions).
     */
    state: string | null;
  };
}
