const rp = require("request-promise");

// use it before all route definitions

const express = require("express");
const app = express();

const requestOptions = {
  method: "GET",
  uri:
    "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  qs: {
    start: "1",
    limit: "5000",
    convert: "USD"
  },
  headers: {
    "X-CMC_PRO_API_KEY": "c2579ff6-ca84-488d-8368-c43ad5492a20"
  },
  json: true,
  gzip: true
};

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
};

app.use(allowCrossDomain);

app.get("/cryptolist", function(req, res) {
  // res.json({ name: "test" });
  rp(requestOptions)
    .then(response => {
      console.log(Object.keys(response));
      return res.json(response.data);
    })
    .catch(err => {
      console.log("API call error:", err.message);
    });
});

app.listen(8080);
