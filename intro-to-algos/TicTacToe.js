
export class Board {
  constructor(input){
    input = [...input];
    if(input.length != 9) return undefined;
    this.store = {};
    this.count = 0;
    for(var row=0; row < 3; row++){
      // Top, Center, Bot
      this.store[row] = {}
      for(var col=0; col < 3; col++){
        // Left, C, Right
        this.store[row][col] = input[this.count]; //?
        this.count++;
      }
    }
  }
  print(){
    const {store} = this;
    console.log(`
     ${store[0][0]} | ${store[0][1]} | ${store[0][2]}
    ------------
     ${store[1][0]} | ${store[1][1]} | ${store[1][2]}
    ------------
     ${store[2][0]} | ${store[2][1]} | ${store[2][2]}
    `);
  }
}

let b1 = new Board(['X','X','X',' ',' ',' ','0','0',' ']);
let b2 = new Board(['X',' ',' ',' ','X',' ','0','0','X']);

b1.print();
b2.print();

// Generate all winning boards as masks

// To check if a board is a winner, compare against