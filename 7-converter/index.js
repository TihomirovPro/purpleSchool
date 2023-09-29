function currencyCunverter(amount, currency, toCurrency) {
  const oneUSDInRUB = 96;
  const oneRUBInUSD= 1/oneUSDInRUB;

  const oneEURInRUB = 102;
  const oneRUBInEUR = 1/oneEURInRUB;

  const oneUSDInEUR = 0.9403;
  const oneEURInUSD = 1.0634;

  switch (currency) {
    case 'rub':
      switch (toCurrency) {
        case 'eur': return amount * oneRUBInEUR;
        case 'usd': return amount * oneRUBInUSD;
        default: return null;
      }
    case 'eur':
      switch (toCurrency) {
        case 'rub': return amount * oneEURInRUB;
        case 'usd': return amount * oneEURInUSD;
        default: return null;
      }

    case 'usd':
      switch (toCurrency) {
        case 'rub': return amount * oneUSDInRUB;
        case 'eur': return amount * oneUSDInEUR;
        default: return null;
      }
  }

  return null;
}

console.log(currencyCunverter(1, 'usd', 'eur'));
console.log(currencyCunverter(1, 'eur', 'usd'));
console.log(currencyCunverter(1, 'eur', 'de'));
console.log(currencyCunverter(1, 'fr', 'rub'));