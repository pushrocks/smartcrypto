import * as plugins from './smartcrypto.plugins';
import { PublicKey } from './smartcrypto.classes.publickey';
import { PrivateKey } from './smartcrypto.classes.privatekey';

export class KeyPair {
  // STATIC
  public static async createNewKeyPair(): Promise<KeyPair> {
    const done = plugins.smartpromise.defer<KeyPair>();
    const rsa = plugins.nodeForge.pki.rsa;
    rsa.generateKeyPair({ bits: 2048, workers: 2 }, async (err, keypair) => {
      if (err) {
        console.log(err);
        throw err;
      }

      done.resolve(
        new KeyPair({
          privateKey: new PrivateKey(keypair.privateKey),
          publicKey: new PublicKey(keypair.publicKey),
        })
      );
    });
    return done.promise;
  }

  // INSTANCE
  public publicKey: PublicKey;
  public privateKey: PrivateKey;

  constructor(optionsArg: { privateKey: PrivateKey; publicKey: PublicKey }) {
    this.privateKey = optionsArg.privateKey;
    this.publicKey = optionsArg.publicKey;
  }
}
