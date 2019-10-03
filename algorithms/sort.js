"use strict";
var foo = [
    "A",
    "a",
    "b",
    "bb",
    "C",
];
var numbers = [
    1, 22, 3, 4, 5
];
// Sorting is case sensitive
foo.sort(); //?
// Case Insensitive Sort
foo.sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); }); //?
// Be careful when sorting numbers!!!
numbers.sort(); //?
numbers.sort(function (a, b) { return a - b; }); //?
