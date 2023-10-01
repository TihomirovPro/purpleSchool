function isRemove (num) {
  if (num > 5) { return true }
  return false
}

function arrayClean(arr, fn) {
  
  for (el of arr) {
    if (fn(el)) {
      arr.splice(arr.indexOf(el), 1)
    }
  }

  return arr;
}

console.log(arrayClean([4, 8, 3, 2, 6, 5, 1, 0, 12], isRemove));