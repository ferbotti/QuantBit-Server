
var common = require('../controllers/common');  
var mongoose = require('mongoose');

require('mongoose-double')(mongoose);    
var SchemaTypes = mongoose.Schema.Types;

var config = common.config();

var uri = config.mongo_uri; 

var options = {
  "server" : {
    "socketOptions" : {
      "keepAlive" : 300000,
      "connectTimeoutMS" : 30000
    }
  },
  "replset" : {
    "socketOptions" : {
      "keepAlive" : 300000,
      "connectTimeoutMS" : 30000
    }
  }
}

mongoose.connect(uri, options);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var criptoSchema = new mongoose.Schema({
    Id: String,
    Name: String,
    Symbol: String,
    CoinName: String,
    FullName: String,
    ImageUrl: String,
    Algorithm: String,
    ProofType: String,
    FullyPremined: String,
    TotalCoinSupply: String,
    IsTrading: String,
    SortOrder: Number,
    Sponsored: String,
    Usd: SchemaTypes.Double
}, { collection: 'criptos' }
);

module.exports = { Mongoose: mongoose, CriptoSchema: criptoSchema }

