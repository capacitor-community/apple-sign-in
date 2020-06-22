declare module "@capacitor/core" {
  interface PluginRegistry {
    SignInWithApple: SignInWithApplePlugin;
  }
}

export interface SignInWithApplePlugin {
  Init(options: InitOptions): Promise<void>;

  Authorize(): Promise<SignInResponse>;
}

export interface InitOptions {
  clientId: string;
  scope: string;
  redirectURI: string;
  state: string;
  usePopup: boolean;
}

export interface SignInResponse {
  user: User;
  authorization: Authorization;
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
