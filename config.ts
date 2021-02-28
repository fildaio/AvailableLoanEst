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
  'ABI': contractABI.Comptroller,
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
