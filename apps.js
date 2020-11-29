

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

function display (){
    const button = document.querySelectorAll('button');
    const userDisplay = document.querySelector(".screen");
    button.forEach((button) =>{
        button.addEventListener('click', event => {
            const displayValue = event.target.value;
            userDisplay.value = displayValue;
        }
        )}
    )}

display()