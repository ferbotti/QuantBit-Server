"use strict" 
const axios = require("axios");

module.exports = {

    Populate() {
    return new Promise (function (resolve, reject) {

    var config = {
        headers: {'Content-Type': 'application/json'}
    };

    const urlJsonComplete = "https://min-api.cryptocompare.com/data/all/coinlist";
    const urlJsonSimple = "https://coinbin.org/coins";

    let coinJsonComplete;
    let coinJsonSimple;

    let coinObjectComplete_list = new Array();
    let coinObjectSimple_list = new Array();

    function getJsonComplete() {
        return axios.get(urlJsonComplete, config);
    }

    function getJsonSimple() {
        return axios.get(urlJsonSimple, config);
    }

    axios.all([getJsonComplete(), getJsonSimple()])
    .then(axios.spread(function (jsonComplete, jsonSimple) {
        coinJsonComplete = Object.entries(jsonComplete.data.Data); 
        coinJsonSimple = Object.entries(jsonSimple.data.coins);

        coinJsonSimple.forEach(function(coins) {
            let items = coins[1];
            coinObjectSimple_list.push(items);        
            });
        
        coinJsonComplete.forEach(function(coins) {
            let items = coins[1];
            coinObjectComplete_list.push(items);        
            });
        
        coinObjectSimple_list.sort(function(a, b) {
                return parseFloat(a.rank) - parseFloat(b.rank);
            });   
        
        let coinBulk = new Array();
            
        coinObjectSimple_list.forEach(function(element) {
            let index = coinObjectComplete_list.findIndex(p => p.CoinName.toLowerCase() == element.name.toLowerCase());
            if (index > -1) { 
                let CoinAux = coinObjectComplete_list[index];
                CoinAux.SortOrder = element.rank;
                CoinAux.Usd = element.usd;
                CoinAux.ImageUrl = "https://www.cryptocompare.com".concat(coinObjectComplete_list[index].ImageUrl);
                coinBulk.push(CoinAux);
            }
        });    
        resolve(coinBulk);
    }))
    .catch(function (error) {
        reject(error);
    }); 

        });
    }};
