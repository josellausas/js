export function binarySearch(item, list){
  let min = 0;
  let max = list.length - 1;
  let guess;
  let attempts = 0;
  while(min <= max){
    attempts++;
    guess = Math.floor((min+max) * 0.5);
    if(list[guess] === item){
      console.log(`Found after ${attempts} attempts`);
      return item;
    } else {
      if(list[guess] < item){
        // Look Right
        min = guess + 1
      } else {
        // Look left
        max = guess - 1;
      }
    }
  }
  console.log(`Not found after ${attempts} attempts`);
  return -1;
}

function getMidIndex(max, min){
  return Math.floor((max+min) * 0.5);
}

/**
 * 33 mins
 * @param {*} q the number to find 
 * @param {*} M a sorted list of numbers
 */
export function binarySearchLlau(q, M){
  let attempts = 1;
  let min = 0;
  let max = (M.length) - 1; //?
  if(min === max || M[max] == q){
    console.log(`Found after ${attempts} attempts`);
    return 0;
  }
  while(min <= max){
    // Try early exits
    if(M[min] == q){ console.log(`Found after ${attempts} attempts`); return min;};
    if(M[max] == q){ console.log(`Found after ${attempts} attempts`); return max;};
    let mid = getMidIndex(max, min); //?
    if(M[mid] == q){
      console.log(`Found after ${attempts} attempts`);
      return mid;
    } else {
      attempts++;
      // compute new values for min and max
      if(q > mid){
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }
  }
  console.log(`Not found after ${attempts} attempts`);
  return -1;
}

binarySearchLlau(100, [10, 20, 30, 40, 100, 1000]) //?

function binarySearch(sortedList, element){
  let low = 0;
  let high = sortedList.length - 1;
  while(low<=high){
    let mid = Math.floor((low + high) / 2);
    if(sortedList[mid] > element){
      high = mid - 1;
    } else if(sortedList[mid] < element){
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return null;
}
