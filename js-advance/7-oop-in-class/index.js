'use strict';

class Character {
  constructor (race, name, lang) {
    this.race = race;
    this.name = name;
    this.lang = lang;
  }

  ask() {
    console.log(this.lang, this.name);
  }
};

class Orc extends Character {
  constructor (name, weapon) {
    super('орк', name, 'орчий');
    this.weapon = weapon;
  }

  attack() {
    if (this.weapon) console.log('атака!');
    else console.log('Нет оружия, для удара');
  }

  ask() {
    console.log(`Я орк ${this.name}`);
  }
};

class Elf extends Character {
  constructor (name, spellType) {
    super('эльф', name, 'эльфийский');
    this.spellType = spellType;
  }

  createSpell() {
    console.log(this.spellType);
  }

  ask() {
    console.log(`Надо подкачаться)`);
  }
};

const frank = new Orc('Frank', 'axe')
frank.ask();
frank.attack();

const leo = new Elf('Leo', 'fireball')
leo.ask();
leo.createSpell();