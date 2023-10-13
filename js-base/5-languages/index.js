const selectLang = prompt('Введите свой язык (ru, en, de)');

switch (selectLang) {
  case 'ru':
    console.log('Добрый день');
    break;
  case 'en':
    console.log('Good afternoon');
    break;
  case 'de':
    console.log('Guten Tag');
    break;
  default:
    console.log('Введенный язык отсутствует :(');
}