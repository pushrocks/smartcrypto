import * as plugins from './smartcrypto.plugins';

export class Smartcrypto {
  public static async createRSAKeyPair(): Promise<plugins.nodeForge.pki.KeyPair> {
    const done = plugins.smartpromise.defer<plugins.nodeForge.pki.KeyPair>();
    const rsa = plugins.nodeForge.pki.rsa;
    rsa.generateKeyPair({bits: 2048, workers: 2}, (err, keypair) => {
      if (err) {
        console.log(err);
        throw err;
      }
      done.resolve(keypair);
      // keypair.privateKey, keypair.publicKey
    }); 
    return done.promise;
  }
}