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
let result = null;

numberButton.forEach((numberButton) => numberButton.addEventListener('click', () => displayTotal(numberButton.value)))
operatorButton.forEach((operatorButton) => operatorButton.addEventListener('click', executeCalc));
equals.addEventListener('click', executeCalc)

clearBtn.addEventListener('click', clear)
decmialBtn.addEventListener('click', appendDecimal)

function add(a,b){return a +b};
function subtract(a,b){return a-b};
function divide (a,b){return a/b}
function multiply (a,b){return a*b} 

function clear (){
firstNum = null;
secondNum = null;
operatorSelected =null;
historyArray = null;
result = null;
userDisplay.value = null;
history.value = null;
}




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


operatorButton.forEach((numberButton) =>
  numberButton.addEventListener("click", () => getOperatorAndFirstNum(numberButton.value)) 
);


function getOperatorAndFirstNum(operatorButton,){

  if (operatorSelected == null){
     
     firstNum = userDisplay.value;
     operatorSelected = operatorButton;
     history.value = userDisplay.value += operatorSelected;
    userDisplay.value = ''; 
  }
  }


function executeCalc(){

    if (operatorSelected !== null){
    let firstNumber = parseFloat(firstNum);
    secondNum = parseFloat(userDisplay.value);
    result = calculate(operatorSelected, firstNumber,secondNum)
    resultDisplay = result.toString().substring(0,8);
    userDisplay.value = resultDisplay;
    operatorSelected = null;
   }}

