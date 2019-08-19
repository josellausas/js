import { findSubstring } from "./findSubString";
import { runWithTimer } from "./utils";
import { toAscii, toString } from "./ascii";
import { wordMap } from "./wordMap";
import { numeralize } from "./numeralize";

let result = runWithTimer(()=>{
  return findSubstring("bannana", "ana");
});
result


let time = runWithTimer(()=>findSubstring("que es eso, eso es queso", "")).time
time

// Test a really long string
let x = findSubstring("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", "it")
x

let found = findSubstring(
  "Que es eso? Eso es queso!", "eso"
)
found

// Test ASCII
console.log(toAscii("hello"));
console.log(toString(toAscii("queso")));

const text = "You just have to be careful not to wallow in self-pity for too long. Indulging in feelings of discouragement will fuel the sinful passions of your flesh (1 Pet. 2:11), and they can become an idol in your life if you chose to turn inward to your feelings instead of turning outward in faith to God.";
let t = runWithTimer( () => {
  return wordMap(text)
});
console.log(t)

const text2 =`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`

t = runWithTimer( () => {
  return wordMap(text2)
});
console.log(t)