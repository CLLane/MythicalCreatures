class Hobbit {
  constructor (name){
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = false;
    if (this.name === 'Frodo'){
      this.hasRing = !this.hasRing;
    }
  }
  celebrateBirthday() {
    this.age ++;
    if(this.age > 32){
    this.adult = !this.adult;
    }
    if (this.age > 100){
      this.old = !this.old;
    }

  }
}

















module.exports = Hobbit;