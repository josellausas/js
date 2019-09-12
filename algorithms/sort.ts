
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
foo.sort()
foo
// Case Insensitive Sort
foo.sort((a,b)=> a.toLowerCase().localeCompare(b.toLowerCase()));
foo

// Be careful when sorting numbers!!!
numbers
numbers.sort((a,b)=>a-b) 
numbers
