// SPDX-License-Identifier: MIT
// (c)2021-2024 Atlas
// security-contact: atlas@vialabs.io

const chainsConfig = {
  "3797": { // AlveyChain Mainnet
    name: "AlveyChain Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x65EEc58ef38882422E887B82f7085e9a9C35dCA1",
    featureGateway: "",
    feeToken: "0x7a0b5E86d2C1e873E005780419eeE16ba741808a",
    weth: "0xCb3e9919C56efF1004E54175a01e39163a352129",
    rpc: "https://3797.rpc.vialabs.io/",
    explorer: "https://alveyscan.com/"
  },
  "42161": { // Arbitrum Mainnet
    name: "Arbitrum Mainnet",
    network: "mainnet",
    type: "evm",
    circleTokenMessanger: "0x19330d10D9Cc8751218eaf51E8885D058642E08A",
    circleMessageTransmitter: "0xC30362313FBBA5cf9163F0bb16a0e01f01A896ca",
    circleTokenMinter: "0xE7Ed1fa7f45D05C508232aa32649D89b73b8bA48",
    message: "0x65EEc58ef38882422E887B82f7085e9a9C35dCA1",
    featureGateway: "",
    feeToken: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    weth: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    usdc: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    rpc: "https://42161.rpc.vialabs.io/",
    explorer: "https://arbiscan.io/"
  },
  "1313161554": { // Aurora Mainnet
    name: "Aurora Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0xf0861412E46E34DaF7A1fe3fe805e7f713cA3bD9",
    feeToken: "0xB12BFcA5A55806AaF64E99521918A4bf0fC40802",
    weth: "0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB",
    rpc: "https://1313161554.rpc.vialabs.io/",
    explorer: "https://explorer.aurora.dev/"
  },
  "43114": { // Avalanche Mainnet
    name: "Avalanche Mainnet",
    network: "mainnet",
    type: "evm",
    circleTokenMessanger: "0x6b25532e1060ce10cc3b0a99e5683b91bfde6982",
    circleMessageTransmitter: "0x8186359af5f57fbb40c6b14a588d2a59c0c29880",
    circleTokenMinter: "0x420f5035fd5dc62a167e7e7f08b604335ae272b8",
    message: "0x72E052Fa7f0788e668965d37B6c38C88703B7859",
    featureGateway: "",
    feeToken: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    weth: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
    usdc: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
    eurc: "0xc891eb4cbdeff6e073e859e987815ed1505c2acd",
    rpc: "https://43114.rpc.vialabs.io/",
    explorer: "https://snowtrace.io/"
  },
  "8453": { // Base Mainnet
    name: "Base Mainnet",
    network: "mainnet",
    type: "evm",
    circleTokenMessanger: "0x1682Ae6375C4E4A97e4B583BC394c861A46D8962",
    circleMessageTransmitter: "0xAD09780d193884d503182aD4588450C416D6F9D4",
    circleTokenMinter: "0xe45B133ddc64bE80252b0e9c75A8E74EF280eEd6",
    message: "0xe3b3274bb685F37C7f17a604039c77a6A16Cfc2a",
    featureGateway: "",
    feeToken: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    weth: "0x4200000000000000000000000000000000000006",
    usdc: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    rpc: "https://8453.rpc.vialabs.io/",
    explorer: "https://basescan.org/"
  },
  "56": { // Binance Mainnet
    name: "Binance Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x7b67dF6728E294db2eb173ac7c738a4627Ae5e11",
    featureGateway: "",
    feeToken: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
    weth: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    rpc: "https://56.rpc.vialabs.io/",
    explorer: "https://bscscan.com/"
  },
  "7171": {
    name: "BitRock Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x15AC559DA4951c796DB6620fAb286B96840D039A",
    featureGateway: "",
    feeToken: "0xD647a6E1F898c39bA594443c19De0872EA935310",
    weth: "0x413f0E3A440abA7A15137F4278121450416882d5",
    rpc: "https://7171.rpc.vialabs.io/",
    explorer: "https://explorer.bit-rock.io/"
  },
  "288": { // Boba Mainnet
    name: "Boba Mainnet",
    network: "mainnet",
    type: "evm",
    message: "",
    featureGateway: "",
    feeToken: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc",
    weth: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
    rpc: "https://288.rpc.vialabs.io/",
    explorer: "https://bobascan.com/"
  },
  "7700": { // Canto Mainnet
    name: "Canto Mainnet",
    network: "mainnet",
    type: "evm",
    message: "",
    featureGateway: "",
    feeToken: "0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd",
    weth: "0x826551890Dc65655a0Aceca109aB11AbDbD7a07B",
    rpc: "https://7700.rpc.vialabs.io/",
    explorer: "https://cantoscan.com/"
  },
  "42220": { // Celo Mainnet
    name: "Celo Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0xe3b3274bb685F37C7f17a604039c77a6A16Cfc2a",
    featureGateway: "",
    feeToken: "0x37f750B7cC259A2f741AF45294f6a16572CF5cAd",
    weth: "0x471EcE3750Da237f93B8E339c536989b8978a438",
    usdc: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
    rpc: "https://42220.rpc.vialabs.io/",
    explorer: "https://explorer.celo.org/mainnet/"
  },
  "1030": {
    name: "Conflux eSpace Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x15AC559DA4951c796DB6620fAb286B96840D039A",
    featureGateway: "",
    feeToken: "0x8f0fb159380176d324542b3a7933f0c2fd0e2d5f",
    weth: "0x14b2d3bc65e74dae1030eafd8ac30c533c976a9b",
    usdc: "0xfe97e85d13abd9c1c33384e796f10b73905637ce",
    rpc: "https://1030.rpc.vialabs.io/",
    explorer: "https://evm.confluxscan.net/"
  },
  "25": { // Cronos Mainnet
    name: "Cronos Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x2224ac62d65453a2317b995fc084e966e4bac2d5",
    featureGateway: "",
    feeToken: "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
    weth: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
    rpc: "https://25.rpc.vialabs.io/",
    explorer: "https://cronos.org/explorer/"
  },
  "1": { // Ethereum Mainnet
    name: "Ethereum Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x7b67dF6728E294db2eb173ac7c738a4627Ae5e11",
    featureGateway: "",
    feeToken: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    circleTokenMessanger: "0xbd3fa81b58ba92a82136038b25adec7066af3155",
    circleMessageTransmitter: "0x0a992d191deec32afe36203ad87d7d289a738f81",
    circleTokenMinter: "0xc4922d64a24675e16e1586e3e3aa56c06fabe907",
    weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    usdc: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    eurc: "0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c",
    rpc: "https://1.rpc.vialabs.io/",
    explorer: "https://etherscan.io/"
  },
  "250": { // Fantom Mainnet
    name: "Fantom Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x72E052Fa7f0788e668965d37B6c38C88703B7859",
    featureGateway: "",
    feeToken: "0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf",
    weth: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
    rpc: "https://250.rpc.vialabs.io/",
    explorer: "https://ftmscan.com/"
  },
  "14": { // Flare Mainnet
    name: "Flare Mainnet",
    network: "mainnet",
    type: "evm",
    message: "",
    featureGateway: "",
    feeToken: "0x96B41289D90444B8adD57e6F265DB5aE8651DF29",
    weth: "0x1D80c49BbBCd1C0911346656B529DF9E5c2F783d",
    rpc: "https://14.rpc.vialabs.io/",
    explorer: "https://flare-explorer.flare.network/"
  },
  "1777": { // Gauss Mainnet
    name: "Gauss Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0xfDdE8946A0A1755b3a74afE7b3383dEe4fb5712f",
    featureGateway: "",
    weth: "0xb45fC65405B1a28Bb24AF49fe2caa278525Fe977",
    feeToken: "0x2baFd05252ADcA1143b77a88A72E1022B59ad379",
    rpc: "https://1777.rpc.vialabs.io/",
    explorer: "https://www.explorer.gaussgang.com/"
  },
  "100": { // Gnosis Mainnet
    name: "Gnosis Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x75c0223A8f9f8f3baB3FbC6d151381C3C576Ba36",
    featureGateway: "",
    feeToken: "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
    weth: "0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d",
    rpc: "https://100.rpc.vialabs.io/",
    explorer: "https://gnosisscan.io/"
  },
  "1666600000": { // Harmony Mainnet
    name: "Harmony Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x440AA59AC28460a43537a2eA892d96Acd8eaBdb0",
    featureGateway: "",
    feeToken: "0x985458E523dB3d53125813eD68c274899e9DfAb4",
    weth: "0xcF664087a5bB0237a0BAd6742852ec6c8d69A27a",
    rpc: "https://1666600000.rpc.vialabs.io/",
    explorer: "https://explorer.harmony.one/"
  },
  "13371": { // Immutable zkEVM Mainnet
    name: "Immutable zkEVM Mainnet",
    network: "mainnet",
    type: "evm",
    message: "",
    featureGateway: "",
    feeToken: "0x6de8aCC0D406837030CE4dd28e7c08C5a96a30d2",
    weth: "0x52A6c53869Ce09a731CD772f245b97A4401d3348",
    rpc: "https://13371.rpc.vialabs.io/"
  },
  "4689": { // IoTeX Mainnet
    name: "IoTeX Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x15AC559DA4951c796DB6620fAb286B96840D039A",
    featureGateway: "",
    feeToken: "0x6de8aCC0D406837030CE4dd28e7c08C5a96a30d2",
    weth: "0x4fffe0168b04f039496ca5189f9596c22693A19c",
    rpc: "https://4689.rpc.vialabs.io/",
    explorer: "https://iotexscan.io/"
  },
  "2222": { // Kava Mainnet
    name: "Kava Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x9E0f7B09576D1F0cBfF1f834A8e5bcc3Db1EF804",
    featureGateway: "",
    feeToken: "0x919C1c267BC06a7039e03fcc2eF738525769109c",
    weth: "0xc86c7C0eFbd6A49B35E8714C5f59D99De09A225b",
    rpc: "https://2222.rpc.vialabs.io/",
    explorer: "https://atomscan.com/kava/"
  },
  "1997": { // Kyoto Mainnet
    name: "Kyoto Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x15AC559DA4951c796DB6620fAb286B96840D039A",
    featureGateway: "",
    feeToken: "",
    weth: "",
    rpc: "https://1997.rpc.vialabs.io/",
    explorer: "https://kyotoscan.io"
  },
  "59144": { // Linea Mainnet
    name: "Linea Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x6C5AD5e9763Ee118f6c6359e00EeF6ECfA84395b",
    featureGateway: "",
    feeToken: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
    weth: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
    rpc: "https://59144.rpc.vialabs.io/",
    explorer: "https://lineascan.build/"
  },
  "2016": { // Mainnetz Mainnet
    name: "Mainnetz Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x1274E183AA921972531414Df700E673dE1Be878D",
    featureGateway: "",
    feeToken: "0x0000000000000000000000000000000000000000",
    weth: "0x41c515fA7D541bCbDEfB44f0FE2B1629aec140b9",
    rpc: "https://59144.rpc.vialabs.io/",
    explorer: "https://explorer.mainnetz.io/"
  },
  "5000": { // Mantle Mainnet
    name: "Mantle Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x15AC559DA4951c796DB6620fAb286B96840D039A",
    featureGateway: "",
    feeToken: "0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9",
    weth: "",
    rpc: "https://5000.rpc.vialabs.io/",
    explorer: "https://mantlescan.xyz/"
  },
  "1088": { // Metis Mainnet
    name: "Metis Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0xA10953dEFac127d1b7A645f81045aB5127893124",
    featureGateway: "",
    feeToken: "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
    weth: "0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000",
    rpc: "https://1088.rpc.vialabs.io/",
    explorer: "https://explorer.metis.io/"
  },
  "245022934": { // Neon Mainnet 
    name: "Neon Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x15AC559DA4951c796DB6620fAb286B96840D039A",
    featureGateway: "",
    feeToken: "0xEA6B04272f9f62F997F666F07D3a974134f7FFb9",
    weth: "0x202C35e517Fa803B537565c40F0a6965D7204609",
    rpc: "https://245022934.rpc.vialabs.io/",
    explorer: "https://neon.blockscout.com/"
  },
  "42262": { // Oasis Emerald Mainnet
    name: "Oasis Emerald Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0xe3b3274bb685F37C7f17a604039c77a6A16Cfc2a",
    featureGateway: "",
    feeToken: "0xdC19A122e268128B5eE20366299fc7b5b199C8e3",
    weth: "0x21C718C22D52d0F3a789b752D4c2fD5908a8A733",
    rpc: "https://42262.rpc.vialabs.io/",
    explorer: "https://www.oasisscan.com/"
  },
  "23294": { // Oasis Sapphire Mainnet
    name: "Oasis Sapphire Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x5E9DBAC1d92b04E5Bd8Bd42845B315568b969Da0",
    featureGateway: "",
    feeToken: "0xE48151964556381B33f93E05E36381Fd53Ec053E", // ?
    weth: "0x8Bc2B030b299964eEfb5e1e0b36991352E56D2D3",
    rpc: "https://23294.rpc.vialabs.io/",
    explorer: "https://www.oasisscan.com/"
  },
  "204": { // opBNB Mainnet 
    name: "opBNB Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x1274E183AA921972531414Df700E673dE1Be878D",
    featureGateway: "",
    feeToken: "0x9e5AAC1Ba1a2e6aEd6b32689DFcF62A509Ca96f3",
    weth: "0x4200000000000000000000000000000000000006",
    rpc: "https://240.rpc.vialabs.io/",
    explorer: "https://opbnbscan.com/"
  },
  "137": { // Polygon Mainnet
    name: "Polygon Mainnet",
    network: "mainnet",
    type: "evm",
    circleTokenMessanger: "0x9daF8c91AEFAE50b9c0E69629D3F6Ca40cA3B3FE",
    circleMessageTransmitter: "0xF3be9355363857F3e001be68856A2f96b4C39Ba9",
    circleTokenMinter: "0x10f7835F827D6Cf035115E10c50A853d7FB2D2EC",
    message: "0x1C5800eb5fECB7760D7F1978ad744feA652a7b27",
    featureGateway: "",
    feeToken: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
    weth: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
    usdc: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
    rpc: "https://137.rpc.vialabs.io/",
    explorer: "https://polygonscan.com/"
  },
  "1101": { // PolygonZK Mainnet
    name: "PolygonZK Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x39869675cCC8B39Eb8016C2Cb7a718B119442b56",
    featureGateway: "",
    feeToken: "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
    weth: "0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9",
    rpc: "https://1101.rpc.vialabs.io/",
    explorer: "https://www.polygonzkscan.com/"
  },
  "369": { // Pulse Mainnet
    name: "Pulse Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0xba01F2bA548e69bA26Fd06a3bdf1A7857eeAC435",
    featureGateway: "",
    feeToken: "0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07",
    weth: "0xa1077a294dde1b09bb078844df40758a5d0f9a27",
    rpc: "https://369.rpc.vialabs.io/",
    explorer: "https://scan.mypinata.cloud/ipfs/bafybeih3olry3is4e4lzm7rus5l3h6zrphcal5a7ayfkhzm5oivjro2cp4/#/"
  },
  "570": { // Rollux Mainnet
    name: "Rollux Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0xf0861412E46E34DaF7A1fe3fe805e7f713cA3bD9",
    featureGateway: "",
    feeToken: "0x368433cac2a0b8d76e64681a9835502a1f2a8a30",
    weth: "0x4200000000000000000000000000000000000006",
    rpc: "https://570.rpc.vialabs.io/",
    explorer: "https://explorer.rollux.com/"
  },
  "534352": { // Scroll Mainnet
    name: "Scroll Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x6C5AD5e9763Ee118f6c6359e00EeF6ECfA84395b",
    featureGateway: "",
    feeToken: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
    weth: "0x5300000000000000000000000000000000000004",
    rpc: "https://534352.rpc.vialabs.io/",
    explorer: "https://scrollscan.com/"
  },
  "1490": { // Vitruveo Mainnet
    name: "Vitruveo Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x15AC559DA4951c796DB6620fAb286B96840D039A",
    featureGateway: "",
    feeToken: "0x0000000000000000000000000000000000000000",
    weth: "0xC0C0A38067Ba977676AB4aFD9834dB030901bE2d",
    rpc: "https://1490.rpc.vialabs.io/",
    explorer: "https://explorer.vitruveo.xyz/"
  },
  "196": {
    name: "X-Layer Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x15AC559DA4951c796DB6620fAb286B96840D039A",
    featureGateway: "",
    feeToken: "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035",
    weth: "0xe538905cf8410324e03a5a23c1c177a474d59b2b",
    rpc: "https://196.rpc.vialabs.io/",
    explorer: "https://www.okx.com/web3/explorer/xlayer"
  },
  "50": { // XDC Mainnet
    name: "XDC Mainnet",
    network: "mainnet",
    type: "evm",
    message: "0x15AC559DA4951c796DB6620fAb286B96840D039A",
    featureGateway: "",
    feeToken: "0x49d3f7543335cf38Fa10889CCFF10207e22110B5",
    weth: "0x951857744785E80e2De051c32EE7b25f9c458C42",
    rpc: "https://50.rpc.vialabs.io/",
    explorer: "https://explorer.xinfin.network/"
  },
  "99999999991": { // Solana Mainnet
    name: "Solana Mainnet",
    network: "mainnet",
    type: "solana",
    message: "",
    featureGateway: "",
    feeToken: "",
    weth: "",
    usdc: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    eurc: "HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr",
    rpc: "",
    explorer: "https://explorer.solana.com/"
  },

  "421614": { // Arbitrum Testnet (Sepolia)
    "name": "arbitrum-sepolia",
    "network": "testnet",
    "type": "evm",
    "circleTokenMessanger": "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
    "circleMessageTransmitter": "0xaCF1ceeF35caAc005e15888dDb8A3515C41B4872",
    "circleTokenMinter": "0xE997d7d2F6E065a9A93Fa2175E878Fb9081F1f0A",
    "message": "0x0D7e59B0390e47E6C3a29cCdF68e43f3e50e2119",
    "featureGateway": "0xbf5288c8e8d5A1b89EFC2CefF1836f4c1392507f",
    "feeToken": "0x6dc9C1599C52e8EC4f1389Cb466Df7A799E85136",
    "paper": "0x6a2a6c5217A4690e060DB66B6D7F84EC6E91b1B8",
    "faucet": "0x01D6dC1b34EDdb2D4A490224f2C7506C24e2B1aC",
    "weth": "0x47963cB18B1aef899efcdC5EF7341B5167e5d4E0",
    "usdc": "0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
    "rpc": "https://421614.rpc.vialabs.io/",
    "explorer": "https://sepolia.arbiscan.io/"
  },
  "1313161555": { // Aurora Testnet
    "name": "aurora-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xA648df7adFa847Cf0149083857ddA1680926899F",
    "feeToken": "0x1D006355e6778d06a40296eE510bbc09f60c9e1c",
    "message": "0x52e1CFE18BD55bb8d885d463DC26D9C365cd316B"
  },
  "65100003": { // Autonity Testnet
    "name": "autonity-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x3a60C03a86eEAe30501ce1af04a6C04Cf0188700",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "65110000": { // Autonity Devnet
    "name": "autonity-devnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0xf92De0c98007EBaDa22E138A881710B82C513Da0",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "43113": { // Avalanche Testnet
    "name": "avalanche-testnet",
    "network": "testnet",
    "type": "evm",
    "usdc": "0x5425890298aed601595a70ab815c96711a31bc65",
    "circleMessageTransmitter": "0xa9fb1b3009dcb79e2fe346c16a604b8fa8ae0a79",
    "circleTokenMessanger": "0xeb08f243e5d3fcff26a9e38ae5520a669f4019d0",
    "weth": "0xD59A1806BAa7f46d1e07A07649784fA682708794",
    "feeToken": "0x3E445B8fB6ef183Eb32bc1492f379afDAf2b7209",
    "message": "0x8f92F60ffFB05d8c64E755e54A216090D8D6Eaf9"
  },
  "84532": { // Base Sepolia
    "name": "base-sepolia",
    "network": "testnet",
    "type": "evm",
    "usdc": "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
    "circleMessageTransmitter": "0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",
    "circleTokenMessanger": "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
    "weth": "0x32D9c1DA01F221aa0eab4A0771Aaa8E2344ECd35",
    "feeToken": "0x8dF0A6d3826B9D99c9694c079A10dBb333a9Bb6C",
    "message": "0xE700Ee5d8B7dEc62987849356821731591c048cF"
  },
  "97": { // Binance Testnet
    "name": "binance-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x768A6c94771EE391C9a996Ff6c30F27190dd0B34",
    "feeToken": "0xD430d3cDFb411810f5E1355C1Be41CF8CCA7e428",
    "message": "0x8eF8870CD5583891bDDcf2555e7833bD087392a3"
  },
  "7771": { // Bitrock Testnet
    "name": "bitrock-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "168587773": { // Blast Testnet
    "name": "blast-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x765d2951bF4d512a5FDbD6384C4b6aD5ab1b1873",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0xA95c0BC77Ab8a8EfA3dF00366FFAe5CB1A2cba15"
  },
  "2888": { // Boba Testnet
    "name": "boba-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x02dA7eeEB722A126CCC53085d489ca0e1BAbc55E",
    "feeToken": "0x8cd2556e02f5A136167aE123e313a17481f51904",
    "message": "0x1Ec7Dfbc9e310768A17145f03f3451f562cEc773"
  },
  "111": { // Bob Testnet
    "name": "bob-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x17C84459367f9787356b01d7f624Ef0e7E6cA11F",
    "feeToken": "0xAF1f0C79cc043AD4a263dfe7715ca657F9bDeced",
    "message": "0x78CC50562941f385c3d0c5204385c3CA686d85b8"
  },
  "325000": { // Camp Network Testnet
    "name": "camp-network-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "7701": { // Canto Testnet
    "name": "canto-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x95e86440E6B240fc5d476dE44FB56b763B585B2B",
    "feeToken": "0xeDCfb3038d4a262Aef3735CFa64146C35196CC51",
    "message": "0x09FC1B8e1651A0D35258Ab919035d3087245F8f3"
  },
  "44787": { // Celo Testnet
    "name": "celo-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x3BC1695644Ad2c60f1500cea16A9536AF5DDd38e",
    "feeToken": "0x2A07454Bc8177b944fBdB4575a4b0bd040a70e95",
    "message": "0xc959284fae7Cc3F41367dA2Df595b7267597094C"
  },
  "1115": { // Core Testnet
    "name": "core-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "71": { // Conflux Testnet
    "name": "conflux-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "338": { // Cronos Testnet
    "name": "cronos-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x7EfE948491324f159D9BAfB989Db8ACe8e647685",
    "feeToken": "0xa7fBeDA5DF050bC6c0518A13BE6A2e3A4A2c2175",
    "message": "0x8f92F60ffFB05d8c64E755e54A216090D8D6Eaf9"
  },
  "282": { // Cronoszk Testnet
    "name": "cronoszk-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0000000000000000000000000000000000000000",
    "feeToken": "0xf6799eCdeCD7F96EA13bc3259852a3a4C47d859E",
    "message": "0xCf421b3497a28b4215F09e5bAf862C3a2532d681"
  },
  "111557560": { // Cyber Testnet
    "name": "cyber-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "335": { // DFK Testnet
    "name": "dfk-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "1401": { // Dojima Stagenet
    "name": "dojima-stagenet",
    "network": "stagenet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x9d75f706b986F0075b3778a12153390273dE95eC",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "3939": { // DOS Testnet
    "name": "dos-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "5": { // Ethereum Goerli
    "name": "ethereum-goerli",
    "network": "testnet",
    "type": "evm",
    "weth": "0x95e86440E6B240fc5d476dE44FB56b763B585B2B",
    "feeToken": "0x2f3bc26eFE51bBe209E0afD2Da29616cF3755E03",
    "message": "0xae65E2211c4119cf92ee85D1a8c4ec20AdaE8aFE"
  },
  "17000": { // Ethereum Holesky
    "name": "ethereum-holesky",
    "network": "testnet",
    "type": "evm",
    "usdc": "",
    "circleTokenTransmitter": "",
    "circleTokenMessanger": "",
    "weth": "0xB09780607F0cbCC3c7B95f17d42417269ED53a1D",
    "feeToken": "0x6900384BA33f8C635DeE2C3BD7d46A0626FfB096",
    "message": "0x668de98389d5d6C9064E40Cfda2FC6471EDDE7ff"
  },
  "11155111": { // Ethereum Sepolia
    "name": "ethereum-sepolia",
    "network": "testnet",
    "type": "evm",
    "usdc": "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
    "circleMessageTransmitter": "0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",
    "circleTokenMessanger": "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
    "weth": "0x6c884e8b8139a87A68b7c4350a9a25305f6de0b6",
    "feeToken": "0x4B5b1163525A6Cebd9a06F4C386976F2B41A4Bdf",
    "message": "0xF2AA17F92d4D9Be1c0b0D2A3235A06143A2D729f"
  },
  "128123": { // Etherlink Testnet
    "name": "etherlink-testnet",
    "network": "testnet",
    "type": "evm",
    "usdc": "",
    "circleMessageTransmitter": "",
    "circleTokenMessanger": "",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "4002": { // Fantom Testnet
    "name": "fantom-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x9364b2FC6f07c123dB5a398aE655DFCf7F445d54",
    "feeToken": "0xAC78952AD62A468ac21f43DfA8B14f2c8Be87582",
    "message": "0x48964a49B5826DB6Cb8d8ed0dAf93eEeD734b923"
  },
  "114": { // Flare Testnet
    "name": "flare-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "701": { // Fomo Testnet
    "name": "fomo-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "feeToken": "0x8E3Ea13F2591B5B342FCa9272b59f831476aa74D",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "68840142": { // Frame Testnet
    "name": "frame-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xf25D6E21554a5503DEA695acdad7586778a89C39",
    "feeToken": "0x71311899492757cD512a11855C150EA219bB3A42",
    "message": "0xCb69924aDf996315aDcd9051ccE2B572dD9450a9"
  },
  "2522": { // Fraxtal Testnet
    "name": "fraxtal-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "feeToken": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "123": { // Fuse Testnet
    "name": "fuse-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "1452": { // Gauss Testnet
    "name": "gauss-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0000000000000000000000000000000000000000",
    "feeToken": "0x5C3293Ff66E77F6FCEefAC24c4766BDcE060B260",
    "message": "0xcbC2d50FA324c187adcf4a186fCb7EcC092E0758"
  },
  "123420111": { // Gelato OP Celestia Testnet
    "name": "gelato-op-celestia-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x765d2951bF4d512a5FDbD6384C4b6aD5ab1b1873",
    "feeToken": "0xc45c3cEc0C800fCB95636D1FB6ec0AE3d42b58e2",
    "message": "0xAede7a77D49Eb88Cb129896d69f0E66ee51D44AC"
  },
  "42069": { // Gelato OP Testnet
    "name": "gelato-op-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x765d2951bF4d512a5FDbD6384C4b6aD5ab1b1873",
    "feeToken": "0xc45c3cEc0C800fCB95636D1FB6ec0AE3d42b58e2",
    "message": "0xAede7a77D49Eb88Cb129896d69f0E66ee51D44AC"
  },
  "1261120": { // Gelato Zkatana Testnet
    "name": "gelato-zkatana-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x765d2951bF4d512a5FDbD6384C4b6aD5ab1b1873",
    "feeToken": "0xc45c3cEc0C800fCB95636D1FB6ec0AE3d42b58e2",
    "message": "0xAede7a77D49Eb88Cb129896d69f0E66ee51D44AC"
  },
  "10200": { // Gnosis Testnet
    "name": "gnosis-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x88d4E6cb8955e5b406dbac9e4BCd101082947433",
    "feeToken": "0x3ecDbd62D72917b4D22b638E0a550cA516cfe139",
    "message": "0x88776c0FbaCA594938C6B87a42a69D530A8CCDF3"
  },
  "1666700000": { // Harmony Testnet
    "name": "harmony-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xbF1Bb50a9607d2191aB4e5925B48f44306000A05",
    "feeToken": "0x3574311D950E04A48289DA64759016c26725B180",
    "message": "0x9cAa65b69Ad8118C3d1454393F5b96292FE3C0aB"
  },
  "1663": { // Horizen Testnet
    "name": "horizen-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x291BcefF63A9A2726160391928EFCEe34014d58A",
    "feeToken": "0x17C84459367f9787356b01d7f624Ef0e7E6cA11F",
    "message": "0xA95c0BC77Ab8a8EfA3dF00366FFAe5CB1A2cba15"
  },
  "13473": { // Immutable Testnet
    "name": "immutable-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xfA8d81973f29b2555933027Ac9751740B9fFa047",
    "feeToken": "0xDb126ef7666c97db7D9F70FFbCfFdC567b3B25A5",
    "message": "0xC7E87B6614DAb7a4B3Feaa9e56a2cA29A84AD0a8"
  },
  "4690": { // IoTeX Testnet
    "name": "iotex-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "10081": { // Japan Open Chain Testnet
    "name": "japan-open-chain-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "167008": { // Katla Testnet
    "name": "katla-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x291BcefF63A9A2726160391928EFCEe34014d58A",
    "feeToken": "0x17C84459367f9787356b01d7f624Ef0e7E6cA11F",
    "message": "0xA95c0BC77Ab8a8EfA3dF00366FFAe5CB1A2cba15"
  },
  "2221": { // Kava Testnet
    "name": "kava-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xc5f8fbE61aF2b5f0DB8A51e10133062e54F77947",
    "feeToken": "0x1Ec7Dfbc9e310768A17145f03f3451f562cEc773",
    "message": "0xd577fcBee5734c2da5e0063fF1df38845DaA7117"
  },
  "1001": { // Klaytn Testnet
    "name": "klaytn-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x3413714B95c7A087517B7a8a791627F5a91A7712",
    "feeToken": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F",
    "message": "0xdCa897f920Df8015169838c428479D5e3d5Bf526"
  },
  "1998": { // Kyoto Testnet
    "name": "kyoto-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x73Db0a9a3aB2098B57E6A0f1F8Ff497e4adaa412",
    "feeToken": "0x3a60C03a86eEAe30501ce1af04a6C04Cf0188700",
    "message": "0xdCa897f920Df8015169838c428479D5e3d5Bf526"
  },
  "59140": { // Linea Testnet
    "name": "linea-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x167Be5395286327da2E376f3DF2bF46ED42209B0",
    "feeToken": "0xF8d80d6E52b5B8484a7CD27a5C0F3D35695c57dF",
    "message": "0x0eefCF172F7e5C04A8d565f4e955968221fDb18f"
  },
  "9768": { // Mainnetz Testnet
    "name": "mainnetz-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xCdc7D21D3F75809ec8CC3030AB8018A98AD0b296",
    "feeToken": "0x714853D6197e560013ee161fC259b87E8B3cA7E9"
  },
  "3441006": { // Manta Pacific Testnet
    "name": "manta-pacific-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "5001": { // Mantle Testnet
    "name": "mantle-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x67E320b239f6c99eB938Dd993F1c0fE61edcc9D8",
    "feeToken": "0x0135c25Bd3e88b1aac5FDC6f16FEe2C63d967f9d",
    "message": "0x02894D48c53Ad4AF56ab9624A07153C4fc379D9C"
  },
  "686868": { // Merlin Testnet
    "name": "merlin-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "83": { // Meter Testnet
    "name": "meter-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xa7719d49246730e2ec6B69aAfC4873E74053b2eB",
    "feeToken": "0x1d240A79fc3d597d3C90d54A483207dEAa58CD90",
    "message": "0x01849193F33426C5b9C676757E9324a0f0761E6a"
  },
  "599": { // Metis Testnet
    "name": "metis-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xa13ad1Cf753f31e405a60eb3204A941fBb035bCf",
    "feeToken": "0xd4Bb993ec7c9beE84930064C691cFd8603138551",
    "message": "0x8E872249C1D7c533bCDC04f5ac124eCa603E0b6D"
  },
  "919": { // Mode Testnet
    "name": "mode-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "feeToken": "0x9d75f706b986F0075b3778a12153390273dE95eC",
    "message": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f"
  },
  "1287": { // Moonalpha Testnet
    "name": "moonalpha-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "245022926": { // Neon Testnet
    "name": "neon-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x11adC2d986E334137b9ad0a0F290771F31e9517F",
    "feeToken": "0x512E48836Cd42F3eB6f50CEd9ffD81E0a7F15103",
    "message": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f"
  },
  "2371": { // Nexis Devnet
    "name": "nexis-devnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "1001": { // Nexis ZK Testnet
    "name": "nexis-zk-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "42261": { // Oasis Emerald Testnet
    "name": "oasis-emerald-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0000000000000000000000000000000000000000",
    "feeToken": "0x73Db0a9a3aB2098B57E6A0f1F8Ff497e4adaa412",
    "message": "0x9Ca377D441B01A44fEab8D75B992ab2e4f710BA9"
  },
  "23295": { // Oasis Sapphire Testnet
    "name": "oasis-sapphire-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xc9cd1956655B8085b9e53dA7F5813B75B95F69d3",
    "feeToken": "0x4B5b1163525A6Cebd9a06F4C386976F2B41A4Bdf",
    "message": "0x9c90eC23162C818A79B46C79Bb6EBC07C6733919"
  },
  "9372": { // Oasys Testnet
    "name": "oasys-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "65": { // Okex Testnet
    "name": "okex-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x967ccdcdf974DCEAb42F20FB61Aafb00D64f0827",
    "feeToken": "0x2a91b800903BDcC230312C7F96ACF089e6592cBA",
    "message": "0x9744D38d26eF45C31c8D20783671506FebeDBAC4"
  },
  "1945": { // Onus Testnet
    "name": "onus-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x02dA7eeEB722A126CCC53085d489ca0e1BAbc55E",
    "feeToken": "0x5f4d59B985959b1dd5da23C574228e9161D34845",
    "message": "0xF8d80d6E52b5B8484a7CD27a5C0F3D35695c57dF"
  },
  "5611": { // Opbnb Testnet
    "name": "opbnb-testnet",
    "network": "testnet",
    "type": "evm",
    "circleMessageTransmitter": "0x7865fAfC2db2093669d92c0F33AeEF291086BEFD",
    "circleTokenMessanger": "0x9f3B8679c73C2Fef8b59B4f3444d4e156fb70AA5",
    "weth": "0x6134465958b5FBF8812fE743534C66D833Fa9046",
    "feeToken": "0x17C84459367f9787356b01d7f624Ef0e7E6cA11F",
    "message": "0x7bB78097d7e672D65cD6596Ee9b4097CE16AC391"
  },
  "11155420": { // Optimism Sepolia
    "name": "optimism-sepolia",
    "network": "testnet",
    "type": "evm",
    "weth": "0x3574311D950E04A48289DA64759016c26725B180",
    "feeToken": "0x3aBc0c7aC53935025d40F60e4235BB6Bd83B78f0",
    "message": "0xe511183765E1F325702EF8F3d92046e9d6DF6742"
  },
  "4460": { // Orderly Testnet
    "name": "orderly-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "80001": { // Polygon Testnet
    "name": "polygon-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xceaDda135AfB9c841Fd1feE951C111dFbfa3f242",
    "feeToken": "0x489B21556865712b1AaCF04Df8197488d940aB18",
    "message": "0x524d9E4cB344A130696B29c182aA5a4A458379B6"
  },
  "1442": { // Polygonzk Testnet
    "name": "polygonzk-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x32D9c1DA01F221aa0eab4A0771Aaa8E2344ECd35",
    "feeToken": "0x9B14EA7C553F92cfC782951d06Cf1d48fF33E429",
    "message": "0xe72599F2F5C8aA96E578E48A09Bc6C1123fA5783"
  },
  "80002": { // Polygon Amoy
    "name": "polygon-amoy",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0xD464CC7367a7A39eb4b1E6643CDa262B0B0CfdA8",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "943": { // Pulse Testnet
    "name": "pulse-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xBDc1fCaC4c4615b4FbBE8C401BEd6e29D900fDB0",
    "feeToken": "0xa0179a4Aa2818ff63Ee6e40b5C27A33BD59e4815",
    "message": "0x91e26475016B923527B5Ef15789A9768EBA979e6"
  },
  "1918988905": { // Rari Testnet
    "name": "rari-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "18233": { // Real Testnet
    "name": "real-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "17001": { // Redstone Testnet
    "name": "redstone-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x167Be5395286327da2E376f3DF2bF46ED42209B0",
    "feeToken": "0xA95c0BC77Ab8a8EfA3dF00366FFAe5CB1A2cba15",
    "message": "0x1Ec7Dfbc9e310768A17145f03f3451f562cEc773"
  },
  "57000": { // Rollux Testnet
    "name": "rollux-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x6134465958b5FBF8812fE743534C66D833Fa9046",
    "feeToken": "0x17C84459367f9787356b01d7f624Ef0e7E6cA11F",
    "message": "0x7bB78097d7e672D65cD6596Ee9b4097CE16AC391"
  },
  "2021": { // Saigon Testnet
    "name": "saigon-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "1992": { // Sanko Testnet
    "name": "sanko-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "534351": { // Scroll Testnet
    "name": "scroll-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xD27f1d1093162560A7e17b7fd3A7711Caf6cE666",
    "feeToken": "0x08f0A528dC83f4Db2C7B05478ED3B098eCE94fCB",
    "message": "0x8Dcb34c02365116565A3d68b97e4ae98F983B9D0"
  },
  "713715": { // Sei Devnet
    "name": "sei-devnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "81": { // Shibuya Devnet
    "name": "shibuya-devnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "64165": { // Sonic Testnet
    "name": "sonic-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xdCa897f920Df8015169838c428479D5e3d5Bf526",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0xeFaDc14c2DD95D0E6969d0B25EA6e4F830150493"
  },
  "2047": { // Stratos Testnet
    "name": "stratos-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x6134465958b5FBF8812fE743534C66D833Fa9046",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x4a7B33299a21c518d77eb3fF00fd1DC39C452Cba"
  },
  "81": { // Shibuya Testnet
    "name": "shibuya-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "1073": { // Shimmerevm Testnet
    "name": "shimmerevm-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "167009": { // Taiko Testnet
    "name": "taiko-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "89": { // Viction Testnet
    "name": "viction-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "37714555429": { // Xai Testnet
    "name": "xai-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "41": { // Telos Testnet
    "name": "telos-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x02dA7eeEB722A126CCC53085d489ca0e1BAbc55E",
    "feeToken": "0x5f4d59B985959b1dd5da23C574228e9161D34845",
    "message": "0xF8d80d6E52b5B8484a7CD27a5C0F3D35695c57dF"
  },
  "14333": { // Vitruveo Testnet
    "name": "vitruveo-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "195": { // Xlayer Testnet
    "name": "xlayer-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xDb52110E8f15a72Ccf3ce205c30C27bdB846057D",
    "feeToken": "0xD07129F94934757A1653de9cb076910de39Fba6F",
    "message": "0x8f554B1b239a57C840d5902D1d901dAFF04F22C2"
  },
  "51": { // XDC Testnet
    "name": "xdc-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x49AADBE0f1D2ceb77C7f979b4bF35faEa22976B8",
    "feeToken": "0x743E00433c33fec5DCF6B9f2cF72d471cd0AB027",
    "message": "0x00CE686319d401E55c2E7784192EB3A2273Aa9Dc"
  },
  "7001": { // ZetaChain Testnet
    "name": "zetachain-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0xbd9F6E783a2872f703953F0db1d6D60912F86af4",
    "feeToken": "0x8cd2556e02f5A136167aE123e313a17481f51904",
    "message": "0x714c9202B3B5AF0C0Ad844c2a71803cebBFD3AF5"
  },
  "43851": { // ZkFair Testnet
    "name": "zkfair-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  },
  "280": { // Zksync Testnet
    "name": "zksync-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x19a41FE14a5931eEd7CAD91d033e14c47e9EFff9",
    "feeToken": "0xf6799eCdeCD7F96EA13bc3259852a3a4C47d859E",
    "message": "0xCf421b3497a28b4215F09e5bAf862C3a2532d681"
  },
  "999999999": { // Zora Testnet
    "name": "zora-testnet",
    "network": "testnet",
    "type": "evm",
    "weth": "0x0EFafca24E5BbC1C01587B659226B9d600fd671f",
    "feeToken": "0x566B40Dd59A868c244E1353368e08ddaD1C1d74f",
    "message": "0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F"
  }
};

module.exports = chainsConfig;

