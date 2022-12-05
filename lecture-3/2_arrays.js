// ======================================================

console.log('Access individual elements of an array:')
let colors = ['red', 'green', 'blue']
console.log('colors: index 0: ', colors[0]) // Output: "red"
console.log('colors: index 1: ', colors[1]) // Output: "green"
console.log('colors: index 2: ', colors[2]) // Output: "blue"
console.log('')

// ======================================================

console.log('Add items to array:')
colors.push('purple')
console.log('colors: ', colors) // Output: ["red", "green", "blue", "purple"]
console.log('')

// ======================================================

console.log('Remove items from the array:')
let removedColor = colors.pop()
console.log('colors: ', colors) // Output: ["red", "green"]
console.log('removedColor: ', removedColor) // Output: "blue"
console.log('')

// ======================================================
