import * as plugins from './smartcrypto.plugins';

export class PublicKey {
  // STATIC
  public static createFromPrivateKey(pemString: string) {
    const privateKey = plugins.nodeForge.pki.publicKeyFromPem(pemString);
    return new PublicKey(privateKey);
  }


  // INSTANCE
  public forgePublicKey: plugins.nodeForge.pki.PublicKey;

  constructor (publicKeyArg: plugins.nodeForge.pki.PublicKey) {
    this.forgePublicKey = publicKeyArg;
  }

  public toPemString(): string {
    return plugins.nodeForge.pki.publicKeyToPem(this.forgePublicKey);
  }
}