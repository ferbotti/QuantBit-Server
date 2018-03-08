var express = require('express');
var request = require("request");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  let rand =  Math.floor(Math.random() * (1000 - 1)) + 1;
  res.render('index', { title: 'QuantBit API', randon: rand });
});

router.get('/cryptos/update', function (req, res, next) {
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
              let CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
              CriptoModel.remove({}, function (err,data)  {
                  CriptoModel.insertMany(dataCoin, function (err,data)  {
                      if(err!=null){
                          return console.log(err);
                      }
                      res.json("Update ".concat("| ").concat(ts_hms));
                      });            
              });        
          }});
  });

});

/* GET all criptos. */
router.get('/cryptos', function (req, res, next) {
    var db = require('../data/criptomodel');
    var CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
    CriptoModel.find({}).lean().exec(function(e,docs){
       res.json(docs);
       res.end();
    });
});

/* GET ONE cripto. */
router.get('/cryptos/:id', function (req, res, next) {
  var db = require('../data/criptomodel');
  var CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
  CriptoModel.find({ _id: req.params.id }).lean().exec(function (e, docs) {
      res.json(docs);
      res.end();
  });
});

/* GET ONE cripto. */
router.get('/cryptos/order/:order', function (req, res, next) {
  var db = require('../data/criptomodel');
  var CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
  CriptoModel.find({ SortOrder: req.params.order }).lean().exec(function (e, docs) {
      res.json(docs);
      res.end();
  });
});

/* GET ONE cripto. */
router.get('/cryptos/code/:cod', function (req, res, next) {
  var db = require('../data/criptomodel');
  var CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
  CriptoModel.find({ Symbol: req.params.cod }).lean().exec(function (e, docs) {
      res.json(docs);
      res.end();
  });
});

router.get('/architecture', function (req, res, next) {
    res.render('architecture.ejs');    
    res.end();
});

router.get('/cryptos/list/:list', function (req, res, next) {
    var db = require('../data/criptomodel');
    let limit = req.params.list;
    var CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
    CriptoModel.find({}).sort({ SortOrder:1 }).limit(parseInt(limit)).exec(function (e, docs) {
        res.json(docs);
        res.end();
    });
  });
  

module.exports = router;
