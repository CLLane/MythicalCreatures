class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'Scallywag';
    this.cursed = false;
    this.acts = 0;
    this.booty = 0;

  }
  commitHeinousAct() {
    this.acts ++;
    if (this.acts > 2){
      this.cursed = true;
    }
  }
  robShip() {
    this.booty += 100;
    return 'YAARRR!';
  }
}











module.exports = Pirate;