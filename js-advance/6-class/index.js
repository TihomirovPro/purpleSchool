'use strict';

class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;
  }

  set updateMileage(mileage) {
    if (mileage && !isNaN(mileage)) this.#mileage = mileage;
  }

  info() {
    console.log(this.#brand, this.#model, this.#mileage)
  }
}

const bmw = new Car('bmw', 'x5', 20000);

bmw.info();
bmw.updateMileage = 150000;
bmw.info();
