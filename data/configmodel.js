var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/CriptoriumDB');
mongoose.connect('mongodb://ds157818.mlab.com:57818/heroku_wk6lh0qg', 
{user: 'heroku_wk6lh0qg', pass: '1qu@nt$01'});

var configSchema = new mongoose.Schema({
    LastUpdateCoinAPI: String
}, { collection: 'configs' }
);

module.exports = { Mongoose: mongoose, ConfigSchema: configSchema }

