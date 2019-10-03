let board = [
  ['O','X','O'],
  ['X','O','X'],
  ['O','','O']
]

class Board {
  constructor(){
    this.board = [
      ['','',''],
      ['','',''],
      ['','',''],
    ];
  }
}

class Game {
  constructor(){

  }
  
}

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(220);
  rect(100,50,25,75);
  line(0,0,400,400);
}