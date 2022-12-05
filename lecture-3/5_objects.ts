// ======================================================

console.log('Simple object that represents a person:')
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  getFullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}
console.log('person.firstName: ', person.firstName) // Output: "John"
console.log('person.lastName: ', person.lastName) // Output: "Doe"
console.log("person['age']: ", person['age']) // Output: 30
console.log('')

// ======================================================

console.log('Use bracket notation to access properties of an object:')
const book = {
  'author name': 'Jane Austen',
  'book title': 'Pride and Prejudice',
  'year published': 1813,
}
console.log("book['author name']: ", book['author name']) // Output: "Jane Austen"
console.log("book['book title']: ", book['book title']) // Output: "Pride and Prejudice"
console.log('')

// ======================================================

console.log('Add, modify and remove properties from an object:')
// Add a new property to the person object
person['email'] = 'john.doe@gmail.com'
console.log("person['email']: ", person['email'])
// Modify the value of an existing property
person.age = 31
console.log('person.age: ', person.age)
// Remove a property from the object
delete person['email']
console.log("person['email']: ", person['email'])
console.log('')

// ======================================================
