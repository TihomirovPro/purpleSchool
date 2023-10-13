'use strict';

function is14(date) {
  const birthday = new Date(date);
  const now = new Date();
  const years = now.getFullYear() - birthday.getFullYear()
  
  if (years < 14) return false;
  if (years === 14) {
    if (now.getMonth() < birthday.getMonth()) return false;
    if (now.getMonth() === birthday.getMonth() && now.getDate() < birthday.getDate()) return false;
  }

  return true;
}

console.log(is14('1992-01-17'))