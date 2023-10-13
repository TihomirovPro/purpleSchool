function sort(arr) {
  let length = arr.length - 1;

  for (el of arr) {
    for (let i = 0; i < length; i++) {
      if (arr[i] > arr[i + 1]) {
        const current = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = current;
      }
    }
    length -= 1;
  }

  return arr;
};

console.log(sort([1, 40, -5, 10, 0]))