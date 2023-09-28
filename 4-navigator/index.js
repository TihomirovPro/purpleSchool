const addressLat = 43;
const addressLong = 24;

const positionLat = 0;
const positionLong = 0;

const width = addressLat - positionLat;
const height = addressLong - positionLong;

const path = Math.sqrt(width**2 + height**2);

console.log(path);