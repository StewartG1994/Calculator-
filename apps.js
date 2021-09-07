const operatorButton = document.querySelectorAll('.function')
const userDisplay = document.querySelector(".screen");
const clearBtn = document.querySelector('.clear');
const numberButton = document.querySelectorAll('.number');
const decmialBtn = document.querySelector('.decimal');
const history = document.querySelector('.history');
const equals = document.querySelector('.equals');

let firstNum = null;
let secondNum = null;
let operatorSelected =null;
let historyArray = null;

numberButton.forEach((numberButton) => numberButton.addEventListener('click', () => displayTotal(numberButton.value)))
clearBtn.addEventListener('click', () => { userDisplay.value = null; history.value = null})
decmialBtn.addEventListener('click', appendDecimal)

function add(a,b){return a +b};
function subtract(a,b){return a-b};
function divide (a,b){return a/b}
function multiply (a,b){return a*b} 

function calculate(operator, numberOne, numberTwo){
  switch (operator) {
   case '+': 
   return add(numberOne, numberTwo);
   break;

   case '-':
     return subtract(numberOne, numberTwo);
     break;

    case '/':
      return divide(numberOne, numberTwo);
      break;

    case '*':
    return multiply(numberOne, numberTwo);
    break;
  }
}

function displayTotal(number){
  userDisplay.value += number;
}

function appendDecimal(){
 userDisplay.value += '.';

}
function getFirstNumAndOperator(){
  operatorButton.forEach((operatorButton) => operatorButton.addEventListener('click', () =>{firstNum = userDisplay.value ; history.value  = userDisplay.value += operatorButton.value ; operatorSelected = operatorButton.value; userDisplay.value = '' }))
}
getFirstNumAndOperator()

function executeCalc (){
equals.addEventListener('click', () =>{
  secondNum = userDisplay.value;

  let result = calculate(operatorSelected, firstNum, secondNum)
  userDisplay.value = result;
})
}
executeCalc ()