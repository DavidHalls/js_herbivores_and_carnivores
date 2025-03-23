'use strict';

class Animal {
  // write your code here
  static alive = [];
  constructor(name, health = 100) {
    this.name = name;
    this.health = health;
    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  // write your code here
  hidden = false;
  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  bite(herb) {
    if (herb instanceof Herbivore && !herb.hidden) {
      herb.health -= 50;
    }

    if (herb.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== herb);
      // const idx = Animal.alive.indexOf(herb);

      // Animal.alive.splice(idx, 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
