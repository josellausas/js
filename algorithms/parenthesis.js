export function isBalanced(str){
  // Traverse the string and push and pop to a stack
  // If '({[' then push to stack.
  // If ')]}' then pop last and check for paiding. If mismatch found, then return false
  // If we get to the end of the sequence and the stack is properly empty then we are balanced
  let stack = [];
  let strArr = [...str];
  // Use a regular loop, forEach does not end early
  for(let i = 0; i < strArr.length; i++){
    let x = strArr[i]; //?
    switch(x) {
      case '(':
      case '{':
      case '[':
        stack.push(x);
        break;
      case ')':
        if(stack.length < 1 || stack.pop() !==  '('){
          return "NO";
        }
        break;
      case ']':
        if(stack.length < 1 || stack.pop() !==  '['){
          return "NO";
        }
        break;
      case '}':
        if(stack.length < 1 || stack.pop() !==  '{'){
          return "NO";
        }
        break;
    }
  }
  return (stack.length === 0) ? "YES":"NO"
}


isBalanced("(uno)") //?
isBalanced(")") //?
isBalanced("(([]{}{}()))") //?
