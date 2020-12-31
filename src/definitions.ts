declare module "@capacitor/core" {
  interface PluginRegistry {
    SignInWithApple: SignInWithApplePlugin;
  }
}

export interface SignInWithApplePlugin {
  init(options: InitOptions): Promise<void>;

  authorize(): Promise<
    ResponseSignInWithApplePlugin | ResponseSignInWithWebPlugin
  >;
}

export interface InitOptions {
  clientId: string;
  scope: string;
  redirectURI: string;
  state: string;
  usePopup: boolean;
}

export interface SignInError {
  error: string;
}

export interface Authorization {
  code: string;
  id_token: string;
  state: string;
}

export interface User {
  email: string;
  name: Name;
}

export interface Name {
  firstName: string;
  lastName: string;
}

export interface ResponseSignInWithApplePlugin {
  response: {
    user: string;
    email: string | null;
    givenName: string | null;
    familyName: string | null;
    identityToken: string;
    authorizationCode: string;
  };
}

export interface ResponseSignInWithWebPlugin {
  user: User;
  authorization: Authorization;
}
