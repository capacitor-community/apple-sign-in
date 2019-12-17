declare module "@capacitor/core" {
  interface PluginRegistry {
    SignInWithApple: SignInWithApplePlugin;
  }
}

export interface SignInWithApplePlugin {
  Authorize(): Promise<{response: any}>;
}
