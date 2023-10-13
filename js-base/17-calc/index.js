'use strict';

const num1 = document.querySelector('.num1')
const num2 = document.querySelector('.num2')

const btnSum = document.querySelector('.btnSum')
const btnDiff = document.querySelector('.btnDiff')
const btnMult = document.querySelector('.btnMult')
const btnDiv = document.querySelector('.btnDiv')

const res = document.querySelector('.res')

btnSum.addEventListener('click', ()=> { calc('+') })
btnDiff.addEventListener('click', ()=> { calc('-') })
btnMult.addEventListener('click', ()=> { calc('*') })
btnDiv.addEventListener('click', ()=> { calc('/') })

function calc(operation) {
  let result = 0

  switch (operation) {
    case '+':
      result = +num1.value + +num2.value
      break;
    case '-':
      result = +num1.value - +num2.value
      break;
    case '*':
      result = +num1.value * +num2.value
      break;
    case '/':
      result = +num1.value / +num2.value
      break;
  }

  res.textContent = `${num1.value} ${operation} ${num2.value} = ${result}`;
  num1.value = '';
  num2.value = '';
}