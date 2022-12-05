// ======================================================

console.log('Simple example of how to use a Promise:')
// Create a promise
let promise = new Promise((resolve, reject) => {
  // Do something asynchronous, then call either `resolve` or `reject`
  setTimeout(() => {
    resolve('The operation was successful')
  }, 1000)
})

// Use the promise
promise.then((result) => {
  console.log('result: ', result) // Logs 'The operation was successful'
})
console.log('')

// ======================================================

console.log('Simple Example of how to use fetch with Promise:')
// npm install node-fetch
import fetch from 'node-fetch'
// Make a GET request to the specified URL
fetch('https://api.spacexdata.com/v2/launches')
  // When the response is received, parse it as JSON
  .then((response) => response.json())
  // Once the JSON is parsed, log it to the console
  .then((data) => {
    console.log('First item from the response: ', data[0])
  })
console.log('')

// ======================================================
