import { PublicKey } from './smartcrypto.classes.publickey';
import { PrivateKey } from './smartcrypto.classes.privatekey';
export declare class KeyPair {
    static createNewKeyPair(): Promise<KeyPair>;
    publicKey: PublicKey;
    privateKey: PrivateKey;
    constructor(optionsArg: {
        privateKey: PrivateKey;
        publicKey: PublicKey;
    });
}
