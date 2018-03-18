var mongoose = require('mongoose');    
var common = require('../controllers/common');  
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


var configSchema = new mongoose.Schema({
    LastUpdateCoinAPI: String
}, { collection: 'configs' }
);

module.exports = { Mongoose: mongoose, ConfigSchema: configSchema }

