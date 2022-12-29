// const networkConfig = {
//   4: {
//     name: "rinkeby",
//     ethUsdPriceFeed: "0xAc559F25B1619171CbC396a50854A3240b6A4e99",
//   },
//   5: {
//     name: "goerli",
//     ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
//   },
// }

export interface networkConfigItem {
  ethUsdPriceFeed?: string
  blockConfirmations?: number
}

export interface networkConfigInfo {
  [key: string]: networkConfigItem
}

export const networkConfig: networkConfigInfo = {
  localhost: {},
  hardhat: {},
  // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
  // Default one is ETH/USD contract on Kovan
  kovan: {
    ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
    blockConfirmations: 6,
  },
}

export const developmentChains = ["hardhat", "localhost"]
