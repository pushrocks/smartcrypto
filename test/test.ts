import { expect, tap } from '@pushrocks/tapbundle';
import * as smartcrypto from '../ts/index'

tap.test('first test', async () => {
  console.log(smartcrypto.standardExport)
})

tap.start()
