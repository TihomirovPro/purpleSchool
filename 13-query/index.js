'use strict';

function queryString(object) {
  const queries = [];

  for (const key in object) {
    queries.push(`${key}=${object[key]}`);
  }

  return queries.join('&');
}

console.log(queryString({search: 'Вася', take: 10}));