# droid-web-rpc

A gRPC client instance as an interface for DROIDv3 server.

## Installation

open your project folder and type:
```
npm install droid-web-rpc
```

## Usage

This is an example on how to use the client

```js
// we import the client
import DroidClientWeb from "droid-web-rpc";

// initialise the client
// replace `localhost` with existing droidv3 server url
const client = new DroidClientWeb('localhost',50065);

// prepare the payload
let payload ={
    ticker:"0005.HK",
    spot_date: "2021-01-01",
    investment_amount:100000,
    price:156.5,
    bot_id:"CLASSIC_classic_015384",
    margin:1,
    fraction:false
}

// and send it through the client instance
client.createBot(payload,(res) =>{
    console.log(res);
});

```

## Parametres
- client
  
  ```js
  /**
   * @constructor
   * @param {String} url - DROIDv3 server URL
   * @param {Number} port - DROIDv3 server port 
   */
  ```

- payload:

  - Create

    ```js
    /**
     * @param {Object} payload - Payload to be sent
     * @param {String} payload.ticker - Ticker name
     * @param {String} payload.spot_date - Spot date
     * @param {Number} payload.investmen_amount - Amount to invest
     * @param {Number} payload.price - The price the investment is put in
     * @param {String} payload.bot_id - The bot id to be used
     * @param {Number} payload.margin - Margin used in the order
     * @param {Boolean} payload.fraction - Whether to allow fraction in share number
     */
    ```
  
  - Hedge

    ```js
    /**
     * @param {String} bot_id
     * @param {String} ric
     * @param {Number} current_price
     * @param {Number} entry_price
     * @param {Number} last_share_num
     * @param {Number} last_hedge_delta
     * @param {Number} investment_amount
     * @param {Number} bot_cash_balance
     * @param {Number} stop_loss_price
     * @param {Number} take_profit_price
     * @param {String} expiry - date in format yyyy-mm-dd
     * @param {Number} [strike]
     * @param {Number} [strike_2]
     * @param {Number} [margin]
     * @param {Boolean} [fraction]
     * @param {Number} [option_price]
     * @param {Number} [barrier]
     * @param {Number} [current_low_price]
     * @param {Number} [current_high_price]
     * @param {Number} [ask_price]
     * @param {Number} [bid_price]
     * @param {String} [trading_day] - date in format yyyy-mm-dd
     */
    ```

  - Stop

    ```js
    /**
     * @param {String} bot_id
     * @param {String} ric
     * @param {Number} current_price
     * @param {Number} entry_price
     * @param {Number} last_share_num
     * @param {Number} last_hedge_delta
     * @param {Number} investment_amount
     * @param {Number} bot_cash_balance
     * @param {Number} stop_loss_price
     * @param {Number} take_profit_price
     * @param {String} expiry - date in format yyyy-mm-dd
     * @param {Number} [strike]
     * @param {Number} [strike_2]
     * @param {Number} [margin]
     * @param {Boolean} [fraction]
     * @param {Number} [option_price]
     * @param {Number} [barrier]
     * @param {Number} [current_low_price]
     * @param {Number} [current_high_price]
     * @param {Number} [ask_price]
     * @param {Number} [bid_price]
     * @param {String} [trading_day] - date in format yyyy-mm-dd
     */
    ```
## Client class methods

All of these methods has the same parametres:

```js
/**
 * @param {Object} payload - the payload as described above
 * @param {createCallback|hedgeCallback|stopCallback} callback - the callback function
```

- `createBot` - to create position and start the bot
  
  returns:

  ```js
  /**
   * @callback createCallback
   * @param {String} ticker
   * @param {Number} share_num
   * @param {String} expiry
   * @param {String} spot_date
   * @param {String} created
   * @param {Number} total_bot_share_num
   * @param {Number} max_loss_pct
   * @param {Number} max_loss_price
   * @param {Number} max_loss_amount
   * @param {Number} target_profit_pct
   * @param {Number} target_profit_price
   * @param {Number} target_profit_amount
   * @param {Number} entry_price
   * @param {Number} margin
   * @param {String} bot_id
   * @param {Boolean} fraction
   * @param {String} side
   * @param {String} status
   * @param {Number} vol
   * @param {Number} classic_vol
   * @param {Number} strike_2
   * @param {Number} barrier
   * @param {Number} delta
   * @param {Number} option_price
   * @param {Number} q
   * @param {Number} r
   * @param {Number} strike
   * @param {Number} t
   * @param {Number} v1
   * @param {Number} v2
   */
  ```

- `hedgeBot` - create a hedge position using payload params
  
  returns

  ```js
  /**
   * @callback hedgeCallback
   * @param {Number} entry_price
   * @param {Number} current_price
   * @param {Number} share_num
   * @param {Number} total_bot_share_num
   * @param {Number} last_hedge_delta
   * @param {Number} share_change
   * @param {String} side
   * @param {String} status
   * @param {Number} strike_2
   * @param {Number} barrier
   * @param {Number} delta
   * @param {Number} option_price
   * @param {Number} q
   * @param {Number} r
   * @param {Number} strike
   * @param {Number} t
   * @param {Number} v1
   * @param {Number} v2
   */
  ```

- `stopBot` - stop the bot and close the position
  
  returns:

  ```js
  /**
   * @callback stopCallback
   * @param {Number} entry_price
   * @param {Number} current_price
   * @param {Number} share_num
   * @param {Number} total_bot_share_num
   * @param {Number} last_hedge_delta
   * @param {Number} share_change
   * @param {String} side
   * @param {String} status
   * @param {Number} strike_2
   * @param {Number} barrier
   * @param {Number} delta
   * @param {Number} option_price
   * @param {Number} q
   * @param {Number} r
   * @param {Number} strike
   * @param {Number} t
   * @param {Number} v1
   * @param {Number} v2
   */
  ```

