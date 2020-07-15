import { WebPlugin } from "@capacitor/core";

import {
  SignInWithApplePlugin,
  InitOptions,
  ResponseSignInWithApplePlugin,
  SignInError,
} from "./definitions";

declare var window: any;

export class SignInWithAppleWeb extends WebPlugin
  implements SignInWithApplePlugin {
  public readonly ready: Promise<any>;
  private readyResolver: Function;
  private key = "apple_signin_script";
  private src =
    "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";

  constructor() {
    super({
      name: "SignInWithApple",
      platforms: ["web"],
    });

    this.ready = new Promise((resolve) => (this.readyResolver = resolve));
    this.configure();
  }

  async Init(options: InitOptions): Promise<void> {
    await this.ready;
    window.AppleID.auth.init(options);
  }

  async Authorize(): Promise<ResponseSignInWithApplePlugin> {
    try {
      await this.ready;
      return await window.AppleID.auth.signIn();
    } catch (error) {
      throw error as SignInError;
    }
  }

  private async configure() {
    try {
      await this.loadAppleScript();
    } catch (error) {
      throw error;
    }

    const interval = setInterval(() => {
      if (!window.AppleID) {
        return;
      }

      clearInterval(interval);
      this.readyResolver();
    }, 50);
  }

  private loadAppleScript() {
    return new Promise((resolve, reject) => {
      if (document.getElementById(this.key)) {
        return resolve();
      }

      const file = document.createElement("script");
      file.type = "text/javascript";
      file.src = this.src;
      file.id = this.key;
      file.onload = resolve;
      file.onerror = reject;
      document.querySelector("head").appendChild(file);
    });
  }
}

const SignInWithApple = new SignInWithAppleWeb();

export { SignInWithApple };

import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(SignInWithApple);
