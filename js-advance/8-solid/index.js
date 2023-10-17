'use strict';

class Billing {
  constructor(amount) {
    this.amount = amount
  }
  calculateTotal() {return this.amount}
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount)
  }
}

class HourBilling extends Billing {
  #hour;
  constructor(amount, hour) {
    super(amount)
    this.#hour = hour
  }
  calculateTotal() {
    return this.amount * this.#hour
  }
}

class ItemBilling extends Billing {
  #items;
  constructor(amount, items) {
    super(amount)
    this.#items = items
  }
  calculateTotal() {
    return this.amount * this.#items
  }
}

console.log(new FixBilling(1000).calculateTotal());
console.log(new HourBilling(1000, 12).calculateTotal());
console.log(new ItemBilling(1000, 12).calculateTotal());