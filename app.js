'use strict';

//Create the 'random number generating' function.
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Generate the random values for pizza and deliveries for the given time slots.
function pizzasAndDeliveriesAt(time) {
  var pizzas = 0;
  var deliveries = 0;

  if(time >= 8 && time < 11) {
    pizzas = getRandomIntInclusive(0,4);
    deliveries = getRandomIntInclusive(0,4);
  } else if(time >= 11 && time < 14) {
    pizzas = getRandomIntInclusive(0,7);
    deliveries = getRandomIntInclusive(0,4);
  } else if (time >= 14 && time < 17) {
    pizzas = getRandomIntInclusive(2, 15);
    deliveries = getRandomIntInclusive(1, 4);
  } else if (time >= 17 && time < 20) {
    pizzas = getRandomIntInclusive(15, 35);
    deliveries = getRandomIntInclusive(3, 8);
  } else if (time >= 20 && time < 23) {
    pizzas = getRandomIntInclusive(12, 31);
    deliveries = getRandomIntInclusive(5, 12);
  } else if (time >= 0 && time < 2) {
    pizzas = getRandomIntInclusive(5, 20);
    deliveries = getRandomIntInclusive(6, 11);
  }
  return [pizzas, deliveries]
}

//Create the array of pizzas and delivers.
function itemsForLocation() {
  var items = []

  for(var i = 8; i <= 23; i++) {
    var pizzasAndDeliveries = pizzasAndDeliveriesAt(i);
    items.push(i + '00 ' + pizzasAndDeliveries[0] + ' pizzas, ' + pizzasAndDeliveries[1] + ' deliveries');
  }

  for(var i = 0; i <= 2; i++) {
    var pizzasAndDeliveries = pizzasAndDeliveriesAt(i);
    items.push(i + '00 ' + pizzasAndDeliveries[0] + ' pizzas, ' + pizzasAndDeliveries[1] + ' deliveries');
  }

  return items;
}

//Create the 'listing' function.
function listify(placeForMahList, stuffToBeListed) {
  //for loop to iterate through array
  for(var i = 0; i < stuffToBeListed.length; i++) {
    // build an <li> element
    var liEl = document.createElement('li');
    liEl.textContent = stuffToBeListed[i];
    //put it in the DOM
    placeForMahList.appendChild(liEl);
  }
}

//Ballard
var ballard = document.getElementById('ballard');
var ballardPizzasAndDeliveries = itemsForLocation();
listify(ballard, ballardPizzasAndDeliveries)

//First Hill
var firstHill = document.getElementById('firstHill');
var firstHillPizzasAndDeliveries = itemsForLocation();
listify(firstHill, firstHillPizzasAndDeliveries)

//The Internation District
var tid = document.getElementById('tid');
var tidPizzasAndDeliveries = itemsForLocation();
listify(tid, tidPizzasAndDeliveries)

//South Lake Union
var slu = document.getElementById('slu');
var sluPizzasAndDeliveries = itemsForLocation();
listify(slu, sluPizzasAndDeliveries)

//Georgetown
var georgetown = document.getElementById('georgetown');
var georgetownPizzasAndDeliveries = itemsForLocation();
listify(georgetown, georgetownPizzasAndDeliveries)

//Ravenna
var ravenna = document.getElementById('ravenna');
var ravennaPizzasAndDeliveries = itemsForLocation();
listify(ravenna, ravennaPizzasAndDeliveries)
