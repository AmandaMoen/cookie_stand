'use strict';
// We need an array to hold the store hours.
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// We need a table 
var cookieTable = document.getElementById('cookie-table');
var cookieForm = document.getElementById('add-location');

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
  CookieStand.all.push(this);
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

/*for (var i=0; i < CookieStand.length; i++) {
  CookieStand[i].calcCookiesSoldEachHour();
}
console.log('my stores ====> ', CookieStand);*/

// Invoke the functions. This will be one of the final steps.
CookieStand.all = [];
new CookieStand('Pike Place Market', 23, 65, 6.3, 'pikePlace');
new CookieStand('SeaTac Airport', 3, 24, 1.2, 'seatac');
new CookieStand('Seattle Center', 11, 38, 3.7, 'seattleCenter');
new CookieStand('Capitol Hill', 20, 38, 2.3, 'capitolhill');
new CookieStand('Alki', 2, 16, 4.6, 'alki');

// We need to create a table.
CookieStand.prototype.render = function() {
  this.calcCookiesSoldEachHour();
  var total = 0;
  var row = document.createElement('tr');
  var titleColumn = document.createElement('td');
  titleColumn.textContent = this.locationName;
  row.appendChild(titleColumn);
  for (var i = 0; i < hours.length; i++) {
    var hourColumn = document.createElement('td');
    hourColumn.textContent = this.cookiesSoldEachHour[i];
    row.appendChild(hourColumn);
    total += this.cookiesSoldEachHour[i];
  }
  // Need to initialize total column to a variable.
  var totalColumn = document.createElement('td');
  totalColumn.textContent = total;
  row.appendChild(totalColumn);
  cookieTable.appendChild(row);
};

function handleForm(e){
  e.preventDefault();
  console.log('event object', e);
  var store = e.target.storeName.value;
  var min = parseInt(e.target.min.value);
  var max = parseInt(e.target.max.value);
  var avg = parseFloat(e.target.avg.value);

  var newStore = new CookieStand(store, min, max, avg);

  e.target.storeName.value = null;
  e.target.min.value = null;
  e.target.max.value = null;
  e.target.avg.value = null;

  createTable();
}
// We want to make the header row
function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  trEl.appendChild(thEl);
  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  cookieTable.appendChild(trEl);
}

function makeFooterRow() {
  var row = document.createElement('tr');
  var header = document.createElement('th');
  header.textContent = 'Hourly Totals for All Locations';
  row.appendChild(header);
  var totalOfTotals = 0;
  var hourlyTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    var hourlyTotal = 0;
    for (var j = 0; j < CookieStand.all.length; j++){
      hourlyTotal += CookieStand.all[j].cookiesSoldEachHour[i];
      totalOfTotals += CookieStand.all[j].cookiesSoldEachHour[i];
    }
    header = document.createElement('th');
    header.textContent = hourlyTotal;
    row.appendChild(header);
  }
  header = document.createElement('th');
  header.textContent = totalOfTotals;
  row.appendChild(header);
  cookieTable.appendChild(row);
}

function createTable() {
  cookieTable.innerHTML = '';
  makeHeaderRow();
  for (var i = 0; i < CookieStand.all.length; i++) {
    CookieStand.all[i].render();
  }
  makeFooterRow();
}

createTable();

cookieForm.addEventListener('submit', handleForm);

// The top row needs to autopopulate with hours
// Rows 2-7 needs to populate with the data from the CookieStand data
// We want the final row to populate the sum of the hourly totals for all the stores

// We want column 1 to be populated with the location names.
// we want columns 2-15 to populate with the number of cookies sold for each hour.
// We want column 16 (the final column) to populate the sum total cookies for the
// day for each location. sum (c2-c15)*/