/**
 * Given a number n, return the nth fibonnaci number
 */

const memo: Map<number, number> = new Map();
memo.set(0, 0);
memo.set(1, 1);

function fibonacci(n: number){
  return fib_memo(memo, n);
}

function fib_memo(memo: Map<number, number>, n: number){
  if(n <= 0){
    return 0;
  } else if(!memo.has(n)) {
    // Compute the fib number
    for(let i=2; i<=n; i++){
      if(!memo.has(i)){
        // Compute unknown fib
        const prev1 = memo.get(i-1); //?
        const prev2 = memo.get(i-2); //?
        memo.set(i, prev1 + prev2); //?
      }
    }
  }
  return memo.get(n);
}

fibonacci(300); //?
