var headerRowData = ['Time', 'MinPizza\'s', 'MaxPizza\'s', 'MinDeliveries', 'MaxDeliveries'];

var headerRowDataTwo = ['Store', 'Total Pizzas', 'Total Deliveries', 'Recomended Drivers'];

var ballardData = [
  ['8am', 0, 4, 0, 4],
  ['9am', 0, 4, 0, 4],
  ['10am', 0, 4, 0, 4],
  ['11am', 0, 4, 0, 7],
  ['12pm', 0, 4, 0, 7],
  ['1pm', 0, 4, 0, 7],
  ['2pm', 2, 15, 1, 4],
  ['3pm', 2, 15, 1, 4],
  ['4pm', 2, 15, 1, 4],
  ['5pm', 15, 35, 3, 8],
  ['6pm', 15, 35, 3, 8],
  ['7pm', 15, 35, 3, 8],
  ['8pm', 12, 31, 5, 12],
  ['9pm', 12, 31, 5, 12],
  ['10pm', 12, 31, 5, 12],
  ['11pm', 5, 20, 6, 11],
  ['12am', 5, 20, 6, 11],
  ['1am', 5, 20, 6, 11]
];

var firstHillData = [
  ['8am', 1, 3, 1, 7],
  ['9am', 1, 3, 1, 7],
  ['10am', 1, 3, 1, 7],
  ['11am', 5, 9, 2, 8],
  ['12pm', 5, 9, 2, 8],
  ['1pm', 5, 9, 2, 8],
  ['2pm', 2, 13, 1, 6],
  ['3pm', 2, 13, 1, 6],
  ['4pm', 2, 13, 1, 6],
  ['5pm', 18, 32, 3, 9],
  ['6pm', 18, 32, 3, 9],
  ['7pm', 18, 32, 3, 9],
  ['8pm', 1, 3, 5, 12],
  ['9pm', 1, 3, 5, 12],
  ['10pm', 1, 3, 5, 12],
  ['11pm', 8, 20, 6, 16],
  ['12pm', 8, 20, 6, 16],
  ['1am', 8, 20, 6, 16]
];

var tidData = [
  ['8am', 0, 4, 0, 4],
  ['9am', 0, 4, 0, 4],
  ['10am', 0, 4, 0, 4],
  ['11am', 0, 7, 0, 4],
  ['12pm', 0, 7, 0, 4],
  ['1pm', 0, 7, 0, 4],
  ['2pm', 2, 15, 1, 4],
  ['3pm', 2, 15, 1, 4],
  ['4pm', 2, 15, 1, 4],
  ['5pm', 10, 26, 4, 6],
  ['6pm', 10, 26, 4, 6],
  ['7pm', 10, 26, 4, 6],
  ['8pm', 8, 22, 7, 15],
  ['9pm', 8, 22, 7, 15],
  ['10pm', 8, 22, 7, 15],
  ['11pm', 0, 2, 2, 8],
  ['12am', 0, 2, 2, 8],
  ['1am', 0, 2, 2, 8]
];

var sluData = [
  ['8am-11am', 0, 4, 0, 4],
  ['8am-11am', 0, 4, 0, 4],
  ['8am-11am', 0, 4, 0, 4],
  ['11am-2pm', 0, 7, 0, 4],
  ['11am-2pm', 0, 7, 0, 4],
  ['11am-2pm', 0, 7, 0, 4],
  ['2pm-5pm', 5, 15, 0, 4],
  ['2pm-5pm', 5, 15, 0, 4],
  ['2pm-5pm', 5, 15, 0, 4],
  ['5pm-8pm', 25, 39, 13, 18],
  ['5pm-8pm', 25, 39, 13, 18],
  ['5pm-8pm', 25, 39, 13, 18],
  ['8pm-11pm', 22, 36, 5, 22],
  ['8pm-11pm', 22, 36, 5, 22],
  ['8pm-11pm', 22, 36, 5, 22],
  ['11pm-2am', 5, 21, 16, 31],
  ['11pm-2am', 5, 21, 16, 31],
  ['11pm-2am', 5, 21, 16, 31]
];

var georgetownData = [
  ['8am', 2, 7, 3, 5],
  ['9am', 2, 7, 3, 5],
  ['10am', 2, 7, 3, 5],
  ['11am', 3, 8, 3, 9],
  ['12pm', 3, 8, 3, 9],
  ['1pm', 3, 8, 3, 9],
  ['2pm', 1, 5, 1, 4],
  ['3pm', 1, 5, 1, 4],
  ['4pm', 1, 5, 1, 4],
  ['5pm', 5, 13, 2, 4],
  ['6pm', 5, 13, 2, 4],
  ['7pm', 5, 13, 2, 4],
  ['8pm', 22, 41, 15, 42],
  ['9pm', 22, 41, 15, 42],
  ['10pm', 22, 41, 15, 42],
  ['11pm', 15, 20, 6, 21],
  ['12am', 15, 20, 6, 21],
  ['1am', 15, 20, 6, 21]
];

var ravennaData = [
  ['8am', 0, 4, 0, 4],
  ['9am', 0, 4, 0, 4],
  ['10am', 0, 4, 0, 4],
  ['11am', 0, 7, 0, 4],
  ['12pm', 0, 7, 0, 4],
  ['1pm', 0, 7, 0, 4],
  ['2pm', 2, 15, 1, 4],
  ['3pm', 2, 15, 1, 4],
  ['4pm', 2, 15, 1, 4],
  ['5pm', 6, 9, 5, 18],
  ['6pm', 6, 9, 5, 18],
  ['7pm', 6, 9, 5, 18],
  ['8pm', 4, 8, 2, 5],
  ['9pm', 4, 8, 2, 5],
  ['10pm', 4, 8, 2, 5],
  ['11pm', 2, 4, 3, 11],
  ['12am', 2, 4, 3, 11],
  ['1am', 2, 4, 3, 11]
];

var ballardDataNoTime = [
  [0, 4, 0, 4],
  [0, 4, 0, 4],
  [0, 4, 0, 4],
  [0, 4, 0, 7],
  [0, 4, 0, 7],
  [0, 4, 0, 7],
  [2, 15, 1, 4],
  [2, 15, 1, 4],
  [2, 15, 1, 4],
  [5, 35, 3, 8],
  [15, 35, 3, 8],
  [15, 35, 3, 8],
  [12, 31, 5, 12],
  [12, 31, 5, 12],
  [12, 31, 5, 12],
  [5, 20, 6, 11],
  [5, 20, 6, 11],
  [5, 20, 6, 11]
];

var firstHillData = [
  ['8am', 1, 3, 1, 7],
  ['9am', 1, 3, 1, 7],
  ['10am', 1, 3, 1, 7],
  ['11am', 5, 9, 2, 8],
  ['12pm', 5, 9, 2, 8],
  ['1pm', 5, 9, 2, 8],
  ['2pm', 2, 13, 1, 6],
  ['3pm', 2, 13, 1, 6],
  ['4pm', 2, 13, 1, 6],
  ['5pm', 18, 32, 3, 9],
  ['6pm', 18, 32, 3, 9],
  ['7pm', 18, 32, 3, 9],
  ['8pm', 1, 3, 5, 12],
  ['9pm', 1, 3, 5, 12],
  ['10pm', 1, 3, 5, 12],
  ['11pm', 8, 20, 6, 16],
  ['12pm', 8, 20, 6, 16],
  ['1am', 8, 20, 6, 16]
];

var tidData = [
  ['8am', 0, 4, 0, 4],
  ['9am', 0, 4, 0, 4],
  ['10am', 0, 4, 0, 4],
  ['11am', 0, 7, 0, 4],
  ['12pm', 0, 7, 0, 4],
  ['1pm', 0, 7, 0, 4],
  ['2pm', 2, 15, 1, 4],
  ['3pm', 2, 15, 1, 4],
  ['4pm', 2, 15, 1, 4],
  ['5pm', 10, 26, 4, 6],
  ['6pm', 10, 26, 4, 6],
  ['7pm', 10, 26, 4, 6],
  ['8pm', 8, 22, 7, 15],
  ['9pm', 8, 22, 7, 15],
  ['10pm', 8, 22, 7, 15],
  ['11pm', 0, 2, 2, 8],
  ['12am', 0, 2, 2, 8],
  ['1am', 0, 2, 2, 8]
];

var sluData = [
  ['8am-11am', 0, 4, 0, 4],
  ['8am-11am', 0, 4, 0, 4],
  ['8am-11am', 0, 4, 0, 4],
  ['11am-2pm', 0, 7, 0, 4],
  ['11am-2pm', 0, 7, 0, 4],
  ['11am-2pm', 0, 7, 0, 4],
  ['2pm-5pm', 5, 15, 0, 4],
  ['2pm-5pm', 5, 15, 0, 4],
  ['2pm-5pm', 5, 15, 0, 4],
  ['5pm-8pm', 25, 39, 13, 18],
  ['5pm-8pm', 25, 39, 13, 18],
  ['5pm-8pm', 25, 39, 13, 18],
  ['8pm-11pm', 22, 36, 5, 22],
  ['8pm-11pm', 22, 36, 5, 22],
  ['8pm-11pm', 22, 36, 5, 22],
  ['11pm-2am', 5, 21, 16, 31],
  ['11pm-2am', 5, 21, 16, 31],
  ['11pm-2am', 5, 21, 16, 31]
];

var georgetownData = [
  ['8am', 2, 7, 3, 5],
  ['9am', 2, 7, 3, 5],
  ['10am', 2, 7, 3, 5],
  ['11am', 3, 8, 3, 9],
  ['12pm', 3, 8, 3, 9],
  ['1pm', 3, 8, 3, 9],
  ['2pm', 1, 5, 1, 4],
  ['3pm', 1, 5, 1, 4],
  ['4pm', 1, 5, 1, 4],
  ['5pm', 5, 13, 2, 4],
  ['6pm', 5, 13, 2, 4],
  ['7pm', 5, 13, 2, 4],
  ['8pm', 22, 41, 15, 42],
  ['9pm', 22, 41, 15, 42],
  ['10pm', 22, 41, 15, 42],
  ['11pm', 15, 20, 6, 21],
  ['12am', 15, 20, 6, 21],
  ['1am', 15, 20, 6, 21]
];

var ravennaData = [
  ['8am', 0, 4, 0, 4],
  ['9am', 0, 4, 0, 4],
  ['10am', 0, 4, 0, 4],
  ['11am', 0, 7, 0, 4],
  ['12pm', 0, 7, 0, 4],
  ['1pm', 0, 7, 0, 4],
  ['2pm', 2, 15, 1, 4],
  ['3pm', 2, 15, 1, 4],
  ['4pm', 2, 15, 1, 4],
  ['5pm', 6, 9, 5, 18],
  ['6pm', 6, 9, 5, 18],
  ['7pm', 6, 9, 5, 18],
  ['8pm', 4, 8, 2, 5],
  ['9pm', 4, 8, 2, 5],
  ['10pm', 4, 8, 2, 5],
  ['11pm', 2, 4, 3, 11],
  ['12am', 2, 4, 3, 11],
  ['1am', 2, 4, 3, 11]
];