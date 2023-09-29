const arr = ['10-02-2022', 'текст', '11/12/2023', '123122', '00/13/2022'];

function getDate(arr) {
  const newArrow = []

  arr.forEach(item => {
    let date = item.split('-');

    if (date.length === 1) {
      date = item.split('/');

      if (date.length !== 1) {
        newArrow.push(date)
      }

    } else {
      newArrow.push(date)
    }
  });

  return newArrow;
}

console.log(getDate(arr));