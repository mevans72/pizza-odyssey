'use strict';
//Store your results:
//Constructor Objects
function PizzaShop (locationName, storeData) {
  this.locationName = locationName;
  this.storeData = storeData;
  this.pizzasPerDay = [];
  this.deliveriesPerDay = [];
  this.pizzasPerHour = [];
  this.deliveriesPerHour = [];

};
//Display Your Results
//Declare Store Functions and Save Results to New Store Variables
var ballardData = [[0, 4, 0, 4], [0, 4, 0, 7], [2, 15, 1, 4], [15, 35, 3, 8], [ 12, 31, 5, 12], [5, 20, 6, 11]];
var ballard = new PizzaShop('Ballard', ballardData);
var firstHillData = [[0, 4, 0, 4], [0, 4, 0, 7], [2, 15, 1, 4], [15, 35, 3, 8], [ 12, 31, 5, 12], [5, 20, 6, 11]];
var firstHill = new PizzaShop('First Hill', firstHillData);

PizzaShop.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

PizzaShop.prototype.calcPizzasandDeliveriesPerHr = function() {
  for(var i = 0; i < this.storeData.length; i++) {
    for(var j = 0; j < 3; j++) {
      var singleHour = this.generateRandom(this.storeData[i][0], this.storeData[i][1]);
      this.pizzasPerHour.push(singleHour);
      var singleHour = this.generateRandom(this.storeData[i][2], this.storeData[i][3]);
      this.deliveriesPerHour.push(singleHour);
    }
  }
};
ballard.calcPizzasandDeliveriesPerHr();

PizzaShop.prototype.render = function() {
  var shopTable = document.createElement('table');
  var row = document.createElement('tr');
  for(var i = 0; i < this.storeData.length; i++) {
    var column = document.createElement('td');
    column.textContent = this.storeData[i];
    row.appendChild(column);
  }
  document.body.appendChild(shopTable);
  console.table(this.storeData);
  return row;
};

PizzaShop.prototype.render = function() {

  this.calcPizzasandDeliveriesPerHr();
  ///to make the 1st header row
  var shopTable = document.createElement('table');
  var trHeader1 = document.createElement('tr');

  var tdEl = document.createElement('td');
  tdEl.textContent = 'MinPizza\'s';
  trHeader1.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = 'MaxPizza\'s';
  trHeader1.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = 'MinDeliveries\'s';
  trHeader1.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = 'MaxDeliveries\'s';
  trHeader1.appendChild(tdEl);

  shopTable.appendChild(trHeader1);

  for (var i = 0; i < this.storeData.length; i++) {

    var trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = (this.storeData[i]);
    trEl.appendChild(tdEl);

    // tdEl = document.createElement('td');
    // tdEl.textContent = this.pizzasEachHour[i];
    // trEl.appendChild(tdEl);

    shopTable.appendChild(trEl);
  }
  document.body.appendChild(shopTable);
}

ballard.render();
