import * as contractABI from './contractABI.json'

const markets: { [index: string]: any } = {
  'HUSDT': {
    'name': 'USDT on Huobi',
    'symbol': 'HUSDT',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0xa71edc38d189767582c38a3145b5873052c3e47a'
      }
    },
    'qToken': {
      'name': 'Filda HUSDT on Heco',
      'symbol': 'qHUSDT',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0xAab0C9561D5703e84867670Ac78f6b5b4b40A7c1'
        }
      }
    }
  },
  'HUSD': {
    'name': 'HUSD',
    'symbol': 'HUSD',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0x0298c2b32eae4da002a15f36fdf7615bea3da047'
      }
    },
    'qToken': {
      'name': 'Filda HUSD',
      'symbol': 'qHUSD',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0xB16Df14C53C4bcfF220F4314ebCe70183dD804c0'
        }
      }
    }
  },
  'HT': {
    'name': 'Huobi Token',
    'symbol': 'HT',
    'qToken': {
      'name': 'Filda HT',
      'symbol': 'fHT',
      'contract': 'QHT',
      'ABI': contractABI.qETH,
      'network': {
        'hecotest': {
          'address': '0x824151251B38056d54A15E56B73c54ba44811aF8'
        },
        'heco': {
          'address': '0x824151251B38056d54A15E56B73c54ba44811aF8'
        }
      }
    }
  },
  'HBTC': {
    'name': 'HBTC',
    'symbol': 'HBTC',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0x66a79d23e58475d2738179ca52cd0b41d73f0bea'
      }
    },
    'qToken': {
      'name': 'Filda HBTC on Heco',
      'symbol': 'qHBTC',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0xF2a308d3Aea9bD16799A5984E20FDBfEf6c3F595'
        }
      }
    }
  },
  'HETH': {
    'name': 'ETH on Huobi',
    'symbol': 'HETH',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd'
      }
    },
    'qToken': {
      'name': 'Filda ETH on Heco',
      'symbol': 'qHETH',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0x033F8C30bb17B47f6f1f46F3A42Cc9771CCbCAAE'
        }
      }
    }
  },
  'HFIL': {
    'name': 'Huobi FIL',
    'symbol': 'HFIL',
    'ABI': contractABI.ERC20,
    'network': {
      'private': {
        'address': '0xE2f2C6119cFeAd4BDdBA64E7f876487ee1300d9A'
      },
      'elatest': {
        'address': '0xd3f1be7f74d25f39184d2d0670966e2e837562e3'
      },
      'hecotest': {
        'address': '0x098050ed091521658f759f978469883d5bd8ea19'
      },
      'heco': {
        'address': '0xae3a768f9ab104c69a7cd6041fe16ffa235d1810'
      }
    },
    'qToken': {
      'name': 'Filda HFIL on Elastos',
      'symbol': 'qHFIL',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'private': {
          'address': '0x35508edCEc4b0bdC11f15fdf360dfbf8624F69AE'
        },
        'elatest': {
          'address': '0x33B1B094360E5b5a3a7649Bed8145fb230898DB2'
        },
        'hecotest': {
          'address': '0x195A4dFE3a8F877c5f0f7Ca7baA36B4301113130'
        },
        'heco': {
          'address': '0x043aFB65e93500CE5BCbf5Bbb41FC1fDcE2B7518'
        }
      }
    }
  },
  'HPT': {
    'name': 'Huobi Pool Token',
    'symbol': 'HPT',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0xe499ef4616993730ced0f31fa2703b92b50bb536'
      }
    },
    'qToken': {
      'name': 'Filda HPT on Heco',
      'symbol': 'qHPT',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0x749E0198f12559E7606987F8e7bD3AA1DE6d236E'
        }
      }
    }
  },
  'HDOT': {
    'name': 'HDOT',
    'symbol': 'HDOT',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3'
      }
    },
    'qToken': {
      'name': 'Filda HDOT on Heco',
      'symbol': 'qHPT',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0xCca471B0d49c0d4835a5172Fd97ddDEA5C979100'
        }
      }
    }
  },
  'HBCH': {
    'name': 'HBCH',
    'symbol': 'HBCH',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0xef3cebd77e0c52cb6f60875d9306397b5caca375'
      }
    },
    'qToken': {
      'name': 'Filda HBCH on Heco',
      'symbol': 'qHBCH',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0x09e3d97A7CFbB116B416Dae284f119c1eC3Bd5ea'
        }
      }
    }
  },
  'HLTC': {
    'name': 'HLTC',
    'symbol': 'HLTC',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4'
      }
    },
    'qToken': {
      'name': 'Filda HLTC on Heco',
      'symbol': 'qHPT',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0x4937A83Dc1Fa982e435aeB0dB33C90937d54E424'
        }
      }
    }
  },
  'htELA': {
    'name': 'ELA on Huobi',
    'symbol': 'htELA',
    'ABI': contractABI.ERC20,
    'network': {
      'hecotest': {
        'address': '0x874f0618315fafd23f500b3a80a8a72148936f8e'
      },
      'heco': {
        'address': '0xa1ecfc2bec06e4b43ddd423b94fef84d0dbc8f5c'
      }
    },
    'qToken': {
      'name': 'Filda ELA',
      'symbol': 'qELA',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'hecotest': {
          'address': '0xb6B9B25C18a7fa951379538a988605478B5C0940'
        },
        'heco': {
          'address': '0x0AD0bee939E00C54f57f21FBec0fBa3cDA7DEF58'
        }
      }
    }
  },
  'NEO': {
    'name': 'NEO',
    'symbol': 'NEO',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0x6514a5ebff7944099591ae3e8a5c0979c83b2571'
      }
    },
    'qToken': {
      'name': 'Filda PNEO on Heco',
      'symbol': 'qNEO',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0x92701DA6A28Ca70aA5Dfca2B8Ae2b4B8a22a0C11'
        }
      }
    }
  },
  'HBSV': {
    'name': 'HBSV',
    'symbol': 'HBSV',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0xc2cb6b5357ccce1b99cd22232942d9a225ea4eb1'
      }
    },
    'qToken': {
      'name': 'Filda HBSV on Heco',
      'symbol': 'qHBSV',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0x74F8D9B701bD4d8ee4ec812AF82C71EB67B9Ec75'
        }
      }
    }
  },
  'HXTZ': {
    'name': 'HXTZ',
    'symbol': 'HXTZ',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0x45e97dad828ad735af1df0473fc2735f0fd5330c'
      }
    },
    'qToken': {
      'name': 'Filda HXTZ on Heco',
      'symbol': 'qHXTZ',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0xfEA846A1284554036aC3191B5dFd786C0F4Db611'
        }
      }
    }
  },
  'AAVE': {
    'name': 'AAVE',
    'symbol': 'AAVE',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0x202b4936fe1a82a4965220860ae46d7d3939bb25'
      }
    },
    'qToken': {
      'name': 'Filda AAVE on Heco',
      'symbol': 'qAAVE',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0x73Fa2931e060F7d43eE554fd1De7F61115fE1751'
        }
      }
    }
  },
  'UNI': {
    'name': 'UNI',
    'symbol': 'UNI',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0x22c54ce8321a4015740ee1109d9cbc25815c46e6'
      }
    },
    'qToken': {
      'name': 'Filda UNI on Heco',
      'symbol': 'qUNI',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0xAc9E3AE0C188eb583785246Fef37AEF9ea159fb7'
        }
      }
    }
  },
  'SNX': {
    'name': 'SNX',
    'symbol': 'SNX',
    'ABI': contractABI.ERC20,
    'network': {
      'heco': {
        'address': '0x777850281719d5a96c29812ab72f822e0e09f3da'
      }
    },
    'qToken': {
      'name': 'Filda SNX on Heco',
      'symbol': 'qSNX',
      'contract': 'QErc20',
      'ABI': contractABI.qERC20,
      'network': {
        'heco': {
          'address': '0x88962975FDE8C7805fE0f38b7c91C18f4d55bb40'
        }
      }
    }
  }
}

const comptroller: { [index: string]: any } = {
  'ABI': [{'constant':true,'inputs':[],'name':'pendingAdmin','outputs':[{'name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x26782247'},{'constant':false,'inputs':[{'name':'newPendingAdmin','type':'address'}],'name':'_setPendingAdmin','outputs':[{'name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xb71d1a0c'},{'constant':true,'inputs':[],'name':'comptrollerImplementation','outputs':[{'name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xbb82aa5e'},{'constant':false,'inputs':[],'name':'_acceptImplementation','outputs':[{'name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xc1e80334'},{'constant':true,'inputs':[],'name':'pendingComptrollerImplementation','outputs':[{'name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xdcfbc0c7'},{'constant':false,'inputs':[{'name':'newPendingImplementation','type':'address'}],'name':'_setPendingImplementation','outputs':[{'name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xe992a041'},{'constant':false,'inputs':[],'name':'_acceptAdmin','outputs':[{'name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xe9c714f2'},{'constant':true,'inputs':[],'name':'admin','outputs':[{'name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xf851a440'},{'inputs':[],'payable':false,'stateMutability':'nonpayable','type':'constructor','signature':'constructor'},{'payable':true,'stateMutability':'payable','type':'fallback'},{'anonymous':false,'inputs':[{'indexed':false,'name':'oldPendingImplementation','type':'address'},{'indexed':false,'name':'newPendingImplementation','type':'address'}],'name':'NewPendingImplementation','type':'event','signature':'0xe945ccee5d701fc83f9b8aa8ca94ea4219ec1fcbd4f4cab4f0ea57c5c3e1d815'},{'anonymous':false,'inputs':[{'indexed':false,'name':'oldImplementation','type':'address'},{'indexed':false,'name':'newImplementation','type':'address'}],'name':'NewImplementation','type':'event','signature':'0xd604de94d45953f9138079ec1b82d533cb2160c906d1076d1f7ed54befbca97a'},{'anonymous':false,'inputs':[{'indexed':false,'name':'oldPendingAdmin','type':'address'},{'indexed':false,'name':'newPendingAdmin','type':'address'}],'name':'NewPendingAdmin','type':'event','signature':'0xca4f2f25d0898edd99413412fb94012f9e54ec8142f9b093e7720646a95b16a9'},{'anonymous':false,'inputs':[{'indexed':false,'name':'oldAdmin','type':'address'},{'indexed':false,'name':'newAdmin','type':'address'}],'name':'NewAdmin','type':'event','signature':'0xf9ffabca9c8276e99321725bcb43fb076a6c66a54b7f21c4e8146d8519b417dc'},{'anonymous':false,'inputs':[{'indexed':false,'name':'error','type':'uint256'},{'indexed':false,'name':'info','type':'uint256'},{'indexed':false,'name':'detail','type':'uint256'}],'name':'Failure','type':'event','signature':'0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0'},{'inputs':[],'payable':false,'stateMutability':'nonpayable','type':'constructor','signature':'constructor'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'string','name':'action','type':'string'},{'indexed':false,'internalType':'bool','name':'pauseState','type':'bool'}],'name':'ActionPaused','type':'event','signature':'0xef159d9a32b2472e32b098f954f3ce62d232939f1c207070b584df1814de2de0'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'contract CToken','name':'cToken','type':'address'},{'indexed':false,'internalType':'string','name':'action','type':'string'},{'indexed':false,'internalType':'bool','name':'pauseState','type':'bool'}],'name':'ActionPaused','type':'event','signature':'0x71aec636243f9709bb0007ae15e9afb8150ab01716d75fd7573be5cc096e03b0'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'contract CToken','name':'cToken','type':'address'},{'indexed':false,'internalType':'uint256','name':'newSpeed','type':'uint256'}],'name':'CompSpeedUpdated','type':'event','signature':'0x2ab93f65628379309f36cb125e90d7c902454a545c4f8b8cb0794af75c24b807'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'contract CToken','name':'cToken','type':'address'},{'indexed':true,'internalType':'address','name':'borrower','type':'address'},{'indexed':false,'internalType':'uint256','name':'compDelta','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'compBorrowIndex','type':'uint256'}],'name':'DistributedBorrowerComp','type':'event','signature':'0x1fc3ecc087d8d2d15e23d0032af5a47059c3892d003d8e139fdcb6bb327c99a6'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'contract CToken','name':'cToken','type':'address'},{'indexed':true,'internalType':'address','name':'supplier','type':'address'},{'indexed':false,'internalType':'uint256','name':'compDelta','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'compSupplyIndex','type':'uint256'}],'name':'DistributedSupplierComp','type':'event','signature':'0x2caecd17d02f56fa897705dcc740da2d237c373f70686f4e0d9bd3bf0400ea7a'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'uint256','name':'error','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'info','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'detail','type':'uint256'}],'name':'Failure','type':'event','signature':'0x45b96fe442630264581b197e84bbada861235052c5a1aadfff9ea4e40a969aa0'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'contract CToken','name':'cToken','type':'address'},{'indexed':false,'internalType':'bool','name':'isComped','type':'bool'}],'name':'MarketComped','type':'event','signature':'0x93c1f3e36ed71139f466a4ce8c9751790e2e33f5afb2df0dcfb3aeabe55d5aa2'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'contract CToken','name':'cToken','type':'address'},{'indexed':false,'internalType':'address','name':'account','type':'address'}],'name':'MarketEntered','type':'event','signature':'0x3ab23ab0d51cccc0c3085aec51f99228625aa1a922b3a8ca89a26b0f2027a1a5'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'contract CToken','name':'cToken','type':'address'},{'indexed':false,'internalType':'address','name':'account','type':'address'}],'name':'MarketExited','type':'event','signature':'0xe699a64c18b07ac5b7301aa273f36a2287239eb9501d81950672794afba29a0d'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'contract CToken','name':'cToken','type':'address'}],'name':'MarketListed','type':'event','signature':'0xcf583bb0c569eb967f806b11601c4cb93c10310485c67add5f8362c2f212321f'},{'anonymous':false,'inputs':[{'indexed':true,'internalType':'contract CToken','name':'cToken','type':'address'},{'indexed':false,'internalType':'uint256','name':'newBorrowCap','type':'uint256'}],'name':'NewBorrowCap','type':'event','signature':'0x6f1951b2aad10f3fc81b86d91105b413a5b3f847a34bbc5ce1904201b14438f6'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'address','name':'oldBorrowCapGuardian','type':'address'},{'indexed':false,'internalType':'address','name':'newBorrowCapGuardian','type':'address'}],'name':'NewBorrowCapGuardian','type':'event','signature':'0xeda98690e518e9a05f8ec6837663e188211b2da8f4906648b323f2c1d4434e29'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'uint256','name':'oldCloseFactorMantissa','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'newCloseFactorMantissa','type':'uint256'}],'name':'NewCloseFactor','type':'event','signature':'0x3b9670cf975d26958e754b57098eaa2ac914d8d2a31b83257997b9f346110fd9'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'contract CToken','name':'cToken','type':'address'},{'indexed':false,'internalType':'uint256','name':'oldCollateralFactorMantissa','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'newCollateralFactorMantissa','type':'uint256'}],'name':'NewCollateralFactor','type':'event','signature':'0x70483e6592cd5182d45ac970e05bc62cdcc90e9d8ef2c2dbe686cf383bcd7fc5'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'uint256','name':'oldCompRate','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'newCompRate','type':'uint256'}],'name':'NewCompRate','type':'event','signature':'0xc227c9272633c3a307d9845bf2bc2509cefb20d655b5f3c1002d8e1e3f22c8b0'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'uint256','name':'oldLiquidationIncentiveMantissa','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'newLiquidationIncentiveMantissa','type':'uint256'}],'name':'NewLiquidationIncentive','type':'event','signature':'0xaeba5a6c40a8ac138134bff1aaa65debf25971188a58804bad717f82f0ec1316'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'uint256','name':'oldMaxAssets','type':'uint256'},{'indexed':false,'internalType':'uint256','name':'newMaxAssets','type':'uint256'}],'name':'NewMaxAssets','type':'event','signature':'0x7093cf1eb653f749c3ff531d6df7f92764536a7fa0d13530cd26e070780c32ea'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'address','name':'oldPauseGuardian','type':'address'},{'indexed':false,'internalType':'address','name':'newPauseGuardian','type':'address'}],'name':'NewPauseGuardian','type':'event','signature':'0x0613b6ee6a04f0d09f390e4d9318894b9f6ac7fd83897cd8d18896ba579c401e'},{'anonymous':false,'inputs':[{'indexed':false,'internalType':'contract PriceOracle','name':'oldPriceOracle','type':'address'},{'indexed':false,'internalType':'contract PriceOracle','name':'newPriceOracle','type':'address'}],'name':'NewPriceOracle','type':'event','signature':'0xd52b2b9b7e9ee655fcb95d2e5b9e0c9f69e7ef2b8e9d2d0ea78402d576d22e22'},{'constant':false,'inputs':[{'internalType':'address[]','name':'cTokens','type':'address[]'}],'name':'_addCompMarkets','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xce485c5e'},{'constant':false,'inputs':[{'internalType':'contract Unitroller','name':'unitroller','type':'address'}],'name':'_become','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x1d504dc6'},{'constant':true,'inputs':[],'name':'_borrowGuardianPaused','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xe6653f3d'},{'constant':false,'inputs':[{'internalType':'address','name':'cToken','type':'address'}],'name':'_dropCompMarket','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x3aa729b4'},{'constant':true,'inputs':[],'name':'_mintGuardianPaused','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x3c94786f'},{'constant':false,'inputs':[{'internalType':'address','name':'newBorrowCapGuardian','type':'address'}],'name':'_setBorrowCapGuardian','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x391957d7'},{'constant':false,'inputs':[{'internalType':'contract CToken','name':'cToken','type':'address'},{'internalType':'bool','name':'state','type':'bool'}],'name':'_setBorrowPaused','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x18c882a5'},{'constant':false,'inputs':[{'internalType':'uint256','name':'newCloseFactorMantissa','type':'uint256'}],'name':'_setCloseFactor','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x317b0b77'},{'constant':false,'inputs':[{'internalType':'contract CToken','name':'cToken','type':'address'},{'internalType':'uint256','name':'newCollateralFactorMantissa','type':'uint256'}],'name':'_setCollateralFactor','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xe4028eee'},{'constant':false,'inputs':[{'internalType':'uint256','name':'compRate_','type':'uint256'}],'name':'_setCompRate','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x6a491112'},{'constant':false,'inputs':[{'internalType':'uint256','name':'newLiquidationIncentiveMantissa','type':'uint256'}],'name':'_setLiquidationIncentive','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x4fd42e17'},{'constant':false,'inputs':[{'internalType':'contract CToken[]','name':'cTokens','type':'address[]'},{'internalType':'uint256[]','name':'newBorrowCaps','type':'uint256[]'}],'name':'_setMarketBorrowCaps','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x607ef6c1'},{'constant':false,'inputs':[{'internalType':'uint256','name':'newMaxAssets','type':'uint256'}],'name':'_setMaxAssets','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xd9226ced'},{'constant':false,'inputs':[{'internalType':'contract CToken','name':'cToken','type':'address'},{'internalType':'bool','name':'state','type':'bool'}],'name':'_setMintPaused','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x3bcf7ec1'},{'constant':false,'inputs':[{'internalType':'address','name':'newPauseGuardian','type':'address'}],'name':'_setPauseGuardian','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x5f5af1aa'},{'constant':false,'inputs':[{'internalType':'contract PriceOracle','name':'newOracle','type':'address'}],'name':'_setPriceOracle','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x55ee1fe1'},{'constant':false,'inputs':[{'internalType':'bool','name':'state','type':'bool'}],'name':'_setSeizePaused','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x2d70db78'},{'constant':false,'inputs':[{'internalType':'bool','name':'state','type':'bool'}],'name':'_setTransferPaused','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x8ebf6364'},{'constant':false,'inputs':[{'internalType':'contract CToken','name':'cToken','type':'address'}],'name':'_supportMarket','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xa76b3fda'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'},{'internalType':'uint256','name':'','type':'uint256'}],'name':'accountAssets','outputs':[{'internalType':'contract CToken','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xdce15449'},{'constant':true,'inputs':[],'name':'admin','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xf851a440'},{'constant':true,'inputs':[{'internalType':'uint256','name':'','type':'uint256'}],'name':'allMarkets','outputs':[{'internalType':'contract CToken','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x52d84d1e'},{'constant':false,'inputs':[{'internalType':'address','name':'cToken','type':'address'},{'internalType':'address','name':'borrower','type':'address'},{'internalType':'uint256','name':'borrowAmount','type':'uint256'}],'name':'borrowAllowed','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xda3d454c'},{'constant':true,'inputs':[],'name':'borrowCapGuardian','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x21af4569'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'borrowCaps','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x4a584432'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'borrowGuardianPaused','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x6d154ea5'},{'constant':false,'inputs':[{'internalType':'address','name':'cToken','type':'address'},{'internalType':'address','name':'borrower','type':'address'},{'internalType':'uint256','name':'borrowAmount','type':'uint256'}],'name':'borrowVerify','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x5c778605'},{'constant':true,'inputs':[{'internalType':'address','name':'account','type':'address'},{'internalType':'contract CToken','name':'cToken','type':'address'}],'name':'checkMembership','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x929fe9a1'},{'constant':false,'inputs':[{'internalType':'address','name':'holder','type':'address'},{'internalType':'contract CToken[]','name':'cTokens','type':'address[]'}],'name':'claimComp','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x1c3db2e0'},{'constant':false,'inputs':[{'internalType':'address[]','name':'holders','type':'address[]'},{'internalType':'contract CToken[]','name':'cTokens','type':'address[]'},{'internalType':'bool','name':'borrowers','type':'bool'},{'internalType':'bool','name':'suppliers','type':'bool'}],'name':'claimComp','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x6810dfa6'},{'constant':false,'inputs':[{'internalType':'address','name':'holder','type':'address'}],'name':'claimComp','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xe9af0292'},{'constant':true,'inputs':[],'name':'closeFactorMantissa','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xe8755446'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'compAccrued','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xcc7ebdc4'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'compBorrowState','outputs':[{'internalType':'uint224','name':'index','type':'uint224'},{'internalType':'uint32','name':'block','type':'uint32'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x8c57804e'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'},{'internalType':'address','name':'','type':'address'}],'name':'compBorrowerIndex','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xca0af043'},{'constant':true,'inputs':[],'name':'compClaimThreshold','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x747026c9'},{'constant':true,'inputs':[],'name':'compInitialIndex','outputs':[{'internalType':'uint224','name':'','type':'uint224'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xa7f0e231'},{'constant':true,'inputs':[],'name':'compRate','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xaa900754'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'compSpeeds','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x1d7b33d7'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'},{'internalType':'address','name':'','type':'address'}],'name':'compSupplierIndex','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xb21be7fd'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'compSupplyState','outputs':[{'internalType':'uint224','name':'index','type':'uint224'},{'internalType':'uint32','name':'block','type':'uint32'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x6b79c38d'},{'constant':true,'inputs':[],'name':'comptrollerImplementation','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xbb82aa5e'},{'constant':false,'inputs':[{'internalType':'address[]','name':'cTokens','type':'address[]'}],'name':'enterMarkets','outputs':[{'internalType':'uint256[]','name':'','type':'uint256[]'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xc2998238'},{'constant':false,'inputs':[{'internalType':'address','name':'cTokenAddress','type':'address'}],'name':'exitMarket','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xede4edd0'},{'constant':true,'inputs':[{'internalType':'address','name':'account','type':'address'}],'name':'getAccountLiquidity','outputs':[{'internalType':'uint256','name':'','type':'uint256'},{'internalType':'uint256','name':'','type':'uint256'},{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x5ec88c79'},{'constant':true,'inputs':[],'name':'getAllMarkets','outputs':[{'internalType':'contract CToken[]','name':'','type':'address[]'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xb0772d0b'},{'constant':true,'inputs':[{'internalType':'address','name':'account','type':'address'}],'name':'getAssetsIn','outputs':[{'internalType':'contract CToken[]','name':'','type':'address[]'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xabfceffc'},{'constant':true,'inputs':[],'name':'getBlockNumber','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x42cbb15c'},{'constant':true,'inputs':[],'name':'getCompAddress','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x9d1b5a0a'},{'constant':true,'inputs':[{'internalType':'address','name':'account','type':'address'},{'internalType':'address','name':'cTokenModify','type':'address'},{'internalType':'uint256','name':'redeemTokens','type':'uint256'},{'internalType':'uint256','name':'borrowAmount','type':'uint256'}],'name':'getHypotheticalAccountLiquidity','outputs':[{'internalType':'uint256','name':'','type':'uint256'},{'internalType':'uint256','name':'','type':'uint256'},{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x4e79238f'},{'constant':true,'inputs':[],'name':'isComptroller','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x007e3dd2'},{'constant':false,'inputs':[{'internalType':'address','name':'cTokenBorrowed','type':'address'},{'internalType':'address','name':'cTokenCollateral','type':'address'},{'internalType':'address','name':'liquidator','type':'address'},{'internalType':'address','name':'borrower','type':'address'},{'internalType':'uint256','name':'repayAmount','type':'uint256'}],'name':'liquidateBorrowAllowed','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x5fc7e71e'},{'constant':false,'inputs':[{'internalType':'address','name':'cTokenBorrowed','type':'address'},{'internalType':'address','name':'cTokenCollateral','type':'address'},{'internalType':'address','name':'liquidator','type':'address'},{'internalType':'address','name':'borrower','type':'address'},{'internalType':'uint256','name':'actualRepayAmount','type':'uint256'},{'internalType':'uint256','name':'seizeTokens','type':'uint256'}],'name':'liquidateBorrowVerify','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x47ef3b3b'},{'constant':true,'inputs':[{'internalType':'address','name':'cTokenBorrowed','type':'address'},{'internalType':'address','name':'cTokenCollateral','type':'address'},{'internalType':'uint256','name':'actualRepayAmount','type':'uint256'}],'name':'liquidateCalculateSeizeTokens','outputs':[{'internalType':'uint256','name':'','type':'uint256'},{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xc488847b'},{'constant':true,'inputs':[],'name':'liquidationIncentiveMantissa','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x4ada90af'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'markets','outputs':[{'internalType':'bool','name':'isListed','type':'bool'},{'internalType':'uint256','name':'collateralFactorMantissa','type':'uint256'},{'internalType':'bool','name':'isComped','type':'bool'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x8e8f294b'},{'constant':true,'inputs':[],'name':'maxAssets','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x94b2294b'},{'constant':false,'inputs':[{'internalType':'address','name':'cToken','type':'address'},{'internalType':'address','name':'minter','type':'address'},{'internalType':'uint256','name':'mintAmount','type':'uint256'}],'name':'mintAllowed','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x4ef4c3e1'},{'constant':true,'inputs':[{'internalType':'address','name':'','type':'address'}],'name':'mintGuardianPaused','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x731f0c2b'},{'constant':false,'inputs':[{'internalType':'address','name':'cToken','type':'address'},{'internalType':'address','name':'minter','type':'address'},{'internalType':'uint256','name':'actualMintAmount','type':'uint256'},{'internalType':'uint256','name':'mintTokens','type':'uint256'}],'name':'mintVerify','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x41c728b9'},{'constant':true,'inputs':[],'name':'oracle','outputs':[{'internalType':'contract PriceOracle','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x7dc0d1d0'},{'constant':true,'inputs':[],'name':'pauseGuardian','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x24a3d622'},{'constant':true,'inputs':[],'name':'pendingAdmin','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x26782247'},{'constant':true,'inputs':[],'name':'pendingComptrollerImplementation','outputs':[{'internalType':'address','name':'','type':'address'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xdcfbc0c7'},{'constant':false,'inputs':[{'internalType':'address','name':'cToken','type':'address'},{'internalType':'address','name':'redeemer','type':'address'},{'internalType':'uint256','name':'redeemTokens','type':'uint256'}],'name':'redeemAllowed','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xeabe7d91'},{'constant':false,'inputs':[{'internalType':'address','name':'cToken','type':'address'},{'internalType':'address','name':'redeemer','type':'address'},{'internalType':'uint256','name':'redeemAmount','type':'uint256'},{'internalType':'uint256','name':'redeemTokens','type':'uint256'}],'name':'redeemVerify','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x51dff989'},{'constant':false,'inputs':[],'name':'refreshCompSpeeds','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x4d8e5037'},{'constant':false,'inputs':[{'internalType':'address','name':'cToken','type':'address'},{'internalType':'address','name':'payer','type':'address'},{'internalType':'address','name':'borrower','type':'address'},{'internalType':'uint256','name':'repayAmount','type':'uint256'}],'name':'repayBorrowAllowed','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x24008a62'},{'constant':false,'inputs':[{'internalType':'address','name':'cToken','type':'address'},{'internalType':'address','name':'payer','type':'address'},{'internalType':'address','name':'borrower','type':'address'},{'internalType':'uint256','name':'actualRepayAmount','type':'uint256'},{'internalType':'uint256','name':'borrowerIndex','type':'uint256'}],'name':'repayBorrowVerify','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x1ededc91'},{'constant':false,'inputs':[{'internalType':'address','name':'cTokenCollateral','type':'address'},{'internalType':'address','name':'cTokenBorrowed','type':'address'},{'internalType':'address','name':'liquidator','type':'address'},{'internalType':'address','name':'borrower','type':'address'},{'internalType':'uint256','name':'seizeTokens','type':'uint256'}],'name':'seizeAllowed','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xd02f7351'},{'constant':true,'inputs':[],'name':'seizeGuardianPaused','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'view','type':'function','signature':'0xac0b0bb7'},{'constant':false,'inputs':[{'internalType':'address','name':'cTokenCollateral','type':'address'},{'internalType':'address','name':'cTokenBorrowed','type':'address'},{'internalType':'address','name':'liquidator','type':'address'},{'internalType':'address','name':'borrower','type':'address'},{'internalType':'uint256','name':'seizeTokens','type':'uint256'}],'name':'seizeVerify','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x6d35bf91'},{'constant':false,'inputs':[{'internalType':'address','name':'cToken','type':'address'},{'internalType':'address','name':'src','type':'address'},{'internalType':'address','name':'dst','type':'address'},{'internalType':'uint256','name':'transferTokens','type':'uint256'}],'name':'transferAllowed','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0xbdcdc258'},{'constant':true,'inputs':[],'name':'transferGuardianPaused','outputs':[{'internalType':'bool','name':'','type':'bool'}],'payable':false,'stateMutability':'view','type':'function','signature':'0x87f76303'},{'constant':false,'inputs':[{'internalType':'address','name':'cToken','type':'address'},{'internalType':'address','name':'src','type':'address'},{'internalType':'address','name':'dst','type':'address'},{'internalType':'uint256','name':'transferTokens','type':'uint256'}],'name':'transferVerify','outputs':[],'payable':false,'stateMutability':'nonpayable','type':'function','signature':'0x6a56947e'}],
  'network' : {
    'main': {
      'address': '0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B'
    },
    'ropsten': {
      'address': '0x54188bBeDD7b68228fa89CbDDa5e3e930459C6c6'
    },
    'rinkeby': {
      'address': '0x2EAa9D77AE4D8f9cdD9FAAcd44016E746485bddb'
    },
    'private': {
      'address': '0x0866c12B85AD8fca53f0f0918B5AA30286d39D62'
    },
    'elatest': {
      'address': '0x9bCDf73B28F9214f51f8722a32Bd96bfe4f16Fa6'
    },
    'hecotest': {
      'address': '0xb74633f2022452f377403B638167b0A135DB096d'
    },
    'heco': {
      'address': '0xb74633f2022452f377403B638167b0A135DB096d'
    }
  }
}

const chainIdMap: { [index: string]: any } = {
  '1337': 'private',
  '21': 'elatest',
  '256': 'hecotest',
  '128': 'heco'
}

export default {
  markets,
  comptroller,
  chainIdMap,
}
