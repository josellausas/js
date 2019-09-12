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