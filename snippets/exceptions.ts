console.log("Hello")
let json = '{ "age": 30}';

// Try a block of code and catch its errors
try {
  let user = JSON.parse(json);
  if(!user.name){
    throw new SyntaxError("Incomplete data!")
  }
  console.log(user.name);
} catch(e){
  console.log(e.name + " | Error: " + e.message)
}