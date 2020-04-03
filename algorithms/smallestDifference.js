// Given 2 arrays of numbers, find the pair with the smallest difference.

function getSmallestDiff(A, B){
  if(A.length < 1 || B.length < 1){ return null; }
  if(A.length == 1 && B.length == 1){ return Math.abs(A[0] - B[0]) }
  
  const aSorted = A.sort((a,b)=> a-b);
  const bSorted = B.sort((a,b)=> a-b);

  console.log(aSorted);
  console.log(bSorted);

  let i = 0;
  let j = 0;
  let leftVal = null;
  let rightVal = null;
  let best = null;
  while(i < aSorted.length || j < bSorted.length){
    // If i or j is at the end, just advance the other iterator
    leftVal = aSorted[i]; 
    rightVal = bSorted[j];

    let delta = Math.abs(leftVal - rightVal);
    if(best == null){
      best = delta;
    } else {
      if(delta < best){
        best = delta;
      }
    }
    
    // Check if we are at the end of a list
    if(i == (aSorted.length-1) || j == (bSorted.length-1)){
      if(i == (aSorted.length-1) && j == (bSorted.length-1)){
        // We have reached the end of both lists
        i++; j++;// Exit
      } else if(i == (aSorted.length-1)){
        j++
      } else {
        i++;
      }
    } else {
      // Determine what side gets us closer to a smaller difference
      // (aka increment the smaller one)
      if(leftVal <= rightVal){
        i++;
      } else {
        j++;
      }
    }
  }
  return best;
}
const A = [1,11,2,3,8,12,21,55];
const B = [99, 9, 52, 876];
const Y = [1,3,15,11,2];
const Z = [23,127,235,19,8];


console.log(getSmallestDiff(Y, Z));
console.log(getSmallestDiff(A, B));
