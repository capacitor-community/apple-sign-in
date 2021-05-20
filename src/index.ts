import { registerPlugin } from '@capacitor/core';

import type { SignInWithApplePlugin } from './definitions';

const SignInWithApple = registerPlugin<SignInWithApplePlugin>(
  'SignInWithApple',
  {
    web: () => import('./web').then(m => new m.SignInWithAppleWeb()),
  },
);
export * from './definitions';
export { SignInWithApple };
