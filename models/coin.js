'use strict';

module.exports = class CoinBase {
   constructor(
	   	Id, 
	   	ImageUrl,
	   	Name,
	   	Symbols,
	   	CoinName,
	   	FullName,
	   	Algorithm,
	   	ProofType,
	   	SortOrder,
	   	sTrading) 
   	{
       	this.Id = Id, 
	   	this.ImageUrl = ImageUrl,
	   	this.Name = Name,
	   	this.Symbols = Symbols,
	   	this.CoinName = CoinName,
	   	this.FullName = FullName,
	   	this.Algorithm = Algorithm,
	   	this.ProofType = ProofType,
	   	this.SortOrder = SortOrder,
	   	this.sTrading = sTrading
	}

   display() {
       console.log(this.Symbols + " " + this.CoinName);
   }
}