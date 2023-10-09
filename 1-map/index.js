'use strict';

const arr = [
  { id: 1, name: 'Вася' },
  { id: 2, name: 'Петя' },
  { id: 3, name: 'Андрей' },
  { id: 1, name: 'Вася' },
  { id: 3, name: 'Андрей' }
];

const newArr = arr.reduce((acc, el) => {
  if (acc.find(item => item.id === el.id)) return acc;
  acc.push(el);
  return acc;
}, []);

console.log(new Set(newArr));