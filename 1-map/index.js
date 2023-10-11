'use strict';

const arr = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Андрей' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Андрей' }
];

function arrToSet(arr) {
  const newArr = [];

  arr.map(el => {
    if (!newArr.find(item => item.id === el.id)) newArr.push(el)
  });

  return new Set(newArr);
}

console.log(arrToSet(arr));