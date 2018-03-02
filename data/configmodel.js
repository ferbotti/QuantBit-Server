var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CriptoriumDB');
 
var configSchema = new mongoose.Schema({
    LastUpdateCoinAPI: String
}, { collection: 'configs' }
);

module.exports = { Mongoose: mongoose, ConfigSchema: configSchema }

