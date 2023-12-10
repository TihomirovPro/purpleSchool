'use strict'

async function getProduct(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  return response.json();
}

async function race(arr) {
  return await new Promise((resolve, reject) => {
    arr.forEach(el => {
      el.then(res => resolve(res)).catch(err => reject(err))
    })
  })
}

race([
  getProduct(1),
  getProduct(2),
  getProduct(3)
]).then(res => console.log(res))
