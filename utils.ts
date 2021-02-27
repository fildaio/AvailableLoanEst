import Config from './config'

const getNetworkMarkets = (networkType: string) => {
  let marketsArr = Object.values(Config.markets)
  let newMarketsArr = marketsArr.filter(market => market.qToken.network[networkType])
  return networkType ? newMarketsArr : [marketsArr]
}

export {
  getNetworkMarkets,
}
