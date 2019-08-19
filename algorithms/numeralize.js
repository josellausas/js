let count = 1;
const alphabet = [..."abcdefghijklmnopqrstuvwxyz"].reduce((acc, v) => {
  acc[v] = count++;
  return acc
}, {});

const numerical = [..."0123456789"].reduce((acc, v)=>{
  acc[v] = Number(v);
  return acc;
}, {});

const symbols = {
  "`": 0,
  "!": 0,
  "+": 0,
  "-": 0,
  "ñ": 14,
  "T": 300,
};
const symbalphanum = {...alphabet, ...numerical, ...symbols};
export function numeralize(string){
  return [...string.toLowerCase()].reduce( (sum, c) => {
    // Convert term to a value
    const value = symbalphanum[c] || 0;
    return sum += value;
  }, 0)
}
