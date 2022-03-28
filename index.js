const google = require('google-protobuf/google/protobuf/timestamp_pb.js');
const { EchoClient } = require('./proto/bot_grpc_web_pb');
const {
    Create
} = require('./proto/bot_pb.js');

module.exports = class DroidClientWeb {
    client;
    constructor(host_server, port_server) {
        this.client = new EchoClient(`http://${host_server}:${port_server}`, null, null);

    }
    __date_from_string(date) {
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        var second = new Date().getSeconds();
        var partial = date.split("-")
        let DateFromstring = new Date(
            partial[0],
            partial[1],
            partial[2],
            hours,
            minutes,
            second
        );
        DateFromstring.setMonth(DateFromstring.getMonth()-1)
        let timii = google.Timestamp.fromDate(DateFromstring);
        return timii
    }

    createBot(payload, callback) {
        let response_json = {
            success: true,
            data: {}
        }
        try {

            payload.spot_date = this.__date_from_string(payload.spot_date);
        } catch (err) {
            response_json.success = false;
            response_json.data = { error: 'date format is not valid, should be YYYY-MM-DD' }
            callback(response_json)
            return
        }
        let request = new Create();

        request.setTicker(payload.ticker)
        request.setSpotDate(payload.spot_date)
        request.setInvestmentAmount(payload.investment_amount)
        request.setPrice(payload.price)
        request.setBotId(payload.bot_id)
        request.setMargin(payload.margin || 1)
        request.setFraction(payload.fraction || false)
        request.setTpMultiplier(payload.tp_multiplier || null)
        request.setSlMultiplier(payload.sl_multiplier || null)
        this.client.createBot(request, {}, (err, response) => {

            if (err) {
                response_json.success = false
                response_json.data = { error: err }
                callback(response_json)
            } else {

                let res = response.getMessage()
                response_json.data = JSON.parse(res)
                callback(response_json)
            }
        })
    }

}

;
// let payload ={
//     ticker:"0005.HK",
//     spot_date: "2020-01-01",
//     investment_amount:100000,
//     price:156.5,
//     bot_id:"CLASSIC_classic_015384",
//     margin:1,
//     fraction:false
// }
// const client = new DroidClient('localhost', 50065);
// console.log(payload);
// client.createBot(payload,(res) =>{
//         console.log(res);
// });


// console.log(Client)
// Client.Stop('test', (err, response) => {
//     if (err) {
//        console.error(err)
//       } else {
//         // process feature
//       }
// })