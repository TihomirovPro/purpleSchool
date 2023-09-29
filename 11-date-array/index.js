const arr = ['10-02-2022', 'текст', '11/12/2023', '00/13/2022', '41/12/2023'];

function getDate(arr) {
  const filterArr = arr
    .map(el => {
      const date1 = el.split('-');
      const date2 = el.split('/');

      if (date1.length === 3) return date1
      if (date2.length === 3) return date2
    })
    .filter(el => {
      if (el) {
        const [month, day, year] = el;

        if (
          +month <= 12 && +month > 0 &&
          +day <= 31 && +day > 0 &&
          typeof +year === 'number'
        ) {
          return true
        }
      }

      return false
    })
    .map(el => el.join('-'))
  
  return filterArr
}

console.log(getDate(arr));