import { WebPlugin } from "@capacitor/core";

import { SignInWithApplePlugin, InitOptions } from "./definitions";

declare var window: any;

export class SignInWithAppleWeb extends WebPlugin
  implements SignInWithApplePlugin {
  constructor() {
    super({
      name: "SignInWithApple",
      platforms: ["web"],
    });
  }

  async Init(options: InitOptions): Promise<void> {
    this.loadAppleScript(() => {
      if (window && window.AppleID) {
        const { clientId, scope, redirectURI, state, usePopup } = options;

        window.AppleID.auth.init({
          clientId: clientId,
          scope: scope,
          redirectURI: redirectURI,
          state: state,
          usePopup: usePopup !== undefined ? usePopup : false,
        });
      }
    });
  }

  async Authorize(): Promise<{ response: any }> {
    try {
      if (window && window.AppleID) {
        return await window.AppleID.auth.signIn();
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  private loadAppleScript(callback: any) {
    const file = document.createElement("script");
    file.setAttribute("type", "text/javascript");
    file.setAttribute(
      "src",
      "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
    );
    file.addEventListener("load", callback);
    document.getElementsByTagName("head")[0].appendChild(file);
  }
}

const SignInWithApple = new SignInWithAppleWeb();

export { SignInWithApple };

import { registerWebPlugin } from "@capacitor/core";
registerWebPlugin(SignInWithApple);
