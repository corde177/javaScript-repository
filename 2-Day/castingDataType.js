/* 
   Casting: Converting one data type to another data type. We use parseInt(), parseFloat(), Number(), + sign, str() When we do arithmetic operations string numbers should be first converted to integer or float if not it returns an error.
String to Int
We can convert string number to a number. Any number inside a quote is a string number. An example of a string number: '10', '5', etc. We can convert string to number using the following methods:

parseInt()
Number()
Plus sign(+)
*/

console.log('===========================================')
// String to Int
let num = '10';
let numInt = parseInt(num)
console.log(numInt)

let numAgain = '10'
let numIntAgain = +num
console.log(numIntAgain)

// String to Float
let numberFloat = '9.81'
let numFloat = parseFloat(numberFloat)
console.log(typeof numFloat)
console.log('===========================================')

