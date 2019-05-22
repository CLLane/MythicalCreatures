class Wizard {
  constructor(object) {
    this.name = object.name;
    this.bearded = object.bearded;
    this.bearded = this.bearded === undefined;
    this.rested = true;
    this.mana = 3;
  }
    incantation(spell) {
      spell = spell.toUpperCase();
      return spell;
    }
    cast(magic) {
      this.mana--;
      if (this.mana >= 1) {
      return 'MAGIC BULLET';
    } else {
      this.rested = false;
      return 'I SHALL NOT CAST!'
    }
    }
}











module.exports = Wizard;



