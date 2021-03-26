const https = require('https')
const constants = require('./constants');

//AlphaVantage API Keys: YAE5Y81HCQK2IG54, ABFF0IIAH5WOBKAU

//Build the request
let base_url = constants.BASE_URL;
let func = constants.ROUTE_INTRADAY;
let symbol = 'GME';
let interval = '1min';
let apikey = constants.API_KEY;
//Optional: 
// let adjusted = 'true';
// let outputsize = 'full';
// let datatype = 'json';

let url = base_url + 'function=' + func + '&symbol=' + symbol + '&interval=' + interval + '&apikey=' + apikey;
console.log('URL: ', url);

https.get(url, (resp) => {
  let data = '';

  //on data add to final string
  resp.on('data', (chunk) => {
    data += chunk;
  });

  //when done log the result
  resp.on('end', () => {
    console.log(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});