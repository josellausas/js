class CylinderStack {
  constructor(cilinderHeightsArr){
    this.stack = [];
    this.height = 0;
    [...cilinderHeightsArr.split(" ").map(x => parseInt(x))].forEach( n => {
      this.stack.unshift(n);
      this.height += n;
    });

  }
  pop = ()=> {
    let x = this.stack.pop();
    this.height -= x;
    return x;
  }
}
export function equalStacks(inputData){
  // Convert the input data to objects
  // Check if equal, 
    // if not equal: Look for tallest and pop()

  const cilinderStacks = [];
  // The first line can be ignored, as we are dinamycally filling these out
  for(let i = 1; i < inputData.length; ++i){
    cilinderStacks.push(
      new CylinderStack(inputData[i])
    );
  }

  console.log(cilinderStacks)

  while(!areSameHeight(cilinderStacks)){
    // Find tallest and pop
    let tallest = getTallest(cilinderStacks);
    tallest.pop();
  }

  return cilinderStacks[0].height;
}

function areSameHeight(cilinders){
  const h = cilinders[0].height;

  for(let i = 1; i < cilinders.length; ++i){
    if(h !== cilinders[i].height){
      return false;
    }
  }
  return true;
}

function getTallest(cilinders){
  let tallestHeight = -1;
  let tallest = null;
  
  for(let i = 0; i < cilinders.length; ++i){
    let cil = cilinders[i];
    if(cil.height >= tallestHeight){
      tallest = cil;
      tallestHeight = cil.height;
    }
  }
  return tallest;
}



const input = [
  "5 3 4",
  "3 2 1 1 1",
  "4 3 2",
  "1 1 4 1",
]

equalStacks(input) //?

