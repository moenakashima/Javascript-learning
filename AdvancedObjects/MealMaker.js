const menu = {
  _meal : 'hunbeger',
  _price : 0,

  set meal(mealToCheck) {
    if(typeof mealToCheck === 'string'){
      return this._meal = mealToCheck;
    }  
  },
  set price(priceToCheck){
    if(typeof priceToCheck === number){
      return this._price = priceToCheck;
    }
  }
};

console.log(menu);

