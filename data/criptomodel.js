var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CriptoriumDB');
 
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

