"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyPair = void 0;
const plugins = __importStar(require("./smartcrypto.plugins"));
const smartcrypto_classes_publickey_1 = require("./smartcrypto.classes.publickey");
const smartcrypto_classes_privatekey_1 = require("./smartcrypto.classes.privatekey");
class KeyPair {
    constructor(optionsArg) {
        this.privateKey = optionsArg.privateKey;
        this.publicKey = optionsArg.publicKey;
    }
    // STATIC
    static async createNewKeyPair() {
        const done = plugins.smartpromise.defer();
        const rsa = plugins.nodeForge.pki.rsa;
        rsa.generateKeyPair({ bits: 2048, workers: 2 }, async (err, keypair) => {
            if (err) {
                console.log(err);
                throw err;
            }
            done.resolve(new KeyPair({
                privateKey: new smartcrypto_classes_privatekey_1.PrivateKey(keypair.privateKey),
                publicKey: new smartcrypto_classes_publickey_1.PublicKey(keypair.publicKey)
            }));
        });
        return done.promise;
    }
}
exports.KeyPair = KeyPair;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjcnlwdG8uY2xhc3Nlcy5rZXlwYWlyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRjcnlwdG8uY2xhc3Nlcy5rZXlwYWlyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBaUQ7QUFDakQsbUZBQTREO0FBQzVELHFGQUE4RDtBQUU5RCxNQUFhLE9BQU87SUF5QmxCLFlBQVksVUFBNEQ7UUFDdEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUN4QyxDQUFDO0lBM0JELFNBQVM7SUFDRixNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQjtRQUNsQyxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBVyxDQUFDO1FBQ25ELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN0QyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUNyRSxJQUFJLEdBQUcsRUFBRTtnQkFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixNQUFNLEdBQUcsQ0FBQzthQUNYO1lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FDVixJQUFJLE9BQU8sQ0FBQztnQkFDVixVQUFVLEVBQUUsSUFBSSwyQ0FBVSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQzlDLFNBQVMsRUFBRSxJQUFJLHlDQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQzthQUM1QyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Q0FVRjtBQTdCRCwwQkE2QkMifQ==