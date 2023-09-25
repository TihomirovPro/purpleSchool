const hasLicence = true;
const age = 18;
const isDrink = false;

const isDrive = hasLicence && age >= 18 && !isDrink

console.log(`Можно за руль: ${isDrive ? 'Да' : 'Нет'}`);