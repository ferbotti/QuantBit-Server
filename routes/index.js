var express = require('express');
var request = require("request");
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API Criptorium' });
});

router.get('/criptos/book', function (req, res, next) {
  var coin = require("../controllers/server")
  coin.Populate()
  .then(Datacoin => {
    var db = require('../db');
    var CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
    CriptoModel.insertMany(Datacoin ,forceServerObjectId=true,function (err,data) {

    if(err!=null){
        return console.log(err);
    }
    console.log(Datacoin);
    });
  });
});

/* GET all criptos. */
router.get('/criptos', function (req, res, next) {
    var db = require('../data/criptomodel');
    var CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
    CriptoModel.find({}).lean().exec(function(e,docs){
       res.json(docs);
       res.end();
    });
});

/* GET ONE cripto. */
router.get('/criptos/:id', function (req, res, next) {
  var db = require('../data/criptomodel');
  var CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
  CriptoModel.find({ _id: req.params.id }).lean().exec(function (e, docs) {
      res.json(docs);
      res.end();
  });
});

/* GET ONE cripto. */
router.get('/criptos/order/:order', function (req, res, next) {
  var db = require('../data/criptomodel');
  var CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
  CriptoModel.find({ SortOrder: req.params.order }).lean().exec(function (e, docs) {
      res.json(docs);
      res.end();
  });
});

/* GET ONE cripto. */
router.get('/criptos/code/:cod', function (req, res, next) {
  var db = require('../data/criptomodel');
  var CriptoModel = db.Mongoose.model('criptos', db.CriptoSchema, 'criptos');
  CriptoModel.find({ Symbol: req.params.cod }).lean().exec(function (e, docs) {
      res.json(docs);
      res.end();
  });
});

module.exports = router;
