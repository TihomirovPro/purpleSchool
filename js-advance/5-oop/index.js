'use strict';

const Character = function(race, name, lang) {
  this.race = race;
  this.name = name;
  this.lang = lang;
}
Character.prototype.ask = function() {
  console.log(this.lang, this.name);
}

const Orc = function name(name, weapon) {
  Character.call(this, 'орк', name, 'орчий');
  this.weapon = weapon;
};
Orc.prototype = Object.create(Character.prototype);
Orc.prototype.attack = function () {
  if (this.weapon) console.log('атака!');
  else console.log('Нет оружия, для удара');
}


const Elf = function name(name, spellType) {
  Character.call(this, 'эльф', name, 'эльфийский');
  this.spellType = spellType;
};
Elf.prototype = Object.create(Character.prototype);
Elf.prototype.createSpell = function() {
  console.log(this.spellType);
}

const frank = new Orc('Frank', 'axe')
frank.ask();
frank.attack();

const leo = new Elf('Leo', 'fireball')
leo.ask();
leo.createSpell();