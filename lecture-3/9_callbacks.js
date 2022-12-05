// ======================================================

console.log('Simple callback function:')
function greet(name, callback) {
  const greeting = `Hello, ${name}!`
  console.log('from greet()')
  callback(greeting)
}

// The callback function
function printMessage(message) {
  console.log('from printMessage(): message: ', message)
}

// Use the greet() function with the callback
greet('John', printMessage) // Output: "Hello, John!"
console.log('')

// ======================================================
