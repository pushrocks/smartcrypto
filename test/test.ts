import { expect, tap } from '@pushrocks/tapbundle';
import * as smartcrypto from '../ts/index';

let testSmartCrypto: smartcrypto.Smartcrypto;

tap.test('first test', async () => {
  testSmartCrypto = new smartcrypto.Smartcrypto();
  expect(testSmartCrypto).to.be.instanceOf(smartcrypto.Smartcrypto);
});

tap.start();
