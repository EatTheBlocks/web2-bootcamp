// ======================================================

console.log('Global scope:')
const message1 = 'Hello, world!'

function getMessage() {
  return message1
}

console.log('getMessage(): ', getMessage()) // Output: "Hello, world!"
console.log('')

// ======================================================

console.log('Local scope:')
function sayHello() {
  const message2 = 'Hello, world!' // The `message` variable is in the local scope of the `sayHello` function
  console.log('message2 inside sayHello(): ', message2)
}

sayHello() // Output: "Hello, world!"
console.log('message2 outside: ', message2) // Output: ReferenceError: message is not defined
console.log('')
