import { WebPlugin } from "@capacitor/core";

import {
  SignInWithApplePlugin,
  InitOptions,
  SignInResponse,
  SignInError,
} from "./definitions";

declare var window: any;

export class SignInWithAppleWeb extends WebPlugin
  implements SignInWithApplePlugin {
  public ready: Promise<any>;
  private readyResolver: Function;
  private hasInitialised = false;

  private APPLE_SCRIPT_KEY = "apple_signin_script";

  constructor() {
    super({
      name: "SignInWithApple",
      platforms: ["web"],
    });

    this.ready = new Promise((resolve) => (this.readyResolver = resolve));
    this.init();
  }

  async init() {
    await this.loadAppleScript();
    this.readyResolver();
    console.log("ready");
  }

  async Init(options: InitOptions): Promise<void> {
    const interval = setInterval(() => {
      if (this.hasInitialised) {
        return;
      }

      if (!window.AppleID) {
        return;
      }

      const { clientId, scope, redirectURI, state, usePopup } = options;

      window.AppleID.auth.init({
        clientId: clientId,
        scope: scope,
        redirectURI: redirectURI,
        state: state,
        usePopup: usePopup !== undefined ? usePopup : false,
      });

      this.hasInitialised = true;

      clearInterval(interval);
    }, 50);
  }

  Authorize(): Promise<SignInResponse> {
    return new Promise<SignInResponse>((resolve, reject) => {
      const buildReject = (error: string) => reject({ error } as SignInError);

      const interval = setInterval(async () => {
        if (window && !window.AppleID) {
          buildReject("Cannot find AppleID instance");
          return;
        }

        if (!this.hasInitialised) {
          buildReject("AppleID has not yet initialized");
          return;
        }

        try {
          const response: SignInResponse = await window.AppleID.auth.signIn();
          resolve(response);
        } catch (error) {
          reject(error as SignInError);
        }

        clearInterval(interval);
      }, 50);
    });
  }

  private loadAppleScript() {
    return new Promise((resolve, reject) => {
      if (
        (window && window.AppleID) ||
        document.getElementById(this.APPLE_SCRIPT_KEY)
      ) {
        return resolve();
      }

      const file = document.createElement("script");
      file.type = "text/javascript";
      file.src =
        "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
      file.id = this.APPLE_SCRIPT_KEY;
      file.onload = resolve;
      file.onerror = reject;
      document.getElementsByTagName("head")[0].appendChild(file);
    });
  }
}

const SignInWithApple = new SignInWithAppleWeb();

export { SignInWithApple };

import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(SignInWithApple);
