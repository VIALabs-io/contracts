# VIA Labs Cross-Chain Messaging NPM Package Documentation

## Table of Contents
- [Introduction](#introduction)
- [Benefits](#benefits)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Fee Management](#fee-management)
- [Supported Chains](#supported-chains)
- [Examples](#examples)
- [Contract Documentation](#contract-documentation)

## Introduction
VIA Labs' Cross-Chain Messaging npm package (`@vialabs-io/contracts`) streamlines the integration of cross-chain communication in blockchain applications.

## Benefits
- Simplified cross-chain communication setup.
- Compatibility with various EVM-compatible chains.
- Direct integration with VIA Labs' infrastructure.

## Installation
Install the package from NPM:
```bash
npm install @vialabs-io/contracts
```

## Usage
### Implementing MessageV3Client
- **Inheritance**: Extend your contract from `MessageClient`.
- **Message Sending**: Use `_sendMessage` and `_sendMessageExpress`.
- **Message Processing**: Implement `messageProcess` for incoming message handling.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@vialabs-io/contracts/message/MessageClient.sol";

contract MyCrossChainContract is MessageClient {
    constructor(address messageV3Address) {
        MESSAGEv3 = IMessageV3(messageV3Address);
    }

    function sendMessageToAnotherChain(uint destinationChainId, bytes memory data) public {
        uint txId = _sendMessage(destinationChainId, data);
    }

    function sendExpressMessageToAnotherChain(uint destinationChainId, bytes memory data) public {
        uint txId = _sendMessageExpress(destinationChainId, data);
    }

    function messageProcess(
        uint _txId, uint _sourceChainId, address _sender, address _reference, 
        uint _amount, bytes calldata _data
    ) external override onlySelf(_sender, _sourceChainId) {
        // Decode and process the message
    }
}
```

### Using the MessageClient ABI
```javascript
import { MessageClientABI } from '@vialabs-io/contracts/abis';

const myContract = new ethers.Contract(contractAddress, MessageClientABI, signer);
```

### Using the MessageClient Configuration
```javascript
import chainsConfig from '@vialabs-io/contracts/config/chains';

const messageAddress = chainsConfig[hre.network.config.chainId].message;
```

### After Deployment Configuration Script
```javascript
const { ethers } = require('ethers');
const chainsConfig = require('@vialabs-io/contracts/config/chains');
const { MessageClientABI } = require('@vialabs-io/contracts/message/abi');

async function configureContract() {
    const rpcUrl = 'https://mainnet.infura.io/v3/YOUR_INFURA_API_KEY';
    const privateKey = '0xYOUR_PRIVATE_KEY';
    const contractAddress = '0xabcd...1234';
    const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
    const signer = new ethers.Wallet(privateKey, provider);
    const myContract = new ethers.Contract(contractAddress, MessageClientABI, signer);

    try {
        const chains = [5, 11155111, 17000];
        const endpoints = ['0x000000','0x000000','0x000000'];
        const confirmations = [12, 6, 6];

        const tx = await myContract.configureClient(
            chainsConfig[hre.network.config.chainId].message,
            chains, 
            endpoints, 
            confirmations
        );

        console.log('Transaction sent:', tx.hash);
        await tx.wait();
        console.log('Chains configured successfully.');
    } catch (error) {
        console.error('An error occurred during configuration:', error);
    }
}

configureContract();
```

## Fee Management
The fee management in cross-chain messaging involves gas fees on the destination chain and source fees on the origin chain. Gas fees are paid in the wrapped native gas token of the respective blockchain, such as `WETH` on Ethereum, `WMATIC` on Polygon, and `WBNB` on Binance Smart Chain. Source fees are paid in `FEE_TOKEN`.

### Handling Gas Fees on Destination Chain
Gas fees are paid in the wrapped native gas token of the respective blockchain. The receiving contract needs to have available `WETH` in the contract to pay for transaction costs.

### Managing Source Fees on Origin Chain
Source chain fees are paid in `FEE_TOKEN`. If the calling contract does not have the available `FEE_TOKEN`, the transaction will revert.

### Automatic Fee Approval
The NPM package automatically approves the wrapped native gas token and `FEE_TOKEN`, enabling the Message system to automatically deduct fees during transaction processing.

### Ensuring Funds for Fees
Developers must ensure their contracts have sufficient funds in the wrapped native gas token and `FEE_TOKEN` for fees. This can be achieved either by depositing funds or designing the contract to collect these from users.

### Fee Limits for Protection
Functions `setMaxgas` and `setMaxFee` allow developers to set limits on gas and message fees, offering protection against high or unexpected fees. 

### Recovering Fee and Gas Tokens
The `recoverToken` function allows the contract owner to recover funds sent to the contract by mistake, either `ERC20` or `ETH`.

## Supported Chains

### Mainnets

| Chain Name              | Chain ID    | Contract Address                           |
|-------------------------|-------------|--------------------------------------------|
| Alveychain Mainnet      | 3797        | 0x65EEc58ef38882422E887B82f7085e9a9C35dCA1 |
| Arbitrum Mainnet        | 42161       | 0x65EEc58ef38882422E887B82f7085e9a9C35dCA1 |
| Aurora Mainnet          | 1313161555  | 0xf0861412E46E34DaF7A1fe3fe805e7f713cA3bD9 |
| Avalanche Mainnet       | 43114       | 0x72E052Fa7f0788e668965d37B6c38C88703B7859 |
| Base Mainnet            | 8453        | 0xe3b3274bb685F37C7f17a604039c77a6A16Cfc2a |
| Binance Mainnet         | 56          | 0x7b67dF6728E294db2eb173ac7c738a4627Ae5e11 |
| BitRock Mainnet         | 7171        | 0x15AC559DA4951c796DB6620fAb286B96840D039A | 
| Celo Mainnet            | 42220       | 0xe3b3274bb685F37C7f17a604039c77a6A16Cfc2a |
| Conflux Mainnet         | 1030        | 0x15AC559DA4951c796DB6620fAb286B96840D039A |
| Cronos Mainnet          | 25          | 0x2224ac62d65453a2317b995fc084e966e4bac2d5 | 
| Ethereum Mainnet        | 1           | 0x7b67dF6728E294db2eb173ac7c738a4627Ae5e11 |
| Fantom Mainnet          | 250         | 0x72E052Fa7f0788e668965d37B6c38C88703B7859 |
| Gauss Mainnet           | 1777        | 0xfDdE8946A0A1755b3a74afE7b3383dEe4fb5712f |
| Gnosis Mainnet          | 100         | 0x75c0223A8f9f8f3baB3FbC6d151381C3C576Ba36 |
| Harmony Mainnet         | 1666600000  | 0x440AA59AC28460a43537a2eA892d96Acd8eaBdb0 |
| IoTeX Mainnet           | 4689        | 0x15AC559DA4951c796DB6620fAb286B96840D039A |
| Kava Mainnet            | 2222        | 0x9E0f7B09576D1F0cBfF1f834A8e5bcc3Db1EF804 |
| Kyoto Mainnet           | 1997        | 0x15AC559DA4951c796DB6620fAb286B96840D039A |
| Linea Mainnet           | 59144       | 0x6C5AD5e9763Ee118f6c6359e00EeF6ECfA84395b |
| Mainnetz Mainnet        | 2016        | 0x1274E183AA921972531414Df700E673dE1Be878D |
| Mantle Mainnet          | 5000        | 0x15AC559DA4951c796DB6620fAb286B96840D039A |
| Metis Mainnet           | 1088        | 0xA10953dEFac127d1b7A645f81045aB5127893124 |
| Neon Mainnet            | 245022934   | 0x15AC559DA4951c796DB6620fAb286B96840D039A |
| Oasis Emerald Mainnet   | 42262       | 0xe3b3274bb685F37C7f17a604039c77a6A16Cfc2a |
| Oasis Sapphire Mainnet  | 23294       | 0x5E9DBAC1d92b04E5Bd8Bd42845B315568b969Da0 |
| opBNB Mainnet           | 204         | 0x1274E183AA921972531414Df700E673dE1Be878D |
| Polygon Mainnet         | 137         | 0x1C5800eb5fECB7760D7F1978ad744feA652a7b27 |
| PolygonZK Mainnet       | 1101        | 0x39869675cCC8B39Eb8016C2Cb7a718B119442b56 |
| Pulse Mainnet           | 369         | 0xba01F2bA548e69bA26Fd06a3bdf1A7857eeAC435 |
| Rollux Mainnet          | 570         | 0xf0861412E46E34DaF7A1fe3fe805e7f713cA3bD9 |
| Scroll Mainnet          | 534352      | 0x6C5AD5e9763Ee118f6c6359e00EeF6ECfA84395b |
| Vitruveo Mainnet        | 1490        | 0x15AC559DA4951c796DB6620fAb286B96840D039A |
| X-Layer Mainnet         | 196         | 0x15AC559DA4951c796DB6620fAb286B96840D039A |
| XDC Mainnet             | 50          | 0x15AC559DA4951c796DB6620fAb286B96840D039A |

### Testnets

| Chain Name                  | Chain ID   | Contract Address                           |
|-----------------------------|------------|--------------------------------------------|
| Arbitrum Testnet (Sepolia)  | 421614     | 0x0D7e59B0390e47E6C3a29cCdF68e43f3e50e2119 |
| Aurora Testnet              | 1313161555 | 0x52e1CFE18BD55bb8d885d463DC26D9C365cd316B |
| Autonity Testnet            | 65100002   | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F | 
| Autonity Devnet             | 65100000   | 0x0EFafca24E5BbC1C01587B659226B9d600fd671f | 
| Avalanche Testnet           | 43113      | 0x8f92F60ffFB05d8c64E755e54A216090D8D6Eaf9 |
| Base Testnet (Sepolia)      | 84532      | 0xE700Ee5d8B7dEc62987849356821731591c048cF |
| Binance Testnet             | 97         | 0x8eF8870CD5583891bDDcf2555e7833bD087392a3 |
| Blast Testnet (Sepolia)     | 168587773  | 0xA95c0BC77Ab8a8EfA3dF00366FFAe5CB1A2cba15 |
| BitRock Testnet             | 7771       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Bob Testnet                 | 111        | 0x78CC50562941f385c3d0c5204385c3CA686d85b8 |
| Boba Testnet                | 2888       | 0x1Ec7Dfbc9e310768A17145f03f3451f562cEc773 |
| Camp Network Testnet        | 325000     | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Canto Testnet               | 7701       | 0x09FC1B8e1651A0D35258Ab919035d3087245F8f3 |
| Celo Testnet                | 44787      | 0xc959284fae7Cc3F41367dA2Df595b7267597094C |
| Conflux Testnet             | 71         | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Core Testnet                | 1115       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Cronos Testnet              | 338        | 0x8f92F60ffFB05d8c64E755e54A216090D8D6Eaf9 |
| CronosZK Testnet            | 282        | 0xCf421b3497a28b4215F09e5bAf862C3a2532d681 |
| Cyber Testnet               | 111557560  | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F | 
| DeFi Kingdoms Testnet       | 335        | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F | 
| DOS Testnet                 | 3939       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Ethereum Holesky            | 17000      | 0x668de98389d5d6C9064E40Cfda2FC6471EDDE7ff |
| Ethereum Sepolia            | 11155111   | 0xF2AA17F92d4D9Be1c0b0D2A3235A06143A2D729f |
| Etherlink Testnet           | 128123     | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Fantom Testnet              | 4002       | 0x48964a49B5826DB6Cb8d8ed0dAf93eEeD734b923 |
| Flare Testnet               | 114        | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F | 
| Frame Testnet               | 68840142   | 0xCb69924aDf996315aDcd9051ccE2B572dD9450a9 |
| Fraxtal Testnet             | 2522       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Fuse Testnet                | 123        | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Gauss Testnet               | 1452       | 0xcbC2d50FA324c187adcf4a186fCb7EcC092E0758 |
| Gelato OP Celestia Testnet  | 123420111  | 0xAede7a77D49Eb88Cb129896d69f0E66ee51D44AC |
| Gelato OP Testnet           | 42069      | 0xAede7a77D49Eb88Cb129896d69f0E66ee51D44AC |
| Gelato ZKatana Testnet      | 1261120    | 0xAede7a77D49Eb88Cb129896d69f0E66ee51D44AC |
| Gnosis Testnet              | 10200      | 0x88776c0FbaCA594938C6B87a42a69D530A8CCDF3 |
| Harmony Testnet             | 1666700000 | 0x9cAa65b69Ad8118C3d1454393F5b96292FE3C0aB |
| Horizen Testnet             | 1663       | 0xA95c0BC77Ab8a8EfA3dF00366FFAe5CB1A2cba15 |
| Immutable Testnet           | 13473      | 0xC7E87B6614DAb7a4B3Feaa9e56a2cA29A84AD0a8 |
| IoTeX Testnet               | 4690       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Japan Open Chain Testnet    | 10081      | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F | 
| Katla Testnet               | 167008     | 0xA95c0BC77Ab8a8EfA3dF00366FFAe5CB1A2cba15 |
| Kava Testnet                | 2221       | 0xd577fcBee5734c2da5e0063fF1df38845DaA7117 |
| Klaytn Testnet              | 1001       | 0xdCa897f920Df8015169838c428479D5e3d5Bf526 |
| Kyoto Testnet               | 1998       | 0xdCa897f920Df8015169838c428479D5e3d5Bf526 |
| Linea Testnet               | 59140      | 0x0eefCF172F7e5C04A8d565f4e955968221fDb18f |
| Mainnetz Testnet            | 9768       | 0x714c9202B3B5AF0C0Ad844c2a71803cebBFD3AF5 |
| Manta Pacific Testnet       | 3441006    | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Mantle Testnet              | 5003       | 0x9d75f706b986F0075b3778a12153390273dE95eC |
| Merlin Testnet              | 686868     | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Meter Testnet               | 83         | 0x01849193F33426C5b9C676757E9324a0f0761E6a |
| Metis Testnet               | 59902      | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Mode Testnet                | 919        | 0x0EFafca24E5BbC1C01587B659226B9d600fd671f |
| Moon Alpha Testnet          | 1287       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Neon Testnet                | 245022926  | 0x566B40Dd59A868c244E1353368e08ddaD1C1d74f |
| Nexis Devnet                | 2371       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Nexis ZK Testnet            | 1001       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Oasis Emerald Testnet       | 42261      | 0x9Ca377D441B01A44fEab8D75B992ab2e4f710BA9 |
| Oasis Sapphire Testnet      | 23295      | 0x9c90eC23162C818A79B46C79Bb6EBC07C6733919 |
| Oasys Testnet               | 9372       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| OKEx Testnet                | 65         | 0x9744D38d26eF45C31c8D20783671506FebeDBAC4 |
| Onus Testnet                | 1945       | 0xF8d80d6E52b5B8484a7CD27a5C0F3D35695c57dF |
| opBNB Testnet               | 5611       | 0x7bB78097d7e672D65cD6596Ee9b4097CE16AC391 |
| Optimism Testnet            | 11155420   | 0xe511183765E1F325702EF8F3d92046e9d6DF6742 |
| Orderly Testnet             | 4460       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Polygon Testnet (Amoy)      | 80002      | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Polygon zkEVM Testnet       | 2442       |  |
| Pulse Testnet               | 943        | 0x91e26475016B923527B5Ef15789A9768EBA979e6 |
| Rari Testnet                | 1918988905 | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Re.al Testnet               | 18233      | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F | 
| Rollux Testnet              | 57000      | 0x7bB78097d7e672D65cD6596Ee9b4097CE16AC391 |
| Rootstock Testnet           | 31         | 0x0EFafca24E5BbC1C01587B659226B9d600fd671f |
| Saigon Testnet              | 2021       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Sanko Testnet               | 1992       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Scroll Testnet (Sepolia)    | 534351     | 0x8Dcb34c02365116565A3d68b97e4ae98F983B9D0 |
| Sei Devnet                  | 713715     | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Shibuya Testnet             | 81         | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| ShimmerEVM Testnet          | 1073       | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Sonic Testnet               | 64165      | 0xeFaDc14c2DD95D0E6969d0B25EA6e4F830150493 |
| Stratos Testnet             | 2047       | 0x4a7B33299a21c518d77eb3fF00fd1DC39C452Cba |
| Taiko Testnet               | 167009     | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Viction Testnet             | 89         | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Xai Testnet                 | 37714555429| 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| Telos Testnet               | 41         | 0xF8d80d6E52b5B8484a7CD27a5C0F3D35695c57dF |
| Vitruveo Testnet            | 14333      | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |
| X-Layer Testnet             | 195        | 0x8f554B1b239a57C840d5902D1d901dAFF04F22C2 |
| XDC Testnet                 | 51         | 0x00CE686319d401E55c2E7784192EB3A2273Aa9Dc |
| ZetaChain Testnet           | 7001       | 0x714c9202B3B5AF0C0Ad844c2a71803cebBFD3AF5 |
| zkSync Testnet              | 300        |  |
| Zora Testnet                | 999999999  | 0x3B5b764229b2EdE0162220aF51ab6bf7f8527a4F |

## Examples

1. **Cross-Chain Non-Fungible Tokens (NFTs):** VIA Labs enables the creation and management of NFTs that exist across multiple blockchains.
2. **Rebroadcasting Oracle Data:** Broadcast oracle data across multiple EVM chains with the option to run a validation layer.
3. **Multi-Chain Initial Coin Offerings (ICOs):** Conduct ICOs across various blockchains.
4. **Cross-Chain Lending Platforms:** Build platforms for lending and borrowing assets across different blockchains.
5. **Arbitrage Bots:** Maximize profits by leveraging price discrepancies across multiple chains.
6. **Unified Metaverses:** Build interconnected virtual worlds spanning multiple blockchains.
7. **Social Media Notifications:** Trigger social media notifications for cross-chain events.

## Contract Documentation

### Functions

#### messageProcess
- **Purpose**: Processes incoming messages from other chains.
- **Visibility**: External
- **Modifiers**: `onlySelf`
- **Parameters**:
  - `_txId` (uint): Transaction ID.
  - `_sourceChainId` (uint): Source chain ID.
  - `_sender` (address): Address of the sender's `MessageClient` contract on the source chain.
  - `_reference` (address): Optional source reference address.
  - `_amount` (uint): Not used for messages, always 0.
  - `_data` (bytes): Encoded message from the source chain.

#### _sendMessage
- **Purpose**: Sends a message to a specified chain.
- **Visibility**: Internal
- **Parameters**:
  - `_destinationChainId` (uint): Destination chain ID.
  - `_data` (bytes): Arbitrary data package to send.

#### _sendMessageExpress
- **Purpose**: Sends a message to a specified chain using express mode.
- **Visibility**: Internal
- **Parameters**:
  - `_destinationChainId` (uint): Destination chain ID.
  - `_data` (bytes): Arbitrary data package to send.

#### configureClient
- **Purpose**: Configures the client with MessageV3 address and chain data.
- **Visibility**: External
- **Modifiers**: `onlyMessageOwner`
- **Parameters**:
  - `_messageV3` (address): MessageV3 address.
  - `_chains` (uint[]): List of chain IDs to accept as valid destinations.
  - `_endpoints` (address[]): List of corresponding `MessageClient` addresses on each chain.
  - `_confirmations` (uint16[]): Confirmations required on each chain before processing.

#### setExsig
- **Purpose**: Assigns an external signature for enhanced security.
- **Visibility**: External
- **Modifiers**: `onlyMessageOwner`
- **Parameters**:
  - `_signer` (address): Address of the signer.

#### setMaxgas
- **Purpose**: Limits the gas usage for transactions.
- **Visibility**: External
- **Modifiers**: `onlyMessageOwner`
- **Parameters**:
  - `_maxGas` (uint): Maximum gas amount.

#### setMaxfee
- **Purpose**: Caps the fee amount per transaction.
- **Visibility**: External
- **Modifiers**: `onlyMessageOwner`
- **Parameters**:
  - `_maxFee` (uint): Maximum fee amount.

#### recoverFeeToken
- **Purpose**: Recovers Fee Tokens from the contract.
- **Visibility**: External
- **Modifiers**: `onlyMessageOwner`
- **Parameters**:
  - `_amount` (uint): Amount of tokens to recover.

#### recoverGasToken
- **Purpose**: Recovers Gas Tokens (WETH) from the contract.
- **Visibility**: External
- **Modifiers**: `onlyMessageOwner`
- **Parameters**:
  - `_amount` (uint): Amount of tokens to recover.

### Modifiers

#### onlySelf
- **Purpose**: Ensures that the function is called only by the authorized `MessageClient` contract from the source chain.

#### onlyActiveChain
- **Purpose**: Ensures that the destination chain is active before sending a message.

#### onlyMessageOwner
- **Purpose**: Restricts function access to the set owner.

### Functions based off OpenZeppelin's `Ownable`

1. **renounceMessageOwnership()**
   - **Purpose**: Leaves the contract without an owner, making it impossible to call `onlyMessageOwner` functions.
   - **Visibility**: Public

2. **transferMessageOwnership(newOwner)**
   - **Purpose**: Transfers ownership of the contract to a new account (`newOwner`).
   - **Visibility**: Public
   - **Parameters**:
     - `newOwner` (address): Address of the new owner.

### Event

1. **MessageOwnershipTransferred(previousOwner, newOwner)**
   - **Purpose**: Emitted when ownership of the contract is transferred.
   - **Parameters**:
     - `previousOwner` (address): Address of the previous owner.
     - `newOwner` (address): Address of the new owner.