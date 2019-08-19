export function findSubstring(master, sub){
  if(master === "" || sub === "") {
    return null
  }
  const a = [...master.toLowerCase()];
  const b = [...sub.toLowerCase()];
  const charMap = {};
  const primes = [2,3,5,7,11,13,17,19,23]

  function getPrimeHash(string){
    const k = [...string];
    var total = 1;
    k.forEach( c => {
      let num = charMap[c];
      total = total * num;
    });
    return total;
  }

  function getNextPrime(){
    if(primes.length <= 0){
      primes.push(...[2,3,5,7,11,13,17,19,23])
    }
    return primes.pop();
  }

  // Reduce
  a.reduce( (m, c) => {
    if(!m[c]){
      m[c] = getNextPrime()
    }
    return m
  }, charMap);

  b.reduce( (m, c) => {
    if(!m[c]){
      m[c] = getNextPrime()
    }
    return m
  }, charMap)

  // Get the hash
  let subHash = getPrimeHash(b, charMap);
  const foundIn = [];
  for(let i = 0; i <= (a.length - b.length); i++){
    let substring = a.slice(i, i + (b.length))
    if(subHash === getPrimeHash(substring, charMap)){
      // Collision, check
      if (substring.join("") == b.join("")) {
        foundIn.push(i);
      }
    }
  }
  return foundIn? foundIn : null;
}
