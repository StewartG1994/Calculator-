const button = document.querySelectorAll('.number');
const userDisplay = document.querySelector(".screen");
const clearBtn = document.querySelector('.clear');
const decmialBtn = document.querySelector('.decimal');

function add(a, b){
    {return a + b}
}

function subtract(a,b){
    {return a - b}
}

function divide (a,b)
{
    {return a / b}
}

function times (a,b){
{return a*b}
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

button.forEach((button) =>
button.addEventListener('click', ()=> displayTotal(button.innerHTML)));
clearBtn.addEventListener('click', clear);
decmialBtn.addEventListener('click', appendDecimal);

function displayTotal (number){
userDisplay.value += number;
}

function clear (){
    userDisplay.value = "";
}

function appendDecimal(){
    userDisplay.value += ".";
}