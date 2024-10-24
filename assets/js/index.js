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
const amtBtn = document.querySelectorAll('.amount-selector');
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
    finalTotalEach = (total / numPeople).toFixed(2);
    return;
  } else {
    totalEach.innerText = 'Err';
    tipEach.innerText = 'Err';
  }
}

function getPercentage(input) {
  switch (input.value){
    case '5': 
      percentage = 0.05;
      break;
    case '10':
      percentage = 0.1;
      break;
    case '15':
      percentage = 0.15;
      break;
    case '25':
      percentage = 0.25;
      break;
    case '50':
      percentage = 0.5;
      break;
    default:
      percentage = parseInt(custom.value.trim()) / 100;
  }
  return percentage;
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

function pageReset() {
  amtBtn.forEach((btn) => {
    btn.blur();
  });
  custom.value = '';
  people.value = '';
  bill.value = '';
  totalEach.innerText = '$0.00'
  tipEach.innerText = '$0.00'
};

amtBtn.forEach((btn) => {
  listen('focus', btn, () => {
    if (btn === custom){
      listen('input', page, () =>{
        getPercentage(custom.value);
        getBill();
        getPeople();
        getTipTotalEach();
        getBillTotalEach();
        printTotals(tipTotalEach, finalTotalEach); 
      });     
    };
    getPercentage(btn);
    getBill();
    getPeople();
    getTipTotalEach();
    getBillTotalEach();
    printTotals(tipTotalEach, finalTotalEach);
  });
});

listen('click', resetButton, () => {
  pageReset();
  console.log('working');
});

