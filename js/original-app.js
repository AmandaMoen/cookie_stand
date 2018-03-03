'use strict';

var pikePlace = {
  minCustomersPerHour: 23, // Dependent on location
  maxCustomersPerHour: 65, // Dependent on location
  avgCookiesPerCustomer: 6.3, // Dependent on location
  customersEachHour: [],
  calcCustomersEachHour: function() {
    // we are seeking a random number between/including min/max
    // we want to fill an array of those numbers, once per hour
    for (var i = 0; i < hours.length; i++) {
      var oneHourCustomers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      // console.log(oneHourCustomers, 'hourly customers');
      this.customersEachHour.push(oneHourCustomers);
    }
  },
  cookiesSoldEachHour: [],
  calcCookiesSoldEachHour: function() {
    this.calcCustomersEachHour();
    // We need to multiply the customers each hour
    // by the average cookies per customer to generate
    // the cookies sold each hour
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      // console.log(hourlyCookies, 'hourly cookies');
      this.cookiesSoldEachHour.push(hourlyCookies);
      // running total - incoming running total + next hour
      // total = total + hour
      // total += hour
      this.totalCookiesSoldPerDay += hourlyCookies;
    }
  },
  
  totalCookiesSoldPerDay: 0,
  locationName: 'First and Pike',
  render: function() {
    this.calcCookiesSoldEachHour();
    // iterate through the array
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.cookiesSoldEachHour[i], 'hourly cookies from inside render method');
      // create an element
      var liEl = document.createElement('li');
      // give it content
      // "6am: 16 cookies"
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      // append it to parent
      var parentUl = document.getElementById('pike');
      parentUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // "Total: 657 cookies"
    liEl.className = 'total';
    liEl.textContent = 'Total: ' + this.totalCookiesSoldPerDay + ' cookies';
    parentUl.appendChild(liEl);
  }
}; 

pikePlace.render();

var seatac = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiesPerCustomer: 1.2,
  customersEachHour: [],
  calcCustomersEachHour: function() {
    // we are seeking a random number between/including min/max
    // we want to fill an array of those numbers, once per hour
    for (var i = 0; i < hours.length; i++) {
      var oneHourCustomers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      // console.log(oneHourCustomers, 'hourly customers');
      this.customersEachHour.push(oneHourCustomers);
    }
  },
  cookiesSoldEachHour: [],
  calcCookiesSoldEachHour: function() {
    this.calcCustomersEachHour();
    // We need to multiply the customers each hour
    // by the average cookies per customer to generate
    // the cookies sold each hour
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      // console.log(hourlyCookies, 'hourly cookies');
      this.cookiesSoldEachHour.push(hourlyCookies);
      // running total - incoming running total + next hour
      // total = total + hour
      // total += hour
      this.totalCookiesSoldPerDay += hourlyCookies;
    }
  },
  totalCookiesSoldPerDay: 0,
  locationName: 'SeaTac Airport',
  render: function() {
    this.calcCookiesSoldEachHour();
    // iterate through the array
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.cookiesSoldEachHour[i], 'hourly cookies from inside render method');
      // create an element
      var liEl = document.createElement('li');
      // give it content
      // "6am: 16 cookies"
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      // append it to parent
      var parentUl = document.getElementById('seatac');
      parentUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // "Total: 657 cookies"
    liEl.className = 'total';
    liEl.textContent = 'Total: ' + this.totalCookiesSoldPerDay + ' cookies';
    parentUl.appendChild(liEl);
  }
}; 

seatac.render();

var seattlecenter = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 3.7,
  customersEachHour: [],
  calcCustomersEachHour: function() {
    // we are seeking a random number between/including min/max
    // we want to fill an array of those numbers, once per hour
    for (var i = 0; i < hours.length; i++) {
      var oneHourCustomers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      // console.log(oneHourCustomers, 'hourly customers');
      this.customersEachHour.push(oneHourCustomers);
    }
  },
  cookiesSoldEachHour: [],
  calcCookiesSoldEachHour: function() {
    this.calcCustomersEachHour();
    // We need to multiply the customers each hour
    // by the average cookies per customer to generate
    // the cookies sold each hour
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      // console.log(hourlyCookies, 'hourly cookies');
      this.cookiesSoldEachHour.push(hourlyCookies);
      // running total - incoming running total + next hour
      // total = total + hour
      // total += hour
      this.totalCookiesSoldPerDay += hourlyCookies;
    }
  },
  totalCookiesSoldPerDay: 0,
  locationName: 'Seattle Center',
  render: function() {
    this.calcCookiesSoldEachHour();
    // iterate through the array
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.cookiesSoldEachHour[i], 'hourly cookies from inside render method');
      // create an element
      var liEl = document.createElement('li');
      // give it content
      // "6am: 16 cookies"
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      // append it to parent
      var parentUl = document.getElementById('seattlecenter');
      parentUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // "Total: 657 cookies"
    liEl.className = 'total';
    liEl.textContent = 'Total: ' + this.totalCookiesSoldPerDay + ' cookies';
    parentUl.appendChild(liEl);
  }
}; 

seattlecenter.render();

var capitolhill = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiesPerCustomer: 2.3,
  customersEachHour: [],
  calcCustomersEachHour: function() {
    // we are seeking a random number between/including min/max
    // we want to fill an array of those numbers, once per hour
    for (var i = 0; i < hours.length; i++) {
      var oneHourCustomers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      // console.log(oneHourCustomers, 'hourly customers');
      this.customersEachHour.push(oneHourCustomers);
    }
  },
  cookiesSoldEachHour: [],
  calcCookiesSoldEachHour: function() {
    this.calcCustomersEachHour();
    // We need to multiply the customers each hour
    // by the average cookies per customer to generate
    // the cookies sold each hour
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      // console.log(hourlyCookies, 'hourly cookies');
      this.cookiesSoldEachHour.push(hourlyCookies);
      // running total - incoming running total + next hour
      // total = total + hour
      // total += hour
      this.totalCookiesSoldPerDay += hourlyCookies;
    }
  },
  totalCookiesSoldPerDay: 0,
  locationName: 'Capitol Hill',
  render: function() {
    this.calcCookiesSoldEachHour();
    // iterate through the array
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.cookiesSoldEachHour[i], 'hourly cookies from inside render method');
      // create an element
      var liEl = document.createElement('li');
      // give it content
      // "6am: 16 cookies"
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      // append it to parent
      var parentUl = document.getElementById('capitolhill');
      parentUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // "Total: 657 cookies"
    liEl.className = 'total';
    liEl.textContent = 'Total: ' + this.totalCookiesSoldPerDay + ' cookies';
    parentUl.appendChild(liEl);
  }
}; 

capitolhill.render();

var alki = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiesPerCustomer: 4.6,
  customersEachHour: [],
  calcCustomersEachHour: function() {
    // we are seeking a random number between/including min/max
    // we want to fill an array of those numbers, once per hour
    for (var i = 0; i < hours.length; i++) {
      var oneHourCustomers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
      // console.log(oneHourCustomers, 'hourly customers');
      this.customersEachHour.push(oneHourCustomers);
    }
  },
  cookiesSoldEachHour: [],
  calcCookiesSoldEachHour: function() {
    this.calcCustomersEachHour();
    // We need to multiply the customers each hour
    // by the average cookies per customer to generate
    // the cookies sold each hour
    for (var i = 0; i < hours.length; i++) {
      var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerCustomer);
      // console.log(hourlyCookies, 'hourly cookies');
      this.cookiesSoldEachHour.push(hourlyCookies);
      // running total - incoming running total + next hour
      // total = total + hour
      // total += hour
      this.totalCookiesSoldPerDay += hourlyCookies;
    }
  },
  totalCookiesSoldPerDay: 0,
  locationName: 'Alki',
  render: function() {
    this.calcCookiesSoldEachHour();
    // iterate through the array
    for (var i = 0; i < hours.length; i++) {
      // console.log(this.cookiesSoldEachHour[i], 'hourly cookies from inside render method');
      // create an element
      var liEl = document.createElement('li');
      // give it content
      // "6am: 16 cookies"
      liEl.textContent = hours[i] + ': ' + this.cookiesSoldEachHour[i] + ' cookies';
      // append it to parent
      var parentUl = document.getElementById('alki');
      parentUl.appendChild(liEl);
    }
    liEl = document.createElement('li');
    // "Total: 657 cookies"
    liEl.className = 'total';
    liEl.textContent = 'Total: ' + this.totalCookiesSoldPerDay + ' cookies';
    parentUl.appendChild(liEl);
  }
}; 

alki.render();
