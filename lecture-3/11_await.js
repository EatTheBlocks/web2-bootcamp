// ======================================================

console.log('Example using await to wait for a promise to be resolved:')
async function somePromise1() {
  return new Promise((resolve, reject) => {
    // Do something asynchronous, then call either `resolve` or `reject`
    setTimeout(() => {
      resolve('The operation was successful')
    }, 100)
  })
}
async function example1() {
  // Wait for the promise to be resolved and save the result in a variable
  const result = await somePromise1()

  // Use the result in our code
  console.log('example1: ', result)
}
await example1()
console.log('')

// ======================================================

console.log('Example of using await to wait for a promise that is rejected:')
async function somePromise2() {
  return new Promise((resolve, reject) => {
    // Do something asynchronous, then call either `resolve` or `reject`
    setTimeout(() => {
      reject('The operation was denied')
    }, 100)
  })
}
async function example2() {
  try {
    // Wait for the promise to be resolved and save the result in a variable
    const result = await somePromise2()
  } catch (error) {
    // Handle the error if the promise is rejected
    console.error('example 2 error: ', error)
  }
}
await example2()
console.log('')

// ======================================================
