var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/CriptoriumDB');
mongoose.connect('mongodb://heroku_wk6lh0qg:1qu@nt$01@ds157818.mlab.com:57818/heroku_wk6lh0qg');

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
    SortOrder: String,
    Sponsored: String,
    Usd: String
}, { collection: 'criptos' }
);

module.exports = { Mongoose: mongoose, CriptoSchema: criptoSchema }

