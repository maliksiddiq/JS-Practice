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


// ----------------------------------- Global Scope /  Local Scope   --------------------------------------------- 

//  Scope
// Kis jagah (area) me koi variable, function, ya constant accessible (use) ho sakta hai.

//  JavaScript me mainly 2 types ke scope hote hain

// Global Scope
// Local Scope (ya Block/Function Scope)


// Global Scope
// Global Scope wo scope hota hai jahan koi variable, function, ya object program ke sabhi parts me — yani poore code ke andar — accessible (use) hota hai.
// Agar koi variable ya function kisi function, block ({}), ya module ke bahar declare kiya gaya ho, to wo global scope me hota hai.


//  Local Scope
//  Agar koi variable function ke andar ya block ke andar (like {}) declare kiya gaya ho,
//  to wo local scope me hota hai.

//  -------------------------- Global Scope --------------------------

// let userName = 'Siddiq'
// console.log(userName)

// function introduceMe() {
//     console.log('Hi i am' + ' ' + userName)
// } 

// introduceMe()

// debugger

// var a = 10
// let b = 20
// const c = 30

// console.log(a)
// console.log(b) 
// console.log(c) 

// console.log(window.a)
// console.log(window.b)
// console.log(window.c)

// function sum() {
//     console.log(a + b + c)
// }
// sum()

// {
//     let first = a
//     console.log(first)
// }


// -----------------------------------------------------------------------------------------------

//  -------------------------- Local Scope  Blocked Scope --------------------------

// function sayHi() {
//     let user = "Hi EveryOne!"
//     console.log(user)
// }

// sayHi()
// console.log(user)


// function subtract() {
//     const num1 = 20
//     const num2 = 10
//     console.log(`First number is ${num1}`)
//     console.log(`Second number is ${num2}`)
//     console.log(num1 - num2)
    
// }

// subtract()
// console.log(num1)
// console.log(num2)

// {
//     var a = 1
//     let b = 2
//     const c = 3

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

// console.log(a)
// console.log(b)
// console.log(c)

// function number() {
//     var num1 = 10;
//     let num2 = 20;
//     const num3 = 30;

//     console.log(num1)
//     console.log(num2)
//     console.log(num3)
// }

// number()

//     console.log(num1)
//     console.log(num2)
//     console.log(num3)

// {
//     var num1 = 10;
//     let num2 = 20;
//     const num3 = 30;

//     console.log(num1)
//     console.log(num2)
//     console.log(num3)

// }

// console.log(num1)
// console.log(num2)
// console.log(num3)

// -------------------------------------------------------- Scope ------------------------------------------------


// var num1 = 10
// let num2 = 20
// const num3 = 30

// console.log(num1)
// console.log(num2)
// console.log(num3)

// function sayHi() {
//     console.log('Hi Everyone!')
//     console.log(num1)
//     console.log(num2)
//     console.log(num3)
// }

// sayHi()


// {
//     let num1 = 20
//     console.log(num1)

//     const num2 = 30
//     console.log(num2)

//     var a = 40
//     console.log(a)
// }

// console.log(num1)
// console.log(num2)
// console.log(num3)


// function number() {
//     let a = 10
//     const b = 20
//     var c = 30

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

    // console.log(a)
    // console.log(b)
    // console.log(c)

// number()


// ---------------------------------------- Lexical Scope / Closure -----------------------------------------------

// Lexical Scope ka matlab hota hai:
// Function jahan likha gaya hai, us jagah ke hisaab se decide hota hai ke wo kin variables ko access kar sakta hai.
// "Lexical" ka matlab hota hai — “code likhne ke waqt decide hona” (not run time pe).


// let a = 10

// function outer() {
//     let b = 20;

//     function inner() {
//        console.log(a) 
//        console.log(b)
//     }

//     inner()
// }

// outer()


// let name = 'Ali'

// function greet() {
//     console.log(`My name is ${name}`)
// }

// function change() {
//     let name = 'Usama'
//    greet()
// }

// change()


// let name = 'Ali' 

// function outer() {
//     let name = 'Usama'

//     function inner() {
//         console.log(`My name is ${name}`)
//     }
//     inner()
// }

// outer()


// let name = 'Ali'

// function greet() {
//     console.log(`My name is ${name}`)
// }

// function change() {
//     let name = 'Ramzan'
//     greet()
// }
// change()


// debugger

// let name = 'Ali'

// function outer() {
//     let name = 'Ramzan'

//     function inner() {
//         console.log('My name is' + " " + name)
//     }

//     return inner()
// }
// outer()



