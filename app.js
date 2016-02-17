'use strict';

//Build a constructor function to be leveraged for all of the stores
function PizzaShop (locationName, storeData) {
  this.locationName = locationName;
  this.storeData = storeData;
  this.reportData = function(min, max) {
    for(var i = 0; i < this.reportData.length; i++) {
      var numPizzas = this.generateRandom(this.dataSet[i][1], this.dataSet[i][2]);
      var numDeliveries = this.generateRandom(this.dataSet[i][3], this.dataSet[i][4]);
    }
  };
  this.createTable = function createTable(inputArray) {
    var row = document.createElement('tr');
    for(var i = 0; i < inputArray.length; i++) {
      var column = document.createElement('td');
      column.textContent = inputArray[i];
      row.appendChild(column);
    }
    console.table(inputArray);
    return row;
  }

}

PizzaShop.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// PizzaShop.prototype.reportData = function(min, max) {
//   for(var i = 0; i < this.reportData.length; i++) {
//     var numPizzas = this.generateRandom(dataSet[i][1], this.dataSet[i][2]);
//     var numDeliveries = this.generateRandom(dataSet[i][3], this.dataSet[i][4]);
//   };
// }

//PizzaShop.prototype.calcPizzasPerHr = function() {
//
// }

// PizzaShop.prototype.makeTableRow = function createTableRow(inputArray) {
//   var row = document.createElement('tr');
//   for(var i = 0; i < inputArray.length; i++) {
//     var column = document.createElement('td');
//     column.textContent = inputArray[i];
//     row.appendChild(column);
//   }
//   console.table(inputArray);
//   return row;
// }


var ballardData = [['Time', 'Min Pizza/hr', 'Max Pizza/hr', 'Min Delivery/hr', 'Max Delivery/hr'],['8am-11am', 0, 4, 0, 4], ['11am-2pm', 0, 4, 0, 7], ['2pm-5pm', 2, 15, 1, 4], ['5pm-8pm', 15, 35, 3, 8], ['8pm-11pm', 12, 31, 5, 12], ['11pm-2am', 5, 20, 6, 11]];
var ballard = new PizzaShop('ballard', ballardData);

var firstHillData = [['Time', 'Min Pizza/hr', 'Max Pizza/hr', 'Min Delivery/hr', 'Max Delivery/hr'], ['8am-11am', 1, 3, 1, 7], ['11am-2pm', 5, 9, 2, 8], ['2pm-5pm', 2, 13, 1, 6], ['5pm-8pm', 18, 32, 3, 9], ['8pm-11pm', 1, 3, 5, 12], ['11pm-2am', 8, 20, 6, 16]];
// var firstHill = new PizzaShop('firstHill', firstHillData);

var tidData = [['Time', 'Min Pizza/hr', 'Max Pizza/hr', 'Min Delivery/hr', 'Max Delivery/hr'], ['8am-11am', 0, 4, 0, 4], ['11am-2pm', 0, 7, 0, 4], ['2pm-5pm', 2, 15, 1, 4], ['5pm-8pm', 10, 26, 4, 6], ['8pm-11pm', 8, 22, 7, 15], ['11pm-2am', 0, 2, 2, 8]];
// var tid = new PizzaShop('tid', tidData);

var sluData = [['Time', 'Min Pizza/hr', 'Max Pizza/hr', 'Min Delivery/hr', 'Max Delivery/hr'], ['8am-11am', 0, 4, 0, 4], ['11am-2pm', 0, 7, 0, 4], ['2pm-5pm', 5, 15, 0, 4], ['5pm-8pm', 25, 39, 13, 18], ['8pm-11pm', 22, 36, 5, 22], ['11pm-2am', 5, 21, 16, 31]];
// var slu = new PizzaShop('slu', sluData);

var georgetownData = [['Time', 'Min Pizza/hr', 'Max Pizza/hr', 'Min Delivery/hr', 'Max Delivery/hr'], ['8am-11am', 2, 7, 3, 5], ['11am-2pm', 3, 8, 3, 9], ['2pm-5pm', 1, 5, 1, 4], ['5pm-8pm', 5, 13, 2, 4], ['8pm-11pm', 22, 41, 15, 42], ['11pm-2am', 15, 20, 6, 21]];
// var georgetown = new PizzaShop('georgetown', georgetownData);

var ravennaData = [['Time', 'Min Pizza/hr', 'Max Pizza/hr', 'Min Delivery/hr', 'Max Delivery/hr'], ['8am-11am', 0, 4, 0, 4], ['11am-2pm', 0, 7, 0, 4], ['2pm-5pm', 2, 15, 1, 4], ['5pm-8pm', 6, 9, 5, 18], ['8pm-11pm', 2, 8, 2, 5], ['11pm-2am', 2, 4, 3, 11]];
// var ravenna = new PizzaShop('ravenna', ravennaData);
