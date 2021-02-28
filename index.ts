const Web3 = require('web3')
import { ethers } from 'ethers'
import Config from './config'
import { getNetworkMarkets } from './utils'
import BigNumber from 'bignumber.js'

type ContractResult = {
  tknAddress: string,
  result: number
}

type AvailableLoanEstimation = {
  usageRate: string,
  remainingBorrowBalance: string
}

class FilDaLoanInfo {
  private provider: ethers.providers.JsonRpcProvider = new ethers.providers.JsonRpcProvider('https://heconode.ifoobar.com')
  private web3 = new Web3(new Web3.providers.HttpProvider('https://heconode.ifoobar.com'))

  constructor(rpcUrl?: any) {
    this.initWeb3(rpcUrl)
  }

  public async availableLoanEstimation(address: string): Promise<AvailableLoanEstimation> {
    this.addressValidation(address)

    const [ usageRate, remainingBorrowBalance ] = await Promise.all([
      this.getLoanUsageRate(address),
      this.getRemainingBorrowBalance(address)
    ])

    return { usageRate, remainingBorrowBalance }
  }

  public async getLoanUsageRate(address: string): Promise<string> {
    this.addressValidation(address)

    const [ remaining, borrowed ] = await Promise.all([
      this.getRemainingBorrowBalance(address),
      this.getTotalBorrowed(address)
    ])

    if (Number(borrowed) === 0 || isNaN(Number(borrowed))) {
      return '0'
    }

    return new BigNumber(1).minus(new BigNumber(remaining).div(borrowed).shiftedBy(18).toString()).toString()
  }

  /**
   * Gets particular address's remaining available borrow balance
   * @param address
   * @return amount of remaining borrow balance available in HT
   */
  public async getRemainingBorrowBalance(address: string): Promise<string> {
    this.addressValidation(address)

    const contract = await this.getContract()
    const { 1: liquidity } = await contract.getAccountLiquidity(address)

    return ethers.utils.formatUnits(liquidity, 18)
  }

  /**
   * Gets the amount of total borrowed
   * @param address
   */
  public async getTotalBorrowed(address: string): Promise<number> {
    this.addressValidation(address)

    const networkType = await this.getNetworkType()
    const markets = getNetworkMarkets(networkType)
    let totalBorrowed = 0

    const savingsBalancePromises = []
    const cfPromises = []

    for(let i = 0; i < markets.length; i++) {
      const market = markets[i]
      const qTokenAddress = market.qToken.network[networkType].address
      cfPromises.push(this.getCollateralFactor(qTokenAddress))
      savingsBalancePromises.push(this.getSavingsBalance(address, market))
    }

    const colFactors     = await Promise.all(cfPromises)
    const savingsBalance = await Promise.all(savingsBalancePromises)
    savingsBalance.forEach(item => {
      const colFactor = colFactors.filter(cf => cf.tknAddress === item.tknAddress)
      totalBorrowed += +new BigNumber(item.result).times(colFactor[0].result).toString()
    })

    return totalBorrowed
  }

  private addressValidation(address: string): void {
    if (!address || address.trim().length === 0 || !address.startsWith('0x')) throw new Error('Invalid address provided!')
  }

  private async getSavingsBalance(address: string, market: any): Promise<ContractResult> {
    const qContractABI = market.qToken.ABI
    const networkType = await this.getNetworkType()
    const qTokenAddress = market.qToken.network[networkType].address

    // const qTokenContract = new ethers.Contract(qTokenAddress, qContractABI, this.provider)
    const qContract = new this.web3.eth.Contract(qContractABI, qTokenAddress);

    const savingsBalance = await qContract.methods.balanceOfUnderlying(address).call();
    // const savingsBalance = await qTokenContract.balanceOfUnderlying(address)

    return { tknAddress: qTokenAddress, result: savingsBalance }
  }

  private async getCollateralFactor(qTokenAddress: string): Promise<ContractResult> {
    const contract = await this.getContract()

    const { 1: collateralFactorMantissa } = await contract.markets(qTokenAddress)
    const collateralFactor = collateralFactorMantissa / 1e18

    return { tknAddress: qTokenAddress, result: collateralFactor }
  }

  private async getNetworkType(): Promise<string> {
    const network = await this.provider.getNetwork()
    return Config.chainIdMap[network.chainId]
  }

  private async getContract(): Promise<ethers.Contract> {
    const contractABI = Config.comptroller.ABI
    const networkType = await this.getNetworkType()
    const contractAddress = Config.comptroller.network[networkType].address
    return new ethers.Contract(contractAddress, contractABI, this.provider)
  }

  private initWeb3(rpcUrl: string): void {
    if (rpcUrl) {
      this.web3 = new Web3(new Web3.providers.HttpProvider(rpcUrl))

      this.provider = new ethers.providers.Web3Provider(this.web3.currentProvider)
    }
    ethers.utils.Logger.setLogLevel(ethers.utils.Logger.levels.ERROR)
  }

}

export = FilDaLoanInfo
