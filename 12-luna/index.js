const input = '4561-2612-1234-5467';

function luna(string) {
  const card = string
    .replaceAll('-', '')
    .replaceAll(' ', '')
    .split('')
    .map(el => +el)
    .filter(el => typeof el === 'number' && !isNaN(el));

  if (card.length === 16) {
    let sum = 0
    
    card.forEach((num, i) => {
      if (!(i % 2)) {
        const newNum = num * 2 < 9 ? num * 2 : num * 2 - 9
        sum += newNum
      } else {
        sum += num
      }
    })

    return sum % 10 ? false : true
  }
}

console.log(luna(input))