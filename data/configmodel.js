//mongoose.connect('mongodb://localhost/CriptoriumDB');
var mongoose = require('mongoose');    

var uri = 'mongodb://quantbitdbadmin:casa0101@ds157818.mlab.com:57818/heroku_wk6lh0qg';

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

