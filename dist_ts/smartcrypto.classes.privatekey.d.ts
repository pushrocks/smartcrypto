/// <reference types="node-forge" />
import * as plugins from './smartcrypto.plugins';
export declare class PrivateKey {
    static createFromPrivateKey(pemString: string): PrivateKey;
    static fromPemString(pemString: string): PrivateKey;
    forgePrivateKey: plugins.nodeForge.pki.PrivateKey;
    constructor(privateKeyArg: plugins.nodeForge.pki.PrivateKey);
    toPemString(): string;
}
