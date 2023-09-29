function currencyCunverter(amount, currency, toCurrency) {
  const oneUSDInRUB = 96;
  const oneRUBInUSD= 1/oneUSDInRUB;

  const oneEURInRUB = 102;
  const oneRUBInEUR = 1/oneEURInRUB;

  const oneUSDInEUR = 0.9403;
  const oneEURInUSD = 1.0634;

  if (toCurrency !== 'usd' && toCurrency !== 'rub' && toCurrency !== 'eur') {
    return null
  }

  switch (currency) {
    case 'rub':
      return toCurrency === 'usd' ? amount * oneRUBInUSD : amount * oneRUBInEUR

    case 'eur':
      return toCurrency === 'usd' ? amount * oneEURInUSD : amount * oneEURInRUB
 
    case 'usd':
      return toCurrency === 'rub' ? amount * oneUSDInRUB : amount * oneUSDInEUR
  }

  return null
  }

console.log(currencyCunverter(96, 'rub', 'usd'));
console.log(currencyCunverter(1, 'usd', 'rub'));
console.log(currencyCunverter(1, 'eur', 'usd'));
console.log(currencyCunverter(1, 'eur', 'de'));
console.log(currencyCunverter(1, 'fr', 'rub'));