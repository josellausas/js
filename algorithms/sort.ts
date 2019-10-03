
let foo = [
  "A",
  "a",
  "b",
  "bb",
  "C",
];
let numbers = [
  1,22,3,4,5
];

// Sorting is case sensitive
foo.sort() //?

// Case Insensitive Sort
foo.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase())); //?

// Be careful when sorting numbers!!!
numbers.sort() //?
numbers.sort((a,b)=>a-b)  //?
