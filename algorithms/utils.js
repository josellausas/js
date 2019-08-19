export function runWithTimer(runnerFunc){
  const start = performance.now();
  const result = runnerFunc();
  const end = performance.now();
  return {
    result,
    time: end - start,
  }
}
