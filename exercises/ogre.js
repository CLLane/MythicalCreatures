class Ogre {

  constructor(name, home) {
    this.name = name;
    this.home = home || 'Swamp';
    this.swings = 0;
  }

  encounter(human) {
    if (human.encounterCounter >= 2 && human.encounterCounter % 2 === 0) {
      this.swings++;
      human.knockedOut = true;
     }
    human.encounterCounter ++;
  }

   swingAt(human) {
    this.swings++;
  }
  apologize(human) {
    human.knockedOut = false;
  }
 }














module.exports = Ogre;