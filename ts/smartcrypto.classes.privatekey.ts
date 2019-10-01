import * as plugins from './smartcrypto.plugins';

export class PrivateKey {
  // STATIC
  public static createFromPrivateKey(pemString: string) {
    const privateKey = plugins.nodeForge.pki.privateKeyFromPem(pemString);
    return new PrivateKey(privateKey);
  }

  public static fromPemString(pemString: string) {
    return new PrivateKey(plugins.nodeForge.pki.privateKeyFromPem(pemString));
  }

  // INSTANCE
  public forgePrivateKey: plugins.nodeForge.pki.PrivateKey;

  constructor(privateKeyArg: plugins.nodeForge.pki.PrivateKey) {
    this.forgePrivateKey = privateKeyArg;
  }

  public toPemString(): string {
    return plugins.nodeForge.pki.privateKeyToPem(this.forgePrivateKey);
  }
}
