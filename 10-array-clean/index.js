function isRemove (num) {
  if (num > 5) { return true }
  return false
}

function arrayClean(arr, fn) {
  
  for (i in arr) {
    if (fn(arr[i])) {
      arr.splice(i, 1)
    }
  }

  return arr;
}

console.log(arrayClean([4, 8, 3, 2, 6, 5, 1, 0, 12], isRemove));