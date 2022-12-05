// ======================================================

console.log('Simple function:')
function sayHello1() {
  console.log('sayHello1: Hello!')
}
sayHello1() // Output: "Hello!"
console.log('')

// ======================================================

console.log('Simple function with arguments:')
function sayHello2(name) {
  console.log('sayHello2: Hello ' + name + '!')
}
sayHello2('John') // Output: "Hello John!"
console.log('')

// ======================================================

console.log('Function with return values:')
function square(x) {
  return x * x
}
var result = square(3) // result is now equal to 9
console.log('square: result: ', result)
console.log('')

// ======================================================

console.log('Function with multiple arguments and return values:')
function sumAndProduct(num1, num2) {
  return [num1 + num2, num1 * num2]
}
let [sum, product] = sumAndProduct(3, 4)
console.log('sumAndProduct: sum: ', sum) // Output: 7
console.log('sumAndProduct: product: ', product) // Output: 12
console.log('')

// ======================================================
