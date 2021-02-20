/// <reference types="node-forge" />
import * as plugins from './smartcrypto.plugins';
export declare class PublicKey {
    static createFromPrivateKey(pemString: string): PublicKey;
    static fromPemString(pemString: string): PublicKey;
    forgePublicKey: plugins.nodeForge.pki.PublicKey;
    constructor(publicKeyArg: plugins.nodeForge.pki.PublicKey);
    toPemString(): string;
}
