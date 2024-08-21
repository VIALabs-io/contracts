// SPDX-License-Identifier: MIT
// (c)2021-2024 Atlas
// security-contact: atlas@vialabs.io

declare namespace ChainsConfig {
  interface ChainConfig {
    name: string;
    message: string;
    featureGateway?: string;
    usdc?: string;
    weth?: string;
    stable?: string;
    feeToken?: string;
    network?: string;
    explorer?: string;
    type?: string;
    dsid?: string;
  }

  interface ChainsConfig {
    [key: string]: ChainConfig;
  }
}

declare const chainsConfig: ChainsConfig.ChainsConfig;
export = chainsConfig;
