'use strict';

// Global var
const firstInputElement = document.getElementById("num1");
const secondInputElement = document.getElementById("num2");

const sumButtonElement = document.getElementById("sum");
const restButtonElement = document.getElementById("rest");
const multiplyButtonElement = document.getElementById("multiply");
const divideButtonElement = document.getElementById("divide");

const resultElement = document.getElementById('calculation');

let num1 = '';
let num2 = '';

//Define handle functions
const handleInput = (ev) => {
const inputId = ev.target.id;
if (inputId === 'num1') {
    num1 = parseInt(ev.target.value);
} else {
    num2 = parseInt(ev.target.value);
}
};

const handleButton = (ev) => {

const buttonName = ev.target.name;

switch(true) {
    
    case (num1 == ''):
        alert("Falta rellenar el primer número");
      break;
    case (num2 == ''):
        alert("Falta rellenar el segundo número");
      break;
    case (typeof num1 == String):
        alert("Debes ingresar un número");
      break;
    case (buttonName === 'sum'):
        sum(num1, num2);
      break;
    case (buttonName === 'rest'):
        rest(num1, num2); 
      break;
      case (buttonName === 'multiply'):
        multiply(num1, num2); 
      break;
      case (buttonName === 'divide'):
        divide(num1, num2); 
      break;

  }
};

// Add events
firstInputElement.addEventListener("change", handleInput);
secondInputElement.addEventListener("change", handleInput);

sumButtonElement.addEventListener('click', handleButton);
restButtonElement.addEventListener('click', handleButton);
multiplyButtonElement.addEventListener('click', handleButton);
divideButtonElement.addEventListener('click', handleButton);

// Define operator functions
const sum = (num1, num2) => resultElement.innerHTML = num1 + num2;

const rest = (num1, num2) => resultElement.innerHTML = num1 - num2;

const multiply = (num1, num2) => resultElement.innerHTML = num1 * num2;

const divide = (num1, num2) => resultElement.innerHTML = num1 / num2;





