function crypto (pass) {
  const arr1 = pass.split('').reverse();
  const arr2 = arr1.splice(pass.length/2); 
  
  return arr2.concat(arr1).join('');
}

function check(key, pass) {
  const password = crypto(key);

  return password === pass ? true : false;
}

console.log(crypto('password'))
console.log(check('ssapdrow', 'password'))
console.log(check('ssapdrow', 'qwerty'))
