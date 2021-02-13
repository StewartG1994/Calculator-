const button = document.querySelectorAll('.number');
const userDisplay = document.querySelector(".screen");
const clearBtn = document.querySelector('.clear');
const decmialBtn = document.querySelector('.decimal');
const functionBtn = document.querySelectorAll('.function');
const equalsBtn = document.querySelector('.equals');


button.forEach((button) =>
  button.addEventListener("click", () => displayTotal(button.innerHTML)) 
);

clearBtn.addEventListener("click", clear);

decmialBtn.addEventListener("click", appendDecimal);

functionBtn.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.innerHTML)) 
);

equalsBtn.addEventListener("click", calculate);

let firstNum = "";
let secondNum = "";
let operatorSelection = null;
let result = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function times(a, b) {
  return a * b;
}

function operator(operator, numa, numb) {
  switch (operator) {
    case "+":
      return add(numa, numb);
      break;

    case "-":
      return subtract(numa, numb);
      break;

    case "/":
      return divide(numa, numb);
      break;

    case "*":
      return times(numa, numb);
      break;
  }
}

function displayTotal(number) {
  userDisplay.value += number;
  
}

function clear() {
  userDisplay.value = null;
}

function appendDecimal() {
  userDisplay.value += ".";
}

function setOperator(operator) {
  if (operatorSelection !== null)
    calculate()
  firstNum = parseFloat(userDisplay.value);
  operatorSelection = operator;
  userDisplay.value = firstNum;
  clear();
}

function calculate() {
  
  secondNum = parseFloat(userDisplay.value);
  result = operator(operatorSelection, firstNum, secondNum);
  userDisplay.value = result.toString().substr(0,8);
  operatorSelection = null;
} 