class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  }

  stare(person){

    if (this.statues.length <= 2){
      person.stoned = true;
      this.statues.unshift(person);
    } else {
      this.statues[2].stoned = false;
      this.statues.pop();
      person.stoned = true;
      this.statues.unshift(person);
    }



  }

}

































module.exports = Medusa;



/// difference = == ===



















// //   constructor (name){
// //     this.name = name;
// //     this.statues = [];
// //   }
// // stare(victim){
// //   this.statues.push(victim);
// //   victim.stoned = true;
// //   if(this.statues[3]){
// //     this.statues[0].stoned = false;
// //     this.statues.shift();
// //   }
  
// // }
// // }

// module.exports = Medusa;
