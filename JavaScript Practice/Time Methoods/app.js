console.log('Js Connected!');

//  setTimeout (function, time)
//  Ye ek function ko delay ke baad sirf ek baar chalata hai.
// setTimeout() ek aisa function hai jo sirf ek baar koi code run karta hai specified delay (milliseconds) ke baad.

// setInterval(function, time)
// Ye bar-bar same time gap ke baad function ko repeat karta hai.
// setInterval() ek aisa function hai jo bar-bar repeat hota rehta hai har specified time ke interval pe.

// clearTimeout()    //    clearInterval()
// Ye dono stop / cancel karte hain un timers ko jo upar diye gaye hain.


// JavaScript ek single-threaded language hai
// Iska matlab hai ke sab kuch line by line execute hota hai (synchronously).
// Lekin setTimeout() ek asynchronous function hai — ye turant execute nahi hota, balki ek “timer” set karta hai.

// → Browser ek timer start karta hai background me (C++ side ya Web APIs area me).
// → Turant ek numeric ID return karta hai (jaise 1).

// setTimeout() turant return karta hai ek ID (delay nahi hota).
// Lekin uska callback  delay ke baad run hota hai.


// Ye dono JavaScript ke built-in “timer functions” hain — jo asynchronous (non-blocking) hote hain.
// Yani ye background me kaam karte hain bina code ke flow ko roke.



// setTimeout(first , 1000)
// setTimeout(sec , 2000)
// setTimeout(third , 3000)

// function first() {
//    console.log('First Function!') 
// }

// function sec() {
//    console.log('Sec Function!') 
// }

// function third() {
//     console.log('Third Function!')
// }


// function time() {
//     console.log('Start Function!')
// }

// const save = setTimeout(time , 2000)
// console.log(save)
// console.log(clearTimeout(save))


//  ----------------------------------- setTimeout -----------------------

// function first() {
//     console.log('First Function!')
// }

// function sec() {
//     console.log('Second Function!')
// }

// function third() {
//     console.log('Third Function!')
// }

// setTimeout(first , 1000)
// setTimeout(sec , 2000)
// setTimeout(third , 3000)

// --------------------------

// function greet() {
//   console.log("Hello after 2 seconds!");
// }
// setTimeout(greet, 2000);


// ----------------- Anonymous function ke sath ----------------- 

// setTimeout(function () {
//         console.log('Anonymous function!')
// } , 2000)



// ------------------------ setTimeout() with parameters ----------------------- 

// function message(name) {
//     console.log(`Hi my name is ${name}`)
// }

// setTimeout(message , 2000 , 'Siddiq')
// setTimeout(message , 3000 , 'Rehan')


// --------------------

// function greet() {
//     console.log('Hello World!')
// }

// const timerId = setTimeout(greet , 2000)

// console.log(timerId)

// clearTimeout(1)
// clearTimeout(timerId)


// --------------------   setInterval(function , delay) ------------------- 

// function sayHi() {
//     console.log('Hi Everyone!')
// }

// let save = setInterval(sayHi , 2000)
// console.log(save)  
// clearInterval(save)
// clearInterval(1)


// function introduce(name) {
//     console.log(`My name is ${name}`)
// }

// const timerId = setInterval(introduce , 2000 , 'Siddiq')
// console.log(timerId)
// clearInterval(1)


// function counter(count) {
//   console.log(`Counting...`);
// }

// setInterval(counter, 1000);



// -------------------- Nested Timeout (Recursive Interval Replacement) --------------------

// function repeat() {
//   console.log("Repeat!");
//   setTimeout(repeat, 1000);
// }
// repeat();

// function sayHi() {
//     console.log('Hello Everyone!')
//     setTimeout(sayHi , 1000)
// }

// sayHi()


// ----------------------------------------------------------------------------------------------

// ----------------------- Callback or Event Loop! --------------------------- 

// console.log('First Line!');
// console.log('Sec Line!');


// sayHi() 

// console.log('------------------------------------------')


// setTimeout(function() {
//     console.log('asynchronous Code')
// },1000)


// for(let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// function sayHi() {
//     console.log('Hello World!')
// }

// sayHi() 


// ----------------------------------------------------------------------------------------------

// ---------------------------------------  Arrow Function -------------- 


//  Function Declaration

// sayHi() 

// function sayHi() {
//     console.log('Hello Everyone!')
// }

// sayHi() 

// --------------------- 

// function square(num) {
//     return num * num
// }

// const save = square(5)
// console.log(save)

// ----------------------------------------------------------------

//  Function Expression

// const hello = function() {
//     console.log('Hello World!')
// }

// hello()
// console.log(hello)
// console.log(hello())


// -------------------------- 

// const square = function(num) {
//     return num * num
// }

// console.log(square(5))
// console.log(square)
// console.log(square())


//  Arrow  Function Expression  //

// const hello = () => {
//     console.log('Hello World!')
// }

// hello()
// console.log(hello)
// console.log(hello())


// const sqaure = (num) => {
//     return num * num
// }

// console.log(sqaure(5))
// console.log(sqaure())
// console.log(sqaure)


// --------------------------------------------------  

// One Parameter

// const sqaure = (num) => {
//     console.log(num * num)
//     return num * num
// }

// sqaure(5)
// console.log(sqaure())
// console.log(sqaure(4))


//  -------------- Same --------------- //

// const sqaure = num => {
//     console.log(num * num)
//     return num * num
// }

// sqaure(5)
// console.log(sqaure())
// console.log(sqaure(4))


// Two Parameter

// const add = (a , b) => {
//     return a + b
// }

// console.log(add(5 , 10))


// -------------------- No Parameter -------------- 

// const sayHi = () => {
//     return 'Hello World!'
// }

// console.log(sayHi())
// console.log(sayHi)


//  ----------------------------- Return Examples ------------------ 

// Explicit Return (visible ‘return’ likha hota hai)

//  Return With function declaration

// function add(a , b) {
//     return a + b
// }

// console.log(add(10 , 30))

//  Return With function Expression  Anonymous function

// const square = function(num) {
//     return num * num
// } 

// console.log(square(3))

// ------------------------------------  yaha sub name diya hai ye recursion or debuging me fayda de ga wrna anonymous function hi dete hai

// const subtract = function sub(a , b) {
//     return a - b
// } 

// console.log(subtract(30 , 20))


// ----------------------------------------------------------- Implicit return ------------------- 

// const square = num =>  num * num

// console.log(square(5))

// ---------------------------------------------------------------

// const add = (a , b) => a + b

// console.log(add(5 , 10))

// ---------------------------------------------------------------

// const subtract = (a , b) => a - b

// console.log(subtract(15 , 5))


// ---------------------------------------------------------------

// const divide = (a , b) => a / b

// console.log(divide(9 , 3))

// ---------------------------------------------------------------

// const reminder = (a , b) => a % b

// console.log(reminder(10 , 3))