class Centaur {
  constructor (name, breed){
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
  this.shots = 0;
}
shoot(){
  this.shots++;
  this.cranky = this.shots >= 3 

  return this.cranky || !this.standing ? 'NO!': 'Twang!!!';
  
}
run(){
  this.shots++;
  this.cranky = this.shots >=3 
  if(this.layingDown === true){
    return 'NO!'
  }
  return 'Clop clop clop clop!!!';
}
sleep() {
  if (this.standing === true){
    return 'NO!';
  } else {
    this.cranky = false;
    this.shots = 0;
    return 'ZZZZ';
  }
}
layDown() {
  this.standing = false;
  this.layingDown = true;
}
standUp(){
  this.standing = true;
  this.layingDown = false;
}
drinkPotion(){
  this.cranky = false;
  if (this.layingDown === true){
    return 'Not while I\'m laying down!'
  }
  if (this.shots < 1) {
    this.cranky = true;
  }
}
}








module.exports = Centaur;