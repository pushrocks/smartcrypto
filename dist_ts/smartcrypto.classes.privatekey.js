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
exports.PrivateKey = void 0;
const plugins = __importStar(require("./smartcrypto.plugins"));
class PrivateKey {
    constructor(privateKeyArg) {
        this.forgePrivateKey = privateKeyArg;
    }
    // STATIC
    static createFromPrivateKey(pemString) {
        const privateKey = plugins.nodeForge.pki.privateKeyFromPem(pemString);
        return new PrivateKey(privateKey);
    }
    static fromPemString(pemString) {
        return new PrivateKey(plugins.nodeForge.pki.privateKeyFromPem(pemString));
    }
    toPemString() {
        return plugins.nodeForge.pki.privateKeyToPem(this.forgePrivateKey);
    }
}
exports.PrivateKey = PrivateKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjcnlwdG8uY2xhc3Nlcy5wcml2YXRla2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRjcnlwdG8uY2xhc3Nlcy5wcml2YXRla2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBaUQ7QUFFakQsTUFBYSxVQUFVO0lBY3JCLFlBQVksYUFBK0M7UUFDekQsSUFBSSxDQUFDLGVBQWUsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQWZELFNBQVM7SUFDRixNQUFNLENBQUMsb0JBQW9CLENBQUMsU0FBaUI7UUFDbEQsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdEUsT0FBTyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRU0sTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFpQjtRQUMzQyxPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQztJQVNNLFdBQVc7UUFDaEIsT0FBTyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRjtBQXJCRCxnQ0FxQkMifQ==