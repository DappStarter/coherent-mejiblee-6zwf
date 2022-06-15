require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kitten bone tooth finger deliver remember protect heavy enrich only skirt'; 
let testAccounts = [
"0xd2acab0d8f80e65330ffbb7ff8700d4daaa3e718de073e492ad78d6b450fc523",
"0xc29c6a08022a2da92642799bbde3feaefb89b3e024706a5d0a6337dc6f9b5c36",
"0x6b58e868af4fe535c82d8f8e6727ac4b9b2da75598595576af5174085fcec68a",
"0xc41fe656b7b6f0da0be9237314463feac47d0b08a76c6d440a526439ac15c7f6",
"0xea6500a58355e0b0f1d6f67edb57d04f69fe6b0b639b9dc1f0c4973fb60f3bd1",
"0xa8578be7a047da50507ccbb4ec5d68273a7e7537ca84c2bcbbfcf3121c112188",
"0xf78891fd472eddd01192d70e04156c3f55e23b8bfde2fe6644221cd774fd1505",
"0x5e90773f9dc93adb86d4c98b3212c691791a38f8c8ddfb029f69055ade7bf6c0",
"0x09f0e5be27d5705e65fbbb6edb426f14410eb56e08b1e698dc9a7a4906e6356a",
"0x5ae1f452ddb75e06321ae45ba5bc621c6fed7b4c9fbb817b283e5abdd56dcebe"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

