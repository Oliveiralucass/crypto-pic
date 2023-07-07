

// ----------------------------------------- FUNCTIONS ------------------------------------------//
function copyTextToClipboard() {
    var copyText = document.getElementById("contractId");

    navigator.clipboard.writeText(copyText.value);
}



window.onload = function () {

bitcoin
    // -------------------------------------- ARRAYS ---------------------------------- //  

    const coins = [{
        name: "Bitcoin",
        id: 1,
        symbol: "BTC",
        img: "D:/PIC/images/BTCLogo.png",
        url: "D:/PIC/src/cryptocurrencies/bitcoin/bitcoin.html"
    },
    {
        name: "Ethereum",
        id: 2,
        symbol: "ETH",
        img: "D:/PIC/images/ETHLogo.png",
        url: "D:/PIC/src/cryptocurrencies/ethereum/ethereum.html"
    },
    {
        name: "BNB",
        id: 3,
        symbol: "BNB",
        img: "D:/PIC/images/BNBLogo.png",
        url: "D:/PIC/src/cryptocurrencies/bnb/bnb.html"
    },
    {
        name: "Cardano",
        id: 4,
        symbol: "ADA",
        img: "D:/PIC/images/ADALogo.png",
        url: "D:/PIC/src/cryptocurrencies/cardano/cardano.html"
    },
    {
        name: "Solana",
        id: 5,
        symbol: "SOL",
        img: "D:/PIC/images/SOLLogo.png",
        url: "D:/PIC/src/cryptocurrencies/solana/solana.html"
    },
    {
        name: "Terra",
        id: 6,
        symbol: "LUNA",
        img: "D:/PIC/images/LUNALogo.png",
        url: "D:/PIC/src/cryptocurrencies/terra/terra.html"
    },

    {
        name: "Avalanche",
        id: 7,
        symbol: "AVAX",
        img: "D:/PIC/images/AVAXLogo.png",
        url: "D:/PIC/src/cryptocurrencies/avalanche/avalanche.html"
    },
    {
        name: "Polkadot",
        id: 8,
        symbol: "DOT",
        img: "D:/PIC/images/DOTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/polkadot/polkadot.html"
    },

    {
        name: "Polygon",
        id: 9,
        symbol: "MATIC",
        img: "D:/PIC/images/MATICLogo.png",
        url: "D:/PIC/src/cryptocurrencies/polygon/polygon.html"
    },
    {
        name: "Cosmos",
        id: 10,
        symbol: "ATOM",
        img: "D:/PIC/images/ATOMLogo.png",
        url: "D:/PIC/src/cryptocurrencies/cosmos/cosmos.html"
    },
    {
        name: "Chainlink",
        id: 11,
        symbol: "LINK",
        img: "D:/PIC/images/LINKLogo.png",
        url: "D:/PIC/src/cryptocurrencies/chainlink/chainlink.html"
    },
    {
        name: "Algorand",
        id: 12,
        symbol: "ALGO",
        img: "D:/PIC/images/ALGOLogo.png",
        url: "D:/PIC/src/cryptocurrencies/algorand/algorand.html"
    },
    {
        name: "Binance USD",
        id: 13,
        symbol: "BUSD",
        img: "D:/PIC/images/BUSDLogo.png",
        url: "D:/PIC/src/cryptocurrencies/binance-usd/binance-usd.html"
    },
    {
        name: "Bitcoin Cash",
        id: 14,
        symbol: "BCH",
        img: "D:/PIC/images/BCHLogo.png",
        url: "D:/PIC/src/cryptocurrencies/bitcoin-cash/bitcoin-cash.html"
    },
    {
        name: "Cronos",
        id: 15,
        symbol: "CRO",
        img: "D:/PIC/images/CROLogo.png",
        url: "D:/PIC/src/cryptocurrencies/cronos/cronos.html"
    },
    {
        name: "DAI",
        id: 16,
        symbol: "DAI",
        img: "D:/PIC/images/DAILogo.png",
        url: "D:/PIC/src/cryptocurrencies/dai/dai.html"
    },
    {
        name: "Dogecoin",
        id: 17,
        symbol: "DOGE",
        img: "D:/PIC/images/DOGELogo.png",
        url: "D:/PIC/src/cryptocurrencies/dogecoin/dogecoin.html"
    },
    {
        name: "FTX Token",
        id: 18,
        symbol: "FTT",
        img: "D:/PIC/images/FTTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/ftx-token/ftx-token.html"
    },
    {
        name: "Litecoin",
        id: 19,
        symbol: "LTC",
        img: "D:/PIC/images/LTCLogo.png",
        url: "D:/PIC/src/cryptocurrencies/litecoin/litecoin.html"
    },
    {
        name: "Near Protocol",
        id: 20,
        symbol: "NEAR",
        img: "D:/PIC/images/NEARLogo.png",
        url: "D:/PIC/src/cryptocurrencies/near-protocol/near-protocol.html"
    },
    {
        name: "Shiba Inu",
        id: 21,
        symbol: "SHIB",
        img: "D:/PIC/images/SHIBLogo.png",
        url: "D:/PIC/src/cryptocurrencies/shiba-inu/shiba-inu.html"
    },
    {
        name: "TerraUSD",
        id: 22,
        symbol: "UST",
        img: "D:/PIC/images/USTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/terrausd/terrausd.html"
    },
    {
        name: "Tether",
        id: 23,
        symbol: "USDT",
        img: "D:/PIC/images/USDTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/tether/tether.html"
    },
    {
        name: "Tron",
        id: 24,
        symbol: "TRX",
        img: "D:/PIC/images/TRXLogo.png",
        url: "D:/PIC/src/cryptocurrencies/tron/tron.html"
    },
    {
        name: "Uniswap",
        id: 25,
        symbol: "UNI",
        img: "D:/PIC/images/UNILogo.png",
        url: "D:/PIC/src/cryptocurrencies/uniswap/uniswap.html"
    },
    {
        name: "USD Coin",
        id: 26,
        symbol: "USDC",
        img: "D:/PIC/images/USDCLogo.png",
        url: "D:/PIC/src/cryptocurrencies/usdc-coin/usd-coin.html"
    },
    {
        name: "Wrapped Bitcoin",
        id: 27,
        symbol: "WBTC",
        img: "D:/PIC/images/WBTCLogo.png",
        url: "D:/PIC/src/cryptocurrencies/wrapped-bitcoin/wrapped-bitcoin.html"
    },
    {
        name: "XRP",
        id: 28,
        symbol: "XRP",
        img: "D:/PIC/images/XRPLogo.png",
        url: "D:/PIC/src/cryptocurrencies/xrp/xrp.html"
    },
    {
        name: "UNUS SED LEO",
        id: 29,
        symbol: "LEO",
        img: "D:/PIC/images/LEOLogo.png",
        url: "D:/PIC/src/cryptocurrencies/unus-sed-leo/unus-sed-leo.html"
    },
    {
        name: "ApeCoin",
        id: 30,
        symbol: "APE",
        img: "D:/PIC/images/APELogo.png",
        url: "D:/PIC/src/cryptocurrencies/apecoin/apecoin.html"
    },
    {
        name: "Stellar",
        id: 31,
        symbol: "XLM",
        img: "D:/PIC/images/XLMLogo.png",
        url: "D:/PIC/src/cryptocurrencies/stellar/stellar.html"
    },
    {
        name: "Monero",
        id: 32,
        symbol: "XMR",
        img: "D:/PIC/images/XMRLogo.png",
        url: "D:/PIC/src/cryptocurrencies/monero/monero.html"
    },
    {
        name: "Ethereum Classic",
        id: 33,
        symbol: "ETC",
        img: "D:/PIC/images/ETCLogo.png",
        url: "D:/PIC/src/cryptocurrencies/ethereum-classic/ethereum-classic.html"
    },
    {
        name: "Hedera",
        id: 34,
        symbol: "HBAR",
        img: "D:/PIC/images/HBARLogo.png",
        url: "D:/PIC/src/cryptocurrencies/hedera/hedera.html"
    },
    {
        name: "Filecoin",
        id: 35,
        symbol: "FIL",
        img: "D:/PIC/images/FILLogo.png",
        url: "D:/PIC/src/cryptocurrencies/filecoin/filecoin.html"
    },
    {
        name: "Decentraland",
        id: 36,
        symbol: "MANA",
        img: "D:/PIC/images/MANALogo.png",
        url: "D:/PIC/src/cryptocurrencies/decentraland/decentraland.html"
    },
    {
        name: "Internet Computer",
        id: 37,
        symbol: "ICP",
        img: "D:/PIC/images/ICPLogo.png",
        url: "D:/PIC/src/cryptocurrencies/internet-computer/internet-computer.html"
    },
    {
        name: "VeChain",
        id: 38,
        symbol: "VET",
        img: "D:/PIC/images/VETLogo.png",
        url: "D:/PIC/src/cryptocurrencies/vechain/vechain.html"
    },
    {
        name: "Elrond",
        id: 39,
        symbol: "EGLD",
        img: "D:/PIC/images/EGLDLogo.png",
        url: "D:/PIC/src/cryptocurrencies/elrond/elrond.html"
    },
    {
        name: "The Sandbox",
        id: 40,
        symbol: "SAND",
        img: "D:/PIC/images/SANDLogo.png",
        url: "D:/PIC/src/cryptocurrencies/the-sandbox/the-sandbox.html"
    },
    {
        name: "Theta Network",
        id: 41,
        symbol: "THETA",
        img: "D:/PIC/images/THETALogo.png",
        url: "D:/PIC/src/cryptocurrencies/theta-network/theta-network.html"
    },
    {
        name: "Axie Infinity",
        id: 42,
        symbol: "AXS",
        img: "D:/PIC/images/AXSLogo.png",
        url: "D:/PIC/src/cryptocurrencies/axie-infinity/axie-infinity.html"
    },
    {
        name: "Fantom",
        id: 43,
        symbol: "FTM",
        img: "D:/PIC/images/FTMLogo.png",
        url: "D:/PIC/src/cryptocurrencies/fantom/fantom.html"
    },

    {
        name: "PancakeSwap",
        id: 44,
        symbol: "CAKE",
        img: "D:/PIC/images/CAKELogo.png",
        url: "D:/PIC/src/cryptocurrencies/pancakeswap/pancakeswap.html"
    },
    {
        name: "Tezos",
        id: 45,
        symbol: "XTZ",
        img: "D:/PIC/images/XTZLogo.png",
        url: "D:/PIC/src/cryptocurrencies/tezos/tezos.html"
    },
    {
        name: "THORChain",
        id: 46,
        symbol: "RUNE",
        img: "D:/PIC/images/RUNELogo.png",
        url: "D:/PIC/src/cryptocurrencies/thorchain/thorchain.html"
    },
    {
        name: "Klaytn",
        id: 47,
        symbol: "KLAY",
        img: "D:/PIC/images/KLAYLogo.png",
        url: "D:/PIC/src/cryptocurrencies/klaytn/klaytn.html"
    },
    {
        name: "EOS",
        id: 48,
        symbol: "EOS",
        img: "D:/PIC/images/EOSLogo.png",
        url: "D:/PIC/src/cryptocurrencies/eos/eos.html"
    },
    {
        name: "Zcash",
        id: 49,
        symbol: "ZEC",
        img: "D:/PIC/images/ZECLogo.png",
        url: "D:/PIC/src/cryptocurrencies/zcash/zcash.html"
    },
    {
        name: "Aave",
        id: 50,
        symbol: "AAVE",
        img: "D:/PIC/images/AAVELogo.png",
        url: "D:/PIC/src/cryptocurrencies/aave/aave.html"
    },
    {
        name: "STEPN",
        id: 51,
        symbol: "GMT",
        img: "D:/PIC/images/GMTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/stepn/stepn.html"
    },
    {
        name: "Helium",
        id: 52,
        symbol: "HNT",
        img: "D:/PIC/images/HNTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/helium/helium.html"
    },
    {
        name: "Flow",
        id: 53,
        symbol: "FLOW",
        img: "D:/PIC/images/FLOWLogo.png",
        url: "D:/PIC/src/cryptocurrencies/flow/flow.html"
    },
    {
        name: "KuCoin Token",
        id: 54,
        symbol: "KCS",
        img: "D:/PIC/images/KCSLogo.png",
        url: "D:/PIC/src/cryptocurrencies/kucoin-token/kucoin-token.html"
    },
    {
        name: "Waves",
        id: 55,
        symbol: "WAVES",
        img: "D:/PIC/images/WAVESLogo.png",
        url: "D:/PIC/src/cryptocurrencies/waves/waves.html"
    },
    {
        name: "IOTA",
        id: 56,
        symbol: "MIOTA",
        img: "D:/PIC/images/MIOTALogo.png",
        url: "D:/PIC/src/cryptocurrencies/iota/iota.html"
    },
    {
        name: "BitTorrent-New",
        id: 57,
        symbol: "BTT",
        img: "D:/PIC/images/BTTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/bittorrent-new/bittorrent-new.html"
    },
    {
        name: "Maker",
        id: 58,
        symbol: "MKR",
        img: "D:/PIC/images/MKRLogo.png",
        url: "D:/PIC/src/cryptocurrencies/maker/maker.html"
    },
    {
        name: "eCash",
        id: 59,
        symbol: "XEC",
        img: "D:/PIC/images/XECLogo.png",
        url: "D:/PIC/src/cryptocurrencies/ecash/ecash.html"
    },
    {
        name: "The Graph",
        id: 60,
        symbol: "GRT",
        img: "D:/PIC/images/GRTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/name/name.html"
    },
    {
        name: "Bitcoin SV",
        id: 61,
        symbol: "BSV",
        img: "D:/PIC/images/BSVLogo.png",
        url: "D:/PIC/src/cryptocurrencies/bitcoin-sv/bitcoin-sv.html"
    },
    {
        name: "Convex Finance",
        id: 62,
        symbol: "CVX",
        img: "D:/PIC/images/CVXLogo.png",
        url: "D:/PIC/src/cryptocurrencies/convex-finance/convex-finance.html"
    },
    {
        name: "Huobi Token",
        id: 63,
        symbol: "HT",
        img: "D:/PIC/images/HTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/huobi-token/huobi-token.html"
    },
    {
        name: "Stacks",
        id: 64,
        symbol: "STX",
        img: "D:/PIC/images/STXLogo.png",
        url: "D:/PIC/src/cryptocurrencies/stacks/stacks.html"
    },
    {
        name: "Neo",
        id: 65,
        symbol: "NEO",
        img: "D:/PIC/images/NEOLogo.png",
        url: "D:/PIC/src/cryptocurrencies/neo/neo.html"
    },
    {
        name: "TrueUSD",
        id: 66,
        symbol: "TUSD",
        img: "D:/PIC/images/TUSDLogo.png",
        url: "D:/PIC/src/cryptocurrencies/trueusd/trueusd.html"
    },
    {
        name: "Kusama",
        id: 67,
        symbol: "KSM",
        img: "D:/PIC/images/KSMLogo.png",
        url: "D:/PIC/src/cryptocurrencies/kusama/kusama.html"
    },
    {
        name: "Zilliqa",
        id: 68,
        symbol: "ZIL",
        img: "D:/PIC/images/ZILLogo.png",
        url: "D:/PIC/src/cryptocurrencies/zilliqa/zilliqa.html"
    },
    {
        name: "Harmony",
        id: 69,
        symbol: "ONE",
        img: "D:/PIC/images/ONELogo.png",
        url: "D:/PIC/src/cryptocurrencies/harmony/harmony.html"
    },
    {
        name: "Quant",
        id: 70,
        symbol: "QNT",
        img: "D:/PIC/images/QNTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/quant/quant.html"
    },
    {
        name: "Gala",
        id: 71,
        symbol: "GALA",
        img: "D:/PIC/images/GALALogo.png",
        url: "D:/PIC/src/cryptocurrencies/gala/gala.html"
    },
    {
        name: "Nexo",
        id: 72,
        symbol: "NEXO",
        img: "D:/PIC/images/NEXOLogo.png",
        url: "D:/PIC/src/cryptocurrencies/nexo/nexo.html"
    },
    {
        name: "Celo",
        id: 73,
        symbol: "CELO",
        img: "D:/PIC/images/CELOLogo.png",
        url: "D:/PIC/src/cryptocurrencies/celo/celo.html"
    },
    {
        name: "Chiliz",
        id: 74,
        symbol: "CHZ",
        img: "D:/PIC/images/CHZLogo.png",
        url: "D:/PIC/src/cryptocurrencies/chiliz/chiliz.html"
    },
    {
        name: "Curve DAO Token",
        id: 75,
        symbol: "CRV",
        img: "D:/PIC/images/CRVLogo.png",
        url: "D:/PIC/src/cryptocurrencies/curve-dao-token/name.html"
    },
    {
        name: "OKB",
        id: 76,
        symbol: "OKB",
        img: "D:/PIC/images/OKBLogo.png",
        url: "D:/PIC/src/cryptocurrencies/okb/okb.html"
    },

    {
        name: "Enjin Coin",
        id: 77,
        symbol: "ENJ",
        img: "D:/PIC/images/ENJLogo.png",
        url: "D:/PIC/src/cryptocurrencies/enjin-coin/enjin-coin.html"
    },
    {
        name: "Loopring",
        id: 78,
        symbol: "LRC",
        img: "D:/PIC/images/LRCLogo.png",
        url: "D:/PIC/src/cryptocurrencies/loopring/loopring.html"
    },
    {
        name: "Basic Attention Token",
        id: 79,
        symbol: "BAT",
        img: "D:/PIC/images/BATLogo.png",
        url: "D:/PIC/src/cryptocurrencies/basic-attention-token/basic-attention-token.html"
    },
    {
        name: "Dash",
        id: 80,
        symbol: "DASH",
        img: "D:/PIC/images/DASHLogo.png",
        url: "D:/PIC/src/cryptocurrencies/dash/dash.html"
    },
    {
        name: "Mina",
        id: 81,
        symbol: "MINA",
        img: "D:/PIC/images/MINALogo.png",
        url: "D:/PIC/src/cryptocurrencies/mina/mina.html"
    },
    {
        name: "Pax Dollar",
        id: 82,
        symbol: "USDP",
        img: "D:/PIC/images/USDPLogo.png",
        url: "D:/PIC/src/cryptocurrencies/pax-dollar/pax-dollar.html"
    },
    {
        name: "Neutrino USD",
        id: 83,
        symbol: "USDN",
        img: "D:/PIC/images/USDNLogo.png",
        url: "D:/PIC/src/cryptocurrencies/neutrino-usd/neutrino-usd.html"
    },
    {
        name: "Amp",
        id: 84,
        symbol: "AMP",
        img: "D:/PIC/images/AMPLogo.png",
        url: "D:/PIC/src/cryptocurrencies/amp/amp.html"
    },
    {
        name: "Kava",
        id: 85,
        symbol: "KAVA",
        img: "D:/PIC/images/KAVALogo.png",
        url: "D:/PIC/src/cryptocurrencies/kava/kava.html"
    },
    //----------------------------------------NOVAS-----------------------------------------//
    {
        name: "Arweave",
        id: 86,
        symbol: "AR",
        img: "D:/PIC/images/ARLogo.png",
        url: "D:/PIC/src/cryptocurrencies/arweave/arweave.html"
    },
    {
        name: "Decred",
        id: 87,
        symbol: "DCR",
        img: "D:/PIC/images/DCRLogo.png",
        url: "D:/PIC/src/cryptocurrencies/decred/decred.html"
    },
    {
        name: "Kyber Network Crystal v2",
        id: 88,
        symbol: "KNC",
        img: "D:/PIC/images/KNCLogo.png",
        url: "D:/PIC/src/cryptocurrencies/kyber-network-crystal-v2/kyber-network-crystal-v2.html"
    },
    {
        name: "Compound",
        id: 89,
        symbol: "COMP",
        img: "D:/PIC/images/COMPLogo.png",
        url: "D:/PIC/src/cryptocurrencies/compound/compound.html"
    },
    {
        name: "Theta Fuel",
        id: 90,
        symbol: "TFUEL",
        img: "D:/PIC/images/TFUELLogo.png",
        url: "D:/PIC/src/cryptocurrencies/theta-fuel/theta-fuel.html"
    },
    {
        name: "NEM",
        id: 91,
        symbol: "XEM",
        img: "D:/PIC/images/XEMLogo.png",
        url: "D:/PIC/src/cryptocurrencies/nem/nem.html"
    },
    {
        name: "Moonbeam",
        id: 92,
        symbol: "GLMR",
        img: "D:/PIC/images/GLMRLogo.png",
        url: "D:/PIC/src/cryptocurrencies/moonbeam/moonbeam.html"
    },
    {
        name: "Kadena",
        id: 93,
        symbol: "KDA",
        img: "D:/PIC/images/KDALogo.png",
        url: "D:/PIC/src/cryptocurrencies/kadena/kadena.html"
    },
    {
        name: "Holo",
        id: 94,
        symbol: "HOT",
        img: "D:/PIC/images/HOTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/holo/holo.html"
    },
    {
        name: "Oasis Network",
        id: 95,
        symbol: "ROSE",
        img: "D:/PIC/images/ROSELogo.png",
        url: "D:/PIC/src/cryptocurrencies/oasis-network/oasis-network.html"
    },
    {
        name: "ICON",
        id: 96,
        symbol: "ICX",
        img: "D:/PIC/images/ICXLogo.png",
        url: "D:/PIC/src/cryptocurrencies/icon/icon.html"
    },
    {
        name: "Audius",
        id: 97,
        symbol: "AUDIO",
        img: "D:/PIC/images/AUDIOLogo.png",
        url: "D:/PIC/src/cryptocurrencies/audius/audius.html"
    },
    {
        name: "Secret",
        id: 98,
        symbol: "SCRT",
        img: "D:/PIC/images/SCRTLogo.png",
        url: "D:/PIC/src/cryptocurrencies/secret/secret.html"
    },
    {
        name: "XDC Network",
        id: 99,
        symbol: "XDC",
        img: "D:/PIC/images/XDCLogo.png",
        url: "D:/PIC/src/cryptocurrencies/xdc-network/xdc-network.html"
    },
    {
        name: "BORA",
        id: 100,
        symbol: "BORA",
        img: "D:/PIC/images/BORALogo.png",
        url: "D:/PIC/src/cryptocurrencies/bora/bora.html"
    },
    ]
    const social = [{
        name: "twitter",
        url: "https://twitter.com/100trillionUSD",
        svg: `<?xml version="1.0" ?><svg height="26px" style="fill-rule:evenodd;
                    clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1"
                    viewBox="0 0 512 512" width="26px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                    xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path 
                    d="M448,512l-384,0c-35.328,0 -64,-28.672 -64,-64l0,-384c0,-35.328 28.672,-64 64,-64l384,0c35.328,0 
                    64,28.672 64,64l0,384c0,35.328 -28.672,64 -64,64Z" id="Dark_Blue" 
                    style="fill:#1da1f2;fill-rule:nonzero;"/><path d="M196.608,386.048c120.704,0 186.752,-100.096 186.752,
                    -186.752c0,-2.816 0,-5.632 -0.128,-8.448c12.8,-9.216 23.936,-20.864 32.768,-34.048c-11.776,5.248 
                    -24.448,8.704 -37.76,10.368c13.568,-8.064 23.936,-20.992 28.928,-36.352c-12.672,7.552 -26.752,12.928 
                    -41.728,15.872c-12.032,-12.8 -29.056,-20.736 -47.872,-20.736c-36.224,0 -65.664,29.44 -65.664,65.664c0,
                    5.12 0.64,10.112 1.664,14.976c-54.528,-2.688 -102.912,-28.928 -135.296,-68.608c-5.632,9.728 -8.832,20.992 
                    -8.832,33.024c0,22.784 11.648,42.88 29.184,54.656c-10.752,-0.384 -20.864,-3.328 -29.696,-8.192l0,0.896c0,31.
                    744 22.656,58.368 52.608,64.384c-5.504,1.536 -11.264,2.304 -17.28,2.304c-4.224,0 -8.32,-0.384 -12.288,
                    -1.152c8.32,26.112 32.64,45.056 61.312,45.568c-22.528,17.664 -50.816,28.16 -81.536,28.16c-5.248,0 -10.496,
                    -0.256 -15.616,-0.896c28.928,18.432 63.488,29.312 100.48,29.312" id="Logo__x2014__FIXED" 
                    style="fill:#fff;fill-rule:nonzero;"/></g></svg>`,
    },
    {
        name: "instagram",
        url: "https://www.instagram.com/luvadepedreiro/",
        svg: `<?xml version="1.0" ?><svg height="32px" style="fill-rule:evenodd;
                clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;" 
                version="1.1" viewBox="0 0 24 24" width="32px" xml:space="preserve" 
                xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" 
                xmlns:xlink="http://www.w3.org/1999/xlink"><rect height="32px" id="Artboard10" 
                style="fill:none;" width="32px" x="0" y="0"/><path d="M22,7c0,-2.761 -2.239,-5 
                -5,-5c-3.054,0 -6.946,0 -10,0c-2.761,0 -5,2.239 -5,5c0,3.054 0,6.946 0,10c0,2.761 
                2.239,5 5,5c3.054,0 6.946,0 10,0c2.761,0 5,-2.239 5,-5c0,-3.054 0,-6.946 0,-10Z" 
                style="fill:url(#_Radial1);"/><path d="M14.958,5.005c2.091,0.02 4.016,1.815 4.037,
                4.037c0.007,1.972 0.007,3.944 0,5.916c-0.02,2.083 -1.815,4.016 -4.037,4.037c-1.972,0.007 
                -3.944,0.007 -5.916,0c-2.092,-0.02 -4.016,-1.815 -4.037,-4.037c-0.007,-1.972 -0.007,
                -3.944 0,-5.916c0.019,-2.093 1.81,-4.016 4.037,-4.037c1.972,-0.007 3.944,-0.007 5.916,0Zm-5.889,
                0.945c-1.623,0.005 -3.103,1.412 -3.119,3.098c-0.006,1.968 -0.006,3.936 0,5.904c0.015,1.605 1.388,
                3.082 3.098,3.098c1.968,0.006 3.936,0.006 5.904,0c1.609,-0.015 3.082,-1.388 3.098,-3.098c0.006,
                -1.968 0.006,-3.936 0,-5.904c-0.015,-1.616 -1.415,-3.082 -3.098,-3.098c-1.961,-0.006 -3.922,0 
                -5.883,0Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M12.024,8.5c1.618,0.015 3.126,1.263 
                3.422,2.862c0.211,1.14 -0.187,2.376 -1.027,3.178c-0.935,0.89 -2.382,1.208 -3.622,0.754c-1.386,
                -0.507 -2.361,-1.968 -2.296,-3.448c0.079,-1.768 1.641,-3.34 3.499,-3.346c0.008,0 0.016,0 0.024,
                0Zm-0.04,0.947c-1.155,0.011 -2.244,0.887 -2.484,2.025c-0.243,1.151 0.419,2.428 1.506,2.887c1.187,
                0.502 2.72,-0.061 3.293,-1.233c0.593,-1.211 0.034,-2.856 -1.218,-3.441c-0.341,-0.159 -0.72,-0.239 
                -1.097,-0.238Z" style="fill:#fff;fill-rule:nonzero;"/><path d="M16.5,8.227c0,-0.193 -0.077,-0.378 
                -0.213,-0.514c-0.136,-0.136 -0.321,-0.213 -0.514,-0.213c-0.015,0 -0.031,0 -0.046,0c-0.193,0 -0.378,
                0.077 -0.514,0.213c-0.136,0.136 -0.213,0.321 -0.213,0.514c0,0.008 0,0.015 0,0.023c0,0.199 0.079,
                0.39 0.22,0.53c0.14,0.141 0.331,0.22 0.53,0.22c0,0 0,0 0,0c0.414,0 0.75,-0.336 0.75,-0.75c0,-0.008 
                0,-0.015 0,-0.023Z" style="fill:#fff;"/><defs><radialGradient cx="0" cy="0" 
                gradientTransform="matrix(27.933,0,0,27.933,2,21.5)" gradientUnits="userSpaceOnUse" id="_Radial1" 
                r="1"><stop offset="0" style="stop-color:#ff8100;stop-opacity:1"/><stop offset="0.19" 
                style="stop-color:#ff7209;stop-opacity:1"/><stop offset="0.32" style="stop-color:#f55e16;stop-opacity:1"/>
                <stop offset="0.48" style="stop-color:#d92938;stop-opacity:1"/><stop offset="1" 
                style="stop-color:#9100ff;stop-opacity:1"/></radialGradient></defs></svg>`
    },
    {
        name: "facebook",
        url: "https://www.facebook.com/ocaradaluva",
        svg: `<?xml version="1.0" ?><svg height="24px" width="24px" version="1.0" 
                viewBox="0 0 32 32"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg" 
                xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M32,30c0,1.104-0.896,2-2,
                2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z" 
                fill="#3B5998"/><path d="M22,32V20h4l1-5h-5v-2c0-2,1.002-3,3-3h2V5c-1,0-2.24,0-4,
                0c-3.675,0-6,2.881-6,7v3h-4v5h4v12H22z" fill="#FFFFFF" id="f"/></g><g/><g/><g/><g/><g/><g/></svg>`
    },
    {
        name: "discord",
        url: "https://www.instagram.com/luvadepedreiro/",
        svg: `<?xml version="1.0" ?><svg height="32px" style="enable-background:new 
                0 0 512 512; margin-top: 2px;" version="1.1" viewBox="0 0 512 512" width="32px" 
                xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="_x39_1-discord"><g><path d="M447.249,82.455V474.57c-55.065-48.661-37.454-32.
                553-101.418-92.018L350,422.987H109.557    c-24.698,0-44.806-20.106-44.806-45.026V82.
                455c0-24.917,20.107-45.025,44.806-45.025H402.44    C427.14,37.43,447.249,57.538,447.
                249,82.455z" style="fill:#8A9CFE;"/><path d="M353.481,162.233c-31.474-23.605-61.418-22.
                95-61.418-22.95l-3.06,3.498    c37.157,11.365,54.425,27.758,54.425,27.758c-51.921-28.456-
                112.91-28.46-163.273-6.338c-8.088,3.715-12.896,6.338-12.896,6.338    
                s18.142-17.267,57.485-28.632l-2.185-2.624c0,0-29.945-0.655-61.419,22.95c0,0-31.474,57.
                047-31.474,127.426    c0,0,18.361,31.692,66.663,33.223c0,0,8.088-9.834,14.645-18.142c-27.
                759-8.306-38.249-25.789-38.249-25.789    c3.215,2.248,8.517,5.168,8.961,5.463c36.892,20.662,
                89.295,27.43,136.388,7.65c7.648-2.841,16.174-6.995,25.135-12.896    c0,0-10.929,17.924-39.562,
                26.01c6.559,8.305,14.427,17.703,14.427,17.703c48.304-1.53,66.881-33.223,66.881-33.223    
                C384.955,219.28,353.481,162.233,353.481,162.233z M216.438,269.333c-12.24,0-22.295-10.928-22.295-24.262    
                c0-13.333,9.836-24.261,22.295-24.261c12.458,0,22.513,10.928,22.294,24.261C238.732,
                258.405,228.896,269.333,216.438,269.333z     M296.216,269.333c-12.239,0-22.294-10.928-22.
                294-24.262c0-13.333,9.836-24.261,22.294-24.261    c12.459,0,22.295,10.928,22.295,24.261C318.
                511,258.405,308.675,269.333,296.216,269.333z" style="fill:#FDFDFD;"/></g></g><g id="Layer_1"/></svg>`
    }]
    const glossaryArray = [
        //---- A ---- //
        {
            letter: `A`,
            id: "A0",
            title: `A`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#A`,
        },
        {
            letter: `A`,
            id: "A1",
            title: `Airdrop`,
            subtitle: `Distribuição de um ativo digital para o público. Seu objetivo pode ser por questões de marketing, eventos, ou qualquer outro que o distribuidor deseja. Diferente de ICOs em Airdrop não é necessário comprar o token, apenas recebê-lo.
                    `,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/airdrop-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `A`,
            id: "A2",
            title: `Algoritmo`,
            subtitle: `Uma sequência de instruções com o propósito de solucionar um problema.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/algoritmo-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `A`,
            id: "A3",
            title: `Alocação`,
            subtitle: `Designar uma parcela de tokens ou verba que serão comprados, recebidos ou destinados para alguma entidade ou fim em específico.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/alocacao-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `A`,
            id: "A4",
            title: `Alpha`,
            subtitle: `É o primeiro produto de um projeto, consiste na versão inicial, básica e primitiva de um software ou produto.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/alpha-glossary.html`,
            tag: `Computadores`,
            tag1: `Business`
        },
        {
            letter: `A`,
            id: "A5",
            title: `Alta Histórica (ATH)`,
            subtitle: `O preço mais alto que uma criptomoeda chegou em comparação a outra moeda, como Dólar, Euro, Real, BTC, ETH, Etc...`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/alta-historica-ath-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A6",
            title: `Altcoin`,
            subtitle: `Uma criptomoeda que é alternativa ao Bitcoin. É comum se referir a Altcoin, qualquer moeda que não seja o Bitcoin.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/altcoin-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `A`,
            id: "A7",
            title: `Altcoins Season`,
            subtitle: `Também conhecido como Altseason. É o período na qual Altcoins tendem a performar melhor que o Bitcoin. É comum ver algumas Altcoins aumentarem em 100x o seu valor de mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/altcoins-season-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `A`,
            id: "A8",
            title: `AMA (Ask Me Anything)`,
            subtitle: `Sessão organizada por empresas para que seus usuários tirem suas dúvidas sobre o projeto.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ama-ask-me-anything-glossary.html`,
            tag: `Business`,
        },
        {
            letter: `A`,
            id: "A9",
            title: `Análise Fundamentalista`,
            subtitle: `Análise do preço de um ativo com base no seu valor intrínseco. A Análise Fundamentalista avalia com base nos fundamentos da empresa/projeto descartando a Análise Técnica.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/analise-fundamentalista-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `A`,
            id: "A21",
            title: `Annual Percentage Rate (APR)`,
            subtitle: `Conhecido como Taxa Percentual Anual. APR é o retorno esperado de um investimento com uma taxa fixa. APR não leva em consideração juros compostos.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/annual-percentage-rate-apr-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A22",
            title: `Annual Percentage Yield (APY)`,
            subtitle: `Conhecido como Rendimento Percentual Anual. APY é o retorno esperado de um investimento contabilizando os juros compostos do capital reinvestido.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/annual-percentage-yield-apy-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A10",
            title: `Anti-Money Laundering (AML)`,
            subtitle: `Conjunto de leis e processos regulatórios com a fim de minimizar a movimentação de dinheiro gerado através de vias ilegais ou de atividades supeitas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/anti-money-laundering-aml-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },

        {
            letter: `A`,
            id: "A11",
            title: `Aplicação Descentralizada (DApp)`,
            subtitle: `Aplicações que rodam em redes compartilhadas de computadores ao invés de um computador central. Isso permite ao programa ser rodado na internet sem ser controlado por uma única entidade.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/aplicacao-descentralizada-dapp-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `A`,
            id: "A12",
            title: `Application Programming Interface (API)`,
            subtitle: `Conjunto de funções e procedimentos que permitem ao usuário interagir com os dados de outra aplicação. É um software intermediário que permite duas aplicações comunicarem entre si.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/application-programming-interface-api-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `A`,
            id: "A13",
            title: `Application-Specific Integrated Circuit (ASIC)`,
            subtitle: `Um circuito integrado, desenvolvido para um desempenho máximo para uma atividade específica, ao contrário de uso geral.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/application-specific-integrated-circuit-asic-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `A`,
            id: "A14",
            title: `Arbitragem`,
            subtitle: `Estratégia de investimento que consiste em comprar e vender um ativo em diferentes mercados e tirar vantagem da diferença de preços para gerar lucro.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/arbitragem-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A15",
            title: `ASIC-Resistente`,
            subtitle: `Uma criptomoeda que tem seu protocolo e algoritmo de mineração programado de certa forma que utilizar de máquinas ASIC para minerar é ou impossível, ou não traz um benefício significante  quando comparado a mineração tradicional utilizando GPU.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/asic-resistente-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `A`,
            id: "A16",
            title: `Ask`,
            subtitle: `O preço mais baixo que um vendedor aceita em vender sua ordem quando está operando em uma Exchange.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ask-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A17",
            title: `Assíncrono`,
            subtitle: `Evento em sistemas eletrônicos que não ocorrem ao mesmo tempo ou velocidade, ou acontecem de forma independente ao fluxo do programa principal.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/assincrono-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `A`,
            id: "A18",
            title: `Ataque de 51%`,
            subtitle: `Conhecido também como Ataque Majoritário. Quando um minerador ou grupo de mineradores controlam mais de 50% do mining hashrate ou do poder computacional da rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ataque-de-51-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `A`,
            id: "A19",
            title: `Atomic Swap`,
            subtitle: `Tecnologia que utiliza de Smart contracts para possibilitar a troca de uma criptomoeda por outra sem a necessidade de intermediários centralizados, como exchanges.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/atomic-swap-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `A`,
            id: "A20",
            title: `Auction`,
            subtitle: `Evento ao vivo onde ativos ou serviços são negociados através de processos de lances, equivalente a um leilão.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/auction-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        //---A22---//

        //---- B ----//
        {
            letter: `B`,
            id: "B0",
            title: `B`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#B`,
        },
        {
            letter: `B`,
            id: "B1",
            title: ` Baixa Histórica (ATL)`,
            subtitle: `O preço mais baixo que uma criptomoeda chegou em comparação a outra moeda, como Dólar, Euro, Real, BTC, ETH, Etc...`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/baixa-historica-atl-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B2",
            title: `Baleia`,
            subtitle: `Um indivíduo ou organização que possui grandes quantidades de uma criptomoedas, na qual suas ações causam impactos no mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/baleia-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `B`,
            id: "B3",
            title: `Banco Central`,
            subtitle: `Uma instituição financeira, que possui autoridade monetária, tendo o controle e administração sobre a moeda de um país, taxas de juros e estoque de dinheiro.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/banco-central-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `B`,
            id: "B4",
            title: `Bandas de Bollinger`,
            subtitle: `Indicador da análise técnica que mede a volatilidade de um mercado. Formada por duas bandas laterais e uma média móvel simples  (MA).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bandas-de-bollinger-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B28",
            title: `Beacon Chain`,
            subtitle: `É uma rede Proof-of-Stake desenvolvida para a implementação da Ethereum 2.0. A rede opera separadamente da rede principal da Ethereum, mas futuramente os planos é que sejam unificadas.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/beacon-chain-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `B`,
            id: "B5",
            title: `Bear Market`,
            subtitle: `Tendência de queda nos preços de um mercado. É um termo usado de forma abrangente não só em relação a criptomoedas mas também em mercados tradicionais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bear-market-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B6",
            title: `Bearish`,
            subtitle: `Sentimento negativo em relação ao mercado, onde investidores acreditam na queda do valor de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bearish-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B7",
            title: `Benchmark`,
            subtitle: `método de mesurar o desempenho de um ativo ou carteira de investimentos de forma a se comparar a um padrão.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/benchmark-glossary.html`,
            tag: `Business`,
        },
        {
            letter: `B`,
            id: "B8",
            title: `Beta (Coeficiente)`,
            subtitle: `Ferramenta utilizada para medir a volatilidade de um ativo em comparação a volatilidade de um portfólio específico ou índice de mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/beta-coeficiente-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `B`,
            id: "B9",
            title: `Beta (Lançamento)`,
            subtitle: `Uma versão inicial de um programa para usuários testarem e passarem feedback aos desenvolvedores. A versão Beta vem após a versão Alpha.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/beta-lançamento-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `B`,
            id: "B10",
            title: `Bid`,
            subtitle: `Tratando-se de mercados financeiros, Bid é o valor mais alto que compradores estão dispostos a pagar por um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bid-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B11",
            title: `Bid-Ask Spread`,
            subtitle: `A diferença entre o preço mais baixo que vendedores estão dispostos a vender (Ask) e o preço mais alto que compradores estão dispostos a comprar (Bid) no order book de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bid-ask-spread-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B12",
            title: `Bitcoin`,
            subtitle: `Criptomoeda criada pelo desenvolvedor com pseudônimo de Satoshi Nakamoto. Foi a primeira criptomoeda criada.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `B`,
            id: "B13",
            title: `Bitcoin ATM`,
            subtitle: `Máquina onde se pode comprar e vender Bitcoin, geralmente oferece também outras criptomoedas além do Bitcoin.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-atm-glossary.html`,
            tag: `Blockchain`,
            tag: `Bitcoin`,
        },
        {
            letter: `B`,
            id: "B29",
            title: `Bitcoin Core`,
            subtitle: `É o sistema Open-Source mais utilizado para conectar-se a rede Bitcoin e rodar um Node.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-core-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `B`,
            id: "B14",
            title: `Bitcoin Pizza`,
            subtitle: `A primeira transação na qual foi adquirido um item real em troca de Bitcoin. Duas pizzas por 10.000 BTC.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-pizza-glossary.html`,
            tag: `Blockchain`,
            tag: `Bitcoin`,
        },
        {
            letter: `B`,
            id: "B15",
            title: `Bloco`,
            subtitle: `Um arquivo onde se armazena dados de transações. Blocos podem ser organizados em uma sequência linear para formar uma cadeia de blocos (Blockchain).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bloco-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B16",
            title: `Bloco Genesis`,
            subtitle: `Primeiro bloco a ser processado e validado em uma blockchain, conhecido também como “Bloco 0”.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bloco-genesis-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B17",
            title: `Blockchain`,
            subtitle: `Uma planilha digital descentralizada que guarda informações sobre uma criptomoeda em uma ordem cronológica. Todas as transações são registradas na blockchain e após sua validação são imutáveis.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/blockchain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B18",
            title: `Block Explorer`,
            subtitle: `Uma página ligada a uma blockchain que disponibiliza aos usuários navegarem pelas informações dos blocos, transações, balanços e histórico de transações.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/block-explorer-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B19",
            title: `Block Header`,
            subtitle: `Seção de um bloco que apresenta os metadados e um sumário das transações do bloco. É a informação que é criptografada quando se minera.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/block-header-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B20",
            title: `Block Height`,
            subtitle: `Refere-se à altura do bloco. Número de blocos em uma Blockchain entre o bloco atual e o primeiro bloco (Bloco Genesis ou Bloco 0)`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/block-height-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B21",
            title: `Block Reward`,
            subtitle: `Refere-se à recompensa do bloco. A recompensa disponibilizada pelo protocolo da Blockchain para os mineradores da rede para cada bloco que for minerado e validado com sucesso.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/block-reward-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B22",
            title: `Bolha das Criptomoedas`,
            subtitle: `Especulação de que os preços das criptomoedas subiriam a um extremo e que após isso “estouraria a bolha” derrubando o preço rapidamente. Na história já ocorreram diversas “bolhas financeiras” uma das mais conhecidas é a Bolha da Internet.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bolha-das-criptomoedas-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `B`,
            id: "B23",
            title: `Bots`,
            subtitle: `Softwares ou programas que operam de forma automática baseados em padrões pré-definidos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bots-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `B`,
            id: "B24",
            title: `Bounty`,
            subtitle: `Recompensa oferecida por um grupo ou indivíduo para incentivar algum trabalho ou ação. Muito visto em programas de referrals onde a empresa tem o objetivo de atrair usuários.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bounty-glossary.html`,
            tag: `Business`,
        },
        {
            letter: `B`,
            id: "B25",
            title: `Break-Even`,
            subtitle: `Ponto na qual o custo total de uma operação é equivalente ao seu retorno. Ou seja, não terá lucro nem prejuízo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/break-even-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B26",
            title: `Bull Market`,
            subtitle: `Tendência de alta nos preços de um mercado. É um termo usado de forma abrangente não só em relação a criptomoedas mas também em mercados tradicionais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bull-market-glossary.html`,
            tag: `Economia`,
            tag: `Trading`,
        },
        {
            letter: `B`,
            id: "B27",
            title: `Bullish`,
            subtitle: `Sentimento positivo em relação ao mercado, onde investidores acreditam na alta do valor de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bullish-glossary.html`,
            tag: `Economia`,
            tag: `Trading`,
        },
        // --- B29 --- //

        // ---- C ---- //
        {
            letter: `C`,
            id: "C0",
            title: `C`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#C`
        },
        {
            letter: `C`,
            id: "C1",
            title: `Candlestick`,
            subtitle: `Também conhecido como velas, é uma representação gráfica na qual constam informações do preço de abertura, fechamento, máximas e mínimas de certo período de tempo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/candlestick-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `C`,
            id: "C2",
            title: `Capital de Risco`,
            subtitle: `Modalidade de investimento onde se aplica recursos financeiros em pequenas empresas ou startups com grande potencial de crescimento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/capital-de-risco-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `C`,
            id: "C3",
            title: `Centralizado`,
            subtitle: `Uma organização na qual o poder está na mão de poucas pessoas, tendo elas o controle de toda a rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/centralizado-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `C`,
            id: "C17",
            title: `Centralized Exchange CEX`,
            subtitle: `Conhecida como Exchange Centralizada, as CEX são empresas que atuam como intermediárias para facilitar a transação de criptomoedas ou outros ativos entre usuários.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/centralized-exchange-cex-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `C`,
            id: "C4",
            title: `Central Processing Unit (CPU)`,
            subtitle: `Parte do computador responsável por interpretar as instruções de um programa e executar comandos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/central-processing-unit-cpu-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `C`,
            id: "C5",
            title: `Chave Privada`,
            subtitle: `Em criptomoedas, refere-se a uma cadeia de caracteres que possibilitam as transações de um endereço.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/chave-privada-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C6",
            title: `Circulating Supply`,
            subtitle: `Também conhecido como Fornecimento Circulante. É o número aproximado de tokens de uma criptomoeda que estão disponíveis circulando no mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/circulating-supply-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `C`,
            id: "C7",
            title: `Cloud Mining`,
            subtitle: `Método de mineração na qual o usuário aluga poder computacional de empresas que hospedam os equipamentos físicos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/cloud-mining-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C8",
            title: `Cold Wallet`,
            subtitle: `Uma carteira off-line que requer acesso através de aparelhos físicos (Ex: Hardware Wallet).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/cold-wallet-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C9",
            title: `Confluência`,
            subtitle: `Quando diversas métricas de análise técnica, indicadores e sinais gráficos se combinam para formar uma análise mais precisa.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/confluencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `C`,
            id: "C10",
            title: `Consenso`,
            subtitle: `Quando em um sistema de Blockchain, todos os participantes concordam com o conteúdo do próximo bloco a ser adicionado na Blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/consenso-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C11",
            title: `Consumer Price Index (CPI)`,
            subtitle: `Também conhecido como índice de preços ao consumidor (IPCA), serve como indicador para a inflação de um país.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/consumer-price-index-cpi-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `C`,
            id: "C12",
            title: `Contratos Futuros`,
            subtitle: `É um tipo de derivativo que define um acordo entre duas partes, possibilitando a compra e venda de um determinado ativo a um determinado preço em uma data determinada.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/contratos-futuros-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `C`,
            id: "C13",
            title: `Criptografia`,
            subtitle: `Ciência que utiliza de teorias matemáticas e computacionais para tornar uma informação privada, a fim de só serem decifradas por quem saber decifrá-las.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/criptografia-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C14",
            title: `Criptomoedas`,
            subtitle: `Moeda digital que utiliza de criptografia para sua segurança e serve como objeto de troca de pessoa para pessoa (peer-to-peer, ou, P2P) sem necessidade de uma intermediação de terceiros. Utiliza de protocolos Blockchain para garantir a posse de quem às têm.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/criptomoedas-glossary.html`,
            tag: `Blockchain`,
            tag1: `Economia`,
        },
        {
            letter: `C`,
            id: "C18",
            title: `Cross-Chain`,
            subtitle: `É uma tecnologia dentro das Blockchains na qual permite que diferentes Blockchains se conectem, possibilitando a troca de informações entre elas.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/cross-chain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C19",
            title: `Cross-Chain Bridge`,
            subtitle: `São sistemas que servem como uma ponte entre diferentes blockchains, possibilitando a transação de dados, tokens, e NFTs de um para outra.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/cross-chain-bridge-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C15",
            title: `Crowdsale`,
            subtitle: `Tipo de venda pública na qual ocorre em formato de leilão, com o preço do token fixo e por ordem de chegada.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/crowdsale-glossary.html`,
            tag: `Business`,
        },
        {
            letter: `C`,
            id: "C16",
            title: `Custódia`,
            subtitle: `Refere-se a guardar o ativo de um cliente e administrá-lo de forma benéfica. Geralmente aplicado por uma instituição.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/custodia-glossary.html`,
            tag: `Economia`,
        },
        // ---- C19 ---- //

        // ---- D ---- //
        {
            letter: `D`,
            id: "D0",
            title: `D`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#D`
        },
        {
            letter: `D`,
            id: "D1",
            title: `Dead Cat Bounce`,
            subtitle: `Conhecido como “Salto do Gato Morto” é um movimento gráfico que representa uma recuperação em uma tendência de queda seguida de continuação da queda.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dead-cat-bounce-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `D`,
            id: "D2",
            title: `Decentralized Autonomous Organization (DAO)`,
            subtitle: `Sistemas descentralizados que não necessitam de um controlador centralizado. Atuam com código em open source e é operado pela comunidade.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/decentralized-autonomous-organization-dao-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `D`,
            id: "D3",
            title: `Decentralized Exchange (DEX)`,
            subtitle: `Uma Exchange que não necessita depositar fundos para trocar ativos e que não os mantém em custódia. Com as DEX usuários trocam seus ativos diretamente de suas carteiras.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/decentralized-exchange-dex-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `D`,
            id: "D4",
            title: `Decentralized Finance (DeFi)`,
            subtitle: `Aplicações financeiras descentralizadas desenvolvidas sob redes blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/decentralized-finance-defi-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `D`,
            id: "D5",
            title: `Deep Web`,
            subtitle: `Parte da web que é de certa forma escondida, ou seja, não é indexado pelas ferramentas de buscas tradicionais (Ex: Google, Bing, Etc...).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/deep-web-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `D`,
            id: "D6",
            title: `Delegated Proof of Stake (dPOS)`,
            subtitle: `Mecanismo de consenso onde usuários selecionados de uma rede são designados para validar as transações e produzir blocos em uma blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/delegated-proof-of-stake-dpos-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `D`,
            id: "D7",
            title: `Derivativos`,
            subtitle: `Instrumentos financeiros na qual tem seu valor atrelado a um ativo ou índice de mercado. (Taxas de juros, ouro, petróleo, Etc...).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/derivativos-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `D`,
            id: "D8",
            title: `Descentralizado`,
            subtitle: `Sistema  onde não possui uma figura central com autoridade, seja ela uma organização ou indivíduo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/descentralizado-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `D`,
            id: "D9",
            title: `Dificuldade`,
            subtitle: `Em criptomoedas, Dificuldade é uma métrica utilizada para analisar a dificuldade de se minerar um novo bloco em uma blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dificuldade-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `D`,
            id: "D10",
            title: `Directed Acyclic Graph (DAG)`,
            subtitle: `Uma estrutura de dados construída em uma direção e na qual se ramifica e nunca se repete. Expande-se em formato de árvore ao invés de uma cadeia em linha reta.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/directed-acyclic-graph-dag-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `D`,
            id: "D11",
            title: `Distributed Denial of Service Attack (DDoS)`,
            subtitle: `Conhecido como ataque distribuído de negação de serviço. É um ataque na qual o hacker malicioso busca sobrecarregar os recursos de processamento de um sistema ou rede, tornando-a indisponível.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/distributed-denial-of-service-ddos-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `D`,
            id: "D12",
            title: `Divergência`,
            subtitle: `Quando o preço de um ativo e um indicador técnico estão apontando para direções diferentes.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/divergencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `D`,
            id: "D13",
            title: `Diversificação`,
            subtitle: `Alocação de recursos em diferentes tipos de ativos com objetivo de reduzir riscos ou aumentar o retorno.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/diversificacao-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `D`,
            id: "D14",
            title: `Dollar Cost Averaging  (DCA)`,
            subtitle: `Conhecido como preço médio. É uma estratégia de investimento na qual se aplica um valor fixo de forma regular em um período definido, sem considerar o preço do ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dollar-cost-averaging-dca-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `D`,
            id: "D15",
            title: `Dominância do Bitcoin`,
            subtitle: `A razão entre o Valor de Mercado do Bitcoin contra a soma do valor de mercado de todas as criptomoedas. Quando a dominância do Bitcoin está baixa pode-se dizer que estamos em período de Altseason.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dominancia-do-bitcoin-glossary.html`,
            tag: `Blockchain`,
            tag1: `Economia`,
        },
        {
            letter: `D`,
            id: "D16",
            title: `Dump`,
            subtitle: `Termo comum da análise técnica. Refere-se a um movimento de queda do preço de mercado de um ativo, ou quando um indivíduo ou organização vende suas posições, derrubando o preço de forma brusca.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dump-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `D`,
            id: "D17",
            title: `Dusting Attack`,
            subtitle: `É uma atividade maliciosa na qual, hackers enviam pequenas quantidades de criptomoedas para diferentes carteiras, assim suas transações são monitoradas pelo atacante, que, com uma serie de análises determina a pessoa ou empresa que está por trás de cada carteira.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dusting-attack-glossary.html`,
            tag: `Computadores`,
            tag: `Hacking`,
        },
        // ---- E ---- //
        {
            letter: `E`,
            id: "E0",
            title: `E`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#E`
        },
        {
            letter: `E`,
            id: "E1",
            title: `Emissão`,
            subtitle: `Taxa em que novas moedas são geradas conforme determinado pelo protocolo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/emissao-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `E`,
            id: "E2",
            title: `Endereço`,
            subtitle: `Cadeia de texto que define o local de uma carteira em particular dentro da blockchain. Quando se envia moedas, utiliza do endereço para definir para qual carteira se está enviando.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/endereco-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `E`,
            id: "E3",
            title: `Endereços ativos diários (DAA)`,
            subtitle: `Numa blockchain, usuários interagem usando seus endereços. DAA, é uma métrica que se refere à quantidade de endereços que realizaram uma atividade determinada em certa blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/enderecos-ativos-diarios-daa-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `E`,
            id: "E4",
            title: `Enterprise Ethereum Alliance (EEA)`,
            subtitle: `Organização de usuários da rede Ethereum que colaboram entre si para criar padrões e encontrar formas de utilizar Ethereum em empresas. Possui participação tanto de empresas, startups e desenvolvedores e tem o objetivo de acelerar a adoção global de soluções que utilizam da Blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/enterprise-ethereum-alliance-eea-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
            tag2: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E5",
            title: `ERC-20`,
            subtitle: `Protocolo padrão para tokens fungíveis e trocáveis da rede Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/erc-20-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E6",
            title: `ERC-721`,
            subtitle: `Protocolo padrão para token não-fungíveis (NFT) e trocáveis da rede Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/erc-721-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
            tag2: `NFT`,
        },
        {
            letter: `E`,
            id: "E7",
            title: `Escalabilidade`,
            subtitle: `Em criptomoedas e blockchain, escalabilidade se refere à habilidade de suportar um grande número de usuários, e o como ela pode ser aprimorada para aceitar mais usuários.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/escalabilidade-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `E`,
            id: "E8",
            title: `Esquema Ponzi`,
            subtitle: `Um golpe financeiro (Scam) na qual se utiliza do dinheiro de novos investidores para pagar o retorno prometido aos investidores antigos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/esquema-ponzi-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `E`,
            id: "E16",
            title: `Ether`,
            subtitle: `Conhecido pelo símbolo ETH, é a moeda nativa da rede Ethereum, utilizada para realizar transações na rede, pagar taxas, e executar Smart Contracts.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/ether-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E9",
            title: `Ethereum`,
            subtitle: `Ethereum é uma plataforma open-source que permite desenvolvedores criarem aplicações descentralizadas utilizando Smart Contracts e redes Blockchain.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E17",
            title: `Ethereum 2.0`,
            subtitle: `Uma atualização da rede Ethereum que busca trazer escalabilidade, eficiência e mudanças para uma melhor utilização da rede.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum20-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E10",
            title: `Ethereum Difficulty Bomb`,
            subtitle: `Mecanismo na qual aumenta a dificuldade de mineração da Ethereum tornando-a não rentável para mineradores. É uma etapa do processo de migração da Ethereum para Proof of Stake.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-difficulty-bomb-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E11",
            title: `Ethereum Plasma`,
            subtitle: `Uma solução Off-chain da Ethereum que busca trazer escalabilidade ao aumentar o número de transações por segundo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-plasma-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E18",
            title: `Ethereum Shard`,
            subtitle: `Ethereum Shard é uma etapa da atualização da Ethereum 2.0 que busca separar a rede em fragmentos para aumentar a escalabilidade da Ethereum.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-shard-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E12",
            title: `Ethereum Virtual Machine (EVM)`,
            subtitle: `Ecossistema da Ethereum na qual os Smart Contracts são executados.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-virtual-machine-evm-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E13",
            title: `Exchange Traded Fund (ETF)`,
            subtitle: `ETF é uma forma de investimento na qual replica a carteira e rentabilidade de um fundo, ação, índice ou título, porém de forma a ser trocável como uma ação única.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/exchange-traded-fund-etf-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `E`,
            id: "E14",
            title: `Explique-me como se eu tivesse 5 anos (ELI5)`,
            subtitle: `Explicar algum conteúdo de forma tão simples que uma criança de 5 anos conseguiria entender.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/explique-me-como-se-eu-tivesse-5-anos-eli5-glossary.html`,
            tag: `Business`,
            tag1: `Termos`,
        },
        {
            letter: `E`,
            id: "E15",
            title: `Exchange`,
            subtitle: `Um mercado de criptomoedas e outros ativos na qual usuários podem comprar e vender suas moedas/ativos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/exchange-glossary.html`,
            tag: `Economia`,
        },
        // ---- E18 ---- //

        // ---- F ---- //
        {
            letter: `F`,
            id: "F0",
            title: `F`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#F`
        },
        {
            letter: `F`,
            id: "F1",
            title: `Faucet`,
            subtitle: `Sites na qual você recebe pequenas quantidades de criptomoedas apenas por navegar por eles.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/faucet-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `F`,
            id: "F2",
            title: `Fear of Missing Out (FOMO)`,
            subtitle: `Também conhecido como o medo de ficar de fora. É um sentimento de apreensão por perder uma oportunidade de investimento com retornos potenciais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/fear-of-missing-out-fomo-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `F`,
            id: "F3",
            title: `Fear, Uncertainty and Doubt (FUD)`,
            subtitle: `Estratégia de disseminar informações ruins sobre um projeto para causar medo e insegurança nos investidores e usuários.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/fear-uncertainty-and-doubt-fud-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `F`,
            id: "F4",
            title: `Flappening`,
            subtitle: `Termo usado para quando Litecoin (LTC) ultrapassou o Bitcoin Cash (BCH) em valor de mercado. Deriva do termo Flippening  que é quando alguma outra criptomoeda ultrapassar o Bitcoin (BTC) em valor de mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/flappening-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `F`,
            id: "F5",
            title: `Flippening`,
            subtitle: `Termo usado para quando outra criptomoeda ultrapassar o Bitcoin (BTC) em valor de mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/flippening-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `F`,
            id: "F6",
            title: `Forex (FX)`,
            subtitle: `Forex significa Foreign Exchange Markets. É o mercado global de câmbio de moedas fiduciárias.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/forex-fx-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `F`,
            id: "F7",
            title: `Fork`,
            subtitle: `É uma atualização em um projeto de blockchain onde o software é copiado e modificado a partir de certo ponto. O projeto original se mantém e a história do mesmo não é rejeitado, porém o novo software criado possui diferenças e mudanças que o original não teria. Forks são divididos em dois tipos: Soft Forks e Hard Forks.
                    `,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
            tag2: `Ethereum`
        },
        {
            letter: `F`,
            id: "F8",
            title: `Full Node`,
            subtitle: `É um software que valida as regras definidas nos protocolos de redes Blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/full-node-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `F`,
            id: "F9",
            title: `Fully Dilluted Market Cap`,
            subtitle: `É a multiplicação do Max Supply de uma criptomoeda com o atual valor de cada token. `,
            date: `30/05/2022`,
            url: `D:/PIC/src/academy/glossary/fully-dilluted-market-cap.html`,
            tag: `Economia`,
        },
        // ---- G ---- //
        {
            letter: `G`,
            id: "G0",
            title: `G`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#G`
        },
        {
            letter: `G`,
            id: "G1",
            title: `Garantia`,
            subtitle: `Alocar algo de valor ao realizar empréstimo como forma de garantir o pagamento de suas obrigações com o credor.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/garantia-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `G`,
            id: "G2",
            title: `Gas`,
            subtitle: `Mecanismo que precifica as taxas de transferência e calcula o custo de realizar operações utilizando os Smart Contracts da Blockchain da Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gas-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `G`,
            id: "G3",
            title: `Gas Limit`,
            subtitle: `Quantidade máxima de Gas que um usuário aceita pagar como taxa para realizar transferências ou operações em um Smart Contract.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gas-limit-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `G`,
            id: "G4",
            title: `Gas Price`,
            subtitle: `Preço que um usuário deseja pagar como taxa para realizar transferências ou operações em um Smart Contract.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gas-price-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `G`,
            id: "G5",
            title: `Gasto Duplo`,
            subtitle: `Quando uma quantidade de moedas é gasta mais de uma vez. Geralmente ocasionado por um ataque.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gasto-duplo-glossary.html`,
            tag: `Blockchain`,
            tag1: `Hacking`,
        },
        {
            letter: `G`,
            id: "G6",
            title: `Gestão ativa`,
            subtitle: `Estratégia de investimentos na qual o indivíduo seleciona e gerencia os ativos da carteira ativamente, com objetivo de superar o mercado e obter lucro.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gestao-ativa-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `G`,
            id: "G7",
            title: `Gestão de ativos`,
            subtitle: `Método que ajuda indivíduos ou empresas a administrarem seus ativos. Sejam eles para benefício próprio ou de seus clientes.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gestao-de-ativos-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `G`,
            id: "G8",
            title: `Golden Cross`,
            subtitle: `Padrão gráfico Bullish onde se analisa duas médias móveis uma de curto-prazo e outra de longo-prazo. É formado um Golden Cross, quando a média móvel de curto prazo rompe para cima da média móvel de longo prazo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/golden-cross-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `G`,
            id: "G9",
            title: `Graphical Processing Unit (GPU)`,
            subtitle: `Processador que trabalha de forma dedicada à atividade de vídeo e gráfica de um computador. `,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/graphical-processing-unit-gpu-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `G`,
            id: "G10",
            title: `Gwei`,
            subtitle: `Gwei é uma fração de Ether(ETH), moeda da rede Ethereum. Utiliza-se de Gwei como forma de medir o preço do Gas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gwei-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        // ---- H ---- //
        {
            letter: `H`,
            id: "H0",
            title: `H`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#H`
        },
        {
            letter: `H`,
            id: "H1",
            title: `Hacker`,
            subtitle: `Indivíduo que possui conhecimentos avançados em sistemas e redes de computadores.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hacker-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `H`,
            id: "H2",
            title: `Halving`,
            subtitle: `Quando a recompensa do bloco de uma criptomoeda é cortada pela metade com o objetivo de diminuir a taxa de emissão de novas moedas trazendo assim escassez, e eventualmente um supply finito.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/halving-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `H`,
            id: "H3",
            title: `Hard Cap`,
            subtitle: `Quantidade máxima que um projeto busca arrecadar durante seu ICO.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hard-cap-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `H`,
            id: "H4",
            title: `Hard Fork`,
            subtitle: `Tipo de Fork na qual os nodes atualizados se tornam incompatíveis com versões anteriores. isso ocorre pois a nova versão possui regras que entram em conflito com a versão antiga.`,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/hard-fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
            tag2: `Ethereum`,
        },
        {
            letter: `H`,
            id: "H5",
            title: `Hash`,
            subtitle: `É o retorno com informações sobre um dado específico após executar uma hash function (código de programação).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hash-glossary.html`,
            tag: `Computadores`,
            tag1: `Blockchain`,
        },
        {
            letter: `H`,
            id: "H11",
            title: `Hash Power`,
            subtitle: `É poder de um computador ou rede de realizar operações de criptografia para transformar dados em Hashes.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/hash-power-glossary.html`,
            tag: `Computadores`,
            tag1: `Blockchain`,
        },
        {
            letter: `H`,
            id: "H6",
            title: `Hash Rate`,
            subtitle: `Velocidade na qual um computador é capaz de calcular novos hashes, geralmente é visto como hashes por segundo e determina o poder de processamento de uma blockchain ou mineradora.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hash-rate-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `H`,
            id: "H7",
            title: `High-Frequency Trading (HFT)`,
            subtitle: `Conhecido como trading de alta freqüência. É uma forma de negociação na qual se utiliza de sistemas para realizar diversas operações em um curto intervalo de tempo, geralmente segundo ou milissegundos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/high-frequency-trading-hft-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `H`,
            id: "H8",
            title: `Hipótese do mercado eficiente`,
            subtitle: `Hipótese econômica na qual o preço de ativos no mercado sempre reflete toda informação existente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hipotese-do-mercado-eficiente-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `H`,
            id: "H9",
            title: `HODL`,
            subtitle: `Derivado do termo “Hold” que é manter um ativo em sua posse e não vendê-lo. Teve sua origem no fórum BitcoinTalk, quando um usuário errou a digitação. O termo teve aceitação e é até hoje fortemente utilizado pela comunidade de criptomoedas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hodl-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `H`,
            id: "H12",
            title: `Holder`,
            subtitle: `É o investidor que mantém seus ativos em sua posse e não os vende. `,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/holder-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `H`,
            id: "H10",
            title: `Hot Wallet`,
            subtitle: `É uma carteira de criptomoedas na qual está sempre conectada à internet.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hot-wallet-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- H12 ---- //

        // ---- I ---- //
        {
            letter: `I`,
            id: "I0",
            title: `I`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#I`
        },
        {
            letter: `I`,
            id: "I1",
            title: `Índice`,
            subtitle: `Um instrumento financeiro usado para rastrear o preço de um ativo ou de um conjunto de ativos. Geralmente é utilizado ao combinar diversos elementos em um e serve como um benchmark.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/indice-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `I`,
            id: "I2",
            title: `Initial Coin Offering (ICO)`,
            subtitle: `Método de arrecadação similar ao IPO. Onde uma criptomoeda é lançada para venda pública pela primeira vez.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/initial-coin-offering-ico-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `I`,
            id: "I3",
            title: `Initial Exchange Offering (IEO)`,
            subtitle: `Método de arrecadação na qual as vendas públicas são conduzidas por uma Exchange.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/initial-exchange-offering-ieo-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `I`,
            id: "I4",
            title: `Initial Public Offering (IPO)`,
            subtitle: `Método de arrecadação onde empresas abrem seu capital e ofertam suas ações ao público para arrecadar capital de seus investidores.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/initial-public-offering-ipo-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `I`,
            id: "I5",
            title: `Interoperabilidade`,
            subtitle: `Conceito que permite diferentes blockchains serem compatíveis entre si, oferecendo a possibilidade de compartilharem suas ferramentas e usabilidade.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/interoperabilidade-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `I`,
            id: "I6",
            title: `InterPlanetary File System (IPFS)`,
            subtitle: `Um projeto open source de um protocolo de armazenamento de dados distribuídos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/interplanetary-file-system-ipfs-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `I`,
            id: "I7",
            title: `Internet of Things (IoT)`,
            subtitle: `Também conhecido como Internet das Coisas. São sistemas que através da conexão com a internet, comunicam entre si sem necessidade de interação humana.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/internet-of-things-iot-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `I`,
            id: "I8",
            title: `Investidor Anjo`,
            subtitle: `Investidores que buscam oportunidades provendo fundos para empresários ou start-ups.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/investidor-anjo-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },

        // ---- J ---- //
        {
            letter: `J`,
            id: "J0",
            title: `J`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#J`
        },
        {
            letter: `J`,
            id: "J1",
            title: `Jager (BNB)`,
            subtitle: `Menor unidade da criptomoeda BNB. Similar ao Satoshi, a menor unidade de um Bitcoin.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/jager-bnb-glossary.html`,
            tag: `Blockchain`,
        },

        // ---- K ---- //
        {
            letter: `K`,
            id: "K0",
            title: `K`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#K`
        },
        {
            letter: `K`,
            id: "K1",
            title: `Know Your Costumer (KYC)`,
            subtitle: `Conhecido também pelo termo “Conheça seu cliente”. É um procedimento padrão de empresas financeiras para validarem e reconhecerem seus clientes como forma de segurança.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/know-your-costumer-kyc-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
            tag2: `Termos`,
        },
        // ---- L ---- //
        {
            letter: `L`,
            id: "L0",
            title: `L`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#L`
        },
        {
            letter: `L`,
            id: "L1",
            title: `Lei da Oferta e Demanda`,
            subtitle: `Lei econômica onde o preço de mercado de um bem específico é regulada pela quantidade do produto oferecida no mercado (Oferta) e a demanda que compradores estão dispostos a pagar pelo produto. Com uma demanda superior a oferta o preço tende a subir, já uma oferta superior à demanda reflete em uma queda dos preços.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/lei-da-oferta-e-demanda-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `L`,
            id: "L2",
            title: `Lightning Network`,
            subtitle: `Protocolo de segunda camada que opera em cima de uma blockchain existente. Possibilita transações financeiras mais ágeis, trazendo escalabilidade ao projeto.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/lightning-network-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `L`,
            id: "L3",
            title: `Liquidação Forçada`,
            subtitle: `Quando a posição alavancada de uma operação é fechada forçadamente. Acontece quando a operação não possui margem o suficiente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/liquidacao-forcada-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `L`,
            id: "L4",
            title: `Liquidez`,
            subtitle: `Quantidade que pode ser comprada ou vendida sem ter impactos significantes no preço de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/liquidez-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `L`,
            id: "L5",
            title: `Liquid Proof of Stake (LPoS)`,
            subtitle: `Consenso de Proof of Stake da Tezos (XTZ), muito similar ao Delegated Proof of Stake (DPoS).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/liquid-proof-of-stake-lpos-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `L`,
            id: "L6",
            title: `Livro-razão`,
            subtitle: `Relatório com transações financeiras a fim de monitorar as movimentações realizadas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/livro-razao-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `L`,
            id: "L7",
            title: `Lua`,
            subtitle: `Uma expressão utilizada para descrever uma criptomoeda em tendência de alta.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/lua-glossary.html`,
            tag: `Termos`,
        },
        // ---- M ---- //
        {
            letter: `M`,
            id: "M0",
            title: `M`,
            subtitle: `.`,
            date: `02/05/2022`,
            url: `#M`
        },
        {
            letter: `M`,
            id: "M1",
            title: `Mainnet`,
            subtitle: `Rede principal de uma blockchain onde as transações são registradas e verificadas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/mainnet-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `M`,
            id: "M2",
            title: `Malware`,
            subtitle: `Software programado para infiltrar e danificar sistemas e redes.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/malware-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `M`,
            id: "M3",
            title: `Mãos fracas`,
            subtitle: `Termo para classificar aqueles que não seguram seus ativos ou não segue sua estratégia de investimento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/maos-fracas-glossary.html`,
            tag: `Termos`,
        },
        {
            letter: `M`,
            id: "M4",
            title: `Margem Isolada`,
            subtitle: `Alocação de margem na qual se restringe a uma posição isolada das demais posições.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/margem-isolada-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `M`,
            id: "M5",
            title: `Market Capitalization (Market Cap)`,
            subtitle: `Refere-se ao valor de mercado de um ativo ou moeda. Resultado da multiplicação do preço de cada moeda pela quantidade existente de moedas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/market-capitalization-market-cap-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `M`,
            id: "M6",
            title: `Market Maker`,
            subtitle: `Participantes do mercado que enviam ordens de compra ou venda que não são executadas imediatamente, permanecendo no livro de ofertas até que sejam concluídas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/market-maker-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `M`,
            id: "M7",
            title: `Market Taker`,
            subtitle: `Participantes do mercado que enviam ordens de compra ou venda que são totalmente executadas com as ordens já disponíveis no mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/market-taker-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `M`,
            id: "M8",
            title: `Masternodes`,
            subtitle: `Computadores que são responsáveis por processar transações em uma blockchain em troca de uma recompensa por isso. Geralmente é necessária uma quantidade da moeda em Stake para atuar como Masternode.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/masternodes-glossary.html`,
            tag: `Computador`,
        },
        {
            letter: `M`,
            id: "M9",
            title: `Max Supply`,
            subtitle: `Refere-se a quantidade máxima de moedas ou tokens que podem existir de uma criptomoeda.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/max-supply-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `M`,
            id: "M10",
            title: `Memory Pool (Mempool)`,
            subtitle: `Mecanismo que mantém o controle das transações que foram solicitadas, mas que ainda não foram confirmadas em uma blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/memory-pool-mempool-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `M`,
            id: "M11",
            title: `Mercado de Derivativos`,
            subtitle: `Mercado para derivativos, como contratos futuros ou opções.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/mercado-de-derivativos-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `M`,
            id: "M12",
            title: `Merkle Tree`,
            subtitle: `Uma estrutura de dados com o objetivo de organizar grandes quantidades. Utilizado em Blockchains para que a informação (hash) do bloco anterior seja passada para o bloco seguinte.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/merkle-tree-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `M`,
            id: "M13",
            title: `Metadados`,
            subtitle: `São dados que trazem informações adicionais sobre outro dado (Ex: uma imagem, possui como metadados o modelo da câmera, horário e local de criação).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/metadados-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `M`,
            id: "M14",
            title: `Metaverso`,
            subtitle: `É um espaço virtual na qual usuário interagem entre si em um ambiente computadorizado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/metaverso-glossary.html`,
            tag: `Blockchain`,
            tag1: `NFT`,
        },
        {
            letter: `M`,
            id: "M15",
            title: `Mineração`,
            subtitle: `Processo onde os mineradores verificam e adicionam novas transações em um bloco de uma rede blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/mineracao-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `M`,
            id: "M16",
            title: `Mineradores`,
            subtitle: `Usuários de uma blockchain que fazem o processo de mineração.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/mineradores-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `M`,
            id: "M17",
            title: `Moeda Fiduciária`,
            subtitle: `Também conhecida como Fiat. É o dinheiro controlado por um governo e declarado como moeda de aceitação obrigatória.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/moeda-fiduciaria-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `M`,
            id: "M18",
            title: `Moeda Lastreada`,
            subtitle: `Moeda desenvolvida para que seu preço permaneça o mesmo ao de uma outra moeda determinada. Por exemplo 1 USDC é lastreado a 1 Dólar. São também conhecidas como Stablecoins (Moedas estáveis).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/moeda-lastreada-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `M`,
            id: "M19",
            title: `Multi-assinatura`,
            subtitle: `Carteiras que precisam de autorização de outra parte para que suas transações sejam criadas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/multi-assinatura-glossary.html`,
            tag: `Blockchain`,
        },
        //  ---- N ---- //
        {
            letter: `N`,
            id: "N0",
            title: `N`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#N`
        },
        {
            letter: `N`,
            id: "N1",
            title: `NFT (Tokens não fungíveis)`,
            subtitle: `Tipo de token que representa um item digital único. Que diferente de criptomoedas não podem ser unificados.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/nft-tokens-nao-fungiveis-glossary.html`,
            tag: `Blockchain`,
            tag1: `NFT`,
        },
        {
            letter: `N`,
            id: "N2",
            title: `Node`,
            subtitle: `Um participante (computador) numa rede blockchain que se comunica com os outros participantes para garantir a segurança do sistema.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/node-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `N`,
            id: "N3",
            title: `Nonce`,
            subtitle: `Número único de cada transação gerado para verificação e impedir que transações passadas se repitam.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/nonce-glossary.html`,
            tag: `Blockchain`,
        },

        // ---- O ---- //
        {
            letter: `O`,
            id: "O0",
            title: `O`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#O`
        },
        {
            letter: `O`,
            id: "O1",
            title: `OCO/OCOI`,
            subtitle: `OCO (ombro-cabeça-ombro) e OCOI (ombro-cabeça-ombro-invertido) são padrões gráficos da análise técnica que apresentam uma reversão de tendência de preço de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ocoocoi-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O2",
            title: `Off-chain`,
            subtitle: `Transações que ocorrem fora de uma rede blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/off-chain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `O`,
            id: "O3",
            title: `Open/Close Price`,
            subtitle: `Preço de abertura e fechamento, se refere respectivamente ao preço na qual uma criptomoeda iniciou um período, por exemplo, o começo do dia. E o preço na qual ela encerrou ao fim do período, por exemplo, o final do dia.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/openclose-price-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O4",
            title: `Open Source Software`,
            subtitle: `Sistemas lançados com a possibilidade de serem utilizados, atualizados e distribuídos por qualquer um livremente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/open-source-software-glossary.html`,
            tag: `Blockchain`,
            tag1: `Computadores`,
        },
        {
            letter: `O`,
            id: "O5",
            title: `Oracle`,
            subtitle: `Sistema que verifica valores reais e disponibiliza dados para uma blockchain ou smart contract. Oracles são muito vistos em criptomoedas na qual sua distribuição é lastreada a alguma moeda, exemplo, dólar.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/oracle-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `O`,
            id: "O6",
            title: `Ordem à Mercado`,
            subtitle: `Uma ordem de mercado onde um Taker pega o melhor valor disponível de Bid ou Ask. Sendo sua ordem completamente efetuada com base no preço e quantidade atual do Order Book.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-a-mercado-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O7",
            title: `Ordem Iceberg`,
            subtitle: `Uma ordem de mercado de grande quantidade que é dividida em partes menores que serão enviadas em períodos intervalados. Seu objetivo é que o investidor faça a transação sem realizar grandes impactos no mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-iceberg-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O8",
            title: `Ordem limite`,
            subtitle: `Uma ordem de mercado na qual realiza a operação quando o preço de um ativo chega no preço previamente definido.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-limite-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O9",
            title: `Ordem Tudo ou Nada (TON)`,
            subtitle: `Uma ordem de mercado que quando definida, ou se executa o valor total da ordem ou não a executa. Evita que a ordem seja preenchida de forma parcial.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-tudo-ou-nada-ton-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O10",
            title: `Order Book`,
            subtitle: `Uma lista eletrônica que consta as ordens de compra e venda não executadas e disponíveis em um mercado ou Exchange.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/order-book-glossary.html`,
            tag: `Trading`,
        },
        // ---- P ---- // 
        {
            letter: `P`,
            id: "P0",
            title: `P`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#P`
        },
        {
            letter: `P`,
            id: "P1",
            title: `Peer-to-Peer (P2P)`,
            subtitle: `Quando duas partes estão conectadas e compartilham recursos sem a necessidade de uma parte centralizadora.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/peer-to-peer-p2p-glossary.html`,
            tag: `Business`,
            tag1: `Termos`,
        },
        {
            letter: `P`,
            id: "P2",
            title: `Paper Wallet`,
            subtitle: `Papel onde o endereço e chave privada de uma carteira estão impressos fisicamente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/paper-wallet-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P19",
            title: `Parachain`,
            subtitle: `Parachains são Blockchains que rodam em paralelo a Blockchain principal da Rede Polkadot, a chamada Relay Chain.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/parachain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P3",
            title: `Phishing`,
            subtitle: `Um ataque onde o autor busca obter as credenciais do usuário para obter acesso à sua conta. Existem também ataques de Phishing Website, onde o autor recria sites já existentes idênticos ao original para aplicar golpes em usuários desatentos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/phishing-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `P`,
            id: "P4",
            title: `Políticas Monetárias`,
            subtitle: `São políticas tomadas por autoridades para controlar a quantidade de moeda em circulação e as taxas de inflação e juros de um país.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/politicas-monetarias-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `P`,
            id: "P5",
            title: `Polkadot Crowdloan`,
            subtitle: `Processo de realizar Stake de Polkadot (DOT) Tokens para apoiar projetos específicos na plataforma da Polkadot Slot Auction, os participantes então recebem como retorno, recompensas do projeto que apoiaram.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/polkadot-crowdloan-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P20",
            title: `Pool de Liquidez`,
            subtitle: `São Smart Contracts em plataformas DeFi que permitem aos usuários bloquearem seus tokens para receber recompensas com taxas de transação.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/pool-de-liquidez-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `P`,
            id: "P21",
            title: `Pool de Mineração`,
            subtitle: `São sistemas na qual diversos mineradores juntam seus Hash Power para poder minerar com maior potência.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/pool-de-mineracao-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `P`,
            id: "P6",
            title: `Portfólio`,
            subtitle: `Consiste nos ativos na qual você está investido.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/portfolio-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `P`,
            id: "P7",
            title: `Preço Médio`,
            subtitle: `É uma estratégia de investimento na qual se aplica um valor fixo de forma regular em um período definido, sem considerar o preço do ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/preco-medio-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `P`,
            id: "P8",
            title: `Pré-venda`,
            subtitle: `Uma venda exclusiva de tokens. Geralmente ocorre uma etapa de pré-venda antes da ICO pública.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/pre-venda-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `P`,
            id: "P9",
            title: `Price Action`,
            subtitle: `O movimento do preço de um ativo financeiro através de um período de tempo. Ao ser exibido em um gráfico, permite aos traders identificarem padrões para realizar operações.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/price-action-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `P`,
            id: "P10",
            title: `Proof of Attendance Protocol (PoAP)`,
            subtitle: `Protocolo que cria itens colecionáveis para constar e validar a presença em um evento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-attendance-protocol-poap-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P11",
            title: `Proof of Authority (PoA)`,
            subtitle: `Um algoritmo de consenso que valida blocos baseado em uma reputação e identidade.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-authority-poa-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P12",
            title: `Proof of Burn (PoB)`,
            subtitle: `Um algoritmo de consenso que valida blocos baseado nos tokens queimados pelo validador.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-burn-pob-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P22",
            title: `Proof of History (PoH)`,
            subtitle: `É um sistema da rede Solana desenvolvido para facilitar e agilizar o tempo de confirmação de um bloco, trazendo velocidade e escalabilidade para a rede.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-history-PoH-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P13",
            title: `Proof of Stake (PoS)`,
            subtitle: `Um algoritmo de consenso que valida blocos baseado na quantidade de tokens que estão em Stake pelo validador. As recompensas também variam dependendo da quantidade em Stake.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-stake-pos-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`
        },
        {
            letter: `P`,
            id: "P14",
            title: `Proof of Work (PoW)`,
            subtitle: `Um algoritmo de consenso que valida blocos com base no poder computacional empregado na rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-work-pow-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`
        },
        {
            letter: `P`,
            id: "P18",
            title: `Propostas de Melhoria do Bitcoin (BIP)`,
            subtitle: `Conhecido como "Bitcoin Improvement Proposal". São documentos com propostas de melhorias, utilizado para adicionar funcionalidades e atualizações para a rede Bitcoin.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/propostas-de-melhoria-do-bitcoin-bip-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `P`,
            id: "P15",
            title: `Propostas de Melhoria do Ethereum (EIP)`,
            subtitle: `Conhecido como "Ethereum Improvement Proposal". São documentos com propostas de melhorias, utilizado para adicionar funcionalidades e atualizações para a rede da Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/propostas-de-melhoria-do-ethereum-eip-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `P`,
            id: "P16",
            title: `Protocolo`,
            subtitle: `Conjunto de regras definidas na criação de uma rede na qual permite que participantes a utilize de forma apropriada.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/protocolo-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P17",
            title: `Pump and Dump`,
            subtitle: `Manipulação de mercado onde se levanta o preço de um ativo no mercado, antes de realizar lucro levando-o para baixo novamente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/pump-and-dump-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // --- P22 --- //

        // ---- Q ---- //
        {
            letter: `Q`,
            id: "Q0",
            title: `Q`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#Q`
        },
        {
            letter: `Q`,
            id: "Q1",
            title: `QR Code`,
            subtitle: `Código QR ou “Quick Response Code” é uma imagem que pode armazenar dados e ser lida por máquinas. Geralmente carrega links dentro de si.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/qr-code-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `Q`,
            id: "Q2",
            title: `Queima de tokens`,
            subtitle: `Quando tokens são enviados para carteiras na qual as chaves privadas são desconhecidas, assim tornando-se inutilizáveis.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/queima-de-tokens-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- R ---- //
        {
            letter: `R`,
            id: "R0",
            title: `R`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#R`
        },
        {
            letter: `R`,
            id: "R1",
            title: `Ransomware`,
            subtitle: `Tipo de ataque na qual um Malware toma o controle de seu computador e ameaça destruir ou divulgar seus documentos a não ser que o criminoso seja pago.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ransomware-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `R`,
            id: "R2",
            title: `Rekt`,
            subtitle: `Uma gíria com origem na palavra “destruído” (Wrecked). Geralmente descreve quando algo dá terrivelmente errado. Em cripto, geralmente é atribuído a trades ou investimentos ruins.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/rekt-glossary.html`,
            tag: `Termo`,
        },
        {
            letter: `R`,
            id: "R3",
            title: `Relative Strenght Index (RSI)`,
            subtitle: `RSI é um indicador técnico muito comum na análise gráfica. Utiliza do preço de fechamento para identificar se um ativo está em sobre-compra ou sobre-venda, RSI oscila entre 0-100 sendo que abaixo de 30 é considerado em sobre-venda (venda maior que compra) e maior que 70 é considerado sobre-compra (compra maior que venda).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/relative-strength-index-rsi-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `R`,
            id: "R12",
            title: `Relay Chain`,
            subtitle: `É a Blockchain principal da Rede Polkadot, serve como o coração do ecossistema da Polkadot e armazena todas as informações da rede.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/relay-chain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `R`,
            id: "R4",
            title: `Reserva de valor`,
            subtitle: `Uma commodity, moeda, ou ativo que pode ser guardado e futuramente trocado sem sofrer depreciação.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/reserva-de-valor-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `R`,
            id: "R5",
            title: `Resistência`,
            subtitle: `Termo da análise técnica que representa uma área em que o preço, ao encontrar a resistência, tende a recuar quando o ativo está em alta.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/resistencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `R`,
            id: "R6",
            title: `Retorno sobre o investimento (ROI)`,
            subtitle: `O ROI (Return on Investment) é a razão entre o lucro do investimento e o custo do investimento. Geralmente é utilizado como métrica para a eficiência de um investimento. Deve-se atentar com os riscos de ROIs exageradamente altos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/retorno-sobre-o-investimento-roi-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `R`,
            id: "R13",
            title: `Rig de Mineração`,
            subtitle: `São sistemas montados em um gabinete que possui diversas máquinas especializadas para realizar o processo de mineração de criptomoedas.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/rig-de-mineracao-glossary.html`,
            tag: `Computadores`,
            tag1: `Bitcoin`,
        },
        {
            letter: `R`,
            id: "R7",
            title: `Roadmap`,
            subtitle: `Método de planejamento de um projeto, na qual define etapas e objetivos a serem cumpridas no curto e longo prazo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/roadmap-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `R`,
            id: "R8",
            title: `Rollup`,
            subtitle: `Em Rollups, blockchains secundárias são criadas para processar um grupo de transações que depois são enviada para a Blockchain principal em um bloco chamado Rollup Block.`,
            date: `27/05/2022`,
            url: `D:/PIC/src/academy/glossary/rollup-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `R`,
            id: "R9",
            title: `Rollup Block`,
            subtitle: `Bloco enviado a blockchain principal que contém diversas transações agrupadas. Ocorre ao utilizar o mecanismo de Rollups da Ethereum. `,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/rollup-block-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `R`,
            id: "R10",
            title: `Rompimento`,
            subtitle: `Momento em que o preço de um ativo sai de um padrão ou área definida. Geralmente rompendo um suporte ou uma resistência, Invalidando ou confirmando um movimento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/rompimento-glossary.html`,
            tag: `Blockchain`,
            tag1: `Trading`,
        },
        {
            letter: `R`,
            id: "R11",
            title: `Rug Pull`,
            subtitle: `Em critpo, Rug Pull, (Também conhecido como “puxar o tapete”) é quando uma empresa ou time de desenvolvimento de repente abandona o projeto, vende todos os tokens ou remove a liquidez.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/rug-pull-glossary.html`,
            tag: `Economia`,
            tag1: `Blockchain`,
        },
        // ---- R13 ---- //

        // ---- S ---- //
        {
            letter: `S`,
            id: "S0",
            title: `S`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#S`
        },
        {
            letter: `S`,
            id: "S1",
            title: `Satoshi`,
            subtitle: `A menor unidade de um Bitcoin (BTC). É equivalente a um centésimo milionésimo de um Bitcoin (1 BTC = 100 Milhões Satoshis).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/satoshi-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S2",
            title: `Satoshi Nakamoto`,
            subtitle: `Pseudônimo do criador ou criadores do Bitcoin.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/satoshi-nakamoto-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S3",
            title: `Securities and Exchange Comission (SEC)`,
            subtitle: `É uma agência do governo federal americano responsável por regular o mercado de capitais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/securities-and-exchange-comission-sec-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `S`,
            id: "S4",
            title: `Seed Phrase`,
            subtitle: `Conjunto de palavra que são utilizadas para acessar sua carteira de criptomoedas. Geralmente são 12 ou 16 palavras em Inglês.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/seed-phrase-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S5",
            title: `Segregated Witness (SegWit)`,
            subtitle: `Um Soft Fork que traz mudanças ao formato de transações do protocolo Bitcoin para possibilitar uma melhor escalabilidade além de introduzir novos recursos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/segregated-witness-segwit-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S6",
            title: `Sell Wall`,
            subtitle: `Uma ordem de venda de grande quantidade ou conjunto de ordens de venda acumuladas em um mesmo preço que forma uma barreira na qual o preço tem dificuldade de passar.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/sell-wall-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `S`,
            id: "S7",
            title: `SHA-256`,
            subtitle: `Abreviação de “Secure Hashing Algoritm – 256”.  Forma de criptografar dados em hash, transformando-os em uma cadeia de 64 caracteres.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/sha-256-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S8",
            title: `Sharpe Ratio`,
            subtitle: `É uma razão que investidores e economistas utilizam da relação risco e retorno potencial para descobrir o ROI potencial de um investimento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/sharpe-ratio-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `S`,
            id: "S9",
            title: `Shitcoin`,
            subtitle: `Uma moeda sem valor ou usabilidade potencial.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/shitcoin-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S10",
            title: `Side Chain`,
            subtitle: `Uma rede separada da Blockchain que roda paralelamente à Blockchain primária.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/side-chain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S11",
            title: `Smart Contracts`,
            subtitle: `Contratos inteligentes que se executam automaticamente quando alguma condição acontece, sem a necessidade de atividade humana. Como por exemplo, caso X ocorra, envie moedas de A para B. as moedas somente serão enviadas caso a condição X se concretize.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/smart-contracts-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S12",
            title: `Soft Cap`,
            subtitle: `Valor que uma empresa busca arrecadar ao realizar o ICO.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/soft-cap-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `S`,
            id: "S13",
            title: `Soft Fork`,
            subtitle: `Tipo de Fork na qual os nodes atualizados mantém contato com os nodes não atualizados. Soft Forks trazem mudanças que não entram em conflito com as regras do node original, assim possibilitando o uso da rede original.`,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/soft-fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
            tag2: `Ethereum`,
        },
        {
            letter: `S`,
            id: "S14",
            title: `Solidity`,
            subtitle: `Linguagem de programação orientada a objetos utilizada em várias Blockchains.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/solidity-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `S`,
            id: "S15",
            title: `Soluções de Segunda Camada`,
            subtitle: `Protocolo secundário que é construído sob uma blockchain existente trazendo assim maior escalabilidade ao projeto primário, com transações mais rápidas e baratas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/solucoes-de-segunda-camada-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S16",
            title: `Stablecoins`,
            subtitle: `Moedas lastreadas a alguma moeda Fiat ou commodity. Por exemplo, 1  USDC  = 1 Dólar Americano.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/stablecoins-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S17",
            title: `Staking`,
            subtitle: `É o ato de bloquear uma quantidade de tokens a fim de participar como validador de redes que utilizam de protocolos Proof-of-Stake. Ao realizar Stake, geralmente se recebe um valor percentual do bloqueado como recompensa.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/staking-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `S`,
            id: "S18",
            title: `Startup`,
            subtitle: `São empresas emergentes com projetos inovadores e escaláveis. Geralmente são pequenas empresas com alto potencial de crescimento que utilizam tecnologias inovadoras em seus negócios.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/startup-glossary.html`,
            tag: `Business`,
        },
        {
            letter: `S`,
            id: "S19",
            title: `Stop-Loss`,
            subtitle: `Ordem a mercado pré-definido que é acionada como um limite para uma operação que dê errado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/stop-loss-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `S`,
            id: "S20",
            title: `Superfície de Ataque`,
            subtitle: `Pontos em um software onde hackers mal intencionados podem invadir para extrair dados de um sistema.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/superficie-de-ataque-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `S`,
            id: "S21",
            title: `Suporte`,
            subtitle: `Termo da análise técnica que representa uma área em que o preço, ao encontrar o suporte, tende a subir quando o ativo está em queda.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/suporte-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `S`,
            id: "S22",
            title: `Swap`,
            subtitle: `Mecanismo presente em Exchanges Descentralizadas (DEX) e protocolos DeFi que permite ao usuário trocar criptomoedas por outras.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/swap-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },

        // ---- T ---- //
        {
            letter: `T`,
            id: "T0",
            title: `T`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#T`
        },
        {
            letter: `T`,
            id: "T1",
            title: `Taxa de transação`,
            subtitle: `Valor a ser pago para a rede para realizar, validar, e registrar a transação na blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/taxa-de-transacao-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T2",
            title: `Tendência`,
            subtitle: `Direção na qual o preço está se encaminhando ou provavelmente irá se encaminhar. É definida pelo sentimento geral do mercado em relação ao ativo ou economia. Analistas utilizam de métricas, e indicadores para encontrar tendências de mercado que podem ser positivas, negativas ou neutras.`,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/tendencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `T`,
            id: "T3",
            title: `Testnet`,
            subtitle: `Área para testes de atualizações em redes blockchain, conhecido também como “Test Network”.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/testnet-glossary.html`,
            tag: `Blockchain`,
            tag1: `Computadores`,
        },
        {
            letter: `T`,
            id: "T4",
            title: `Ticker`,
            subtitle: `É o símbolo de um ativo, geralmente relacionado ao nome de forma abreviada. É utilizado para identificar um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ticker-glossary.html`,
            tag: `Economia`,
            tag1: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T5",
            title: `Tokens`,
            subtitle: `Unidades de valor criados em redes blockchain. São gerenciados por uma organização ou empresa que garante a quem possui os tokens a participação na rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/tokens-glossary.html`,
            tag: `Economia`,
            tag1: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T6",
            title: `Token de Utilidade`,
            subtitle: `Criptomoedas que tem uma usabilidade em uma rede, e não somente para servir como meio de troca ou de investimento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/token-de-utilidade-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T7",
            title: `Total Value Locked (TVL)`,
            subtitle: `Representa o valor total que está bloqueado em Stake em um protocolo DeFi.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/total-value-locked-tvl-glossary.html`,
            tag: `Economia`,
            tag: `DeFi`,
        },
        {
            letter: `T`,
            id: "T8",
            title: `Trading de Margem`,
            subtitle: `Quando o usuário realiza empréstimos em uma corretora ou Exchange para operar.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/trading-de-margem-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `T`,
            id: "T9",
            title: `Transações Por Segundo (TPS)`,
            subtitle: `Número de transações que uma blockchain é capaz de processar por segundo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/transacoes-por-segundo-tps-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T10",
            title: `Transaction ID (TXID)`,
            subtitle: `Conhecido como ID da transação, é uma sequência única de caracteres que define cada transação em uma blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/transaction-id-txid-glossary.html`,
            tag: `Blockchain`,

        },
        {
            letter: `T`,
            id: "T11",
            title: `Trustless`,
            subtitle: `Redes que podem ser totalmente verificadas por qualquer um, eliminando a necessidade de confiar que certa ação foi realmente executada.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/trustless-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T12",
            title: `Turing-complete`,
            subtitle: `São linguagens de computação que permitem a máquina manipular e computar qualquer informação.`,
            date: `27/05/2022`,
            url: `D:/PIC/src/academy/glossary/turing-complete-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `T`,
            id: "T13",
            title: `Two-Factor Authentication (2FA)`,
            subtitle: `Autenticação de dois fatores, código enviado para confirmar a identidade do usuário ao entrar na sua conta.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/two-factor-authentication-2fa-glossary.html`,
            tag: `Computadores`,
        },
        // ---- U ---- //
        {
            letter: `U`,
            id: "U0",
            title: `U`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#U`
        },
        {
            letter: `U`,
            id: "U1",
            title: `Unspent Transaction Output (UTXO)`,
            subtitle: `Uma resposta de uma transação na qual é referenciada em transações futuras para que possam ser executadas. Mostra o valor restante que se tem em uma carteira após realizar uma transação.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/unspent-transaction-output-utxo-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `U`,
            id: "U2",
            title: `User Interface (UI)`,
            subtitle: `Interface do usuário de uma aplicação, onde interações entre humano e máquina ocorrem.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/user-interface-ui-glossary.html`,
            tag: `Computadores`,
        },
        // ---- V ---- //
        {
            letter: `V`,
            id: "V0",
            title: `V`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#V`
        },
        {
            letter: `V`,
            id: "V1",
            title: `Validador`,
            subtitle: `Um participante de uma rede Blockchain de Proof of Stake que valida e assina que uma transação realmente ocorreu. Geralmente é necessário ter uma grande quantidade da criptomoeda em Stake na rede para se tornar um validador.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/validador-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `V`,
            id: "V2",
            title: `Vantagem Absoluta`,
            subtitle: `Conceito econômico na qual uma parte tem vantagem direta em eficiência na produção/distribuição de um bem especifica ou de um serviço contra outra parte.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/vantagem-absoluta-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `V`,
            id: "V3",
            title: `Venda Privada`,
            subtitle: `Uma rodada de investimento para investidores estratégicos com a finalidade de arrecadar fundos iniciais para o projeto.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/venda-privada-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `V`,
            id: "V4",
            title: `Volatilidade`,
            subtitle: `Quanto um ativo mudou de preço e em quanto tempo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/volatilidade-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `V`,
            id: "V5",
            title: `Volume`,
            subtitle: `Em mercados, refere-se a quantidade do ativo que foi comprado e vendido no período definido, geralmente 24 horas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/volume-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- W ---- //
        {
            letter: `W`,
            id: "W0",
            title: `W`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#W`
        },
        {
            letter: `W`,
            id: "W1",
            title: `Wallet`,
            subtitle: `Carteira digital de criptomoedas. Utilizada para armazenar, enviar e receber criptomoedas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/wallet-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `W`,
            id: "W2",
            title: `Watchlist`,
            subtitle: `Uma lista definida de ativos para monitorar os preços.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/watchlist-glossary.html`,
            tag: `Business`,
        },
        {
            letter: `W`,
            id: "W3",
            title: `Wei`,
            subtitle: `Menor unidade de um Ether (ETH), moeda da rede Ethereum. Geralmente utilizado para representar o Gas Price.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/wei-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `W`,
            id: "W4",
            title: `Web3`,
            subtitle: `Movimento de transição da internet para um novo modelo descentralizado que utilizará de redes Blockchain para armazenar e transferir dados.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/web3-glossary.html`,
            tag: `Blockchain`,
            tag1: `Computadores`,
        },
        {
            letter: `W`,
            id: "W5",
            title: `Whitelist`,
            subtitle: `Lista de participantes que terão acesso a uma venda restrita de criptomoedas, por exemplo, ICO.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/whitelist-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        // ---- Y ---- //
        {
            letter: `Y`,
            id: "Y0",
            title: `Y`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#Y`
        },
        {
            letter: `Y`,
            id: "Y1",
            title: `Yield Farming`,
            subtitle: `Método de investimento que consiste em disponibilizar suas criptomoedas em protocolos DeFi para receber retorno com taxas de transferência.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/yield-farming-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        // ---- Z ---- //
        {
            letter: `Z`,
            id: "Z0",
            title: `Z`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#Z`

        },
        {
            letter: `Z`,
            id: "Z1",
            title: `Zero-Knowledge Proofs`,
            subtitle: `Mecanismo de consenso que verifica se as transações são validas sem revelar informações sobre essas transações, oferecendo privacidade enquanto mantém a legitimidade das transações.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/zero-knowledge-proofs-glossary.html`,
            tag: `Blockchain`,
        },
    ]
    const bitcoinGlossaryArray = [
        {
            letter: `B`,
            id: "B12",
            title: `Bitcoin`,
            subtitle: `Criptomoeda criada pelo desenvolvedor com pseudônimo de Satoshi Nakamoto. Foi a primeira criptomoeda criada.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `B`,
            id: "B13",
            title: `Bitcoin ATM`,
            subtitle: `Máquina onde se pode comprar e vender Bitcoin, geralmente oferece também outras criptomoedas além do Bitcoin.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-atm-glossary.html`,
            tag: `Blockchain`,
            tag: `Bitcoin`,
        },
        {
            letter: `B`,
            id: "B29",
            title: `Bitcoin Core`,
            subtitle: `É o sistema Open-Source mais utilizado para conectar-se a rede Bitcoin e rodar um Node.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-core-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `B`,
            id: "B14",
            title: `Bitcoin Pizza`,
            subtitle: `A primeira transação na qual foi adquirido um item real em troca de Bitcoin. Duas pizzas por 10.000 BTC.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-pizza-glossary.html`,
            tag: `Blockchain`,
            tag: `Bitcoin`,
        },
        {
            letter: `F`,
            id: "F7",
            title: `Fork`,
            subtitle: `É uma atualização em um projeto de blockchain onde o software é copiado e modificado a partir de certo ponto. O projeto original se mantém e a história do mesmo não é rejeitado, porém o novo software criado possui diferenças e mudanças que o original não teria. Forks são divididos em dois tipos: Soft Forks e Hard Forks.
                    `,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `H`,
            id: "H2",
            title: `Halving`,
            subtitle: `Quando a recompensa do bloco de uma criptomoeda é cortada pela metade com o objetivo de diminuir a taxa de emissão de novas moedas trazendo assim escassez, e eventualmente um supply finito.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/halving-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `H`,
            id: "H4",
            title: `Hard Fork`,
            subtitle: `Tipo de Fork na qual os nodes atualizados se tornam incompatíveis com versões anteriores. isso ocorre pois a nova versão possui regras que entram em conflito com a versão antiga.`,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/hard-fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
            tag2: `Ethereum`,
        },
        {
            letter: `P`,
            id: "P21",
            title: `Pool de Mineração`,
            subtitle: `São sistemas na qual diversos mineradores juntam seus Hash Power para poder minerar com maior potência.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/pool-de-mineracao-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `P`,
            id: "P14",
            title: `Proof of Work (PoW)`,
            subtitle: `Um algoritmo de consenso que valida blocos com base no poder computacional empregado na rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-work-pow-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`
        },
        {
            letter: `P`,
            id: "P18",
            title: `Propostas de Melhoria do Bitcoin (BIP)`,
            subtitle: `Conhecido como "Bitcoin Improvement Proposal". São documentos com propostas de melhorias, utilizado para adicionar funcionalidades e atualizações para a rede Bitcoin.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/propostas-de-melhoria-do-bitcoin-bip-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S1",
            title: `Satoshi`,
            subtitle: `A menor unidade de um Bitcoin (BTC). É equivalente a um centésimo milionésimo de um Bitcoin (1 BTC = 100 Milhões Satoshis).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/satoshi-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S2",
            title: `Satoshi Nakamoto`,
            subtitle: `Pseudônimo do criador ou criadores do Bitcoin.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/satoshi-nakamoto-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S5",
            title: `Segregated Witness (SegWit)`,
            subtitle: `Um Soft Fork que traz mudanças ao formato de transações do protocolo Bitcoin para possibilitar uma melhor escalabilidade além de introduzir novos recursos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/segregated-witness-segwit-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S7",
            title: `SHA-256`,
            subtitle: `Abreviação de “Secure Hashing Algoritm – 256”.  Forma de criptografar dados em hash, transformando-os em uma cadeia de 64 caracteres.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/sha-256-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S13",
            title: `Soft Fork`,
            subtitle: `Tipo de Fork na qual os nodes atualizados mantém contato com os nodes não atualizados. Soft Forks trazem mudanças que não entram em conflito com as regras do node original, assim possibilitando o uso da rede original.`,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/soft-fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
            tag2: `Ethereum`,
        },
    ]
    const blockchainGlossaryArray = [
        {
            letter: `A`,
            id: "A0",
            title: `A`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#A`
        },
        {
            letter: `A`,
            id: "A1",
            title: `Airdrop`,
            subtitle: `Distribuição de um ativo digital para o público. Seu objetivo pode ser por questões de marketing, eventos, ou qualquer outro que o distribuidor deseja. Diferente de ICOs em Airdrop não é necessário comprar o token, apenas recebê-lo.
                    `,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/airdrop-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,

        },
        {
            letter: `A`,
            id: "A6",
            title: `Altcoin`,
            subtitle: `Uma criptomoeda que é alternativa ao Bitcoin. É comum se referir a Altcoin, qualquer moeda que não seja o Bitcoin.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/altcoin-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `A`,
            id: "A7",
            title: `Altcoins Season`,
            subtitle: `Também conhecido como Altseason. É o período na qual Altcoins tendem a performar melhor que o Bitcoin. É comum ver algumas Altcoins aumentarem em 100x o seu valor de mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/altcoins-season-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `A`,
            id: "A11",
            title: `Aplicação Descentralizada (DApp)`,
            subtitle: `Aplicações que rodam em redes compartilhadas de computadores ao invés de um computador central. Isso permite ao programa ser rodado na internet sem ser controlado por uma única entidade.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/aplicacao-descentralizada-dapp-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `A`,
            id: "A19",
            title: `Atomic Swap`,
            subtitle: `Tecnologia que utiliza de Smart contracts para possibilitar a troca de uma criptomoeda por outra sem a necessidade de intermediários centralizados, como exchanges.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/atomic-swap-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- B ---- //
        {
            letter: `B`,
            id: "B0",
            title: `B`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#B`,
        },
        {
            letter: `B`,
            id: "B28",
            title: `Beacon Chain`,
            subtitle: `É uma rede Proof-of-Stake desenvolvida para a implementação da Ethereum 2.0. A rede opera separadamente da rede principal da Ethereum, mas futuramente os planos é que sejam unificadas.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/beacon-chain-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `B`,
            id: "B9",
            title: `Beta (Lançamento)`,
            subtitle: `Uma versão inicial de um programa para usuários testarem e passarem feedback aos desenvolvedores. A versão Beta vem após a versão Alpha.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/beta-lançamento-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `B`,
            id: "B12",
            title: `Bitcoin`,
            subtitle: `Criptomoeda criada pelo desenvolvedor com pseudônimo de Satoshi Nakamoto. Foi a primeira criptomoeda criada.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `B`,
            id: "B13",
            title: `Bitcoin ATM`,
            subtitle: `Máquina onde se pode comprar e vender Bitcoin, geralmente oferece também outras criptomoedas além do Bitcoin.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-atm-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `B`,
            id: "B29",
            title: `Bitcoin Core`,
            subtitle: `É o sistema Open-Source mais utilizado para conectar-se a rede Bitcoin e rodar um Node.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-core-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `B`,
            id: "B14",
            title: `Bitcoin Pizza`,
            subtitle: `A primeira transação na qual foi adquirido um item real em troca de Bitcoin. Duas pizzas por 10.000 BTC.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bitcoin-pizza-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `B`,
            id: "B15",
            title: `Bloco`,
            subtitle: `Um arquivo onde se armazena dados de transações. Blocos podem ser organizados em uma sequência linear para formar uma cadeia de blocos (Blockchain).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bloco-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B16",
            title: `Bloco Genesis`,
            subtitle: `Primeiro bloco a ser processado e validado em uma blockchain, conhecido também como “Bloco 0”.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bloco-genesis-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B17",
            title: `Blockchain`,
            subtitle: `Uma planilha digital descentralizada que guarda informações sobre uma criptomoeda em uma ordem cronológica. Todas as transações são registradas na blockchain e após sua validação são imutáveis.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/blockchain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B18",
            title: `Block Explorer`,
            subtitle: `Uma página ligada a uma blockchain que disponibiliza aos usuários navegarem pelas informações dos blocos, transações, balanços e histórico de transações.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/block-explorer-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B19",
            title: `Block Header`,
            subtitle: `Seção de um bloco que apresenta os metadados e um sumário das transações do bloco. É a informação que é criptografada quando se minera.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/block-header-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B20",
            title: `Block Height`,
            subtitle: `Refere-se à altura do bloco. Número de blocos em uma Blockchain entre o bloco atual e o primeiro bloco (Bloco Genesis ou Bloco 0)`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/block-height-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `B`,
            id: "B21",
            title: `Block Reward`,
            subtitle: `Refere-se à recompensa do bloco. A recompensa disponibilizada pelo protocolo da Blockchain para os mineradores da rede para cada bloco que for minerado e validado com sucesso.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/block-reward-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- C ---- //
        {
            letter: `C`,
            id: "C0",
            title: `C`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#C`
        },
        {
            letter: `C`,
            id: "C3",
            title: `Centralizado`,
            subtitle: `Uma organização na qual o poder está na mão de poucas pessoas, tendo elas o controle de toda a rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/centralizado-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `C`,
            id: "C17",
            title: `Centralized Exchange CEX`,
            subtitle: `Conhecida como Exchange Centralizada, as CEX são empresas que atuam como intermediárias para facilitar a transação de criptomoedas ou outros ativos entre usuários.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/centralized-exchange-cex-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `C`,
            id: "C5",
            title: `Chave Privada`,
            subtitle: `Em criptomoedas, refere-se a uma cadeia de caracteres que possibilitam as transações de um endereço.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/chave-privada-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C7",
            title: `Cloud Mining`,
            subtitle: `Método de mineração na qual o usuário aluga poder computacional de empresas que hospedam os equipamentos físicos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/cloud-mining-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C8",
            title: `Cold Wallet`,
            subtitle: `Uma carteira off-line que requer acesso através de aparelhos físicos (Ex: Hardware Wallet).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/cold-wallet-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C10",
            title: `Consenso`,
            subtitle: `Quando em um sistema de Blockchain, todos os participantes concordam com o conteúdo do próximo bloco a ser adicionado na Blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/consenso-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C13",
            title: `Criptografia`,
            subtitle: `Ciência que utiliza de teorias matemáticas e computacionais para tornar uma informação privada, a fim de só serem decifradas por quem saber decifrá-las.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/criptografia-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C14",
            title: `Criptomoedas`,
            subtitle: `Moeda digital que utiliza de criptografia para sua segurança e serve como objeto de troca de pessoa para pessoa (peer-to-peer, ou, P2P) sem necessidade de uma intermediação de terceiros. Utiliza de protocolos Blockchain para garantir a posse de quem às têm.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/criptomoedas-glossary.html`,
            tag: `Blockchain`,
            tag1: `Economia`,
        },
        {
            letter: `C`,
            id: "C18",
            title: `Cross-Chain`,
            subtitle: `É uma tecnologia dentro das Blockchains na qual permite que diferentes Blockchains se conectem, possibilitando a troca de informações entre elas.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/cross-chain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `C`,
            id: "C19",
            title: `Cross-Chain Bridge`,
            subtitle: `São sistemas que servem como uma ponte entre diferentes blockchains, possibilitando a transação de dados, tokens, e NFTs de um para outra.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/cross-chain-bridge-glossary.html`,
            tag: `Blockchain`,
        },

        // --- D --- //

        {
            letter: `D`,
            id: "D2",
            title: `Decentralized Autonomous Organization (DAO)`,
            subtitle: `Sistemas descentralizados que não necessitam de um controlador centralizado. Atuam com código em open source e é operado pela comunidade.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/decentralized-autonomous-organization-dao-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `D`,
            id: "D3",
            title: `Decentralized Exchange (DEX)`,
            subtitle: `Uma Exchange que não necessita depositar fundos para trocar ativos e que não os mantém em custódia. Com as DEX usuários trocam seus ativos diretamente de suas carteiras.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/decentralized-exchange-dex-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `D`,
            id: "D6",
            title: `Delegated Proof of Stake (dPOS)`,
            subtitle: `Mecanismo de consenso onde usuários selecionados de uma rede são designados para validar as transações e produzir blocos em uma blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/delegated-proof-of-stake-dpos-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `D`,
            id: "D8",
            title: `Descentralizado`,
            subtitle: `Sistema  onde não possui uma figura central com autoridade, seja ela uma organização ou indivíduo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/descentralizado-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `D`,
            id: "D9",
            title: `Dificuldade`,
            subtitle: `Em criptomoedas, Dificuldade é uma métrica utilizada para analisar a dificuldade de se minerar um novo bloco em uma blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dificuldade-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `D`,
            id: "D15",
            title: `Dominância do Bitcoin`,
            subtitle: `A razão entre o Valor de Mercado do Bitcoin contra a soma do valor de mercado de todas as criptomoedas. Quando a dominância do Bitcoin está baixa pode-se dizer que estamos em período de Altseason.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dominancia-do-bitcoin-glossary.html`,
            tag: `Blockchain`,
            tag1: `Economia`,
        },
        // ---- E ---- //
        {
            letter: `E`,
            id: "E0",
            title: `E`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#E`
        },
        {
            letter: `E`,
            id: "E1",
            title: `Emissão`,
            subtitle: `Taxa em que novas moedas são geradas conforme determinado pelo protocolo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/emissao-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `E`,
            id: "E2",
            title: `Endereço`,
            subtitle: `Cadeia de texto que define o local de uma carteira em particular dentro da blockchain. Quando se envia moedas, utiliza do endereço para definir para qual carteira se está enviando.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/endereco-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `E`,
            id: "E3",
            title: `Endereços ativos diários (DAA)`,
            subtitle: `Numa blockchain, usuários interagem usando seus endereços. DAA, é uma métrica que se refere à quantidade de endereços que realizaram uma atividade determinada em certa blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/enderecos-ativos-diarios-daa-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `E`,
            id: "E4",
            title: `Enterprise Ethereum Alliance (EEA)`,
            subtitle: `Organização de usuários da rede Ethereum que colaboram entre si para criar padrões e encontrar formas de utilizar Ethereum em empresas. Possui participação tanto de empresas, startups e desenvolvedores e tem o objetivo de acelerar a adoção global de soluções que utilizam da Blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/enterprise-ethereum-alliance-eea-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
            tag2: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E5",
            title: `ERC-20`,
            subtitle: `Protocolo padrão para tokens fungíveis e trocáveis da rede Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/erc-20-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E6",
            title: `ERC-721`,
            subtitle: `Protocolo padrão para token não-fungíveis (NFT) e trocáveis da rede Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/erc-721-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
            tag2: `NFT`,
        },
        {
            letter: `E`,
            id: "E7",
            title: `Escalabilidade`,
            subtitle: `Em criptomoedas e blockchain, escalabilidade se refere à habilidade de suportar um grande número de usuários, e o como ela pode ser aprimorada para aceitar mais usuários.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/escalabilidade-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `E`,
            id: "E16",
            title: `Ether`,
            subtitle: `Conhecido pelo símbolo ETH, é a moeda nativa da rede Ethereum, utilizada para realizar transações na rede, pagar taxas, e executar Smart Contracts.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/ether-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E9",
            title: `Ethereum`,
            subtitle: `Ethereum é uma plataforma open-source que permite desenvolvedores criarem aplicações descentralizadas utilizando Smart Contracts e redes Blockchain.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E17",
            title: `Ethereum 2.0`,
            subtitle: `Uma atualização da rede Ethereum que busca trazer escalabilidade, eficiência e mudanças para uma melhor utilização da rede.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum20-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E10",
            title: `Ethereum Difficulty Bomb`,
            subtitle: `Mecanismo na qual aumenta a dificuldade de mineração da Ethereum tornando-a não rentável para mineradores. É uma etapa do processo de migração da Ethereum para Proof of Stake.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-difficulty-bomb-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E11",
            title: `Ethereum Plasma`,
            subtitle: `Uma solução Off-chain da Ethereum que busca trazer escalabilidade ao aumentar o número de transações por segundo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-plasma-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E18",
            title: `Ethereum Shard`,
            subtitle: `Ethereum Shard é uma etapa da atualização da Ethereum 2.0 que busca separar a rede em fragmentos para aumentar a escalabilidade da Ethereum.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-shard-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E12",
            title: `Ethereum Virtual Machine (EVM)`,
            subtitle: `Ecossistema da Ethereum na qual os Smart Contracts são executados.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-virtual-machine-evm-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        // ---- F ---- //
        {
            letter: `F`,
            id: "F0",
            title: `F`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#F`
        },
        {
            letter: `F`,
            id: "F1",
            title: `Faucet`,
            subtitle: `Sites na qual você recebe pequenas quantidades de criptomoedas apenas por navegar por eles.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/faucet-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `F`,
            id: "F7",
            title: `Fork`,
            subtitle: `É uma atualização em um projeto de blockchain onde o software é copiado e modificado a partir de certo ponto. O projeto original se mantém e a história do mesmo não é rejeitado, porém o novo software criado possui diferenças e mudanças que o original não teria. Forks são divididos em dois tipos: Soft Forks e Hard Forks.
                    `,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        // ---- G ---- //
        {
            letter: `G`,
            id: "G0",
            title: `G`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#G`
        },
        {
            letter: `G`,
            id: "G2",
            title: `Gas`,
            subtitle: `Mecanismo que precifica as taxas de transferência e calcula o custo de realizar operações utilizando os Smart Contracts da Blockchain da Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gas-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `G`,
            id: "G3",
            title: `Gas Limit`,
            subtitle: `Quantidade máxima de Gas que um usuário aceita pagar como taxa para realizar transferências ou operações em um Smart Contract.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gas-limit-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `G`,
            id: "G4",
            title: `Gas Price`,
            subtitle: `Preço que um usuário deseja pagar como taxa para realizar transferências ou operações em um Smart Contract.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gas-price-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `G`,
            id: "G5",
            title: `Gasto Duplo`,
            subtitle: `Quando uma quantidade de moedas é gasta mais de uma vez. Geralmente ocasionado por um ataque.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gasto-duplo-glossary.html`,
            tag: `Blockchain`,
            tag1: `Hacking`,
        },
        {
            letter: `G`,
            id: "G10",
            title: `Gwei`,
            subtitle: `Gwei é uma fração de Ether(ETH), moeda da rede Ethereum. Utiliza-se de Gwei como forma de medir o preço do Gas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gwei-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        // ---- H ---- //
        {
            letter: `H`,
            id: "H0",
            title: `H`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#H`
        },
        {
            letter: `H`,
            id: "H2",
            title: `Halving`,
            subtitle: `Quando a recompensa do bloco de uma criptomoeda é cortada pela metade com o objetivo de diminuir a taxa de emissão de novas moedas trazendo assim escassez, e eventualmente um supply finito.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/halving-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `H`,
            id: "H4",
            title: `Hard Fork`,
            subtitle: `Tipo de Fork na qual os nodes atualizados se tornam incompatíveis com versões anteriores. isso ocorre pois a nova versão possui regras que entram em conflito com a versão antiga.`,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/hard-fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
            tag2: `Ethereum`,
        },
        {
            letter: `H`,
            id: "H5",
            title: `Hash`,
            subtitle: `É o retorno com informações sobre um dado específico após executar uma hash function (código de programação).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hash-glossary.html`,
            tag: `Computadores`,
            tag1: `Blockchain`,
        },
        {
            letter: `H`,
            id: "H11",
            title: `Hash Power`,
            subtitle: `É poder de um computador ou rede de realizar operações de criptografia para transformar dados em Hashes.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/hash-power-glossary.html`,
            tag: `Computadores`,
            tag1: `Blockchain`,
        },
        {
            letter: `H`,
            id: "H10",
            title: `Hot Wallet`,
            subtitle: `É uma carteira de criptomoedas na qual está sempre conectada à internet.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hot-wallet-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- I ---- //
        {
            letter: `I`,
            id: "I0",
            title: `I`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#I`
        },
        {
            letter: `I`,
            id: "I5",
            title: `Interoperabilidade`,
            subtitle: `Conceito que permite diferentes blockchains serem compatíveis entre si, oferecendo a possibilidade de compartilharem suas ferramentas e usabilidade.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/interoperabilidade-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `I`,
            id: "I6",
            title: `InterPlanetary File System (IPFS)`,
            subtitle: `Um projeto open source de um protocolo de armazenamento de dados distribuídos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/interplanetary-file-system-ipfs-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- J ---- //
        {
            letter: `J`,
            id: "J0",
            title: `J`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#J`
        },
        {
            letter: `J`,
            id: "J1",
            title: `Jager (BNB)`,
            subtitle: `Menor unidade da criptomoeda BNB. Similar ao Satoshi, a menor unidade de um Bitcoin.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/jager-bnb-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- L ---- //
        {
            letter: `L`,
            id: "L0",
            title: `L`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#L`
        },
        {
            letter: `L`,
            id: "L2",
            title: `Lightning Network`,
            subtitle: `Protocolo de segunda camada que opera em cima de uma blockchain existente. Possibilita transações financeiras mais ágeis, trazendo escalabilidade ao projeto.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/lightning-network-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `L`,
            id: "L5",
            title: `Liquid Proof of Stake (LPoS)`,
            subtitle: `Consenso de Proof of Stake da Tezos (XTZ), muito similar ao Delegated Proof of Stake (DPoS).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/liquid-proof-of-stake-lpos-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- M ---- //
        {
            letter: `M`,
            id: "M0",
            title: `M`,
            subtitle: `.`,
            date: `02/05/2022`,
            url: `#M`
        },
        {
            letter: `M`,
            id: "M1",
            title: `Mainnet`,
            subtitle: `Rede principal de uma blockchain onde as transações são registradas e verificadas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/mainnet-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `M`,
            id: "M10",
            title: `Memory Pool (Mempool)`,
            subtitle: `Mecanismo que mantém o controle das transações que foram solicitadas, mas que ainda não foram confirmadas em uma blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/memory-pool-mempool-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `M`,
            id: "M12",
            title: `Merkle Tree`,
            subtitle: `Uma estrutura de dados com o objetivo de organizar grandes quantidades. Utilizado em Blockchains para que a informação (hash) do bloco anterior seja passada para o bloco seguinte.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/merkle-tree-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `M`,
            id: "M14",
            title: `Metaverso`,
            subtitle: `É um espaço virtual na qual usuário interagem entre si em um ambiente computadorizado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/metaverso-glossary.html`,
            tag: `Blockchain`,
            tag1: `NFT`,
        },
        {
            letter: `M`,
            id: "M15",
            title: `Mineração`,
            subtitle: `Processo onde os mineradores verificam e adicionam novas transações em um bloco de uma rede blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/mineracao-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `M`,
            id: "M16",
            title: `Mineradores`,
            subtitle: `Usuários de uma blockchain que fazem o processo de mineração.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/mineradores-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `M`,
            id: "M19",
            title: `Multi-assinatura`,
            subtitle: `Carteiras que precisam de autorização de outra parte para que suas transações sejam criadas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/multi-assinatura-glossary.html`,
            tag: `Blockchain`,
        },
        //  ---- N ---- //
        {
            letter: `N`,
            id: "N0",
            title: `N`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#N`
        },
        {
            letter: `N`,
            id: "N1",
            title: `NFT (Tokens não fungíveis)`,
            subtitle: `Tipo de token que representa um item digital único. Que diferente de criptomoedas não podem ser unificados.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/nft-tokens-nao-fungiveis-glossary.html`,
            tag: `Blockchain`,
            tag1: `NFT`,
        },
        {
            letter: `N`,
            id: "N2",
            title: `Node`,
            subtitle: `Um participante (computador) numa rede blockchain que se comunica com os outros participantes para garantir a segurança do sistema.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/node-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `N`,
            id: "N3",
            title: `Nonce`,
            subtitle: `Número único de cada transação gerado para verificação e impedir que transações passadas se repitam.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/nonce-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- O ---- //
        {
            letter: `O`,
            id: "O0",
            title: `O`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#O`
        },
        {
            letter: `O`,
            id: "O2",
            title: `Off-chain`,
            subtitle: `Transações que ocorrem fora de uma rede blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/off-chain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `O`,
            id: "O4",
            title: `Open Source Software`,
            subtitle: `Sistemas lançados com a possibilidade de serem utilizados, atualizados e distribuídos por qualquer um livremente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/open-source-software-glossary.html`,
            tag: `Blockchain`,
            tag1: `Computadores`,
        },
        {
            letter: `O`,
            id: "O5",
            title: `Oracle`,
            subtitle: `Sistema que verifica valores reais e disponibiliza dados para uma blockchain ou smart contract. Oracles são muito vistos em criptomoedas na qual sua distribuição é lastreada a alguma moeda, exemplo, dólar.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/oracle-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        // ---- P ---- // 
        {
            letter: `P`,
            id: "P0",
            title: `P`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#P`
        },
        {
            letter: `P`,
            id: "P1",
            title: `Paper Wallet`,
            subtitle: `Papel onde o endereço e chave privada de uma carteira estão impressos fisicamente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/paper-wallet-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P19",
            title: `Parachain`,
            subtitle: `Parachains são Blockchains que rodam em paralelo a Blockchain principal da Rede Polkadot, a chamada Relay Chain.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/parachain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P5",
            title: `Polkadot Crowdloan`,
            subtitle: `Processo de realizar Stake de Polkadot (DOT) Tokens para apoiar projetos específicos na plataforma da Polkadot Slot Auction, os participantes então recebem como retorno, recompensas do projeto que apoiaram.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/polkadot-crowdloan-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P20",
            title: `Pool de Liquidez`,
            subtitle: `São Smart Contracts em plataformas DeFi que permitem aos usuários bloquearem seus tokens para receber recompensas com taxas de transação.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/pool-de-liquidez-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `P`,
            id: "P21",
            title: `Pool de Mineração`,
            subtitle: `São sistemas na qual diversos mineradores juntam seus Hash Power para poder minerar com maior potência.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/pool-de-mineracao-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `P`,
            id: "P10",
            title: `Proof of Attendance Protocol (PoAP)`,
            subtitle: `Protocolo que cria itens colecionáveis para constar e validar a presença em um evento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-attendance-protocol-poap-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P11",
            title: `Proof of Authority (PoA)`,
            subtitle: `Um algoritmo de consenso que valida blocos baseado em uma reputação e identidade.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-authority-poa-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P12",
            title: `Proof of Burn (PoB)`,
            subtitle: `Um algoritmo de consenso que valida blocos baseado nos tokens queimados pelo validador.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-burn-pob-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P22",
            title: `Proof of History (PoH)`,
            subtitle: `É um sistema da rede Solana desenvolvido para facilitar e agilizar o tempo de confirmação de um bloco, trazendo velocidade e escalabilidade para a rede.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-history-PoH-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P13",
            title: `Proof of Stake (PoS)`,
            subtitle: `Um algoritmo de consenso que valida blocos baseado na quantidade de tokens que estão em Stake pelo validador. As recompensas também variam dependendo da quantidade em Stake.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-stake-pos-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `P`,
            id: "P14",
            title: `Proof of Work (PoW)`,
            subtitle: `Um algoritmo de consenso que valida blocos com base no poder computacional empregado na rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-work-pow-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `P`,
            id: "P18",
            title: `Propostas de Melhoria do Bitcoin (BIP)`,
            subtitle: `Conhecido como "Bitcoin Improvement Proposal". São documentos com propostas de melhorias, utilizado para adicionar funcionalidades e atualizações para a rede Bitcoin.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/propostas-de-melhoria-do-bitcoin-bip-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `P`,
            id: "P15",
            title: `Propostas de Melhoria do Ethereum (EIP)`,
            subtitle: `Conhecido como "Ethereum Improvement Proposal". São documentos com propostas de melhorias, utilizado para adicionar funcionalidades e atualizações para a rede da Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/propostas-de-melhoria-do-ethereum-eip-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `P`,
            id: "P16",
            title: `Protocolo`,
            subtitle: `Conjunto de regras definidas na criação de uma rede na qual permite que participantes a utilize de forma apropriada.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/protocolo-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- Q ---- //
        {
            letter: `Q`,
            id: "Q0",
            title: `Q`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#Q`
        },
        {
            letter: `Q`,
            id: "Q2",
            title: `Queima de tokens`,
            subtitle: `Quando tokens são enviados para carteiras na qual as chaves privadas são desconhecidas, assim tornando-se inutilizáveis.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/queima-de-tokens-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- R ---- //
        {
            letter: `R`,
            id: "R0",
            title: `R`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#R`
        },
        {
            letter: `R`,
            id: "R12",
            title: `Relay Chain`,
            subtitle: `É a Blockchain principal da Rede Polkadot, serve como o coração do ecossistema da Polkadot e armazena todas as informações da rede.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/relay-chain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `R`,
            id: "R13",
            title: `Rig de Mineração`,
            subtitle: `São sistemas montados em um gabinete que possui diversas máquinas especializadas para realizar o processo de mineração de criptomoedas.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/rig-de-mineracao-glossary.html`,
            tag: `Computadores`,
            tag1: `Bitcoin`,
        },
        {
            letter: `R`,
            id: "R7",
            title: `Roadmap`,
            subtitle: `Método de planejamento de um projeto, na qual define etapas e objetivos a serem cumpridas no curto e longo prazo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/roadmap-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `R`,
            id: "R8",
            title: `Rollup`,
            subtitle: `Em Rollups, blockchains secundárias são criadas para processar um grupo de transações que depois são enviada para a Blockchain principal em um bloco chamado Rollup Block.`,
            date: `27/05/2022`,
            url: `D:/PIC/src/academy/glossary/rollup-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `R`,
            id: "R9",
            title: `Rollup Block`,
            subtitle: `Bloco enviado a blockchain principal que contém diversas transações agrupadas. Ocorre ao utilizar o mecanismo de Rollups da Ethereum. `,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/rollup-block-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `R`,
            id: "R11",
            title: `Rug Pull`,
            subtitle: `Em critpo, Rug Pull, (Também conhecido como “puxar o tapete”) é quando uma empresa ou time de desenvolvimento de repente abandona o projeto, vende todos os tokens ou remove a liquidez.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/rug-pull-glossary.html`,
            tag: `Economia`,
            tag1: `Blockchain`,
        },
        // ---- S ---- //
        {
            letter: `S`,
            id: "S0",
            title: `S`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#S`
        },
        {
            letter: `S`,
            id: "S1",
            title: `Satoshi`,
            subtitle: `A menor unidade de um Bitcoin (BTC). É equivalente a um centésimo milionésimo de um Bitcoin (1 BTC = 100 Milhões Satoshis).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/satoshi-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S2",
            title: `Satoshi Nakamoto`,
            subtitle: `Pseudônimo do criador ou criadores do Bitcoin.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/satoshi-nakamoto-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S4",
            title: `Seed Phrase`,
            subtitle: `Conjunto de palavra que são utilizadas para acessar sua carteira de criptomoedas. Geralmente são 12 ou 16 palavras em Inglês.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/seed-phrase-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S5",
            title: `Segregated Witness (SegWit)`,
            subtitle: `Um Soft Fork que traz mudanças ao formato de transações do protocolo Bitcoin para possibilitar uma melhor escalabilidade além de introduzir novos recursos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/segregated-witness-segwit-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S7",
            title: `SHA-256`,
            subtitle: `Abreviação de “Secure Hashing Algoritm – 256”.  Forma de criptografar dados em hash, transformando-os em uma cadeia de 64 caracteres.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/sha-256-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
        },
        {
            letter: `S`,
            id: "S9",
            title: `Shitcoin`,
            subtitle: `Uma moeda sem valor ou usabilidade potencial.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/shitcoin-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S10",
            title: `Side Chain`,
            subtitle: `Uma rede separada da Blockchain que roda paralelamente à Blockchain primária.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/side-chain-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S11",
            title: `Smart Contracts`,
            subtitle: `Contratos inteligentes que se executam automaticamente quando alguma condição acontece, sem a necessidade de atividade humana. Como por exemplo, caso X ocorra, envie moedas de A para B. as moedas somente serão enviadas caso a condição X se concretize.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/smart-contracts-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S13",
            title: `Soft Fork`,
            subtitle: `Tipo de Fork na qual os nodes atualizados mantém contato com os nodes não atualizados. Soft Forks trazem mudanças que não entram em conflito com as regras do node original, assim possibilitando o uso da rede original.`,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/soft-fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
            tag2: `Ethereum`,
        },
        {
            letter: `S`,
            id: "S14",
            title: `Solidity`,
            subtitle: `Linguagem de programação orientada a objetos utilizada em várias Blockchains.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/solidity-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `S`,
            id: "S15",
            title: `Soluções de Segunda Camada`,
            subtitle: `Protocolo secundário que é construído sob uma blockchain existente trazendo assim maior escalabilidade ao projeto primário, com transações mais rápidas e baratas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/solucoes-de-segunda-camada-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S16",
            title: `Stablecoins`,
            subtitle: `Moedas lastreadas a alguma moeda Fiat ou commodity. Por exemplo, 1  USDC  = 1 Dólar Americano.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/stablecoins-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `S`,
            id: "S17",
            title: `Staking`,
            subtitle: `É o ato de bloquear uma quantidade de tokens a fim de participar como validador de redes que utilizam de protocolos Proof-of-Stake. Ao realizar Stake, geralmente se recebe um valor percentual do bloqueado como recompensa.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/staking-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `S`,
            id: "S22",
            title: `Swap`,
            subtitle: `Mecanismo presente em Exchanges Descentralizadas (DEX) e protocolos DeFi que permite ao usuário trocar criptomoedas por outras.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/swap-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        // ---- T ---- //
        {
            letter: `T`,
            id: "T0",
            title: `T`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#T`
        },
        {
            letter: `T`,
            id: "T1",
            title: `Taxa de transação`,
            subtitle: `Valor a ser pago para a rede para realizar, validar, e registrar a transação na blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/taxa-de-transacao-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T3",
            title: `Testnet`,
            subtitle: `Área para testes de atualizações em redes blockchain, conhecido também como “Test Network”.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/testnet-glossary.html`,
            tag: `Blockchain`,
            tag1: `Computadores`,
        },
        {
            letter: `T`,
            id: "T4",
            title: `Ticker`,
            subtitle: `É o símbolo de um ativo, geralmente relacionado ao nome de forma abreviada. É utilizado para identificar um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ticker-glossary.html`,
            tag: `Economia`,
            tag1: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T5",
            title: `Tokens`,
            subtitle: `Unidades de valor criados em redes blockchain. São gerenciados por uma organização ou empresa que garante a quem possui os tokens a participação na rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/tokens-glossary.html`,
            tag: `Economia`,
            tag1: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T6",
            title: `Token de Utilidade`,
            subtitle: `Criptomoedas que tem uma usabilidade em uma rede, e não somente para servir como meio de troca ou de investimento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/token-de-utilidade-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T9",
            title: `Transações Por Segundo (TPS)`,
            subtitle: `Número de transações que uma blockchain é capaz de processar por segundo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/transacoes-por-segundo-tps-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T10",
            title: `Transaction ID (TXID)`,
            subtitle: `Conhecido como ID da transação, é uma sequência única de caracteres que define cada transação em uma blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/transaction-id-txid-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T11",
            title: `Trustless`,
            subtitle: `Redes que podem ser totalmente verificadas por qualquer um, eliminando a necessidade de confiar que certa ação foi realmente executada.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/trustless-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- U ---- //
        {
            letter: `U`,
            id: "U0",
            title: `U`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#U`
        },
        {
            letter: `U`,
            id: "U1",
            title: `Unspent Transaction Output (UTXO)`,
            subtitle: `Uma resposta de uma transação na qual é referenciada em transações futuras para que possam ser executadas. Mostra o valor restante que se tem em uma carteira após realizar uma transação.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/unspent-transaction-output-utxo-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- V ---- //
        {
            letter: `V`,
            id: "V0",
            title: `V`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#V`
        },
        {
            letter: `V`,
            id: "V1",
            title: `Validador`,
            subtitle: `Um participante de uma rede Blockchain de Proof of Stake que valida e assina que uma transação realmente ocorreu. Geralmente é necessário ter uma grande quantidade da criptomoeda em Stake na rede para se tornar um validador.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/validador-glossary.html`,
            tag: `Blockchain`,
        },
        // ---- W ---- //
        {
            letter: `W`,
            id: "W0",
            title: `W`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#W`
        },
        {
            letter: `W`,
            id: "W1",
            title: `Wallet`,
            subtitle: `Carteira digital de criptomoedas. Utilizada para armazenar, enviar e receber criptomoedas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/wallet-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `W`,
            id: "W3",
            title: `Wei`,
            subtitle: `Menor unidade de um Ether (ETH), moeda da rede Ethereum. Geralmente utilizado para representar o Gas Price.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/wei-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `W`,
            id: "W4",
            title: `Web3`,
            subtitle: `Movimento de transição da internet para um novo modelo descentralizado que utilizará de redes Blockchain para armazenar e transferir dados.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/web3-glossary.html`,
            tag: `Blockchain`,
            tag1: `Computadores`,
        },
        {
            letter: `W`,
            id: "W5",
            title: `Whitelist`,
            subtitle: `Lista de participantes que terão acesso a uma venda restrita de criptomoedas, por exemplo, ICO.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/whitelist-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        // ---- Y ---- //
        {
            letter: `Y`,
            id: "Y0",
            title: `Y`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#Y`
        },
        {
            letter: `Y`,
            id: "Y1",
            title: `Yield Farming`,
            subtitle: `Método de investimento que consiste em disponibilizar suas criptomoedas em protocolos DeFi para receber retorno com taxas de transferência.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/yield-farming-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        // ---- Z ---- //
        {
            letter: `Z`,
            id: "Z0",
            title: `Z`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#Z`

        },
        {
            letter: `Z`,
            id: "Z1",
            title: `Zero-Knowledge Proofs`,
            subtitle: `Mecanismo de consenso que verifica se as transações são validas sem revelar informações sobre essas transações, oferecendo privacidade enquanto mantém a legitimidade das transações.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/zero-knowledge-proofs-glossary.html`,
            tag: `Blockchain`,
        },
    ]
    const businessGlossaryArray = [
        //---- A ----//
        {
            letter: `A`,
            id: "A0",
            title: `A`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#A`
        },
        {
            letter: `A`,
            id: "A1",
            title: `Airdrop`,
            subtitle: `Distribuição de um ativo digital para o público. Seu objetivo pode ser por questões de marketing, eventos, ou qualquer outro que o distribuidor deseja. Diferente de ICOs em Airdrop não é necessário comprar o token, apenas recebê-lo.
                    `,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/airdrop-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `A`,
            id: "A4",
            title: `Alpha`,
            subtitle: `É o primeiro produto de um projeto, consiste na versão inicial, básica e primitiva de um software ou produto.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/alpha-glossary.html`,
            tag: `Computadores`,
            tag1: `Business`
        },
        {
            letter: `A`,
            id: "A8",
            title: `AMA (Ask Me Anything)`,
            subtitle: `Sessão organizada por empresas para que seus usuários tirem suas dúvidas sobre o projeto.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ama-ask-me-anything-glossary.html`,
            tag: `Business`,
        },
        {
            letter: `A`,
            id: "A10",
            title: `Anti-Money Laundering (AML)`,
            subtitle: `Conjunto de leis e processos regulatórios com a fim de minimizar a movimentação de dinheiro gerado através de vias ilegais ou de atividades supeitas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/anti-money-laundering-aml-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `A`,
            id: "A20",
            title: `Auction`,
            subtitle: `Evento ao vivo onde ativos ou serviços são negociados através de processos de lances, equivalente a um leilão.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/auction-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        //---- B ----//
        {
            letter: `B`,
            id: "B0",
            title: `B`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#B`,
        },
        {
            letter: `B`,
            id: "B3",
            title: `Banco Central`,
            subtitle: `Uma instituição financeira, que possui autoridade monetária, tendo o controle e administração sobre a moeda de um país, taxas de juros e estoque de dinheiro.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/banco-central-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `B`,
            id: "B7",
            title: `Benchmark`,
            subtitle: `método de mesurar o desempenho de um ativo ou carteira de investimentos de forma a se comparar a um padrão.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/benchmark-glossary.html`,
            tag: `Business`,
        },
        {
            letter: `B`,
            id: "B9",
            title: `Beta (Lançamento)`,
            subtitle: `Uma versão inicial de um programa para usuários testarem e passarem feedback aos desenvolvedores. A versão Beta vem após a versão Alpha.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/beta-lançamento-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `B`,
            id: "B24",
            title: `Bounty`,
            subtitle: `Recompensa oferecida por um grupo ou indivíduo para incentivar algum trabalho ou ação. Muito visto em programas de referrals onde a empresa tem o objetivo de atrair usuários.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bounty-glossary.html`,
            tag: `Business`,
        },
        // ---- C ---- //
        {
            letter: `C`,
            id: "C0",
            title: `C`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#C`
        },
        {
            letter: `C`,
            id: "C2",
            title: `Capital de Risco`,
            subtitle: `Modalidade de investimento onde se aplica recursos financeiros em pequenas empresas ou startups com grande potencial de crescimento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/capital-de-risco-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `C`,
            id: "C3",
            title: `Centralizado`,
            subtitle: `Uma organização na qual o poder está na mão de poucas pessoas, tendo elas o controle de toda a rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/centralizado-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `C`,
            id: "C17",
            title: `Centralized Exchange CEX`,
            subtitle: `Conhecida como Exchange Centralizada, as CEX são empresas que atuam como intermediárias para facilitar a transação de criptomoedas ou outros ativos entre usuários.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/centralized-exchange-cex-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `C`,
            id: "C15",
            title: `Crowdsale`,
            subtitle: `Tipo de venda pública na qual ocorre em formato de leilão, com o preço do token fixo e por ordem de chegada.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/crowdsale-glossary.html`,
            tag: `Business`,
        },
        // ---- E ---- //
        {
            letter: `E`,
            id: "E0",
            title: `E`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#E`
        },
        {
            letter: `E`,
            id: "E4",
            title: `Enterprise Ethereum Alliance (EEA)`,
            subtitle: `Organização de usuários da rede Ethereum que colaboram entre si para criar padrões e encontrar formas de utilizar Ethereum em empresas. Possui participação tanto de empresas, startups e desenvolvedores e tem o objetivo de acelerar a adoção global de soluções que utilizam da Blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/enterprise-ethereum-alliance-eea-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
            tag2: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E7",
            title: `Escalabilidade`,
            subtitle: `Em criptomoedas e blockchain, escalabilidade se refere à habilidade de suportar um grande número de usuários, e o como ela pode ser aprimorada para aceitar mais usuários.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/escalabilidade-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        {
            letter: `E`,
            id: "E14",
            title: `Explique-me como se eu tivesse 5 anos (ELI5)`,
            subtitle: `Explicar algum conteúdo de forma tão simples que uma criança de 5 anos conseguiria entender.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/explique-me-como-se-eu-tivesse-5-anos-eli5-glossary.html`,
            tag: `Business`,
            tag1: `Termos`,
        },
        // ---- I ---- //
        {
            letter: `I`,
            id: "I0",
            title: `I`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#I`
        },
        {
            letter: `I`,
            id: "I2",
            title: `Initial Coin Offering (ICO)`,
            subtitle: `Método de arrecadação similar ao IPO. Onde uma criptomoeda é lançada para venda pública pela primeira vez.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/initial-coin-offering-ico-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `I`,
            id: "I3",
            title: `Initial Exchange Offering (IEO)`,
            subtitle: `Método de arrecadação na qual as vendas públicas são conduzidas por uma Exchange.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/initial-exchange-offering-ieo-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `I`,
            id: "I4",
            title: `Initial Public Offering (IPO)`,
            subtitle: `Método de arrecadação onde empresas abrem seu capital e ofertam suas ações ao público para arrecadar capital de seus investidores.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/initial-public-offering-ipo-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `I`,
            id: "I8",
            title: `Investidor Anjo`,
            subtitle: `Investidores que buscam oportunidades provendo fundos para empresários ou start-ups.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/investidor-anjo-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        // ---- K ---- //
        {
            letter: `K`,
            id: "K0",
            title: `K`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#K`
        },
        {
            letter: `K`,
            id: "K1",
            title: `Know Your Costumer (KYC)`,
            subtitle: `Conhecido também pelo termo “Conheça seu cliente”. É um procedimento padrão de empresas financeiras para validarem e reconhecerem seus clientes como forma de segurança.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/know-your-costumer-kyc-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
            tag2: `Termos`,
        },
        // ---- L ---- //
        {
            letter: `L`,
            id: "L0",
            title: `L`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#L`
        },
        {
            letter: `L`,
            id: "L6",
            title: `Livro-razão`,
            subtitle: `Relatório com transações financeiras a fim de monitorar as movimentações realizadas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/livro-razao-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        // ---- P ---- // 
        {
            letter: `P`,
            id: "P0",
            title: `P`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#P`
        },
        {
            letter: `P`,
            id: "P2",
            title: `Peer-to-Peer (P2P)`,
            subtitle: `Quando duas partes estão conectadas e compartilham recursos sem a necessidade de uma parte centralizadora.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/peer-to-peer-p2p-glossary.html`,
            tag: `Business`,
            tag1: `Termos`,
        },
        {
            letter: `P`,
            id: "P6",
            title: `Portfólio`,
            subtitle: `Consiste nos ativos na qual você está investido.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/portfolio-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `P`,
            id: "P8",
            title: `Pré-venda`,
            subtitle: `Uma venda exclusiva de tokens. Geralmente ocorre uma etapa de pré-venda antes da ICO pública.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/pre-venda-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        // ---- R ---- //
        {
            letter: `R`,
            id: "R0",
            title: `R`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#R`
        },
        {
            letter: `R`,
            id: "R7",
            title: `Roadmap`,
            subtitle: `Método de planejamento de um projeto, na qual define etapas e objetivos a serem cumpridas no curto e longo prazo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/roadmap-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },
        // ---- S ---- //
        {
            letter: `S`,
            id: "S0",
            title: `S`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#S`
        },
        {
            letter: `S`,
            id: "S3",
            title: `Securities and Exchange Comission (SEC)`,
            subtitle: `É uma agência do governo federal americano responsável por regular o mercado de capitais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/securities-and-exchange-comission-sec-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `S`,
            id: "S12",
            title: `Soft Cap`,
            subtitle: `Valor que uma empresa busca arrecadar ao realizar o ICO.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/soft-cap-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `S`,
            id: "S18",
            title: `Startup`,
            subtitle: `São empresas emergentes com projetos inovadores e escaláveis. Geralmente são pequenas empresas com alto potencial de crescimento que utilizam tecnologias inovadoras em seus negócios.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/startup-glossary.html`,
            tag: `Business`,
        },
        // ---- V ---- //
        {
            letter: `V`,
            id: "V0",
            title: `V`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#V`
        },
        {
            letter: `V`,
            id: "V2",
            title: `Vantagem Absoluta`,
            subtitle: `Conceito econômico na qual uma parte tem vantagem direta em eficiência na produção/distribuição de um bem especifica ou de um serviço contra outra parte.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/vantagem-absoluta-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `V`,
            id: "V3",
            title: `Venda Privada`,
            subtitle: `Uma rodada de investimento para investidores estratégicos com a finalidade de arrecadar fundos iniciais para o projeto.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/venda-privada-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        // ---- W ---- //
        {
            letter: `W`,
            id: "W0",
            title: `W`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#W`
        },
        {
            letter: `W`,
            id: "W2",
            title: `Watchlist`,
            subtitle: `Uma lista definida de ativos para monitorar os preços.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/watchlist-glossary.html`,
            tag: `Business`,
        },
        {
            letter: `W`,
            id: "W5",
            title: `Whitelist`,
            subtitle: `Lista de participantes que terão acesso a uma venda restrita de criptomoedas, por exemplo, ICO.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/whitelist-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
        },

    ]
    const computersGlossaryArray = [
        //---- A ----//
        {
            letter: `A`,
            id: "A0",
            title: `A`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#A`
        },
        {
            letter: `A`,
            id: "A2",
            title: `Algoritmo`,
            subtitle: `Uma sequência de instruções com o propósito de solucionar um problema.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/algoritmo-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `A`,
            id: "A4",
            title: `Alpha`,
            subtitle: `É o primeiro produto de um projeto, consiste na versão inicial, básica e primitiva de um software ou produto.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/alpha-glossary.html`,
            tag: `Computadores`,
            tag1: `Business`
        },
        {
            letter: `A`,
            id: "A12",
            title: `Application Programming Interface (API)`,
            subtitle: `Conjunto de funções e procedimentos que permitem ao usuário interagir com os dados de outra aplicação. É um software intermediário que permite duas aplicações comunicarem entre si.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/application-programming-interface-api-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `A`,
            id: "A13",
            title: `Application-Specific Integrated Circuit (ASIC)`,
            subtitle: `Um circuito integrado, desenvolvido para um desempenho máximo para uma atividade específica, ao contrário de uso geral.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/application-specific-integrated-circuit-asic-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `A`,
            id: "A15",
            title: `ASIC-Resistente`,
            subtitle: `Uma criptomoeda que tem seu protocolo e algoritmo de mineração programado de certa forma que utilizar de máquinas ASIC para minerar é ou impossível, ou não traz um benefício significante  quando comparado a mineração tradicional utilizando GPU.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/asic-resistente-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `A`,
            id: "A17",
            title: `Assíncrono`,
            subtitle: `Evento em sistemas eletrônicos que não ocorrem ao mesmo tempo ou velocidade, ou acontecem de forma independente ao fluxo do programa principal.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/assincrono-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `A`,
            id: "A18",
            title: `Ataque de 51%`,
            subtitle: `Conhecido também como Ataque Majoritário. Quando um minerador ou grupo de mineradores controlam mais de 50% do mining hashrate ou do poder computacional da rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ataque-de-51-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        //---- B ----//
        {
            letter: `B`,
            id: "B0",
            title: `B`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#B`,
        },
        {
            letter: `B`,
            id: "B23",
            title: `Bots`,
            subtitle: `Softwares ou programas que operam de forma automática baseados em padrões pré-definidos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bots-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        // ---- C ---- //
        {
            letter: `C`,
            id: "C0",
            title: `C`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#C`
        },
        {
            letter: `C`,
            id: "C4",
            title: `Central Processing Unit (CPU)`,
            subtitle: `Parte do computador responsável por interpretar as instruções de um programa e executar comandos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/central-processing-unit-cpu-glossary.html`,
            tag: `Computadores`,
        },
        // ---- D ---- //
        {
            letter: `D`,
            id: "D0",
            title: `D`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#D`
        },
        {
            letter: `D`,
            id: "D5",
            title: `Deep Web`,
            subtitle: `Parte da web que é de certa forma escondida, ou seja, não é indexado pelas ferramentas de buscas tradicionais (Ex: Google, Bing, Etc...).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/deep-web-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `D`,
            id: "D10",
            title: `Directed Acyclic Graph (DAG)`,
            subtitle: `Uma estrutura de dados construída em uma direção e na qual se ramifica e nunca se repete. Expande-se em formato de árvore ao invés de uma cadeia em linha reta.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/directed-acyclic-graph-dag-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `D`,
            id: "D11",
            title: `Distributed Denial of Service Attack (DDoS)`,
            subtitle: `Conhecido como ataque distribuído de negação de serviço. É um ataque na qual o hacker malicioso busca sobrecarregar os recursos de processamento de um sistema ou rede, tornando-a indisponível.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/distributed-denial-of-service-ddos-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `D`,
            id: "D17",
            title: `Dusting Attack`,
            subtitle: `É uma atividade maliciosa na qual, hackers enviam pequenas quantidades de criptomoedas para diferentes carteiras, assim suas transações são monitoradas pelo atacante, que, com uma serie de análises determina a pessoa ou empresa que está por trás de cada carteira.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dusting-attack-glossary.html`,
            tag: `Computadores`,
            tag: `Hacking`,
        },
        // ---- F ---- //
        {
            letter: `F`,
            id: "F0",
            title: `F`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#F`
        },
        {
            letter: `F`,
            id: "F8",
            title: `Full Node`,
            subtitle: `É um software que valida as regras definidas nos protocolos de redes Blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/full-node-glossary.html`,
            tag: `Computadores`,
        },
        // ---- G ---- //
        {
            letter: `G`,
            id: "G0",
            title: `G`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#G`
        },
        {
            letter: `G`,
            id: "G9",
            title: `Graphical Processing Unit (GPU)`,
            subtitle: `Processador que trabalha de forma dedicada à atividade de vídeo e gráfica de um computador. `,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/graphical-processing-unit-gpu-glossary.html`,
            tag: `Computadores`,
        },
        // ---- H ---- //
        {
            letter: `H`,
            id: "H0",
            title: `H`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#H`
        },
        {
            letter: `H`,
            id: "H1",
            title: `Hacker`,
            subtitle: `Indivíduo que possui conhecimentos avançados em sistemas e redes de computadores.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hacker-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `H`,
            id: "H5",
            title: `Hash`,
            subtitle: `É o retorno com informações sobre um dado específico após executar uma hash function (código de programação).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hash-glossary.html`,
            tag: `Computadores`,
            tag1: `Blockchain`,
        },
        {
            letter: `H`,
            id: "H11",
            title: `Hash Power`,
            subtitle: `É poder de um computador ou rede de realizar operações de criptografia para transformar dados em Hashes.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/hash-power-glossary.html`,
            tag: `Computadores`,
            tag1: `Blockchain`,
        },
        {
            letter: `H`,
            id: "H6",
            title: `Hash Rate`,
            subtitle: `Velocidade na qual um computador é capaz de calcular novos hashes, geralmente é visto como hashes por segundo e determina o poder de processamento de uma blockchain ou mineradora.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hash-rate-glossary.html`,
            tag: `Computadores`,
        },
        // ---- I ---- //
        {
            letter: `I`,
            id: "I0",
            title: `I`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#I`
        },
        {
            letter: `I`,
            id: "I7",
            title: `Internet of Things (IoT)`,
            subtitle: `Também conhecido como Internet das Coisas. São sistemas que através da conexão com a internet, comunicam entre si sem necessidade de interação humana.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/internet-of-things-iot-glossary.html`,
            tag: `Computadores`,
        },
        // ---- M ---- //
        {
            letter: `M`,
            id: "M0",
            title: `M`,
            subtitle: `.`,
            date: `02/05/2022`,
            url: `#M`
        },
        {
            letter: `M`,
            id: "M2",
            title: `Malware`,
            subtitle: `Software programado para infiltrar e danificar sistemas e redes.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/malware-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `M`,
            id: "M13",
            title: `Metadados`,
            subtitle: `São dados que trazem informações adicionais sobre outro dado (Ex: uma imagem, possui como metadados o modelo da câmera, horário e local de criação).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/metadados-glossary.html`,
            tag: `Computadores`,
        },
        // ---- O ---- //
        {
            letter: `O`,
            id: "O0",
            title: `O`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#O`
        },
        {
            letter: `O`,
            id: "O4",
            title: `Open Source Software`,
            subtitle: `Sistemas lançados com a possibilidade de serem utilizados, atualizados e distribuídos por qualquer um livremente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/open-source-software-glossary.html`,
            tag: `Blockchain`,
            tag1: `Computadores`,
        },
        // ---- P ---- // 
        {
            letter: `P`,
            id: "P0",
            title: `P`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#P`
        },
        {
            letter: `P`,
            id: "P3",
            title: `Phishing`,
            subtitle: `Um ataque onde o autor busca obter as credenciais do usuário para obter acesso à sua conta. Existem também ataques de Phishing Website, onde o autor recria sites já existentes idênticos ao original para aplicar golpes em usuários desatentos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/phishing-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        // ---- Q ---- //
        {
            letter: `Q`,
            id: "Q0",
            title: `Q`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#Q`
        },
        {
            letter: `Q`,
            id: "Q1",
            title: `QR Code`,
            subtitle: `Código QR ou “Quick Response Code” é uma imagem que pode armazenar dados e ser lida por máquinas. Geralmente carrega links dentro de si.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/qr-code-glossary.html`,
            tag: `Computadores`,
        },
        // ---- R ---- //
        {
            letter: `R`,
            id: "R0",
            title: `R`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#R`
        },
        {
            letter: `R`,
            id: "R1",
            title: `Ransomware`,
            subtitle: `Tipo de ataque na qual um Malware toma o controle de seu computador e ameaça destruir ou divulgar seus documentos a não ser que o criminoso seja pago.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ransomware-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `R`,
            id: "R13",
            title: `Rig de Mineração`,
            subtitle: `São sistemas montados em um gabinete que possui diversas máquinas especializadas para realizar o processo de mineração de criptomoedas.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/rig-de-mineracao-glossary.html`,
            tag: `Computadores`,
            tag1: `Bitcoin`,
        },
        // ---- S ---- //
        {
            letter: `S`,
            id: "S0",
            title: `S`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#S`
        },
        {
            letter: `S`,
            id: "S20",
            title: `Superfície de Ataque`,
            subtitle: `Pontos em um software onde hackers mal intencionados podem invadir para extrair dados de um sistema.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/superficie-de-ataque-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        // ---- T ---- //
        {
            letter: `T`,
            id: "T0",
            title: `T`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#T`
        },
        {
            letter: `T`,
            id: "T3",
            title: `Testnet`,
            subtitle: `Área para testes de atualizações em redes blockchain, conhecido também como “Test Network”.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/testnet-glossary.html`,
            tag: `Blockchain`,
            tag1: `Computadores`,
        },
        {
            letter: `T`,
            id: "T12",
            title: `Turing-complete`,
            subtitle: `São linguagens de computação que permitem a máquina manipular e computar qualquer informação.`,
            date: `27/05/2022`,
            url: `D:/PIC/src/academy/glossary/turing-complete-glossary.html`,
            tag: `Computadores`,
        },
        {
            letter: `T`,
            id: "T13",
            title: `Two-Factor Authentication (2FA)`,
            subtitle: `Autenticação de dois fatores, código enviado para confirmar a identidade do usuário ao entrar na sua conta.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/two-factor-authentication-2fa-glossary.html`,
            tag: `Computadores`,
        },
        // ---- U ---- //
        {
            letter: `U`,
            id: "U0",
            title: `U`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#U`
        },
        {
            letter: `U`,
            id: "U2",
            title: `User Interface (UI)`,
            subtitle: `Interface do usuário de uma aplicação, onde interações entre humano e máquina ocorrem.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/user-interface-ui-glossary.html`,
            tag: `Computadores`,
        },
        // ---- W ---- //
        {
            letter: `W`,
            id: "W0",
            title: `W`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#W`
        },
        {
            letter: `W`,
            id: "W4",
            title: `Web3`,
            subtitle: `Movimento de transição da internet para um novo modelo descentralizado que utilizará de redes Blockchain para armazenar e transferir dados.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/web3-glossary.html`,
            tag: `Blockchain`,
            tag1: `Computadores`,
        },

    ]
    const defiGlossaryArray = [
        // ---- D ---- //
        {
            letter: `D`,
            id: "D0",
            title: `D`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#D`
        },
        {
            letter: `D`,
            id: "D2",
            title: `Decentralized Autonomous Organization (DAO)`,
            subtitle: `Sistemas descentralizados que não necessitam de um controlador centralizado. Atuam com código em open source e é operado pela comunidade.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/decentralized-autonomous-organization-dao-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `D`,
            id: "D3",
            title: `Decentralized Exchange (DEX)`,
            subtitle: `Uma Exchange que não necessita depositar fundos para trocar ativos e que não os mantém em custódia. Com as DEX usuários trocam seus ativos diretamente de suas carteiras.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/decentralized-exchange-dex-glossary.html`,
            tag: `Blockchain`,
        },
        {
            letter: `D`,
            id: "D4",
            title: `Decentralized Finance (DeFi)`,
            subtitle: `Aplicações financeiras descentralizadas desenvolvidas sob redes blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/decentralized-finance-defi-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `D`,
            id: "D6",
            title: `Delegated Proof of Stake (dPOS)`,
            subtitle: `Mecanismo de consenso onde usuários selecionados de uma rede são designados para validar as transações e produzir blocos em uma blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/delegated-proof-of-stake-dpos-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `D`,
            id: "D8",
            title: `Descentralizado`,
            subtitle: `Sistema  onde não possui uma figura central com autoridade, seja ela uma organização ou indivíduo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/descentralizado-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        // ---- F ---- //
        {
            letter: `F`,
            id: "F0",
            title: `F`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#F`
        },
        {
            letter: `F`,
            id: "F1",
            title: `Faucet`,
            subtitle: `Sites na qual você recebe pequenas quantidades de criptomoedas apenas por navegar por eles.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/faucet-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        // ---- O ---- //
        {
            letter: `O`,
            id: "O0",
            title: `O`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#O`
        },
        {
            letter: `O`,
            id: "O5",
            title: `Oracle`,
            subtitle: `Sistema que verifica valores reais e disponibiliza dados para uma blockchain ou smart contract. Oracles são muito vistos em criptomoedas na qual sua distribuição é lastreada a alguma moeda, exemplo, dólar.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/oracle-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        // ---- P ---- //
        {
            letter: `P`,
            id: "P0",
            title: `P`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#P`
        },
        {
            letter: `P`,
            id: "P20",
            title: `Pool de Liquidez`,
            subtitle: `São Smart Contracts em plataformas DeFi que permitem aos usuários bloquearem seus tokens para receber recompensas com taxas de transação.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/pool-de-liquidez-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        // ---- S ---- //
        {
            letter: `S`,
            id: "S0",
            title: `S`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#S`
        },
        {
            letter: `S`,
            id: "S17",
            title: `Staking`,
            subtitle: `É o ato de bloquear uma quantidade de tokens a fim de participar como validador de redes que utilizam de protocolos Proof-of-Stake. Ao realizar Stake, geralmente se recebe um valor percentual do bloqueado como recompensa.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/staking-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        {
            letter: `S`,
            id: "S22",
            title: `Swap`,
            subtitle: `Mecanismo presente em Exchanges Descentralizadas (DEX) e protocolos DeFi que permite ao usuário trocar criptomoedas por outras.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/swap-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },
        // ---- T ---- //
        {
            letter: `T`,
            id: "T0",
            title: `T`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#T`
        },
        {
            letter: `T`,
            id: "T7",
            title: `Total Value Locked (TVL)`,
            subtitle: `Representa o valor total que está bloqueado em Stake em um protocolo DeFi.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/total-value-locked-tvl-glossary.html`,
            tag: `Economia`,
            tag: `DeFi`,
        },
        // ---- Y ---- //
        {
            letter: `Y`,
            id: "Y0",
            title: `Y`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#Y`
        },
        {
            letter: `Y`,
            id: "Y1",
            title: `Yield Farming`,
            subtitle: `Método de investimento que consiste em disponibilizar suas criptomoedas em protocolos DeFi para receber retorno com taxas de transferência.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/yield-farming-glossary.html`,
            tag: `Blockchain`,
            tag1: `DeFi`,
        },

    ]
    const economyGlossaryArray = [
        //---- A ---- //
        {
            letter: `A`,
            id: "A0",
            title: `A`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#A`,
        },
        {
            letter: `A`,
            id: "A3",
            title: `Alocação`,
            subtitle: `Designar uma parcela de tokens ou verba que serão comprados, recebidos ou destinados para alguma entidade ou fim em específico.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/alocacao-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `A`,
            id: "A5",
            title: `Alta Histórica (ATH)`,
            subtitle: `O preço mais alto que uma criptomoeda chegou em comparação a outra moeda, como Dólar, Euro, Real, BTC, ETH, Etc...`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/alta-historica-ath-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A9",
            title: `Análise Fundamentalista`,
            subtitle: `Análise do preço de um ativo com base no seu valor intrínseco. A Análise Fundamentalista avalia com base nos fundamentos da empresa/projeto descartando a Análise Técnica.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/analise-fundamentalista-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `A`,
            id: "A21",
            title: `Annual Percentage Rate (APR)`,
            subtitle: `Conhecido como Taxa Percentual Anual. APR é o retorno esperado de um investimento com uma taxa fixa. APR não leva em consideração juros compostos.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/annual-percentage-rate-apr-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A22",
            title: `Annual Percentage Yield (APY)`,
            subtitle: `Conhecido como Rendimento Percentual Anual. APY é o retorno esperado de um investimento contabilizando os juros compostos do capital reinvestido.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/annual-percentage-yield-apy-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A10",
            title: `Anti-Money Laundering (AML)`,
            subtitle: `Conjunto de leis e processos regulatórios com a fim de minimizar a movimentação de dinheiro gerado através de vias ilegais ou de atividades supeitas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/anti-money-laundering-aml-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `A`,
            id: "A14",
            title: `Arbitragem`,
            subtitle: `Estratégia de investimento que consiste em comprar e vender um ativo em diferentes mercados e tirar vantagem da diferença de preços para gerar lucro.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/arbitragem-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A16",
            title: `Ask`,
            subtitle: `O preço mais baixo que um vendedor aceita em vender sua ordem quando está operando em uma Exchange.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ask-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        //---- B ----//
        {
            letter: `B`,
            id: "B0",
            title: `B`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#B`,
        },
        {
            letter: `B`,
            id: "B1",
            title: ` Baixa Histórica (ATL)`,
            subtitle: `O preço mais baixo que uma criptomoeda chegou em comparação a outra moeda, como Dólar, Euro, Real, BTC, ETH, Etc...`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/baixa-historica-atl-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B2",
            title: `Baleia`,
            subtitle: `Um indivíduo ou organização que possui grandes quantidades de uma criptomoedas, na qual suas ações causam impactos no mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/baleia-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `B`,
            id: "B3",
            title: `Banco Central`,
            subtitle: `Uma instituição financeira, que possui autoridade monetária, tendo o controle e administração sobre a moeda de um país, taxas de juros e estoque de dinheiro.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/banco-central-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `B`,
            id: "B4",
            title: `Bandas de Bollinger`,
            subtitle: `Indicador da análise técnica que mede a volatilidade de um mercado. Formada por duas bandas laterais e uma média móvel simples  (MA)`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bandas-de-bollinger-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B5",
            title: `Bear Market`,
            subtitle: `Tendência de queda nos preços de um mercado. É um termo usado de forma abrangente não só em relação a criptomoedas mas também em mercados tradicionais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bear-market-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B6",
            title: `Bearish`,
            subtitle: `Sentimento negativo em relação ao mercado, onde investidores acreditam na queda do valor de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bearish-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B8",
            title: `Beta (Coeficiente)`,
            subtitle: `Ferramenta utilizada para medir a volatilidade de um ativo em comparação a volatilidade de um portfólio específico ou índice de mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/beta-coeficiente-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `B`,
            id: "B10",
            title: `Bid`,
            subtitle: `Tratando-se de mercados financeiros, Bid é o valor mais alto que compradores estão dispostos a pagar por um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bid-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B11",
            title: `Bid-Ask Spread`,
            subtitle: `A diferença entre o preço mais baixo que vendedores estão dispostos a vender (Ask) e o preço mais alto que compradores estão dispostos a comprar (Bid) no order book de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bid-ask-spread-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B22",
            title: `Bolha das Criptomoedas`,
            subtitle: `Especulação de que os preços das criptomoedas subiriam a um extremo e que após isso “estouraria a bolha” derrubando o preço rapidamente. Na história já ocorreram diversas “bolhas financeiras” uma das mais conhecidas é a Bolha da Internet.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bolha-das-criptomoedas-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `B`,
            id: "B25",
            title: `Break-Even`,
            subtitle: `Ponto na qual o custo total de uma operação é equivalente ao seu retorno. Ou seja, não terá lucro nem prejuízo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/break-even-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B26",
            title: `Bull Market`,
            subtitle: `Tendência de alta nos preços de um mercado. É um termo usado de forma abrangente não só em relação a criptomoedas mas também em mercados tradicionais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bull-market-glossary.html`,
            tag: `Economia`,
            tag: `Trading`,
        },
        {
            letter: `B`,
            id: "B27",
            title: `Bullish`,
            subtitle: `Sentimento positivo em relação ao mercado, onde investidores acreditam na alta do valor de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bullish-glossary.html`,
            tag: `Economia`,
            tag: `Trading`,
        },
        // ---- C ---- //
        {
            letter: `C`,
            id: "C0",
            title: `C`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#C`
        },
        {
            letter: `C`,
            id: "C1",
            title: `Candlestick`,
            subtitle: `Também conhecido como velas, é uma representação gráfica na qual constam informações do preço de abertura, fechamento, máximas e mínimas de certo período de tempo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/candlestick-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `C`,
            id: "C2",
            title: `Capital de Risco`,
            subtitle: `Modalidade de investimento onde se aplica recursos financeiros em pequenas empresas ou startups com grande potencial de crescimento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/capital-de-risco-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `C`,
            id: "C6",
            title: `Circulating Supply`,
            subtitle: `Também conhecido como Fornecimento Circulante. É o número aproximado de tokens de uma criptomoeda que estão disponíveis circulando no mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/circulating-supply-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `C`,
            id: "C9",
            title: `Confluência`,
            subtitle: `Quando diversas métricas de análise técnica, indicadores e sinais gráficos se combinam para formar uma análise mais precisa.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/confluencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `C`,
            id: "C11",
            title: `Consumer Price Index (CPI)`,
            subtitle: `Também conhecido como índice de preços ao consumidor (IPCA), serve como indicador para a inflação de um país.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/consumer-price-index-cpi-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `C`,
            id: "C12",
            title: `Contratos Futuros`,
            subtitle: `É um tipo de derivativo que define um acordo entre duas partes, possibilitando a compra e venda de um determinado ativo a um determinado preço em uma data determinada.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/contratos-futuros-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `C`,
            id: "C14",
            title: `Criptomoedas`,
            subtitle: `Moeda digital que utiliza de criptografia para sua segurança e serve como objeto de troca de pessoa para pessoa (peer-to-peer, ou, P2P) sem necessidade de uma intermediação de terceiros. Utiliza de protocolos Blockchain para garantir a posse de quem às têm.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/criptomoedas-glossary.html`,
            tag: `Blockchain`,
            tag1: `Economia`,
        },
        {
            letter: `C`,
            id: "C16",
            title: `Custódia`,
            subtitle: `Refere-se a guardar o ativo de um cliente e administrá-lo de forma benéfica. Geralmente aplicado por uma instituição.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/custodia-glossary.html`,
            tag: `Economia`,
        },
        // ---- D ---- //
        {
            letter: `D`,
            id: "D0",
            title: `D`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#D`
        },
        {
            letter: `D`,
            id: "D1",
            title: `Dead Cat Bounce`,
            subtitle: `Conhecido como “Salto do Gato Morto” é um movimento gráfico que representa uma recuperação em uma tendência de queda seguida de continuação da queda.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dead-cat-bounce-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `D`,
            id: "D7",
            title: `Derivativos`,
            subtitle: `Instrumentos financeiros na qual tem seu valor atrelado a um ativo ou índice de mercado. (Taxas de juros, ouro, petróleo, Etc...).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/derivativos-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `D`,
            id: "D12",
            title: `Divergência`,
            subtitle: `Quando o preço de um ativo e um indicador técnico estão apontando para direções diferentes.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/divergencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `D`,
            id: "D13",
            title: `Diversificação`,
            subtitle: `Alocação de recursos em diferentes tipos de ativos com objetivo de reduzir riscos ou aumentar o retorno.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/diversificacao-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `D`,
            id: "D14",
            title: `Dollar Cost Averaging  (DCA)`,
            subtitle: `Conhecido como preço médio. É uma estratégia de investimento na qual se aplica um valor fixo de forma regular em um período definido, sem considerar o preço do ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dollar-cost-averaging-dca-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `D`,
            id: "D15",
            title: `Dominância do Bitcoin`,
            subtitle: `A razão entre o Valor de Mercado do Bitcoin contra a soma do valor de mercado de todas as criptomoedas. Quando a dominância do Bitcoin está baixa pode-se dizer que estamos em período de Altseason.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dominancia-do-bitcoin-glossary.html`,
            tag: `Blockchain`,
            tag1: `Economia`,
        },
        {
            letter: `D`,
            id: "D16",
            title: `Dump`,
            subtitle: `Termo comum da análise técnica. Refere-se a um movimento de queda do preço de mercado de um ativo, ou quando um indivíduo ou organização vende suas posições, derrubando o preço de forma brusca.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dump-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- E ---- //
        {
            letter: `E`,
            id: "E0",
            title: `E`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#E`
        },
        {
            letter: `E`,
            id: "E8",
            title: `Esquema Ponzi`,
            subtitle: `Um golpe financeiro (Scam) na qual se utiliza do dinheiro de novos investidores para pagar o retorno prometido aos investidores antigos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/esquema-ponzi-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `E`,
            id: "E13",
            title: `Exchange Traded Fund (ETF)`,
            subtitle: `ETF é uma forma de investimento na qual replica a carteira e rentabilidade de um fundo, ação, índice ou título, porém de forma a ser trocável como uma ação única.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/exchange-traded-fund-etf-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `E`,
            id: "E15",
            title: `Exchange`,
            subtitle: `Um mercado de criptomoedas e outros ativos na qual usuários podem comprar e vender suas moedas/ativos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/exchange-glossary.html`,
            tag: `Economia`,
        },
        // ---- F ---- //
        {
            letter: `F`,
            id: "F0",
            title: `F`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#F`
        },
        {
            letter: `F`,
            id: "F2",
            title: `Fear of Missing Out (FOMO)`,
            subtitle: `Também conhecido como o medo de ficar de fora. É um sentimento de apreensão por perder uma oportunidade de investimento com retornos potenciais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/fear-of-missing-out-fomo-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `F`,
            id: "F3",
            title: `Fear, Uncertainty and Doubt (FUD)`,
            subtitle: `Estratégia de disseminar informações ruins sobre um projeto para causar medo e insegurança nos investidores e usuários.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/fear-uncertainty-and-doubt-fud-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `F`,
            id: "F4",
            title: `Flappening`,
            subtitle: `Termo usado para quando Litecoin (LTC) ultrapassou o Bitcoin Cash (BCH) em valor de mercado. Deriva do termo Flippening  que é quando alguma outra criptomoeda ultrapassar o Bitcoin (BTC) em valor de mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/flappening-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `F`,
            id: "F5",
            title: `Flippening`,
            subtitle: `Termo usado para quando outra criptomoeda ultrapassar o Bitcoin (BTC) em valor de mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/flippening-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `F`,
            id: "F6",
            title: `Forex (FX)`,
            subtitle: `Forex significa Foreign Exchange Markets. É o mercado global de câmbio de moedas fiduciárias.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/forex-fx-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `F`,
            id: "F9",
            title: `Fully Dilluted Market Cap`,
            subtitle: `É a multiplicação do Max Supply de uma criptomoeda com o atual valor de cada token. `,
            date: `30/05/2022`,
            url: `D:/PIC/src/academy/glossary/fully-dilluted-market-cap.html`,
            tag: `Economia`,
        },
        // ---- G ---- //
        {
            letter: `G`,
            id: "G0",
            title: `G`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#G`
        },
        {
            letter: `G`,
            id: "G1",
            title: `Garantia`,
            subtitle: `Alocar algo de valor ao realizar empréstimo como forma de garantir o pagamento de suas obrigações com o credor.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/garantia-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `G`,
            id: "G6",
            title: `Gestão ativa`,
            subtitle: `Estratégia de investimentos na qual o indivíduo seleciona e gerencia os ativos da carteira ativamente, com objetivo de superar o mercado e obter lucro.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gestao-ativa-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `G`,
            id: "G7",
            title: `Gestão de ativos`,
            subtitle: `Método que ajuda indivíduos ou empresas a administrarem seus ativos. Sejam eles para benefício próprio ou de seus clientes.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gestao-de-ativos-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `G`,
            id: "G8",
            title: `Golden Cross`,
            subtitle: `Padrão gráfico Bullish onde se analisa duas médias móveis uma de curto-prazo e outra de longo-prazo. É formado um Golden Cross, quando a média móvel de curto prazo rompe para cima da média móvel de longo prazo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/golden-cross-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- H ---- //
        {
            letter: `H`,
            id: "H0",
            title: `H`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#H`
        },
        {
            letter: `H`,
            id: "H3",
            title: `Hard Cap`,
            subtitle: `Quantidade máxima que um projeto busca arrecadar durante seu ICO.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hard-cap-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `H`,
            id: "H7",
            title: `High-Frequency Trading (HFT)`,
            subtitle: `Conhecido como trading de alta freqüência. É uma forma de negociação na qual se utiliza de sistemas para realizar diversas operações em um curto intervalo de tempo, geralmente segundo ou milissegundos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/high-frequency-trading-hft-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `H`,
            id: "H8",
            title: `Hipótese do mercado eficiente`,
            subtitle: `Hipótese econômica na qual o preço de ativos no mercado sempre reflete toda informação existente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hipotese-do-mercado-eficiente-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `H`,
            id: "H9",
            title: `HODL`,
            subtitle: `Derivado do termo “Hold” que é manter um ativo em sua posse e não vendê-lo. Teve sua origem no fórum BitcoinTalk, quando um usuário errou a digitação. O termo teve aceitação e é até hoje fortemente utilizado pela comunidade de criptomoedas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hodl-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `H`,
            id: "H12",
            title: `Holder`,
            subtitle: `É o investidor que mantém seus ativos em sua posse e não os vende. `,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/holder-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        // ---- I ---- //
        {
            letter: `I`,
            id: "I0",
            title: `I`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#I`
        },
        {
            letter: `I`,
            id: "I1",
            title: `Índice`,
            subtitle: `Um instrumento financeiro usado para rastrear o preço de um ativo ou de um conjunto de ativos. Geralmente é utilizado ao combinar diversos elementos em um e serve como um benchmark.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/indice-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `I`,
            id: "I2",
            title: `Initial Coin Offering (ICO)`,
            subtitle: `Método de arrecadação similar ao IPO. Onde uma criptomoeda é lançada para venda pública pela primeira vez.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/initial-coin-offering-ico-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `I`,
            id: "I3",
            title: `Initial Exchange Offering (IEO)`,
            subtitle: `Método de arrecadação na qual as vendas públicas são conduzidas por uma Exchange.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/initial-exchange-offering-ieo-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `I`,
            id: "I4",
            title: `Initial Public Offering (IPO)`,
            subtitle: `Método de arrecadação onde empresas abrem seu capital e ofertam suas ações ao público para arrecadar capital de seus investidores.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/initial-public-offering-ipo-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `I`,
            id: "I8",
            title: `Investidor Anjo`,
            subtitle: `Investidores que buscam oportunidades provendo fundos para empresários ou start-ups.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/investidor-anjo-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        // ---- K ---- //
        {
            letter: `K`,
            id: "K0",
            title: `K`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#K`
        },
        {
            letter: `K`,
            id: "K1",
            title: `Know Your Costumer (KYC)`,
            subtitle: `Conhecido também pelo termo “Conheça seu cliente”. É um procedimento padrão de empresas financeiras para validarem e reconhecerem seus clientes como forma de segurança.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/know-your-costumer-kyc-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
            tag2: `Termos`,
        },
        // ---- L ---- //
        {
            letter: `L`,
            id: "L0",
            title: `L`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#L`
        },
        {
            letter: `L`,
            id: "L1",
            title: `Lei da Oferta e Demanda`,
            subtitle: `Lei econômica onde o preço de mercado de um bem específico é regulada pela quantidade do produto oferecida no mercado (Oferta) e a demanda que compradores estão dispostos a pagar pelo produto. Com uma demanda superior a oferta o preço tende a subir, já uma oferta superior à demanda reflete em uma queda dos preços.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/lei-da-oferta-e-demanda-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `L`,
            id: "L3",
            title: `Liquidação Forçada`,
            subtitle: `Quando a posição alavancada de uma operação é fechada forçadamente. Acontece quando a operação não possui margem o suficiente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/liquidacao-forcada-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `L`,
            id: "L4",
            title: `Liquidez`,
            subtitle: `Quantidade que pode ser comprada ou vendida sem ter impactos significantes no preço de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/liquidez-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `L`,
            id: "L6",
            title: `Livro-razão`,
            subtitle: `Relatório com transações financeiras a fim de monitorar as movimentações realizadas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/livro-razao-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        // ---- M ---- //
        {
            letter: `M`,
            id: "M0",
            title: `M`,
            subtitle: `.`,
            date: `02/05/2022`,
            url: `#M`
        },
        {
            letter: `M`,
            id: "M4",
            title: `Margem Isolada`,
            subtitle: `Alocação de margem na qual se restringe a uma posição isolada das demais posições.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/margem-isolada-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `M`,
            id: "M5",
            title: `Market Capitalization (Market Cap)`,
            subtitle: `Refere-se ao valor de mercado de um ativo ou moeda. Resultado da multiplicação do preço de cada moeda pela quantidade existente de moedas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/market-capitalization-market-cap-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `M`,
            id: "M6",
            title: `Market Maker`,
            subtitle: `Participantes do mercado que enviam ordens de compra ou venda que não são executadas imediatamente, permanecendo no livro de ofertas até que sejam concluídas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/market-maker-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `M`,
            id: "M7",
            title: `Market Taker`,
            subtitle: `Participantes do mercado que enviam ordens de compra ou venda que são totalmente executadas com as ordens já disponíveis no mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/market-taker-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `M`,
            id: "M9",
            title: `Max Supply`,
            subtitle: `Refere-se a quantidade máxima de moedas ou tokens que podem existir de uma criptomoeda.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/max-supply-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `M`,
            id: "M11",
            title: `Mercado de Derivativos`,
            subtitle: `Mercado para derivativos, como contratos futuros ou opções.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/mercado-de-derivativos-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `M`,
            id: "M17",
            title: `Moeda Fiduciária`,
            subtitle: `Também conhecida como Fiat. É o dinheiro controlado por um governo e declarado como moeda de aceitação obrigatória.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/moeda-fiduciaria-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `M`,
            id: "M18",
            title: `Moeda Lastreada`,
            subtitle: `Moeda desenvolvida para que seu preço permaneça o mesmo ao de uma outra moeda determinada. Por exemplo 1 USDC é lastreado a 1 Dólar. São também conhecidas como Stablecoins (Moedas estáveis).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/moeda-lastreada-glossary.html`,
            tag: `Economia`,
        },
        // ---- O ---- //
        {
            letter: `O`,
            id: "O0",
            title: `O`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#O`
        },
        {
            letter: `O`,
            id: "O1",
            title: `OCO/OCOI`,
            subtitle: `OCO (ombro-cabeça-ombro) e OCOI (ombro-cabeça-ombro-invertido) são padrões gráficos da análise técnica que apresentam uma reversão de tendência de preço de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ocoocoi-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O3",
            title: `Open/Close Price`,
            subtitle: `Preço de abertura e fechamento, se refere respectivamente ao preço na qual uma criptomoeda iniciou um período, por exemplo, o começo do dia. E o preço na qual ela encerrou ao fim do período, por exemplo, o final do dia.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/openclose-price-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O6",
            title: `Ordem à Mercado`,
            subtitle: `Uma ordem de mercado onde um Taker pega o melhor valor disponível de Bid ou Ask. Sendo sua ordem completamente efetuada com base no preço e quantidade atual do Order Book.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-a-mercado-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O7",
            title: `Ordem Iceberg`,
            subtitle: `Uma ordem de mercado de grande quantidade que é dividida em partes menores que serão enviadas em períodos intervalados. Seu objetivo é que o investidor faça a transação sem realizar grandes impactos no mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-iceberg-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O8",
            title: `Ordem limite`,
            subtitle: `Uma ordem de mercado na qual realiza a operação quando o preço de um ativo chega no preço previamente definido.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-limite-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O9",
            title: `Ordem Tudo ou Nada (TON)`,
            subtitle: `Uma ordem de mercado que quando definida, ou se executa o valor total da ordem ou não a executa. Evita que a ordem seja preenchida de forma parcial.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-tudo-ou-nada-ton-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- P ---- // 
        {
            letter: `P`,
            id: "P0",
            title: `P`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#P`
        },
        {
            letter: `P`,
            id: "P4",
            title: `Políticas Monetárias`,
            subtitle: `São políticas tomadas por autoridades para controlar a quantidade de moeda em circulação e as taxas de inflação e juros de um país.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/politicas-monetarias-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `P`,
            id: "P6",
            title: `Portfólio`,
            subtitle: `Consiste nos ativos na qual você está investido.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/portfolio-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `P`,
            id: "P7",
            title: `Preço Médio`,
            subtitle: `É uma estratégia de investimento na qual se aplica um valor fixo de forma regular em um período definido, sem considerar o preço do ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/preco-medio-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `P`,
            id: "P8",
            title: `Pré-venda`,
            subtitle: `Uma venda exclusiva de tokens. Geralmente ocorre uma etapa de pré-venda antes da ICO pública.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/pre-venda-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `P`,
            id: "P9",
            title: `Price Action`,
            subtitle: `O movimento do preço de um ativo financeiro através de um período de tempo. Ao ser exibido em um gráfico, permite aos traders identificarem padrões para realizar operações.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/price-action-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `P`,
            id: "P17",
            title: `Pump and Dump`,
            subtitle: `Manipulação de mercado onde se levanta o preço de um ativo no mercado, antes de realizar lucro levando-o para baixo novamente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/pump-and-dump-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- R ---- //
        {
            letter: `R`,
            id: "R0",
            title: `R`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#R`
        },
        {
            letter: `R`,
            id: "R3",
            title: `Relative Strenght Index (RSI)`,
            subtitle: `RSI é um indicador técnico muito comum na análise gráfica. Utiliza do preço de fechamento para identificar se um ativo está em sobre-compra ou sobre-venda, RSI oscila entre 0-100 sendo que abaixo de 30 é considerado em sobre-venda (venda maior que compra) e maior que 70 é considerado sobre-compra (compra maior que venda).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/relative-strength-index-rsi-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `R`,
            id: "R4",
            title: `Reserva de valor`,
            subtitle: `Uma commodity, moeda, ou ativo que pode ser guardado e futuramente trocado sem sofrer depreciação.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/reserva-de-valor-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `R`,
            id: "R5",
            title: `Resistência`,
            subtitle: `Termo da análise técnica que representa uma área em que o preço, ao encontrar a resistência, tende a recuar quando o ativo está em alta.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/resistencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `R`,
            id: "R6",
            title: `Retorno sobre o investimento (ROI)`,
            subtitle: `O ROI (Return on Investment) é a razão entre o lucro do investimento e o custo do investimento. Geralmente é utilizado como métrica para a eficiência de um investimento. Deve-se atentar com os riscos de ROIs exageradamente altos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/retorno-sobre-o-investimento-roi-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `R`,
            id: "R11",
            title: `Rug Pull`,
            subtitle: `Em critpo, Rug Pull, (Também conhecido como “puxar o tapete”) é quando uma empresa ou time de desenvolvimento de repente abandona o projeto, vende todos os tokens ou remove a liquidez.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/rug-pull-glossary.html`,
            tag: `Economia`,
            tag1: `Blockchain`,
        },
        // ---- S ---- //
        {
            letter: `S`,
            id: "S0",
            title: `S`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#S`
        },
        {
            letter: `S`,
            id: "S3",
            title: `Securities and Exchange Comission (SEC)`,
            subtitle: `É uma agência do governo federal americano responsável por regular o mercado de capitais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/securities-and-exchange-comission-sec-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `S`,
            id: "S6",
            title: `Sell Wall`,
            subtitle: `Uma ordem de venda de grande quantidade ou conjunto de ordens de venda acumuladas em um mesmo preço que forma uma barreira na qual o preço tem dificuldade de passar.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/sell-wall-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `S`,
            id: "S8",
            title: `Sharpe Ratio`,
            subtitle: `É uma razão que investidores e economistas utilizam da relação risco e retorno potencial para descobrir o ROI potencial de um investimento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/sharpe-ratio-glossary.html`,
            tag: `Economia`,
        },
        {
            letter: `S`,
            id: "S12",
            title: `Soft Cap`,
            subtitle: `Valor que uma empresa busca arrecadar ao realizar o ICO.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/soft-cap-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `S`,
            id: "S19",
            title: `Stop-Loss`,
            subtitle: `Ordem a mercado pré-definido que é acionada como um limite para uma operação que dê errado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/stop-loss-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `S`,
            id: "S21",
            title: `Suporte`,
            subtitle: `Termo da análise técnica que representa uma área em que o preço, ao encontrar o suporte, tende a subir quando o ativo está em queda.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/suporte-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- T ---- //
        {
            letter: `T`,
            id: "T0",
            title: `T`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#T`
        },
        {
            letter: `T`,
            id: "T2",
            title: `Tendência`,
            subtitle: `Direção na qual o preço está se encaminhando ou provavelmente irá se encaminhar. É definida pelo sentimento geral do mercado em relação ao ativo ou economia. Analistas utilizam de métricas, e indicadores para encontrar tendências de mercado que podem ser positivas, negativas ou neutras.`,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/tendencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `T`,
            id: "T4",
            title: `Ticker`,
            subtitle: `É o símbolo de um ativo, geralmente relacionado ao nome de forma abreviada. É utilizado para identificar um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ticker-glossary.html`,
            tag: `Economia`,
            tag1: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T5",
            title: `Tokens`,
            subtitle: `Unidades de valor criados em redes blockchain. São gerenciados por uma organização ou empresa que garante a quem possui os tokens a participação na rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/tokens-glossary.html`,
            tag: `Economia`,
            tag1: `Blockchain`,
        },
        {
            letter: `T`,
            id: "T7",
            title: `Total Value Locked (TVL)`,
            subtitle: `Representa o valor total que está bloqueado em Stake em um protocolo DeFi.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/total-value-locked-tvl-glossary.html`,
            tag: `Economia`,
            tag: `DeFi`,
        },
        {
            letter: `T`,
            id: "T8",
            title: `Trading de Margem`,
            subtitle: `Quando o usuário realiza empréstimos em uma corretora ou Exchange para operar.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/trading-de-margem-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- V ---- //
        {
            letter: `V`,
            id: "V0",
            title: `V`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#V`
        },
        {
            letter: `V`,
            id: "V2",
            title: `Vantagem Absoluta`,
            subtitle: `Conceito econômico na qual uma parte tem vantagem direta em eficiência na produção/distribuição de um bem especifica ou de um serviço contra outra parte.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/vantagem-absoluta-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `V`,
            id: "V3",
            title: `Venda Privada`,
            subtitle: `Uma rodada de investimento para investidores estratégicos com a finalidade de arrecadar fundos iniciais para o projeto.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/venda-privada-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
        },
        {
            letter: `V`,
            id: "V4",
            title: `Volatilidade`,
            subtitle: `Quanto um ativo mudou de preço e em quanto tempo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/volatilidade-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `V`,
            id: "V5",
            title: `Volume`,
            subtitle: `Em mercados, refere-se a quantidade do ativo que foi comprado e vendido no período definido, geralmente 24 horas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/volume-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },


    ]
    const ethereumGlossaryArray = [
        // ---- E ---- //
        {
            letter: `B`,
            id: "B0",
            title: `B`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#B`
        },
        {
            letter: `B`,
            id: "B28",
            title: `Beacon Chain`,
            subtitle: `É uma rede Proof-of-Stake desenvolvida para a implementação da Ethereum 2.0. A rede opera separadamente da rede principal da Ethereum, mas futuramente os planos é que sejam unificadas.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/beacon-chain-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        // ---- E ---- //
        {
            letter: `E`,
            id: "E0",
            title: `E`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#E`
        },
        {
            letter: `E`,
            id: "E4",
            title: `Enterprise Ethereum Alliance (EEA)`,
            subtitle: `Organização de usuários da rede Ethereum que colaboram entre si para criar padrões e encontrar formas de utilizar Ethereum em empresas. Possui participação tanto de empresas, startups e desenvolvedores e tem o objetivo de acelerar a adoção global de soluções que utilizam da Blockchain.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/enterprise-ethereum-alliance-eea-glossary.html`,
            tag: `Blockchain`,
            tag1: `Business`,
            tag2: `Ethereum`,
        }, {
            letter: `E`,
            id: "E5",
            title: `ERC-20`,
            subtitle: `Protocolo padrão para tokens fungíveis e trocáveis da rede Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/erc-20-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E6",
            title: `ERC-721`,
            subtitle: `Protocolo padrão para token não-fungíveis (NFT) e trocáveis da rede Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/erc-721-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
            tag2: `NFT`,
        },
        {
            letter: `E`,
            id: "E16",
            title: `Ether`,
            subtitle: `Conhecido pelo símbolo ETH, é a moeda nativa da rede Ethereum, utilizada para realizar transações na rede, pagar taxas, e executar Smart Contracts.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/ether-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E9",
            title: `Ethereum`,
            subtitle: `Ethereum é uma plataforma open-source que permite desenvolvedores criarem aplicações descentralizadas utilizando Smart Contracts e redes Blockchain.`,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E17",
            title: `Ethereum 2.0`,
            subtitle: `Uma atualização da rede Ethereum que busca trazer escalabilidade, eficiência e mudanças para uma melhor utilização da rede.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum20-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E10",
            title: `Ethereum Difficulty Bomb`,
            subtitle: `Mecanismo na qual aumenta a dificuldade de mineração da Ethereum tornando-a não rentável para mineradores. É uma etapa do processo de migração da Ethereum para Proof of Stake.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-difficulty-bomb-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E11",
            title: `Ethereum Plasma`,
            subtitle: `Uma solução Off-chain da Ethereum que busca trazer escalabilidade ao aumentar o número de transações por segundo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-plasma-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E18",
            title: `Ethereum Shard`,
            subtitle: `Ethereum Shard é uma etapa da atualização da Ethereum 2.0 que busca separar a rede em fragmentos para aumentar a escalabilidade da Ethereum.`,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-shard-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `E`,
            id: "E12",
            title: `Ethereum Virtual Machine (EVM)`,
            subtitle: `Ecossistema da Ethereum na qual os Smart Contracts são executados.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ethereum-virtual-machine-evm-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        // ---- F ---- //
        {
            letter: `F`,
            id: "F0",
            title: `F`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#F`
        },
        {
            letter: `F`,
            id: "F7",
            title: `Fork`,
            subtitle: `É uma atualização em um projeto de blockchain onde o software é copiado e modificado a partir de certo ponto. O projeto original se mantém e a história do mesmo não é rejeitado, porém o novo software criado possui diferenças e mudanças que o original não teria. Forks são divididos em dois tipos: Soft Forks e Hard Forks.
                    `,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
            tag2: `Ethereum`
        },
        // ---- G ---- //
        {
            letter: `G`,
            id: "G0",
            title: `G`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#G`
        },
        {
            letter: `G`,
            id: "G2",
            title: `Gas`,
            subtitle: `Mecanismo que precifica as taxas de transferência e calcula o custo de realizar operações utilizando os Smart Contracts da Blockchain da Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gas-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `G`,
            id: "G3",
            title: `Gas Limit`,
            subtitle: `Quantidade máxima de Gas que um usuário aceita pagar como taxa para realizar transferências ou operações em um Smart Contract.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gas-limit-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `G`,
            id: "G4",
            title: `Gas Price`,
            subtitle: `Preço que um usuário deseja pagar como taxa para realizar transferências ou operações em um Smart Contract.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gas-price-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `G`,
            id: "G10",
            title: `Gwei`,
            subtitle: `Gwei é uma fração de Ether(ETH), moeda da rede Ethereum. Utiliza-se de Gwei como forma de medir o preço do Gas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gwei-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        // ---- H ---- //
        {
            letter: `H`,
            id: "H0",
            title: `H`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#H`
        },
        {
            letter: `H`,
            id: "H4",
            title: `Hard Fork`,
            subtitle: `Tipo de Fork na qual os nodes atualizados se tornam incompatíveis com versões anteriores. isso ocorre pois a nova versão possui regras que entram em conflito com a versão antiga.`,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/hard-fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
            tag2: `Ethereum`,
        },
        // ---- P ---- // 
        {
            letter: `P`,
            id: "P0",
            title: `P`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#P`
        },
        {
            letter: `P`,
            id: "P13",
            title: `Proof of Stake (PoS)`,
            subtitle: `Um algoritmo de consenso que valida blocos baseado na quantidade de tokens que estão em Stake pelo validador. As recompensas também variam dependendo da quantidade em Stake.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/proof-of-stake-pos-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`
        },
        {
            letter: `P`,
            id: "P15",
            title: `Propostas de Melhoria do Ethereum (EIP)`,
            subtitle: `Conhecido como "Ethereum Improvement Proposal". São documentos com propostas de melhorias, utilizado para adicionar funcionalidades e atualizações para a rede da Ethereum.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/propostas-de-melhoria-do-ethereum-eip-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        // ---- R ---- //
        {
            letter: `R`,
            id: "R0",
            title: `R`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#R`
        },
        {
            letter: `R`,
            id: "R8",
            title: `Rollup`,
            subtitle: `Em Rollups, blockchains secundárias são criadas para processar um grupo de transações que depois são enviada para a Blockchain principal em um bloco chamado Rollup Block.`,
            date: `27/05/2022`,
            url: `D:/PIC/src/academy/glossary/rollup-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        {
            letter: `R`,
            id: "R9",
            title: `Rollup Block`,
            subtitle: `Bloco enviado a blockchain principal que contém diversas transações agrupadas. Ocorre ao utilizar o mecanismo de Rollups da Ethereum. `,
            date: `24/05/2022`,
            url: `D:/PIC/src/academy/glossary/rollup-block-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        // ---- S ---- //
        {
            letter: `S`,
            id: "S0",
            title: `S`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#S`
        },
        {
            letter: `S`,
            id: "S13",
            title: `Soft Fork`,
            subtitle: `Tipo de Fork na qual os nodes atualizados mantém contato com os nodes não atualizados. Soft Forks trazem mudanças que não entram em conflito com as regras do node original, assim possibilitando o uso da rede original.`,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/soft-fork-glossary.html`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
            tag2: `Ethereum`,
        },
        {
            letter: `S`,
            id: "S14",
            title: `Solidity`,
            subtitle: `Linguagem de programação orientada a objetos utilizada em várias Blockchains.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/solidity-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },
        // ---- W ---- //
        {
            letter: `W`,
            id: "W0",
            title: `W`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#W`
        },
        {
            letter: `W`,
            id: "W3",
            title: `Wei`,
            subtitle: `Menor unidade de um Ether (ETH), moeda da rede Ethereum. Geralmente utilizado para representar o Gas Price.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/wei-glossary.html`,
            tag: `Blockchain`,
            tag1: `Ethereum`,
        },

    ]
    const hackingGlossaryArray = [
        //---- A ---- //
        {
            letter: `A`,
            id: "A0",
            title: `A`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#A`,
        },
        {
            letter: `A`,
            id: "A18",
            title: `Ataque de 51%`,
            subtitle: `Conhecido também como Ataque Majoritário. Quando um minerador ou grupo de mineradores controlam mais de 50% do mining hashrate ou do poder computacional da rede.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ataque-de-51-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        //---- B ----//
        {
            letter: `B`,
            id: "B0",
            title: `B`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#B`,
        },
        {
            letter: `B`,
            id: "B23",
            title: `Bots`,
            subtitle: `Softwares ou programas que operam de forma automática baseados em padrões pré-definidos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bots-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        // ---- D ---- //
        {
            letter: `D`,
            id: "D0",
            title: `D`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#D`
        },
        {
            letter: `D`,
            id: "D5",
            title: `Deep Web`,
            subtitle: `Parte da web que é de certa forma escondida, ou seja, não é indexado pelas ferramentas de buscas tradicionais (Ex: Google, Bing, Etc...).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/deep-web-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `D`,
            id: "D11",
            title: `Distributed Denial of Service Attack (DDoS)`,
            subtitle: `Conhecido como ataque distribuído de negação de serviço. É um ataque na qual o hacker malicioso busca sobrecarregar os recursos de processamento de um sistema ou rede, tornando-a indisponível.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/distributed-denial-of-service-ddos-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        {
            letter: `D`,
            id: "D17",
            title: `Dusting Attack`,
            subtitle: `É uma atividade maliciosa na qual, hackers enviam pequenas quantidades de criptomoedas para diferentes carteiras, assim suas transações são monitoradas pelo atacante, que, com uma serie de análises determina a pessoa ou empresa que está por trás de cada carteira.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dusting-attack-glossary.html`,
            tag: `Computadores`,
            tag: `Hacking`,
        },
        // ---- G ---- //
        {
            letter: `G`,
            id: "G0",
            title: `G`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#G`
        },
        {
            letter: `G`,
            id: "G5",
            title: `Gasto Duplo`,
            subtitle: `Quando uma quantidade de moedas é gasta mais de uma vez. Geralmente ocasionado por um ataque.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/gasto-duplo-glossary.html`,
            tag: `Blockchain`,
            tag1: `Hacking`,
        },
        // ---- H ---- //
        {
            letter: `H`,
            id: "H0",
            title: `H`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#H`
        },
        {
            letter: `H`,
            id: "H1",
            title: `Hacker`,
            subtitle: `Indivíduo que possui conhecimentos avançados em sistemas e redes de computadores.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hacker-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        // ---- M ---- //
        {
            letter: `M`,
            id: "M0",
            title: `M`,
            subtitle: `.`,
            date: `02/05/2022`,
            url: `#M`
        },
        {
            letter: `M`,
            id: "M2",
            title: `Malware`,
            subtitle: `Software programado para infiltrar e danificar sistemas e redes.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/malware-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        // ---- P ---- // 
        {
            letter: `P`,
            id: "P0",
            title: `P`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#P`
        },
        {
            letter: `P`,
            id: "P3",
            title: `Phishing`,
            subtitle: `Um ataque onde o autor busca obter as credenciais do usuário para obter acesso à sua conta. Existem também ataques de Phishing Website, onde o autor recria sites já existentes idênticos ao original para aplicar golpes em usuários desatentos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/phishing-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        // ---- R ---- //
        {
            letter: `R`,
            id: "R0",
            title: `R`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#R`
        },
        {
            letter: `R`,
            id: "R1",
            title: `Ransomware`,
            subtitle: `Tipo de ataque na qual um Malware toma o controle de seu computador e ameaça destruir ou divulgar seus documentos a não ser que o criminoso seja pago.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ransomware-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },
        // ---- S ---- //
        {
            letter: `S`,
            id: "S0",
            title: `S`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#S`
        },
        {
            letter: `S`,
            id: "S20",
            title: `Superfície de Ataque`,
            subtitle: `Pontos em um software onde hackers mal intencionados podem invadir para extrair dados de um sistema.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/superficie-de-ataque-glossary.html`,
            tag: `Computadores`,
            tag1: `Hacking`,
        },

    ]
    const nftGlossaryArray = [
        // ---- M ---- //
        {
            letter: `M`,
            id: "M0",
            title: `M`,
            subtitle: `.`,
            date: `02/05/2022`,
            url: `#M`
        },
        {
            letter: `M`,
            id: "M14",
            title: `Metaverso`,
            subtitle: `É um espaço virtual na qual usuário interagem entre si em um ambiente computadorizado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/metaverso-glossary.html`,
            tag: `Blockchain`,
            tag1: `NFT`,
        },

        //  ---- N ---- //

        {
            letter: `N`,
            id: "N0",
            title: `N`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#N`
        },
        {
            letter: `N`,
            id: "N1",
            title: `NFT (Tokens não fungíveis)`,
            subtitle: `Tipo de token que representa um item digital único. Que diferente de criptomoedas não podem ser unificados.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/nft-tokens-nao-fungiveis-glossary.html`,
            tag: `Blockchain`,
            tag1: `NFT`,
        },

    ]
    const termsGlossaryArray = [
        //---- B ----//
        {
            letter: `B`,
            id: "B0",
            title: `B`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#B`,
        },
        {
            letter: `B`,
            id: "B2",
            title: `Baleia`,
            subtitle: `Um indivíduo ou organização que possui grandes quantidades de uma criptomoedas, na qual suas ações causam impactos no mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/baleia-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        // ---- E ---- //
        {
            letter: `E`,
            id: "E0",
            title: `E`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#E`
        },
        {
            letter: `E`,
            id: "E14",
            title: `Explique-me como se eu tivesse 5 anos (ELI5)`,
            subtitle: `Explicar algum conteúdo de forma tão simples que uma criança de 5 anos conseguiria entender.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/explique-me-como-se-eu-tivesse-5-anos-eli5-glossary.html`,
            tag: `Business`,
            tag1: `Termos`,
        },
        // ---- F ---- //
        {
            letter: `F`,
            id: "F0",
            title: `F`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#F`
        },
        {
            letter: `F`,
            id: "F2",
            title: `Fear of Missing Out (FOMO)`,
            subtitle: `Também conhecido como o medo de ficar de fora. É um sentimento de apreensão por perder uma oportunidade de investimento com retornos potenciais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/fear-of-missing-out-fomo-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `F`,
            id: "F3",
            title: `Fear, Uncertainty and Doubt (FUD)`,
            subtitle: `Estratégia de disseminar informações ruins sobre um projeto para causar medo e insegurança nos investidores e usuários.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/fear-uncertainty-and-doubt-fud-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `F`,
            id: "F4",
            title: `Flappening`,
            subtitle: `Termo usado para quando Litecoin (LTC) ultrapassou o Bitcoin Cash (BCH) em valor de mercado. Deriva do termo Flippening  que é quando alguma outra criptomoeda ultrapassar o Bitcoin (BTC) em valor de mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/flappening-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `F`,
            id: "F5",
            title: `Flippening`,
            subtitle: `Termo usado para quando outra criptomoeda ultrapassar o Bitcoin (BTC) em valor de mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/flippening-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        // ---- H ---- //
        {
            letter: `H`,
            id: "H0",
            title: `H`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#H`
        },
        {
            letter: `H`,
            id: "H9",
            title: `HODL`,
            subtitle: `Derivado do termo “Hold” que é manter um ativo em sua posse e não vendê-lo. Teve sua origem no fórum BitcoinTalk, quando um usuário errou a digitação. O termo teve aceitação e é até hoje fortemente utilizado pela comunidade de criptomoedas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/hodl-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        {
            letter: `H`,
            id: "H12",
            title: `Holder`,
            subtitle: `É o investidor que mantém seus ativos em sua posse e não os vende. `,
            date: `08/06/2022`,
            url: `D:/PIC/src/academy/glossary/holder-glossary.html`,
            tag: `Economia`,
            tag1: `Termos`,
        },
        // ---- K ---- //
        {
            letter: `K`,
            id: "K0",
            title: `K`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#K`
        },
        {
            letter: `K`,
            id: "K1",
            title: `Know Your Costumer (KYC)`,
            subtitle: `Conhecido também pelo termo “Conheça seu cliente”. É um procedimento padrão de empresas financeiras para validarem e reconhecerem seus clientes como forma de segurança.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/know-your-costumer-kyc-glossary.html`,
            tag: `Economia`,
            tag1: `Business`,
            tag2: `Termos`,
        },
        // ---- L ---- //
        {
            letter: `L`,
            id: "L0",
            title: `L`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#L`
        },
        {
            letter: `L`,
            id: "L7",
            title: `Lua`,
            subtitle: `Uma expressão utilizada para descrever uma criptomoeda em tendência de alta.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/lua-glossary.html`,
            tag: `Termos`,
        },
        // ---- M ---- //
        {
            letter: `M`,
            id: "M0",
            title: `M`,
            subtitle: `.`,
            date: `02/05/2022`,
            url: `#M`
        },
        {
            letter: `M`,
            id: "M3",
            title: `Mãos fracas`,
            subtitle: `Termo para classificar aqueles que não seguram seus ativos ou não segue sua estratégia de investimento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/maos-fracas-glossary.html`,
            tag: `Termos`,
        },
        // ---- P ---- // 
        {
            letter: `P`,
            id: "P0",
            title: `P`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#P`
        },
        {
            letter: `P`,
            id: "P2",
            title: `Peer-to-Peer (P2P)`,
            subtitle: `Quando duas partes estão conectadas e compartilham recursos sem a necessidade de uma parte centralizadora.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/peer-to-peer-p2p-glossary.html`,
            tag: `Business`,
            tag1: `Termos`,
        },
        // ---- R ---- //
        {
            letter: `R`,
            id: "R0",
            title: `R`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#R`
        },
        {
            letter: `R`,
            id: "R2",
            title: `Rekt`,
            subtitle: `Uma gíria com origem na palavra “destruído” (Wrecked). Geralmente descreve quando algo dá terrivelmente errado. Em cripto, geralmente é atribuído a trades ou investimentos ruins.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/rekt-glossary.html`,
            tag: `Termo`,
        },

    ]
    const tradingGlossaryArray = [
        //---- A ---- //
        {
            letter: `A`,
            id: "A0",
            title: `A`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#A`,
        },
        {
            letter: `A`,
            id: "A5",
            title: `Alta Histórica (ATH)`,
            subtitle: `O preço mais alto que uma criptomoeda chegou em comparação a outra moeda, como Dólar, Euro, Real, BTC, ETH, Etc...`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/alta-historica-ath-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A21",
            title: `Annual Percentage Rate (APR)`,
            subtitle: `Conhecido como Taxa Percentual Anual. APR é o retorno esperado de um investimento com uma taxa fixa. APR não leva em consideração juros compostos.`,
            date: `07/06/2022`,
            url: `D:/PIC/src/academy/glossary/annual-percentage-rate-apr-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A22",
            title: `Annual Percentage Yield (APY)`,
            subtitle: `Conhecido como Rendimento Percentual Anual. APY é o retorno esperado de um investimento contabilizando os juros compostos do capital reinvestido.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/annual-percentage-yield-apy-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A14",
            title: `Arbitragem`,
            subtitle: `Estratégia de investimento que consiste em comprar e vender um ativo em diferentes mercados e tirar vantagem da diferença de preços para gerar lucro.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/arbitragem-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `A`,
            id: "A16",
            title: `Ask`,
            subtitle: `O preço mais baixo que um vendedor aceita em vender sua ordem quando está operando em uma Exchange.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ask-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        //---- B ----//
        {
            letter: `B`,
            id: "B0",
            title: `B`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#B`,
        },
        {
            letter: `B`,
            id: "B1",
            title: ` Baixa Histórica (ATL)`,
            subtitle: `O preço mais baixo que uma criptomoeda chegou em comparação a outra moeda, como Dólar, Euro, Real, BTC, ETH, Etc...`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/baixa-historica-atl-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B4",
            title: `Bandas de Bollinger`,
            subtitle: `Indicador da análise técnica que mede a volatilidade de um mercado. Formada por duas bandas laterais e uma média móvel simples  (MA)`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bandas-de-bollinger-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B5",
            title: `Bear Market`,
            subtitle: `Tendência de queda nos preços de um mercado. É um termo usado de forma abrangente não só em relação a criptomoedas mas também em mercados tradicionais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bear-market-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B6",
            title: `Bearish`,
            subtitle: `Sentimento negativo em relação ao mercado, onde investidores acreditam na queda do valor de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bearish-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B10",
            title: `Bid`,
            subtitle: `Tratando-se de mercados financeiros, Bid é o valor mais alto que compradores estão dispostos a pagar por um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bid-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B11",
            title: `Bid-Ask Spread`,
            subtitle: `A diferença entre o preço mais baixo que vendedores estão dispostos a vender (Ask) e o preço mais alto que compradores estão dispostos a comprar (Bid) no order book de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bid-ask-spread-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B25",
            title: `Break-Even`,
            subtitle: `Ponto na qual o custo total de uma operação é equivalente ao seu retorno. Ou seja, não terá lucro nem prejuízo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/break-even-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B26",
            title: `Bull Market`,
            subtitle: `Tendência de alta nos preços de um mercado. É um termo usado de forma abrangente não só em relação a criptomoedas mas também em mercados tradicionais.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bull-market-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `B`,
            id: "B27",
            title: `Bullish`,
            subtitle: `Sentimento positivo em relação ao mercado, onde investidores acreditam na alta do valor de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/bullish-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- C ---- //
        {
            letter: `C`,
            id: "C0",
            title: `C`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#C`
        },
        {
            letter: `C`,
            id: "C1",
            title: `Candlestick`,
            subtitle: `Também conhecido como velas, é uma representação gráfica na qual constam informações do preço de abertura, fechamento, máximas e mínimas de certo período de tempo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/candlestick-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `C`,
            id: "C9",
            title: `Confluência`,
            subtitle: `Quando diversas métricas de análise técnica, indicadores e sinais gráficos se combinam para formar uma análise mais precisa.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/confluencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- D ---- //
        {
            letter: `D`,
            id: "D0",
            title: `D`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#D`
        },
        {
            letter: `D`,
            id: "D1",
            title: `Dead Cat Bounce`,
            subtitle: `Conhecido como “Salto do Gato Morto” é um movimento gráfico que representa uma recuperação em uma tendência de queda seguida de continuação da queda.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dead-cat-bounce-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `D`,
            id: "D12",
            title: `Divergência`,
            subtitle: `Quando o preço de um ativo e um indicador técnico estão apontando para direções diferentes.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/divergencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `D`,
            id: "D16",
            title: `Dump`,
            subtitle: `Termo comum da análise técnica. Refere-se a um movimento de queda do preço de mercado de um ativo, ou quando um indivíduo ou organização vende suas posições, derrubando o preço de forma brusca.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/dump-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- F ---- //
        {
            letter: `F`,
            id: "F0",
            title: `F`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#F`
        },
        {
            letter: `F`,
            id: "F6",
            title: `Forex (FX)`,
            subtitle: `Forex significa Foreign Exchange Markets. É o mercado global de câmbio de moedas fiduciárias.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/forex-fx-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- G ---- //
        {
            letter: `G`,
            id: "G0",
            title: `G`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#G`
        },
        {
            letter: `G`,
            id: "G8",
            title: `Golden Cross`,
            subtitle: `Padrão gráfico Bullish onde se analisa duas médias móveis uma de curto-prazo e outra de longo-prazo. É formado um Golden Cross, quando a média móvel de curto prazo rompe para cima da média móvel de longo prazo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/golden-cross-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- H ---- //
        {
            letter: `H`,
            id: "H0",
            title: `H`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#H`
        },
        {
            letter: `H`,
            id: "H7",
            title: `High-Frequency Trading (HFT)`,
            subtitle: `Conhecido como trading de alta freqüência. É uma forma de negociação na qual se utiliza de sistemas para realizar diversas operações em um curto intervalo de tempo, geralmente segundo ou milissegundos.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/high-frequency-trading-hft-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- L ---- //
        {
            letter: `L`,
            id: "L0",
            title: `L`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#L`
        },
        {
            letter: `L`,
            id: "L3",
            title: `Liquidação Forçada`,
            subtitle: `Quando a posição alavancada de uma operação é fechada forçadamente. Acontece quando a operação não possui margem o suficiente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/liquidacao-forcada-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- M ---- //
        {
            letter: `M`,
            id: "M0",
            title: `M`,
            subtitle: `.`,
            date: `02/05/2022`,
            url: `#M`
        },
        {
            letter: `M`,
            id: "M6",
            title: `Market Maker`,
            subtitle: `Participantes do mercado que enviam ordens de compra ou venda que não são executadas imediatamente, permanecendo no livro de ofertas até que sejam concluídas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/market-maker-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `M`,
            id: "M7",
            title: `Market Taker`,
            subtitle: `Participantes do mercado que enviam ordens de compra ou venda que são totalmente executadas com as ordens já disponíveis no mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/market-taker-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- O ---- //
        {
            letter: `O`,
            id: "O0",
            title: `O`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#O`
        },
        {
            letter: `O`,
            id: "O1",
            title: `OCO/OCOI`,
            subtitle: `OCO (ombro-cabeça-ombro) e OCOI (ombro-cabeça-ombro-invertido) são padrões gráficos da análise técnica que apresentam uma reversão de tendência de preço de um ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ocoocoi-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O3",
            title: `Open/Close Price`,
            subtitle: `Preço de abertura e fechamento, se refere respectivamente ao preço na qual uma criptomoeda iniciou um período, por exemplo, o começo do dia. E o preço na qual ela encerrou ao fim do período, por exemplo, o final do dia.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/openclose-price-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O6",
            title: `Ordem à Mercado`,
            subtitle: `Uma ordem de mercado onde um Taker pega o melhor valor disponível de Bid ou Ask. Sendo sua ordem completamente efetuada com base no preço e quantidade atual do Order Book.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-a-mercado-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O7",
            title: `Ordem Iceberg`,
            subtitle: `Uma ordem de mercado de grande quantidade que é dividida em partes menores que serão enviadas em períodos intervalados. Seu objetivo é que o investidor faça a transação sem realizar grandes impactos no mercado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-iceberg-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O8",
            title: `Ordem limite`,
            subtitle: `Uma ordem de mercado na qual realiza a operação quando o preço de um ativo chega no preço previamente definido.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-limite-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O9",
            title: `Ordem Tudo ou Nada (TON)`,
            subtitle: `Uma ordem de mercado que quando definida, ou se executa o valor total da ordem ou não a executa. Evita que a ordem seja preenchida de forma parcial.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/ordem-tudo-ou-nada-ton-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `O`,
            id: "O10",
            title: `Order Book`,
            subtitle: `Uma lista eletrônica que consta as ordens de compra e venda não executadas e disponíveis em um mercado ou Exchange.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/order-book-glossary.html`,
            tag: `Trading`,
        },
        // ---- P ---- // 
        {
            letter: `P`,
            id: "P0",
            title: `P`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#P`
        },
        {
            letter: `P`,
            id: "P7",
            title: `Preço Médio`,
            subtitle: `É uma estratégia de investimento na qual se aplica um valor fixo de forma regular em um período definido, sem considerar o preço do ativo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/preco-medio-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `P`,
            id: "P9",
            title: `Price Action`,
            subtitle: `O movimento do preço de um ativo financeiro através de um período de tempo. Ao ser exibido em um gráfico, permite aos traders identificarem padrões para realizar operações.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/price-action-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `P`,
            id: "P17",
            title: `Pump and Dump`,
            subtitle: `Manipulação de mercado onde se levanta o preço de um ativo no mercado, antes de realizar lucro levando-o para baixo novamente.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/pump-and-dump-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- R ---- //
        {
            letter: `R`,
            id: "R0",
            title: `R`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#R`
        },
        {
            letter: `R`,
            id: "R3",
            title: `Relative Strenght Index (RSI)`,
            subtitle: `RSI é um indicador técnico muito comum na análise gráfica. Utiliza do preço de fechamento para identificar se um ativo está em sobre-compra ou sobre-venda, RSI oscila entre 0-100 sendo que abaixo de 30 é considerado em sobre-venda (venda maior que compra) e maior que 70 é considerado sobre-compra (compra maior que venda).`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/relative-strength-index-rsi-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `R`,
            id: "R5",
            title: `Resistência`,
            subtitle: `Termo da análise técnica que representa uma área em que o preço, ao encontrar a resistência, tende a recuar quando o ativo está em alta.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/resistencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `R`,
            id: "R10",
            title: `Rompimento`,
            subtitle: `Momento em que o preço de um ativo sai de um padrão ou área definida. Geralmente rompendo um suporte ou uma resistência, Invalidando ou confirmando um movimento.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/rompimento-glossary.html`,
            tag: `Blockchain`,
            tag1: `Trading`,
        },
        // ---- S ---- //
        {
            letter: `S`,
            id: "S0",
            title: `S`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#S`
        },
        {
            letter: `S`,
            id: "S19",
            title: `Stop-Loss`,
            subtitle: `Ordem a mercado pré-definido que é acionada como um limite para uma operação que dê errado.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/stop-loss-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `S`,
            id: "S21",
            title: `Suporte`,
            subtitle: `Termo da análise técnica que representa uma área em que o preço, ao encontrar o suporte, tende a subir quando o ativo está em queda.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/suporte-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- T ---- //
        {
            letter: `T`,
            id: "T0",
            title: `T`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#T`
        },
        {
            letter: `T`,
            id: "T2",
            title: `Tendência`,
            subtitle: `Direção na qual o preço está se encaminhando ou provavelmente irá se encaminhar. É definida pelo sentimento geral do mercado em relação ao ativo ou economia. Analistas utilizam de métricas, e indicadores para encontrar tendências de mercado que podem ser positivas, negativas ou neutras.`,
            date: `25/05/2022`,
            url: `D:/PIC/src/academy/glossary/tendencia-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `T`,
            id: "T8",
            title: `Trading de Margem`,
            subtitle: `Quando o usuário realiza empréstimos em uma corretora ou Exchange para operar.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/trading-de-margem-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        // ---- V ---- //
        {
            letter: `V`,
            id: "V0",
            title: `V`,
            subtitle: ``,
            date: `02/05/2022`,
            url: `#V`
        },
        {
            letter: `V`,
            id: "V4",
            title: `Volatilidade`,
            subtitle: `Quanto um ativo mudou de preço e em quanto tempo.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/volatilidade-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },
        {
            letter: `V`,
            id: "V5",
            title: `Volume`,
            subtitle: `Em mercados, refere-se a quantidade do ativo que foi comprado e vendido no período definido, geralmente 24 horas.`,
            date: `02/05/2022`,
            url: `D:/PIC/src/academy/glossary/volume-glossary.html`,
            tag: `Economia`,
            tag1: `Trading`,
        },

    ]
    // --- NEWS ---//

    const blockchainNewsArray = [

        {
            id: "3",
            title: `Bitfarm vende 3000 Bitcoins como estratégia para pagar dívidas`,
            date: `21/06/2022`,
            url: `/news/newsContent/bitfarm-vende-3000-bitcoins-como-estrategia-para-pagar-dividas`,
            img: `/imagesNews/bitfarm-vende-3000.png`,
            alt: `Bitfarm Vende 3000 Bitcoins`,
            tag: `Blockchain`,
            tag1: `Bitcoin`,
            readtime: `5m`
        },
        {
            id: "2",
            title: `"Morte do Bitcoin" atinge alta histórica em número de procuras no Google`,
            date: `21/06/2022`,
            url: `/news/newsContent/morte-do-bitcoin-atinge-alta-historica-em-numero-de-procuras-no-google`,
            img: `/images/CryptoPICLogo.png`,
            alt: `Cripto PIC Logo`,
            tag: `Blockchain`,
            readtime: `5m`
        },
        {
            id: "1",
            title: `Rede Optimism é atacada por Exploit e perde 20M de tokens OP`,
            date: `13/06/2022`,
            url: `D:/PIC/src/news/newsContent/rede-optimism-e-atacada-por-exploit-e-perde-20-m-de-tokens-op.html`,
            img: `D:/PIC/images/CryptoPICLogo.png`,
            alt: `Cripto PIC Logo`,
            tag: `Blockchain`,
            readtime: `3m`
        },

    ]
    const economyNewsArray = [

        {
            id: "2",
            title: `CryptoPunk doado para Ucrânia é vendido por U$100 Mil`,
            date: `21/06/2022`,
            url: `/news/newsContent/cryptopunk-doado-para-ucrania-e-vendido-por-100-mil-dolares`,
            img: `/images/CryptoPICLogo.png`,
            alt: `Cripto PIC Logo`,
            tag: `Economia`,
            readtime: `3m`
        },
        {
            id: "1",
            title: `Inflação Americana tem sua maior alta em mais de 40 anos`,
            date: `13/06/2022`,
            url: `D:/PIC/src/news/newsContent/inflacao-americana-tem-sua-maior-alta-em-mais-de-40-anos.html`,
            img: `D:/PIC/images/CryptoPICLogo.png`,
            alt: `Cripto PIC Logo`,
            tag: `Economia`,
            readtime: `3m`
        },

    ]
    const tradingNewsArray = [

        {
            id: "4",
            title: `PIC | Trading News (21/06/2022)`,
            date: `21/06/2022`,
            url: `D:/PIC/src/news/newsContent/pic-trading-news-21-06-2022`,
            img: `D:/PIC/images/CryptoPICLogo.png`,
            alt: `Cripto PIC Logo`,
            tag: `Trading`,
            readtime: `5m`
        },
        {
            id: "3",
            title: `PIC | Trading News (20/06/2022)`,
            date: `20/06/2022`,
            url: `D:/PIC/src/news/newsContent/pic-trading-news-20-06-2022`,
            img: `D:/PIC/images/CryptoPICLogo.png`,
            alt: `Cripto PIC Logo`,
            tag: `Trading`,
            readtime: `3m`
        },
        {
            id: "2",
            title: `PIC | Trading News (13/06/2022)`,
            date: `13/06/2022`,
            url: `D:/PIC/src/news/newsContent/pic-trading-news-13-06-2022.html`,
            img: `D:/PIC/images/CryptoPICLogo.png`,
            alt: `Cripto PIC Logo`,
            tag: `Trading`,
            readtime: `3m`
        },

        {
            id: "1",
            title: `PIC | Trading News (12/06/2022)`,
            date: `12/06/2022`,
            url: `D:/PIC/src/news/newsContent/pic-trading-news-12-06-2022.html`,
            img: `D:/PIC/images/CryptoPICLogo.png`,
            alt: `Cripto PIC Logo`,
            tag: `Trading`,
            readtime: `3m`
        },

    ]

    // --------------------------------------- VARIABLES --------------------------------//

    let search = document.getElementById('search');
    let search_icon = document.getElementById('search_icon');
    let search_container = document.getElementById('search_container');
    let search_box = document.getElementById('search_box');
    let search_box_array = document.getElementsByClassName('searchBox')[0];
    let coinsTable = document.getElementsByClassName('sort-table')[0];


    const glossaryList = document.getElementById("glossaryList");
    const glossarySearchBar = document.getElementById("glossarySearch");

    let glossaryContent = [];

    const newsMainContentGrid = document.getElementById("mainContentGrid")
    const newsPageMainContentGridBlockchain = document.getElementById("mainContentGridBlockchain")
    const newsPageMainContentGridEconomy = document.getElementById("mainContentGridEconomy")
    const newsPageMainContentGridTrading = document.getElementById("mainContentGridTrading")





    // ----------------------------------END OF VARIABLES --------------------------------//

    // --- HEADER RESPONSIVE --- //

    class MobileNavbar {
        constructor(mobileMenu, menu, navLinks) {
            this.mobileMenu = document.querySelector(mobileMenu);
            this.menu = document.querySelector(menu);
            this.navLinks = document.querySelectorAll(navLinks);
            this.activeClass = "active";

            this.handleClick = this.handleClick.bind(this);
        }

        animateLinks() {
            this.navLinks.forEach((link) => {
                link.style.animation
                    ? (link.style.animation = "")
                    : (link.style.animation = 'navLinkFade 0.3s ease forwards 0.1s')
            });
        }

        handleClick() {
            this.menu.classList.toggle(this.activeClass);
            this.mobileMenu.classList.toggle(this.activeClass);
            this.animateLinks();
        }

        addClickEvent() {
            this.mobileMenu.addEventListener("click", this.handleClick);
        }

        init() {
            if (this.mobileMenu) {
                this.addClickEvent();
            }
            return this;
        }
    }

    const mobileNavBar = new MobileNavbar(
        ".mobileMenu",
        ".menu",
        ".menu li",
    );
    mobileNavBar.init();




    // --- MAIN SEARCH BAR --- //
    search.addEventListener('click', function () {
        search.classList.add('active');
        search_icon.classList.add('active');
        search_container.classList.add('active');
        search_box.classList.add('active');
        search.placeholder = "O que você procura?";

    });

    search_icon.addEventListener('click', function () {
        search.classList.add('active');
        search_icon.classList.add('active');
        search_container.classList.add('active');
        search_box.classList.add('active');
        search.placeholder = "O que você procura?";
        search.focus()
    });

    document.addEventListener('click', function (e) {
        if (e.target.id !== 'search' && e.target.id !== "search_icon" && e.target.id !== "search_box") {
            search.classList.remove('active');
            search_icon.classList.remove('active');
            search_container.classList.remove('active');
            search_box.classList.remove('active');
            search.placeholder = "Pesquisar";
            search.value = "";
        }
    })

    coins.forEach(element => {
        const { img, name, symbol, url, id } = element;

        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = ` <img src="${img}" alt="">
            <div class="searchBoxContent">
            <p> ${name} </p>
                <span>${symbol}</span>
            </div>
            <div class="searchBoxId">
                #${id}
            </div>`;
        search_box_array.appendChild(card);
    });
    search.addEventListener('keyup', () => {
        let filter = search.value.toUpperCase();
        let a = search_box_array.getElementsByTagName('a');
        for (let i = 0; i < a.length; i++) {
            let b = a[i].getElementsByClassName('searchBoxContent')[0]
            let c = b.getElementsByTagName('p')[0]
            let d = b.getElementsByTagName('span')[0]
            let TextValue = c.textContent || c.innerText;
            let SymbolValue = d.textContent || d.innerText;

            if (TextValue.toUpperCase().indexOf(filter) > -1 || SymbolValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = '';
                search_box.style.visibility = "visible";
                search_box.style.opacity = 1;
            } else {
                a[i].style.display = 'none'
            }
            if (search.value == 0)
                search_box.style.visibility = "hidden"
        };



    });

    // ---------------------------------- GLOSSARY --------------------------------//

    // --- GLOSSARY MAIN --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/glossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });

        const loadGlossary = function () {
            glossaryContent = glossaryArray;
            displayContent(glossaryContent)
        }

        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent
                .map((content) => {

                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title} <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // --- GLOSSARY BITCOIN --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/academyBitcoin/academyBitcoinGlossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });


        const loadGlossary = function () {
            glossaryContent = bitcoinGlossaryArray;
            displayContent(glossaryContent)
        }
        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title}
                                <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // --- GLOSSARY BLOCKCHAIN --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/academyBlockchain/academyBlockchainGlossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });


        const loadGlossary = function () {
            glossaryContent = blockchainGlossaryArray;
            displayContent(glossaryContent)
        }
        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title}
                                <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // --- GLOSSARY BUSINESS --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/academyBusiness/academyBusinessGlossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });


        const loadGlossary = function () {
            glossaryContent = businessGlossaryArray;
            displayContent(glossaryContent)
        }
        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title}
                                <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // --- GLOSSARY COMPUTERS --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/academyComputers/academyComputersGlossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });


        const loadGlossary = function () {
            glossaryContent = computersGlossaryArray;
            displayContent(glossaryContent)
        }
        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title}
                                <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // --- GLOSSARY DEFI --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/academyDeFi/academyDeFiGlossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });


        const loadGlossary = function () {
            glossaryContent = defiGlossaryArray;
            displayContent(glossaryContent)
        }
        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title}
                                <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // --- GLOSSARY ECONOMY --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/academyEconomy/academyEconomyGlossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });


        const loadGlossary = function () {
            glossaryContent = economyGlossaryArray;
            displayContent(glossaryContent)
        }
        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title}
                                <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // --- GLOSSARY ETHEREUM --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/academyEthereum/academyEthereumGlossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });


        const loadGlossary = function () {
            glossaryContent = ethereumGlossaryArray;
            displayContent(glossaryContent)
        }
        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title}
                                <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // --- GLOSSARY HACKING --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/academyHacking/academyHackingGlossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });


        const loadGlossary = function () {
            glossaryContent = hackingGlossaryArray;
            displayContent(glossaryContent)
        }
        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title}
                                <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // --- GLOSSARY NFT --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/academyNFT/academyNFTGlossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });


        const loadGlossary = function () {
            glossaryContent = nftGlossaryArray;
            displayContent(glossaryContent)
        }
        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title}
                                <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // --- GLOSSARY TERMS --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/academyTerms/academyTermsGlossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });


        const loadGlossary = function () {
            glossaryContent = termsGlossaryArray;
            displayContent(glossaryContent)
        }
        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title}
                                <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // --- GLOSSARY TRADING --- //

    if (window.location.href.includes("file:///D:/PIC/src/academy/academyTrading/academyTradingGlossary.html")) {

        glossarySearchBar.addEventListener('keyup', (e) => {
            let searchString = e.target.value.toLowerCase();
            let filteredContent = glossaryContent.filter(content => {
                return (
                    content.title.toLowerCase().includes(searchString)
                )
            });
            displayContent(filteredContent)
        });


        const loadGlossary = function () {
            glossaryContent = tradingGlossaryArray;
            displayContent(glossaryContent)
        }
        const displayContent = (glossaryContent) => {
            const htmlString = glossaryContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }

                    return `
                        <li class="glossaryContentBox">
                        <a href="${content.url}" class="letterContent" id="${content.id}">
                            <h2 class="contentTitle" id="${content.id}Text">
                                ${content.title}
                                <div class="guide-content-box-detail-tag">
                                <p class="tag" id="${content.id}Tag">${content.tag}</p>
                                <p class="${tagClass}">${addTag}
                                </p>
                                <p class="${tagClass2}">${addTag2}
                                </p>
                                <p class="info" id="${content.id}Info">${content.date}</p>
                            </div>
                            </h2>
        
                            <div class="contentDescription">
                                ${content.subtitle}
                            </div>
                        </a>
        
                        </li>
                    `;
                }).join('');

            glossaryList.innerHTML = htmlString;
        }
        loadGlossary()

    }

    // ---------------------------------- NEWS --------------------------------//

    // --- NEWS MAIN --- //

    if (window.location.href.includes("D:/PIC/src/news.html")) {

        let slicedNewsBlockchainArray = blockchainNewsArray.slice(0, 3);

        const loadNews = function () {
            newsContent = slicedNewsBlockchainArray;
            displayContent(newsContent)
        }
        const displayContent = (newsContent) => {
            const htmlString = newsContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }
                    return `

                        <a class="guide-content" href="${content.url}">
                            <div class="guide-content-box">
                                <div class="guide-content-box-img"> 
                                <img src="${content.img}" alt="${content.alt}">
                                </div>
                                
                                <div class="guide-content-box-name">
                                    <p class="box-text">${content.title}</p>
                                </div>

                                <div class="guide-content-box-detail"> 

                                    <div class="guide-content-box-detail-tag">
                                        <p class="tag">${content.tag}</p>
                                        <p class="${tagClass}">${addTag}</p>
                                        <p class="${tagClass2}">${addTag2}</p>
                                        <p class="tag">${content.date}</p>
                                    </div>

                                    <div class="guide-content-box-detail-info">
                                        <p class="info">${content.readtime}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        `;
                }).join('');

            newsPageMainContentGridBlockchain.innerHTML = htmlString;
        }
        loadNews()
    }
    if (window.location.href.includes("D:/PIC/src/news.html")) {

        let slicedNewsEconomyArray = economyNewsArray.slice(0, 3);

        const loadNews = function () {
            newsContent = slicedNewsEconomyArray;
            displayContent(newsContent)
        }
        const displayContent = (newsContent) => {
            const htmlString = newsContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }
                    return `

                        <a class="guide-content" href="${content.url}">
                            <div class="guide-content-box">
                                <div class="guide-content-box-img"> 
                                <img src="${content.img}" alt="${content.alt}">
                                </div>
                                
                                <div class="guide-content-box-name">
                                    <p class="box-text">${content.title}</p>
                                </div>

                                <div class="guide-content-box-detail"> 

                                    <div class="guide-content-box-detail-tag">
                                        <p class="tag">${content.tag}</p>
                                        <p class="${tagClass}">${addTag}</p>
                                        <p class="${tagClass2}">${addTag2}</p>
                                        <p class="tag">${content.date}</p>
                                    </div>

                                    <div class="guide-content-box-detail-info">
                                        <p class="info">${content.readtime}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        `;
                }).join('');

            newsPageMainContentGridEconomy.innerHTML = htmlString;
        }
        loadNews()
    }
    if (window.location.href.includes("D:/PIC/src/news.html")) {

        let slicedNewsTradingArray = tradingNewsArray.slice(0, 3)

        const loadNews = function () {
            newsContent = slicedNewsTradingArray;
            displayContent(newsContent)
        }
        const displayContent = (newsContent) => {
            const htmlString = newsContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }
                    return `

                        <a class="guide-content" href="${content.url}">
                            <div class="guide-content-box">
                                <div class="guide-content-box-img"> 
                                <img src="${content.img}" alt="${content.alt}">
                                </div>
                                
                                <div class="guide-content-box-name">
                                    <p class="box-text">${content.title}</p>
                                </div>

                                <div class="guide-content-box-detail"> 

                                    <div class="guide-content-box-detail-tag">
                                        <p class="tag">${content.tag}</p>
                                        <p class="${tagClass}">${addTag}</p>
                                        <p class="${tagClass2}">${addTag2}</p>
                                        <p class="tag">${content.date}</p>
                                    </div>

                                    <div class="guide-content-box-detail-info">
                                        <p class="info">${content.readtime}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        `;
                }).join('');

            newsPageMainContentGridTrading.innerHTML = htmlString;
        }
        loadNews()
    }

    // --- NEWS BLOCKCHAIN --- //

    if (window.location.href.includes("D:/PIC/src/news/news-blockchain.html")) {
        const loadNews = function () {
            newsContent = blockchainNewsArray;
            displayContent(newsContent)
        }
        const displayContent = (newsContent) => {
            const htmlString = newsContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }
                    return `

                        <a class="guide-content" href="${content.url}">
                            <div class="guide-content-box">
                                <div class="guide-content-box-img"> 
                                <img src="${content.img}" alt="${content.alt}">
                                </div>
                                
                                <div class="guide-content-box-name">
                                    <p class="box-text">${content.title}</p>
                                </div>

                                <div class="guide-content-box-detail"> 

                                    <div class="guide-content-box-detail-tag">
                                        <p class="tag">${content.tag}</p>
                                        <p class="${tagClass}">${addTag}</p>
                                        <p class="${tagClass2}">${addTag2}</p>
                                        <p class="tag">${content.date}</p>
                                    </div>

                                    <div class="guide-content-box-detail-info">
                                        <p class="info">${content.readtime}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        `;
                }).join('');

            newsMainContentGrid.innerHTML = htmlString;
        }
        loadNews()
    }

    // --- NEWS TRADING --- //

    if (window.location.href.includes("D:/PIC/src/news/news-trading.html")) {
        const loadNews = function () {
            newsContent = tradingNewsArray;
            displayContent(newsContent)
        }
        const displayContent = (newsContent) => {
            const htmlString = newsContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }
                    return `

                        <a class="guide-content" href="${content.url}">
                            <div class="guide-content-box">
                                <div class="guide-content-box-img"> 
                                <img src="${content.img}" alt="${content.alt}">
                                </div>
                                
                                <div class="guide-content-box-name">
                                    <p class="box-text">${content.title}</p>
                                </div>

                                <div class="guide-content-box-detail"> 

                                    <div class="guide-content-box-detail-tag">
                                        <p class="tag">${content.tag}</p>
                                        <p class="${tagClass}">${addTag}</p>
                                        <p class="${tagClass2}">${addTag2}</p>
                                        <p class="tag">${content.date}</p>
                                    </div>

                                    <div class="guide-content-box-detail-info">
                                        <p class="info">${content.readtime}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        `;
                }).join('');

            newsMainContentGrid.innerHTML = htmlString;
        }
        loadNews()
    }

    // --- NEWS ECONOMY --- //

    if (window.location.href.includes("D:/PIC/src/news/news-economy.html")) {
        const loadNews = function () {
            newsContent = economyNewsArray;
            displayContent(newsContent)
        }
        const displayContent = (newsContent) => {
            const htmlString = newsContent

                .map((content) => {


                    let tagClass = "tag";
                    let addTag
                    let tagClass2 = "tag";
                    let addTag2
                    if (content.tag1 != undefined) { addTag = content.tag1; tagClass = "tag" } else {
                        addTag = ""; tagClass = "hidenTag"
                    };

                    if (content.tag2 != undefined) { addTag2 = content.tag2; tagClass2 = "tag" } else {
                        addTag2 = ""; tagClass2 = "hidenTag"
                    }
                    return `

                        <a class="guide-content" href="${content.url}">
                            <div class="guide-content-box">
                                <div class="guide-content-box-img"> 
                                <img src="${content.img}" alt="${content.alt}">
                                </div>
                                
                                <div class="guide-content-box-name">
                                    <p class="box-text">${content.title}</p>
                                </div>

                                <div class="guide-content-box-detail"> 

                                    <div class="guide-content-box-detail-tag">
                                        <p class="tag">${content.tag}</p>
                                        <p class="${tagClass}">${addTag}</p>
                                        <p class="${tagClass2}">${addTag2}</p>
                                        <p class="tag">${content.date}</p>
                                    </div>

                                    <div class="guide-content-box-detail-info">
                                        <p class="info">${content.readtime}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        `;
                }).join('');

            newsMainContentGrid.innerHTML = htmlString;
        }
        loadNews()
    }

    // ---------------------------------- COINS --------------------------------//

    // --- COINS TABLE --- //

    if (window.location.href == "file:///D:/PIC/src/coins.html") {
        coins.forEach(element => {
            const { img, name, symbol, url, id } = element;
            let row = document.createElement('tbody');
            row.innerHTML = `
                            <tbody class="table-body">
                    
                            <tr class="table-row">
                            <td class="table-number1">${id}</td>
            
                            <td class="coin-name">
                            <div class="coin-namecontainer">
                            <a href="${url}">
                                <div class="coin-name-img-nm-sb">
                                    <img class="coin-logo" src="${img}" alt="" loading="lazy">
                                    <div class="coin-name-nm-sb">
                                        <p>${name}</p>
                                        <p class="coin-name-sb">${symbol}</p>
                                    </div>
                                </div>
                            </a>
            
                            </div>
                            </td>
            
                            <td></td>
            
                            <td class="buy-buttom">
                                <a href="../src/exchange.html">
                                    <div><p class="buy-buttom-text">Buy</p></div>
                                </a>
                            </td>
            
                            <td class="pricetd">
                                <div class="price">
                                    <a href="${url}">
                                        <span>$47,678.90</span>
                                    </a>
                                </div>   
                            </td>
            
                            <td class="change-1h">
                                <span class="bitcoin-price-change-1h">
                                    0.19%
                                </span>
                            </td>
            
                            <td class="change-24h">
                                <span class="bitcoin-price-change-24h">
                                    0.81%
                                </span>
                            </td>
            
                            <td class="change-7d">
                                <span class="bitcoin-price-change-7d">
                                    11.67%
                                </span>
                            </td>
            
                            <td class="volume-24h">
                                <span class="bitcoin-volume-24h">
                                    $24,774,473,174
                                </span>
                            </td>
            
                            <td class="mktcap">
                                <span class="bitcoin-mktcap">
                                    $893,251,805,586
                                </span>
                            </td>
            
                        </tr>
                    
                        </tbody>
                    `

            coinsTable.appendChild(row);
        });
    }








}
