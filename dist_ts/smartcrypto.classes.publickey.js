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
exports.PublicKey = void 0;
const plugins = __importStar(require("./smartcrypto.plugins"));
class PublicKey {
    constructor(publicKeyArg) {
        this.forgePublicKey = publicKeyArg;
    }
    // STATIC
    static createFromPrivateKey(pemString) {
        const privateKey = plugins.nodeForge.pki.publicKeyFromPem(pemString);
        return new PublicKey(privateKey);
    }
    static fromPemString(pemString) {
        return new PublicKey(plugins.nodeForge.pki.publicKeyFromPem(pemString));
    }
    toPemString() {
        return plugins.nodeForge.pki.publicKeyToPem(this.forgePublicKey);
    }
}
exports.PublicKey = PublicKey;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRjcnlwdG8uY2xhc3Nlcy5wdWJsaWNrZXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9zbWFydGNyeXB0by5jbGFzc2VzLnB1YmxpY2tleS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQWlEO0FBRWpELE1BQWEsU0FBUztJQWNwQixZQUFZLFlBQTZDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFmRCxTQUFTO0lBQ0YsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFNBQWlCO1FBQ2xELE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JFLE9BQU8sSUFBSSxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBaUI7UUFDM0MsT0FBTyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFTTSxXQUFXO1FBQ2hCLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNuRSxDQUFDO0NBQ0Y7QUFyQkQsOEJBcUJDIn0=