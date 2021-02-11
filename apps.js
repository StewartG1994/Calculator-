const button = document.querySelectorAll('.number');
const userDisplay = document.querySelector(".screen");
const clearBtn = document.querySelector('.clear');
const decmialBtn = document.querySelector('.decimal');
const functionBtn = document.querySelectorAll('.function');
const equalsBtn = document.querySelector('.equals');


button.forEach((button) =>
button.addEventListener('click', ()=> displayTotal(button.innerHTML)));

clearBtn.addEventListener('click', clear);

decmialBtn.addEventListener('click', appendDecimal);

functionBtn.forEach((button) => 
button.addEventListener('click', () => setOperator(button.innerHTML)));

equalsBtn.addEventListener('click', calculate)

let firstNum = 0;                     
let secondNum = 0;
let operatorSelection = "";

function add(a, b){
    return a + b
}

function subtract(a,b){
return a - b
}

function divide (a,b)
{
return a / b
}

function times (a,b){
return a*b
}


function operator(operator, numa, numb) {
     switch(operator){
         case '+':
             return add(numa, numb);
             break;

         case '-':
             return subtract(numa, numb);
             break;
        
        case '/':
             return divide(numa,numb);
             break;

        case '*':
            return times(numa,numb)
            break;
     }
}

function displayTotal (number){
userDisplay.value += number;

}

function clear (){
    userDisplay.value = "";
}

function appendDecimal(){
    userDisplay.value += ".";
}


function setOperator(operator){
    firstNum = parseInt(userDisplay.value);
    operatorSelection = operator;
    clear()
   
     }

function calculate(){
    
    secondNum = parseInt(userDisplay.value);
    userDisplay.value = operator(operatorSelection, firstNum, secondNum);
    operatorSelection = "";
    console.log(operatorSelection,firstNum,secondNum);
}
