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
  this.storeTableData = [];

};

// var ballard = new PizzaShop('Ballard', ballardData);
// var firstHill = new PizzaShop('First Hill', firstHillData);
// var tid = new PizzaShop('The International District', tidData);
// var slu = new PizzaShop('South Lake Union', sluData);
// var georgetown = new PizzaShop('Georgetown', georgetownData);
// var ravenna = new PizzaShop('Ravenna', ravennaData);

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

PizzaShop.prototype.calcPizzasPerDay = function() {
  var pizzasPerDayTemp = 0;
  for(var i = 0; i < this.storeData.length; i++) {
    pizzasPerDayTemp = this.generateRandom(this.storeData[i][1], this.storeData[i][2]);

    this.pizzasPerDay.push(pizzasPerDayTemp);
  }
};

PizzaShop.prototype.totalPizzasPerDay = function() {
  var pizzasPerDayTemp = 0;
  for(var i = 0; i < this.storeData.length; i++) {
    pizzasPerDayTemp = this.generateRandom(this.storeData[i][1], this.storeData[i][2]);
    var sumpizzasPerDayTemp = 0;
    for(var j = 0; j < pizzasPerDayTemp.length; j++) {
      sumpizzasPerDayTemp += pizzasPerDayTemp[i];
    }

    this.pizzasPerDay.push(sumpizzasPerDayTemp);
  }
};

PizzaShop.prototype.render = function() {
  var tablearea = document.getElementById(this.locationName);
  var shopTable = document.createElement('table');
  var row = document.createElement('tr');
  for(var i = 0; i < this.storeData.length; i++) {
    var column = document.createElement('td');
    column.textContent = this.storeData[i];
    row.appendChild(column);
  }
  this.storeTableData.push(shopTable);
  document.body.appendChild(shopTable);
  console.log(this.locationName);
  console.table(this.storeData);
};

PizzaShop.prototype.render = function() {

  //Creating my table, table body, and header variables.
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');
  var tableHeader = document.createElement('tr');

  //Creating my tables
  var tables = document.getElementById('addTables');
  var pTitle = document.createElement('h3');

  headerRowData.forEach(function(theadData) {
    var thead = document.createElement('th');
    thead.appendChild(document.createTextNode(theadData));
    tableHeader.appendChild(thead);
  });

  this.storeData.forEach(function(rowData) {
    var row = document.createElement('tr');

    rowData.forEach(function(cellData) {
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });

    tableBody.appendChild(row);
  });

  pTitle.textContent = this.locationName;
  tables.appendChild(pTitle);

  table.appendChild(tableHeader);
  table.appendChild(tableBody);
  tables.appendChild(table);

};

var ballard = new PizzaShop('Ballard', ballardData);
var firstHill = new PizzaShop('First Hill', firstHillData);
var tid = new PizzaShop('The International District', tidData);
var slu = new PizzaShop('South Lake Union', sluData);
var georgetown = new PizzaShop('Georgetown', georgetownData);
var ravenna = new PizzaShop('Ravenna', ravennaData);

ballard.render();
firstHill.render();
tid.render();
slu.render();
georgetown.render();
ravenna.render();

ballard.calcPizzasPerDay();
firstHill.calcPizzasPerDay();
tid.calcPizzasPerDay();
slu.calcPizzasPerDay();
georgetown.calcPizzasPerDay();
ravenna.calcPizzasPerDay();

// this.calcPizzasandDeliveriesPerHr();
