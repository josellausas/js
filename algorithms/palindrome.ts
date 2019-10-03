function isPalindrome(str: string): boolean {
  if(str.length < 1){
    return false
  }
  const chars = [...str.replace(/ /g, '')];
  let startIndex = 0;
  let endIndex = chars.length - 1;
  let startChar = chars[startIndex];
  let endChar = chars[endIndex];

  while(startChar === endChar){
    if(startIndex === endIndex || startIndex > endIndex){
      return true;
    } else {
      startChar = chars[startIndex++];
      endChar = chars[endIndex--];
    }
  }
  return false;
}
