const input = '4561-2612-1234-5467';

function luna(string) {
  const card = string.split('').filter(el => !isNaN(el));

  if (card.length !== 16) { return false }

  let sum = 0
  
  card.forEach((el, i) => {
    const num = +el;
  
    if (!(i % 2)) {
      sum += num * 2 < 9 ? num * 2 : num * 2 - 9
    } else {
      sum += num
    }
  })

  return sum % 10 ? false : true
}

console.log(luna(input))