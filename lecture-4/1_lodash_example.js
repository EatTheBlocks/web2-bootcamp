import _ from 'lodash'

// Use the map method to square all values in an array
const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = _.map(numbers, (num) => num * num)

console.log(squaredNumbers) // [1, 4, 9, 16, 25]
