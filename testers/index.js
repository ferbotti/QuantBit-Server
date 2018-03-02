"use strict" 
let coin = require("../controllers/server")

coin.Populate()
.then(dataCoin => {
    var db = require('../data/criptomodel');
    var config = require('../data/configmodel');
    
    var configModel = config.Mongoose.model('configs', config.ConfigSchema, 'configs');

    var ts_hms = new Date().toISOString().split('T')[0];                
        
    configModel.findOneAndUpdate({Version: "1"}, {$set: {LastUpdateCoinAPI: ts_hms}}, {new: true}, function(err,doc) {
        if (err) { throw err; }
        else { 
            console.log("Updated"); 
            let CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
        
            CriptoModel.remove({}, function (err,data)  {
                CriptoModel.insertMany(dataCoin, function (err,data)  {
    
                    if(err!=null){
                        return console.log(err);
                    }
                    console.log("Atualizado");
                    });            
            });        
        }});
});
