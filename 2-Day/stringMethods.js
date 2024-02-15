// String Methods

// 1. length The string length method returns the number of characters in a string included empty space.
let js = 'javaScript'
console.log(js.length)

let firstName = "Cordeiro"
console.log(firstName.length)

/* 
  Accessing characters in a string: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one.

*/
console.log("============================================")
// Let us access different characters in 'JavaScript' string.
let string = 'javaScript'
let firstLetter = string[0]
const secondLetter = string[1]
const lastLetter = string[9]
const lastIndex = string.length-1
console.log(`The first letter is: ${firstLetter}, the second letter is: ${secondLetter} and the last letter is: ${lastLetter}, the last index is: ${lastIndex}`)

const stringName = "Cordeiro"
const lastIndexOfName = stringName.length-1
console.log(lastIndexOfName)

// toUppercase(): 
let toUppercase = 'javascript'
console.log(toUppercase.toUpperCase())
// toLowerCase
let toLowerCase = 'JAVA'
console.log(toLowerCase.toLowerCase())

// substr(): It takes two arguments, the starting index and number of characters to slice.

let stringSubtr = 'javascript'
console.log(stringSubtr.substr(4, 6))

// substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.

let stringOne = 'JavaScript';
console.log(stringOne.substring(4, 6))

// split(): The split method splits a string at a specified place.

let stringTwo = '30 Days of JavaScript';
console.log(stringTwo.split()) // Changes to an array 
console.log(stringTwo.split(' ')) // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]
let stringThree = 'Cordeiro'
console.log(stringThree.split()) // ['Cordeiro']

let countries = 'Angola, Mali, Ghana, Egipto, Senegal, Congo'
console.log(countries.split())
console.log(countries.split(',')) //  // split to any array at comma 
console.log(countries.split(', ')) 
console.log("============================================")
// trim(): Removes trailing space in the beginning or the end of a string.
let stringFour = "     30 days of javaScript    "
console.log(stringFour)
console.log(stringFour.trim())
console.log("============================================")
/* 
  includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
*/
let stringFive = "30 days of javaScript"
console.log(stringFive.includes('Days'))
console.log("============================================")
// replace(): takes as a parameter the old substring and a new substring.
let stringSix = "30 days of javaScript";
console.log(stringSix.replace('javaScript', 'NodeJs'))

let country = "Angola";
console.log(country.toUpperCase().replace('Angola', 'Ghana'))
console.log("============================================")
// charAt(): Takes index and it returns the value at that index
let stringSeven = "30 days of javaScript"
console.log(stringSeven.charAt(0))

let latStringSeven = "30 days of javaScript"
let theLast = latStringSeven.length - 1
console.log(theLast)
console.log("============================================")
// charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index

let stringEight = "30 days of javaScript"
console.log(stringEight.charCodeAt(3))

let stringEightLast = '30 days of javaScript'
let lastEight = stringEightLast.length - 1
console.log(stringEightLast.charCodeAt(lastEight))
console.log("============================================")
// indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
let stringnone = "30 days of javaScript"
console.log(stringnone.indexOf('node'))
console.log("============================================")
// lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
let stringTen = 'I love JavaScript. If you do not love javaScript what else can you love?'
console.log(stringTen.lastIndexOf('love'))
console.log("============================================")
// concat(): it takes many substrings and joins them.
let concatString = '30 '
console.log(concatString.concat('Days ', ' of', ' JavaScript'))
let contry = 'Ango'
console.log(contry.concat('la'))
console.log("============================================")
// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
const startWith = "love is the best to in this world"
console.log(startWith.startsWith('Love'));
console.log(startWith.startsWith('love'));

console.log("============================================")
/* 
 endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
*/
let endWith = 'Love is the most powerful feeling in the world'
console.log(endWith.endsWith('the'))
console.log(endWith.endsWith('world'))
console.log("============================================")
// search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.

let searchInString = "I love javaScript. If you do not love javaScript what else can you love."
console.log(searchInString.search('love'))
console.log(searchInString.search('I'))
console.log(searchInString.search('node'))
console.log("============================================")
/* 
  match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
*/
let stringMatch = 'I love javaScript. If you do not love javaScript what else can you love.'

console.log(stringMatch.match('love'))
console.log("============================================")
let pattern = /love/gi
console.log(stringMatch.match(pattern))
console.log("============================================")

// repeat(): it takes a number as argument and it returns the repeated version of the string.

let stringRepeat = 'love '
console.log(stringRepeat.repeat(10))
console.log("============================================")







