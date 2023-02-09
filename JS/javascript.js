const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const clearAll = document.querySelector('.all-clear');
const clearLastNum = document.querySelector('.last-entity-clear');
const operation = document.querySelectorAll('.operation');
const digitNum = document.querySelectorAll('.number');
const equal = document.querySelector('.equal');
let num1;
let num2;
let clear = false;
let opr;

// in this part we want to get the value of key number
for(let i = 0; i< digitNum.length; i++){
  digitNum[i].addEventListener('click',function(){
    if(clear == true){
      num1 = display1.textContent;
      display1.textContent = '';
      clear = false;
    }
    
   display1.textContent = display1.textContent + digitNum[i].textContent; 
   display2.textContent = '';
  })
}

// clear all display from calculator monitor
clearAll.addEventListener('click',function(){
  display1.textContent = '';
  display2.textContent = '';
})

// clear last number that inserted to calculator
clearLastNum.addEventListener('click',function(){
  let finalNum = display1.textContent.substring(0,display1.textContent.length - 1);
  display1.textContent = finalNum;
})

// in this part we get the operator 
for(let i = 0; i < operation.length; i++){
  operation[i].addEventListener('click',function(){
    clear = true;
    opr = operation[i].textContent;
    
  })
}

// in this part we want to show the final resutl
equal.addEventListener('click',function(){
  num2 = display1.textContent;
  display1.textContent = '';
  switch(opr){
    case '+':
      display2.textContent = parseFloat(num1) + parseFloat(num2);
      break;
    case '-':
     display2.textContent =  parseFloat(num1) - parseFloat(num2);
      break;
    case '*':
      display2.textContent = parseFloat(num1) * parseFloat(num2);
      break;
    case '/':
      display2.textContent = parseFloat(num1) / parseFloat(num2);
      break;
    case '%':
      display2.textContent = parseFloat(num1) % parseFloat(num2);
      break;
  }
})



