# Capacitor Apple Login

[![npm](https://img.shields.io/npm/v/capacitor-apple-login.svg)](https://www.npmjs.com/package/capacitor-apple-login)
[![npm](https://img.shields.io/npm/dt/capacitor-apple-login.svg?label=npm%20downloads)](https://www.npmjs.com/package/capacitor-apple-login)

## Installation

- `npm i capacitor-apple-login`

OR

- `npm i https://github.com/htorbov/capacitor-apple-login`

## Usage (iOS)

```ts
import { Plugins } from '@capacitor/core'

const { SignInWithApple } = Plugins

SignInWithApple.Authorize().then(response => {
  console.log(response)
}).catch(response => {
  console.error(response)
})
```

## Instructions (Android/Web)

The plugin currently works for iOS only. It's made only to pass Apple's new terms. Add the Apple button only after you've checked that the user is on iOS device. If someone wants to implement Android/Web as well - all pull requests will be well welcomed :-)

```ts
const { Device } = Plugins

let device = await Device.getInfo()

if (device.platform === 'ios') {
  // Show the button with SignInWithApple.Authorize()
}
```
