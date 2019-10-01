import * as plugins from './smartcrypto.plugins';
import { KeyPair } from './smartcrypto.classes.keypair';

export class Smartcrypto {
  public async createKeyPair(): Promise<KeyPair> {
    return KeyPair.createNewKeyPair();
  }
}
