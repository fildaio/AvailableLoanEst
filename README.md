# FilDA Loan Info

## To Install

`yarn install` or `npm install`

## To Build

`yarn build` or `npm run build`

## How to use it

### Add it to your project

`yarn add filda-js-sdk` or `npm install filda-js-sdk --save`

### Usage sample

``` js
import FilDaLoanInfo from 'filda-js-sdk'
or
const FilDaLoanInfo = require('filda-js-sdk')

// Get an address's the loan usage rate and the remaining available borrow balance 
const { usageRate, remainingBorrowBalance } = await new FilDaLoanInfo().availableLoanEstimation('0xADDRESS')
```
