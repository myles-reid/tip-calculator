'use strict';

//-------------------//
// Utility Functions //
//-------------------//
function select(selector, scope = document) {
  return scope.querySelector(selector);
}

function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function classAdd(selector, name) {
  return selector.classList.add(name);
}

function classRemove(selector, name) { 
  return selector.classList.remove(name);
}

//-------------------//
//    HTML Calls     //
//-------------------//

const page = select('body');
const bill = select('.bill');
const five = select('#five');
const ten = select('#ten');
const fifteen = select('#fifteen');
const twentyFive = select('#twenty-five');
const fifty = select('#fifty');
const custom = select('#custom-amount');
const people = select('.people');
const tipEach = select('.tip-amount');
const totalEach = select('.total-amount');
const resetButton = select('.reset-button');

let percentage = 0;
let billTotal = 0;
let numPeople = 0;
let tipTotal = 0;
let tipTotalEach = 0;
let total = 0;
let finalTotalEach = 0;

function getTipTotalEach() {
  if  (!isNaN(billTotal) && !isNaN(numPeople)){
    tipTotal = billTotal * percentage;
    tipTotalEach = (tipTotal / numPeople).toFixed(2);
    return;
  } else {
    totalEach.innerText = 'Err';
    tipEach.innerText = 'Err'
  }
}

function getBillTotalEach() {
  if (!isNaN(billTotal) && !isNaN(numPeople)) {
    total = tipTotal + billTotal
    finalTotalEach = (total / numPeople).toFixed(2);~
    return;
  } else {
    totalEach.innerText = 'Err';
    tipEach.innerText = 'Err';
  }
}

function getPercentage(selector) {
  return percentage = selector.value.trim() / 100;
}

function getPeople() {
  numPeople = parseInt(people.value.trim());
}

function getBill() {
  billTotal = parseInt(bill.value.trim());
}

function printTotals(tip, total) {
  totalEach.innerText = `$${total}`;
  tipEach.innerText = `$${tip}`;
}



listen('focus', five, () => {
  getPercentage(five);
  getBill();
  getPeople();
  getTipTotalEach();
  getBillTotalEach();
  printTotals(tipTotalEach, finalTotalEach);
});

listen('focus', ten, () => {
  getPercentage(ten);
  getBill();
  getPeople();
  getTipTotalEach();
  getBillTotalEach();
  printTotals(tipTotalEach, finalTotalEach);
});

listen('focus', fifteen, () => {
  getPercentage(fifteen);
  getBill();
  getPeople();
  getTipTotalEach();
  getBillTotalEach();
  printTotals(tipTotalEach, finalTotalEach)
});

listen('focus', twentyFive, () => {
  getPercentage(twentyFive);
  getBill();
  getPeople();
  getTipTotalEach();
  getBillTotalEach();
  printTotals(tipTotalEach, finalTotalEach)
});

listen('focus', fifty, () => {
  getPercentage(fifty);
  getBill();
  getPeople();
  getTipTotalEach();
  getBillTotalEach();
  printTotals(tipTotalEach, finalTotalEach)
});

listen('input', page, () => {
  getPercentage(custom);
  getBill();
  getPeople();
  getTipTotalEach();
  getBillTotalEach();
  printTotals(tipTotalEach, finalTotalEach)
  console.log(tipTotalEach);
});

// let billTotal = bill.value.toFixed(2);
// let numPeople = people.value.toFixed(0);
// let tipTotal = (billTotal * percentage).toFixed(2);
// let tipTotalEach = (tipTotal / numPeople).toFixed(2);
// let total = (billTotal + tipTotal).toFixed(2);
// let finalTotalEach = (total / numPeople).toFixed(2);



