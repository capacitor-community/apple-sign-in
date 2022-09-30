# Capacitor Sign in With Apple

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-3-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

Capacitor plugin to support [Sign in With Apple](https://developer.apple.com/sign-in-with-apple/get-started/)

> ### :rotating_light: This plugin is for Capacitor 4 :rotating_light:
>
> Capacitor 3 users can use version 1.x
> Capacitor 2 users can use version 0.2.0.

<!-- Badges -->
<a href="https://npmjs.com/package/@capacitor-community/apple-sign-in">
  <img src="https://img.shields.io/npm/v/@capacitor-community/apple-sign-in.svg">
</a>
<a href="https://npmjs.com/package/@capacitor-community/apple-sign-in">
  <img src="https://img.shields.io/npm/l/@capacitor-community/apple-sign-in.svg">
</a>

## Maintainers

| Maintainer             | GitHub                                      | Social                                      | Sponsoring Company |
| ---------------------- | ------------------------------------------- | ------------------------------------------- | ------------------ |
| Max Lynch              | [mlynch](https://github.com/mlynch)         | [@maxlynch](https://twitter.com/maxlynch)   | Ionic              |
| Jose "Pilito" Martinez | [epicshaggy](https://github.com/epicshaggy) | [@pilito_he](https://twitter.com/pilito_he) |                    |
| Laszlo Csoka           | [lcsoka](https://github.com/lcsoka)         |                                             |                    |

Maintenance Status: Partially Maintained (help wanted)

## Installation

- `npm i @capacitor-community/apple-sign-in`
- `npx cap update`

## Usage (iOS, Web)

```ts
import {
  SignInWithApple,
  SignInWithAppleResponse,
  SignInWithAppleOptions,
} from '@capacitor-community/apple-sign-in';

let options: SignInWithAppleOptions = {
  clientId: 'com.your.webservice',
  redirectURI: 'https://www.yourfrontend.com/login',
  scopes: 'email name',
  state: '12345',
  nonce: 'nonce',
};

SignInWithApple.authorize(options)
  .then((result: SignInWithAppleResponse) => {
    // Handle user information
    // Validate token with server and create new session
  })
  .catch(error => {
    // Handle error
  });
```

###

## Instructions (Android)

Not supported.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://rdlabo.jp"><img src="https://avatars1.githubusercontent.com/u/9690024?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Masahiko Sakakibara</b></sub></a><br /><a href="https://github.com/capacitor-community/apple-sign-in/commits?author=rdlabo" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/epicshaggy"><img src="https://avatars0.githubusercontent.com/u/50883345?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Pilito</b></sub></a><br /><a href="https://github.com/capacitor-community/apple-sign-in/commits?author=epicshaggy" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/epicshaggy"><img src="https://avatars.githubusercontent.com/u/9068178?v=4?s=100" width="100px;" alt=""/><br /><sub><b>lcsoka</b></sub></a><br /><a href="https://github.com/capacitor-community/apple-sign-in/commits?author=lcsoka" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
