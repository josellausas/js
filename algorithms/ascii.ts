export function toAscii(string: string){
  return [...string].map( c => {
    return c.charCodeAt(0) & 255;
  });
}

export function toString(ascii){
  return ascii.map( c => {
    return String.fromCharCode(c)
  }).join("");
}
