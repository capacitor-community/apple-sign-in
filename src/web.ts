import { WebPlugin } from '@capacitor/core';
import * as  $script from 'scriptjs';

import type { SignInWithAppleOptions, SignInWithApplePlugin, SignInWithAppleResponse, } from './definitions';

declare let AppleID: any;

export class SignInWithAppleWeb
    extends WebPlugin
    implements SignInWithApplePlugin {
    private appleScriptUrl =
        'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
    private isAppleScriptLoaded = false;

    constructor() {
        super({
            name: 'SignInWithApple',
            platforms: ['web'],
        });
    }

    async authorize(
        options?: SignInWithAppleOptions,
    ): Promise<SignInWithAppleResponse> {
        return new Promise((resolve, reject) => {
            if (options) {
                this.loadSignInWithAppleJS().then(loaded => {
                    this.isAppleScriptLoaded = loaded;

                    if (this.isAppleScriptLoaded) {
                        AppleID.auth.init({
                            clientId: options.clientId,
                            redirectURI: options.redirectURI,
                            scope: options.scopes ?? undefined,
                            state: options.state ?? undefined,
                            nonce: options.nonce ?? undefined,
                            usePopup: options.usePopup ?? true,
                        });

                        AppleID.auth
                            .signIn()
                            .then((res: any) => {
                                const response: SignInWithAppleResponse = {
                                    response: {
                                        user: null,
                                        email: res.user?.email,
                                        givenName: res.user?.name.firstName,
                                        familyName: res.user?.name.lastName,
                                        identityToken: res.authorization.id_token,
                                        authorizationCode: res.authorization.code,
                                    },
                                };

                                resolve(response);
                            })
                            .catch((err: any) => {
                                reject(err);
                            });
                    } else {
                        reject('Unable to load Sign in with Apple JS framework.');
                    }
                });
            } else {
                reject('No options were provided.');
            }
        });
    }

    private loadSignInWithAppleJS(): Promise<boolean> {
        return new Promise(resolve => {
            if (!this.isAppleScriptLoaded) {
                if (typeof window !== undefined) {
                    $script.get(this.appleScriptUrl, () => resolve(true));
                } else {
                    resolve(false);
                }
            } else {
                resolve(true);
            }
        });
    }
}
