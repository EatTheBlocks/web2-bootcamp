// ======================================================

console.log('Arrow function that takes two arguments:')
const sum1 = (x, y) => {
  return x + y
}

console.log('sum1(1, 2): ', sum1(1, 2)) // Output: 3
console.log('')

// ======================================================

console.log('Regular function that does the same thing as above:')
function sum2(x, y) {
  return x + y
}
console.log('sum2(1, 2): ', sum2(1, 2)) // Output: 3
console.log('')

// ======================================================

console.log("Arrow function that doesn't take any arguments:")
const sayHello = () => 'Hello, world!'

console.log('sayHello(): ', sayHello()) // Output: "Hello, world!"
console.log('')

// ======================================================

console.log(
  'Difference between the "this" value in regular functions and arrow functions:'
)
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
  getFullName: () => {
    return this.firstName + ' ' + this.lastName
  },
}

console.log('person.fullName(): ', person.fullName()) // Output: "John Doe"
console.log('person.getFullName(): ', person.getFullName()) // Output: undefined undefined
console.log('')

// ======================================================
