let a = [-99,20,-5,1,2,3,4,5,6,7,8,-100,1];

function getBestContiguousSum(arr){
  let bestSum = -1;
  let start = 0;
  let end = 0;
  let currentSum = 0;
  for(let i = 0; i < arr.length; i++){
    let thisSum = arr[i] + currentSum;
    if(thisSum > bestSum){
      end = i;
      bestSum = thisSum;
      currentSum = thisSum;
    }
    if(thisSum < 0){
      start = j+1;
      end = start;
    }
  }
}