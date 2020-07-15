# Capacitor Sign in With Apple

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Capacitor plugin to support [Sign in With Apple](https://developer.apple.com/sign-in-with-apple/get-started/)

<!-- Badges -->
<a href="https://npmjs.com/package/@capacitor-community/apple-sign-in">
  <img src="https://img.shields.io/npm/v/@capacitor-community/apple-sign-in.svg">
</a>
<a href="https://npmjs.com/package/@capacitor-community/apple-sign-in">
  <img src="https://img.shields.io/npm/l/@capacitor-community/apple-sign-in.svg">
</a>

## Maintainers

| Maintainer | GitHub                              | Social                                    | Sponsoring Company |
| ---------- | ----------------------------------- | ----------------------------------------- | ------------------ |
| Max Lynch  | [mlynch](https://github.com/mlynch) | [@maxlynch](https://twitter.com/maxlynch) | Ionic              |

Maintenance Status: Partially Maintained (help wanted)

## Installation

To use npm

```bash
npm install @capacitor-community/apple-sign-in
```

To use yarn

```bash
yarn add @capacitor-community/apple-sign-in
```

Sync native files

```bash
npx cap sync
```

## Usage (iOS)

```ts
import { Plugins } from "@capacitor/core";
import { ResponseSignInWithApplePlugin } from "@capacitor-community/apple-sign-in";

const { SignInWithApple } = Plugins;

try {
  const response: ResponseSignInWithApplePlugin = await SignInWithApple.Authorize();
} catch (e) {
  console.error(e);
}
```

## Instructions (Web)

```ts
import {
  SignInResponse,
  SignInError,
} from "@capacitor-community/apple-sign-in";

const { Device } = Plugins;

let device = await Device.getInfo();

if (device.platform === "web") {
  // Configure and initialize the plugin with correct values
  SignInWithApple.Init({
    clientId: "[CLIENT_ID]",
    scope: "[SCOPES]", // scope=name email
    redirectURI: "[REDIRECT_URI]",
    state: "[STATE]",
    usePopup: true, //or false defaults to false
  });

  // Trigger Sign in manually with an action, e.g. custom button
  SignInWithApple.Authorize()
    .then((response: SignInResponse) => {
      console.log(response);
    })
    .catch((error: SignInError) => {
      console.error(error);
    });

  // or

  // Use default apple button style by adding div
  <div
    id="appleid-signin"
    data-color="black"
    data-border="true"
    data-type="sign in"
  ></div>;
}
```

Authorization callback listeners can be configured by adding **AppleIDSignInOnSuccess** and **AppleIDSignInOnFailure**

```ts
//Listen for authorization success
document.addEventListener("AppleIDSignInOnSuccess", (data) => {
  console.log(data);
});

//Listen for authorization failures
document.addEventListener("AppleIDSignInOnFailure", (error) => {
  console.error(error);
});
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://rdlabo.jp"><img src="https://avatars1.githubusercontent.com/u/9690024?v=4" width="100px;" alt=""/><br /><sub><b>Masahiko Sakakibara</b></sub></a><br /><a href="https://github.com/capacitor-community/apple-sign-in/commits?author=rdlabo" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
