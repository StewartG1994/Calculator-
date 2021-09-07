const operatorButton = document.querySelectorAll('.function')
const userDisplay = document.querySelector(".screen");
const clearBtn = document.querySelector('.clear');
const numberButton = document.querySelectorAll('.number');
const decmialBtn = document.querySelector('.decimal');
const history = document.querySelector('.history')

numberButton.forEach((numberButton) => numberButton.addEventListener('click', () => displayTotal(numberButton.value)))
clearBtn.addEventListener('click', () => { userDisplay.value = null})


function add(a,b){return a +b};
function subtract(a,b){return a-b};
function divide (a,b){return a/b}
function multiply (a,b){return a*b}

function calclate(operator, numberOne, numberTwo){
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

function getFirstNum(){
  operatorButton.forEach((operatorButton) => operatorButton.addEventListener('click', () => userDisplay.value  += operatorButton.value))
}
getFirstNum()