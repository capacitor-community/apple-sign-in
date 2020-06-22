declare module "@capacitor/core" {
  interface PluginRegistry {
    SignInWithApple: SignInWithApplePlugin;
  }
}

export interface SignInWithApplePlugin {
  Init(options: InitOptions): Promise<void>;

  Authorize(): Promise<{ response: any }>;
}

export interface InitOptions {
  clientId: string;
  scope: string;
  redirectURI: string;
  state: string;
  usePopup: boolean;
}
