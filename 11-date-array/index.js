const arr = ['10-02-2022', 'текст', '11/12/2023', '00/13/2022', '41/12/2023', '04/31/2022'];

function getDate(arr) {
  const filterArr = arr
    .filter(el => { if ( el.length === 10 && (el[2] === '-' || el[2] === '/') && (el[5] === '-' || el[5] === '/') ) { return el } })
    .map(el => el.replaceAll('/', '-'))
    .filter(el => {
      const [day, month, year] = el.split('-')

      if (+month <= 0 || +month > 12) { return false }
      if (+day <= 0 || +day > 31) { return false }
      if (typeof +year !== 'number' && year.length !== 4) { return false }
      if ((+month === 4 || +month === 6 || +month === 9 || +month === 11) && +day > 30) {return false}
      if ((+month === 2) && +day > 29) {return false}

      return true
    })
  
  return filterArr
}

console.log(getDate(arr));