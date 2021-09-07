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