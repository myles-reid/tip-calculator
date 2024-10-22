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