let stepCounter = 0;

let ladder = {
  up() {
    ++stepCounter;
    return this; 
  },
  down() { 
    --stepCounter;
    return this; 
  },
  showStep() { 
    console.log(stepCounter);
    return this; 
  }
};

ladder.up().up().up().down().showStep(); 
