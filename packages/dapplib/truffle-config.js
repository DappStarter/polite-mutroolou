require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea kiwi bottom trip fan repeat still mixture hunt kiwi bridge tuition'; 
let testAccounts = [
"0xfebd9596006ba275a5410bd7de765d7b04bc9f6769f18910d791bb88e5e3fe92",
"0xbed898c5be1553ee3c44ca18646a50bbcce51fdf4472b2146f9e3a3b54705a36",
"0x9962a50b3e84356d32a5b856324793e20bfeb5b81f10a60d3e635caae7d8cf61",
"0x2a4ede2fad04cf94a2981d3b651c4a54f6c7957ed2aa177a663de4910fee85e5",
"0xa343b81984f38d2d7d81434dac274476df9bc9b315bfe4f7a182f558de85e533",
"0x2cdd963460dff53c5bfb2dd2fa63c4fa57048fd6291d22a23095db1d4312a374",
"0x795d50fb737484bfbbdea3be212be18836314c22b970a655a795e915edfbe8b5",
"0xd789f2157b32697463beb5eded199bb9e35acbfee6b749acc60cb57682650561",
"0x156eb768d148ca12734368b6384c132de34eef380b836d09fbca96c073bbb956",
"0x87301dc33a3bd77520204cfc10d1bb744c5ed399ac671ff9ec1a625f9f8c18ca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

