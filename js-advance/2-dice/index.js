'use strict';

function dice(type) {
  return Math.floor(Math.random() * +type.slice(1) + 1)
}

console.log(dice('d20'));