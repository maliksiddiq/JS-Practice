// console.log('JS Connected!')

//  Call Stack ek data structure (stack type) hota hai —
// jo JavaScript engine use karta hai ye track karne ke liye ke konsa function chal raha hai aur kaunsa function uske baad chalna hai.

// debugger

// sayHiAll()

// const name = 'Siddiq'
// let age = 20
// var tongue = 'Urdu'

// console.log(name)
// console.log(age)
// console.log(tongue)

// function sayHiAll() {
//     console.log('Hi Everyone')

// }

// sayHiAll()
 
// -------------------------------------------------------

// debugger

// sayHiAll()

// const name = 'Siddiq'
// let age = 20
// var tongue = 'Urdu'

// console.log(name)
// console.log(age)
// console.log(tongue)

// function sayHiAll() {
//     let a = 10
//     let b = 20
//     add()  
// }

// sayHiAll()

// function add() {
//     let x = 3
//     let y = 6
//     sub()
// }

// function sub() {
//     let f = 8
//     let g = 4
// }

// -------------------------------------------------------

// Hoisting ka matlab hai JavaScript code chalne se pehle hi variables aur functions ko memory me reserve kar lena,
// JavaScript me code run hone se pehle variables aur functions ko memory me reserve kar lena.
// JavaScript me hoisting 2 main cheezon par hoti hai:

// Function Declarations
// Variable Declarations (var, let, const)

// Function declarations fully hoist hoti hain.
// var declarations partially hoist hoti hain (value undefined).
// let aur const hoist hoti hain lekin TDZ (Temporal Dead Zone) me hoti hain.
// Function expressions aur arrow functions tab tak use nahi kar sakte jab tak unhe assign na kiya gaya ho.


// Function Declaration wo hota hai jo function keyword se start hota hai aur uska apna naam hota hai.
// Ye hoist hota hai, matlab tum ise likhne se pehle bhi call kar sakte ho.

// -------------------------------------------------------

// console.log(age)

// var age = 20;
// console.log(age)

// console.log(userName)
// let userName = 'Siddiq'
// console.log(userName)

// console.log(name)
// const name = 'Siddiq'
// console.log(name)

// sayHi()

// function sayHi() {
//     let num1 = 10
//     let num2 = 10
//     console.log(num1 + num2)
// }

// sayHi()


// function sayHi() {
//     let num1 = 10
//     let num2 = 10
//     return num1 + num2
// }

// let  store = sayHi()
// console.log(store)

//  -------------------- Function Declaration

// sayHi()

// function sayHi() {
//     console.log('Hi EveryOne!')
// }

// sayHi()


//  -------------------- Function Expression -----------------

// sayHi()

// let sayHi = function() {
//     console.log('Hi EveryOne!')
// }

// sayHi()

// ----------------------------------- Recursion Function    ---------------------------------------------  

// Jab ek function apne andar se khud ko dobara call karta hai,
// to ise Recursion kehte hain.

// Function apne aap ko bar-bar call karta hai, jab tak koi stop condition (base case) na mil jaye.


// function countDown(num) {
//     console.log(num);

//     if(num > 1) {
//         countDown(num - 1)
//     }
// }

// countDown(5)


