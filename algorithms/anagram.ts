export function areAnagrams(s1: string, s2: string): boolean {
  if(s1.length !== s2.length) return false;

  const charCount = new Map<String,number>();
  
  [...s1].forEach(char =>{
    charCount.set(char, (charCount.get(char) || 0) + 1);
  });

  [...s2].forEach(char => {
    if(!charCount.has(char)) return false;
    charCount.set(char, charCount.get(char) - 1);
  })

  // Check that our MapCount is all 0s
  return [...charCount.values()].every(val => val === 0)
}

let getWordHash = (w) => {
  let sum = 0;
  [...w].forEach(c =>{
    sum += c.charCodeAt();
  });
  return sum;
}

function getHashMap(wordArray : any[]){
  let map = [];
  wordArray.forEach( w => {
    // Map the word according to its letters
    let hash = getWordHash(w);
    map[hash] ?
    map[hash] = [...w] :
    map[hash].push(w);
  });
  return map;
}

export function getAnagrams(wordArray): any[] {
  const anagrams = [];
  const mappedWords = getHashMap(wordArray);

  mappedWords.forEach( war => {
    war.forEach( w => {
      // Add if there is more than 1 word in the array
      if(w.length > 1){
        anagrams.push(war);
      }
    });
  });

  return anagrams;
}