import { numeralize } from "./numeralize";

export function lowercaseWordArray(text){
  return text.toLowerCase().split(" ")
}

export function uniqueWordsArray(text){
  return [...new Set(lowercaseWordArray(text))];
}

export function wordMap(text){
  return uniqueWordsArray(text).reduce((map, w) => {
    const key = numeralize(w);
    if(map.has(key)){
      // Append to the array
      const arr = [...map.get(key)];
      arr.push(w);
      map.set(key, arr);
    } else {
      // Create a new array of words
      map.set(key, [w]);
    }
    return map
  }, new Map());
}

