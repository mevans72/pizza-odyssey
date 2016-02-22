'use strict';

function PizzaShop(locationName, storeData) {
  this.locationName = locationName;
  this.storeData = storeData;
  this.tableData = [];
  this.pizzasEachHour = [];
  this.pizzasEachDay = 0;
  this.deliveriesEachHour = [];
  this.deliveriesEachDay = 0;
  this.recomendedDrivers = 0;
  this.storeHoursOfOperation = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12am', '1am'];
  this.storeTableHeader = ['Time','Pizzas Sold','Deliveries','Recommended Drivers'];
  // this.tableData = [];
};

var dailyTotalsAllStores = [];
var dailyTotalPizzasAllStores = 0;
var dailyTotalDeliveriesAllStores = 0;
var dailyTotalPizzasAndDeliveries = [];
var weeklyTotalsAllStores = [];
var weeklyTotalPizzasAllStores = 0;
var weeklyTotalDeliveriesAllStores = 0;
var weeklyTotalPizzasAndDeliveries = [];
var monthlyTotalsAllStores = [];
var monthlyTotalPizzasAllStores = 0;
var monthlyTotalDeliveriesAllStores = 0;
var monthlyTotalPizzasAndDeliveries = [];
var summaryHeaderAllStores = ['Location','Pizzas Sold','Deliveries','Recommended Drivers'];
var totalsHeaderAllStores = ['Total Pizzas Sold','Total Deliveries'];

var ballard = new PizzaShop('Ballard', ballardData);
var firstHill = new PizzaShop('First Hill',firstHillData);
var tid = new PizzaShop('The International District',tidData);
var slu = new PizzaShop('South Lake Union',sluData);
var georgetown = new PizzaShop('Georgetown',georgetownData);
var ravenna = new PizzaShop('Ravenna',ravennaData);


PizzaShop.prototype.generateRandom = function(min, max) {
 // we'll use this to calculate hourly numbers in another method
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

PizzaShop.prototype.calcStoreData = function() {
  // longwinded that works is AWESOME
  //Calculate hourly sales and delivery figures by store assuming 18 hours of operation
  for (var i = 0; i < this.storeData.length; i++) {
    this.pizzasEachHour = this.generateRandom(this.storeData[i][1], this.storeData[i][2]);
    this.deliveriesEachHour = this.generateRandom(this.storeData[i][3], this.storeData[i][4]);
    this.recomendedDrivers = Math.floor(this.deliveriesEachHour/3) + 1;
    // console.log(this.hoursOfOperation[i] + ' ' + soldThisHour);
    this.tableData.push([this.storeHoursOfOperation[i],this.pizzasEachHour,this.deliveriesEachHour,this.recomendedDrivers]);

    this.pizzasEachDay = this.pizzasEachDay += this.pizzasEachHour;
    this.deliveriesEachDay = this.deliveriesEachDay += this.deliveriesEachHour;
  }
  dailyTotalsAllStores.push([this.locationName,this.pizzasEachDay,this.deliveriesEachDay,this.recomendedDrivers]);

  //Calculate daily totals
  var temp = 0;
  dailyTotalPizzasAllStores = temp + (ballard.pizzasEachDay + firstHill.pizzasEachDay + tid.pizzasEachDay + slu.pizzasEachDay + georgetown.pizzasEachDay + ravenna.pizzasEachDay);
  temp = 0;
  dailyTotalDeliveriesAllStores = temp + (ballard.deliveriesEachDay + firstHill.deliveriesEachDay + tid.deliveriesEachDay + slu.deliveriesEachDay + georgetown.deliveriesEachDay + ravenna.deliveriesEachDay);
  dailyTotalPizzasAndDeliveries.push([dailyTotalPizzasAllStores,dailyTotalDeliveriesAllStores]);
  //Comments below used for troubleshooting. Could not generate totals tables using 'buildTables' function because 'TotalPizzasAndDeliveries' variable kept returning as an array. :(

  // dailyTotalPizzasAndDeliveries.push(dailyTotalPizzasAllStores);
  // dailyTotalPizzasAndDeliveries.push(dailyTotalDeliveriesAllStores);

  //Calculate weekly totals assuming six days of operation per week
  var temp = 0;
  weeklyTotalPizzasAllStores = temp + (ballard.pizzasEachDay + firstHill.pizzasEachDay + tid.pizzasEachDay + slu.pizzasEachDay + georgetown.pizzasEachDay + ravenna.pizzasEachDay) * 6;
  temp = 0;
  weeklyTotalDeliveriesAllStores = temp + (ballard.deliveriesEachDay + firstHill.deliveriesEachDay + tid.deliveriesEachDay + slu.deliveriesEachDay + georgetown.deliveriesEachDay + ravenna.deliveriesEachDay) * 6;
  weeklyTotalPizzasAndDeliveries.push([weeklyTotalPizzasAllStores,weeklyTotalDeliveriesAllStores]);

  //Calculate monthly totals assuming 26 days of operation per month
  var temp = 0;
  monthlyTotalPizzasAllStores = temp + (ballard.pizzasEachDay + firstHill.pizzasEachDay + tid.pizzasEachDay + slu.pizzasEachDay + georgetown.pizzasEachDay + ravenna.pizzasEachDay) * 26;
  temp = 0;
  monthlyTotalDeliveriesAllStores = temp + (ballard.deliveriesEachDay + firstHill.deliveriesEachDay + tid.deliveriesEachDay + slu.deliveriesEachDay + georgetown.deliveriesEachDay + ravenna.deliveriesEachDay) * 26;
  monthlyTotalPizzasAndDeliveries.push([monthlyTotalPizzasAllStores,monthlyTotalDeliveriesAllStores]);
  // return dailyTotalPizzasAllStores;
}

//Build the table summary for store pizzas sold, deliveries, and recomended drivers
function buildTables(tableData,storeTableHeader,buildLocation,location) {
//Declare table location, store / table name, and begin building the initial table element
  var tableLocation = document.getElementById(buildLocation);
  var h3 = document.createElement('h3');
  h3.textContent = location;
  var table = document.createElement('table');
  var trEL = document.createElement('tr');

  if (tableLocation) {
    tableLocation.appendChild(h3);
    tableLocation.appendChild(table);
  }
  table.appendChild(trEL);

//Build the table headers
  for (var i=0; i < storeTableHeader.length; i++) {
    var thEL = document.createElement('th');
    thEL.textContent = storeTableHeader[i];
    trEL.appendChild(thEL);
  }
  for (var i=0; i < tableData.length; i++) {
    var trEL = document.createElement('tr');
    table.appendChild(trEL);
    for (var j=0; j < tableData[i].length; j++){
      var tdEl = document.createElement('td');
      tdEl.textContent = tableData[i][j];
      trEL.appendChild(tdEl);
    }
  }
}

//Build the daily table summary for store pizzas sold, deliveries, and recomended drivers
function buildDailyTotalsTable(totalPizzas,totalDeliveries,buildLocation){
  var totalsTable = document.getElementById(buildLocation);
  var table = document.createElement('table');
  var trEL = document.createElement('tr');
  totalsTable.appendChild(table);
  table.appendChild(trEL);
  var thEL = document.createElement('th');
  thEL.textContent = 'Total Pizzas Sold';
  trEL.appendChild(thEL);
  var thEL = document.createElement('th');
  thEL.textContent = 'Total Deliveries';
  trEL.appendChild(thEL);
  var trEL = document.createElement('tr');
  table.appendChild(trEL);
  var tdEl = document.createElement('td');
  tdEl.textContent = totalPizzas;
  trEL.appendChild(tdEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = totalDeliveries;
  trEL.appendChild(tdEl);
}

//Build the weekly table summary for store pizzas sold, deliveries, and recomended drivers
function buildWeeklyTotalsTable(totalPizzas,totalDeliveries,buildLocation){
  var totalsTable = document.getElementById(buildLocation);
  var table = document.createElement('table');
  var trEL = document.createElement('tr');
  totalsTable.appendChild(table);
  table.appendChild(trEL);
  var thEL = document.createElement('th');
  thEL.textContent = 'Total Pizzas Sold';
  trEL.appendChild(thEL);
  var thEL = document.createElement('th');
  thEL.textContent = 'Total Deliveries';
  trEL.appendChild(thEL);
  var trEL = document.createElement('tr');
  table.appendChild(trEL);
  var tdEl = document.createElement('td');
  tdEl.textContent = totalPizzas;
  trEL.appendChild(tdEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = totalDeliveries;
  trEL.appendChild(tdEl);
}

//Build the monthly table summary for store pizzas sold, deliveries, and recomended drivers
function buildMonthlyTotalsTable(totalPizzas,totalDeliveries,buildLocation){
  var totalsTable = document.getElementById(buildLocation);
  var table = document.createElement('table');
  var trEL = document.createElement('tr');
  totalsTable.appendChild(table);
  table.appendChild(trEL);
  var thEL = document.createElement('th');
  thEL.textContent = 'Total Pizzas Sold';
  trEL.appendChild(thEL);
  var thEL = document.createElement('th');
  thEL.textContent = 'Total Deliveries';
  trEL.appendChild(thEL);
  var trEL = document.createElement('tr');
  table.appendChild(trEL);
  var tdEl = document.createElement('td');
  tdEl.textContent = totalPizzas;
  trEL.appendChild(tdEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = totalDeliveries;
  trEL.appendChild(tdEl);
}

//Build the total table
PizzaShop.prototype.render = function() {
  var totals = this.calcStoreData();
  buildTables(this.tableData,this.storeTableHeader,'hourlies-table',this.locationName);
};

var ballardTotal = ballard.render();
var firstHillTotal = firstHill.render();
var tidTotal = tid.render();
var sluTotal = slu.render();
var georgetownTotal = georgetown.render();
var ravennaTotal = ravenna.render();

//Build the monthly total table
buildMonthlyTotalsTable(monthlyTotalPizzasAllStores,monthlyTotalDeliveriesAllStores,'monthly-totals-table');
//Build the weekly total table
buildWeeklyTotalsTable(weeklyTotalPizzasAllStores,weeklyTotalDeliveriesAllStores,'weekly-totals-table');
//Build the daily total table
buildDailyTotalsTable(dailyTotalPizzasAllStores,dailyTotalDeliveriesAllStores,'daily-totals-table');
// buildTables(dailyTotalPizzasAndDeliveries,totalsHeaderAllStores,'totals-table');
//Daily Sales and Delivery Figures by Store
buildTables(dailyTotalsAllStores,summaryHeaderAllStores,'summary-table');
