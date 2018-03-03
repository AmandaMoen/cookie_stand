'use strict';

var cookieStores = [];
// We need an array to hold the store hours.
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// We need a table 
var cookieTable = document.getElementById('cookie-table');

// We need a constructor to hold the information for the Cookie Stands.
// We just need one function of the following: customersEachHour (calcCustomersEachHour), cookiesSoldEachHour 
// (calcCookiesSoldEachHour), 
function CookieStand(locationName, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
  this.locationName = locationName;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesSoldPerDay = 0;
  cookieStores.push(this);
}

// Figure out how many cookies are sold each hour
// by calculating the number of customers per hour
CookieStand.prototype.calcCustomersEachHour = function() {
  // Need random numbers to fill the array.
  for (var i = 0; i < hours.length; i++) {
    var oneHourCustomers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
    // console.log(oneHourCustomers, 'hourly customers');
    this.customersEachHour.push(oneHourCustomers);
  }
},
CookieStand.prototype.calcCookiesSoldEachHour = function() {
  this.calcCustomersEachHour();
  // We need to multiply the customers each hour
  // by the average cookies per customer to generate 
  // the cookies sold each hour.
  for (var i = 0; i < hours.length; i++) {
    var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
    // console.log(hourlyCookies, 'hourly cookies');
    this.cookiesSoldEachHour.push(hourlyCookies);
    // running total - incoming running total + next hour
    // total = total + hour
    // total += hour
    this.totalCookiesSoldPerDay += hourlyCookies;
  }
}

// Invoke the functions. This will be one of the final steps.
new CookieStand('pikePlace', 23, 65, 6.3);
new CookieStand('seatac', 3, 24, 1.2);
new CookieStand('seattleCenter', 11, 38, 3.7);
new CookieStand('capitolhill', 20, 38, 2.3);
new CookieStand('alki', 2, 16, 4.6);

for (var i=0; i < cookieStores.length; i++) {
  cookieStores[i].calcCookiesSoldEachHour();
}
console.log('my stores ====> ', cookieStores);

// We need to create a table.

// The top row needs to autopopulate with hours
// Rows 2-7 needs to populate with the data from the CookieStand data
// We want the final row to populate the sum of the hourly totals for all the stores

// We want column 1 to be populated with the location names.
// we want columns 2-15 to populate with the number of cookies sold for each hour.
// We want column 16 (the final column) to populate the sum total cookies for the
// day for each location. sum (c2-c15)