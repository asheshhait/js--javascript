let score = 12
console.log(typeof score)
console.log(typeof(score))
// let point = "12abc"
// let point = null
let point = undefined
console.log(typeof(point))
let valueInNumber = Number(point)
console.log(typeof(point))
console.log(valueInNumber)     //NaN is also an number


let isLoggedIn = 1
// let isLoggedIn = ""        // empty string is false
let boolenInLoggedIn = Boolean(isLoggedIn)
console.log(boolenInLoggedIn)




let someNumber  = 33
let stringNumber = String(someNumber)
console.log(stringNumber)





// lecture 10(memory) stack (primitive ) and heap (non primitive)
// primitive value will go to the stack

let myName ="ashesh"
let anotherName = myName

anotherName = "riju"
console.log(myName)
console.log(anotherName)       //heap