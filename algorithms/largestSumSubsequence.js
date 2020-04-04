/**
 * Given: An array of numbers (+ and -).
 * Find: Start and end indeces for subsequence with the largest sum
 */

let a = [0,1,2,3,4,5,6,7,8,9,10];
let b = [-99,0,-99];
let c = [-99,1,-99];
let d = [0,1,2,-99,-1,15,-4,8,9,10,-99,98];
let e = [0,1,2,-99,-1,150,-4,8,9,10,-99,98];

function getLargestSub(a){
  let bestStart = 0;
  let bestEnd = 0;
  let bestSum = 0;
  
  let currentSum = 0;
  if(a.length < 1){
    return 0;
  }
  let i = 0;
  for(let j = 0;j < a.length; j++){
    currentSum += a[j];
    if(currentSum > bestSum){
      bestSum = currentSum;
      bestStart = i;
      bestEnd = j;
    } else if(currentSum < 0){
      i = j+1;
      currentSum = 0;
    }
  }

  return {bestSum, bestStart, bestEnd}
}

getLargestSub(a); //?
getLargestSub(b); //?
getLargestSub(c); //?
getLargestSub(d); //?
getLargestSub(e); //?