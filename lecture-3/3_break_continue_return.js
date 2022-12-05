// ======================================================

console.log('For loop with break:')
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break // Exit the loop when i is equal to 3
  }
  console.log(i) // Output: 0, 1, 2
}

console.log('For loop with continue:')
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    continue // Skip the current iteration if i is even
  }
  console.log(i) // Output: 1, 3
}
console.log('')

// ======================================================

console.log('Return statement:')
function square(x) {
  return x * x
}
var result = square(3) // result is now equal to 9
console.log('square: result: ', result)
console.log('')

// ======================================================
