console.log('============================================')
let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

let pattern = /love/gi
console.log(string.match(pattern))

console.log('============================================')
console.log('============================================')

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/
console.log(txt.match(regEx))
console.log(txt.match(/\d+/g))

console.log('============================================')

