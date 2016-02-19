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
//Display Your Results
//Declare Store Functions and Save Results to New Store Variables
var headerRowData = ['Time', 'MinPizza\'s', 'MaxPizza\'s', 'MinDeliveries', 'MaxDeliveries'];

var headerRowData = ['Time', 'MinPizza\'s', 'MaxPizza\'s', 'MinDeliveries', 'MaxDeliveries'];

var ballardData = [
  ['8am-11am', 0, 4, 0, 4],
  ['11am-2pm', 0, 4, 0, 7],
  ['2pm-5pm', 2, 15, 1, 4],
  ['5pm-8pm', 15, 35, 3, 8],
  ['8pm-11pm', 12, 31, 5, 12],
  ['11pm-2am', 5, 20, 6, 11]
];
var ballard = new PizzaShop('Ballard', ballardData);

var firstHillData = [
  ['8am-11am', 1, 3, 1, 7],
  ['11am-2pm', 5, 9, 2, 8],
  ['2pm-5pm', 2, 13, 1, 6],
  ['5pm-8pm', 18, 32, 3, 9],
  ['8pm-11pm', 1, 3, 5, 12],
  ['11pm-2am', 8, 20, 6, 16]
];
var firstHill = new PizzaShop('First Hill', firstHillData);

var tidData = [
  ['8am-11am', 0, 4, 0, 4],
  ['11am-2pm', 0, 7, 0, 4],
  ['2pm-5pm', 2, 15, 1, 4],
  ['5pm-8pm', 10, 26, 4, 6],
  ['8pm-11pm', 8, 22, 7, 15],
  ['11pm-2am', 0, 2, 2, 8]
];
var tid = new PizzaShop('The International District', tidData);

var sluData = [
  ['8am-11am', 0, 4, 0, 4],
  ['11am-2pm', 0, 7, 0, 4],
  ['2pm-5pm', 5, 15, 0, 4],
  ['5pm-8pm', 25, 39, 13, 18],
  ['8pm-11pm', 22, 36, 5, 22],
  ['11pm-2am', 5, 21, 16, 31]
];
var slu = new PizzaShop('South Lake Union', sluData);

var georgetownData = [
  ['8am-11am', 2, 7, 3, 5],
  ['11am-2pm', 3, 8, 3, 9],
  ['2pm-5pm', 1, 5, 1, 4],
  ['5pm-8pm', 5, 13, 2, 4],
  ['8pm-11pm', 22, 41, 15, 42],
  ['11pm-2am', 15, 20, 6, 21]
];
var georgetown = new PizzaShop('Georgetown', georgetownData);

var ravennaData = [
  ['8am-11am', 0, 4, 0, 4],
  ['11am-2pm', 0, 7, 0, 4],
  ['2pm-5pm', 2, 15, 1, 4],
  ['5pm-8pm', 6, 9, 5, 18],
  ['8pm-11pm', 4, 8, 2, 5],
  ['11pm-2am', 2, 4, 3, 11]
];
var ravenna = new PizzaShop('Ravenna', ravennaData);

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

ballard.render();
firstHill.render();
tid.render();
slu.render();
georgetown.render();
ravenna.render();
