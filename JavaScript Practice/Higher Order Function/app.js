console.log('JS Connected!');

// Dusre function ko argument ke tor par accept karta ho,
// Kisi function ko return karta ho
// wo Higher Order Function (HOF) kehlata hai.

// Anonymous Function ka matlab:
// 👉 “Aisa function jiska koi naam (identifier) nahi hota.”

// Callback Function wo function hota hai jo kisi dusre function ko argument ke tor par diya jata hai,
// aur wo function baad me call hota hai (callback hota hai).

// function greet() {
//     console.log('My name is Siddiq')
// }

// greet()

// function introduceMe(name = 'User') {
//      console.log(`My name is ${name}`)
//      return name
// }

// introduceMe('Siddiq')
// introduceMe('Hamza')
// introduceMe('Aqib')

// let result = introduceMe('Result')
// console.log(result)


// function sum(x , y) {
//     console.log(x + y)
//     return x + y
// }

// sum(2 , 4) 

// let result = sum(2 , 4)
// console.log(result) 


// function square(num) {
//     return num * num
// } 

// let result = square(4)
// console.log(result)


// function greetMorning() {
//     console.log(`Good Morning!`)
// }

// function greetUser(callBack) {
//     callBack()
// }

// greetUser(greetMorning)


// function outer() {
//     return function inner() {
//        console.log('I am a inner Function!') 
//     }
// }

// let result = outer()
// console.log(result)
// result()


// function sayHi(callBack) {
//     console.log('Hi i am Siddiq')
//     callBack()
// }

// sayHi(function(){
//     console.log('Done')
// }
// )

// ------------ Function taking another function (argument) ------------------------- 

// function greetUser(callBack) {
//     console.log('Start Greeting ....')
//     callBack()
//     console.log('End Greeting ....')
// }

// function sayHello() {
//     console.log('Hello!')
// }

// greetUser(sayHello)


// ----------------- Example 2: Function returning another function ------------------ 

// function outer() {
//     return function inner() {
//        console.log('I am a inner Function!') 
//     }
// }

// let result =  outer()
// result()


// --------------------------- Anonymous Function ------------------------------ 

// const abc = function () {
//     console.log('Anoynmous Function!')
// }
// abc()



// -------------------------------- Callback Function -----------------------

// function process(callback) {
//   console.log("Processing...");
//   callback()  // callback function run hua
// }

// function done() {
//   console.log("Done!");
// }

// process(done);


// --------------------- Named Callback ------------------------ 

// function goodMorning() {
//     console.log('Good Morning!')
// }

// function greetUser(callback) {
//     callback
// } 

// greetUser(goodMorning())


// -------------------  Anonymous Callback -------------------------- 

// function goodMorning() {
//     console.log('Good Morning!')
// }

// function greetUser(callback) {
//     callback()
// } 

// greetUser(function () {
//     console.log('Anonymous Function!')
// }
// )


// ------------------------------------

// function goodMorning() {
//     console.log('Good Morning!')
//     return function () {
//         console.log('Return Function!')
//     }
// }

// function pass(callback) {
//    callback()
// }

// pass(goodMorning())


// -------------------------

// function abc () {
//     console.log('Hi ............')
//     return function () {
//         console.log('Return Function!')
//     }
// }

// abc()

// let result = abc
// console.log(result)
// result()

// -------------------------  Double bracket -----------

// function goodMorning() {
//     console.log('Good Morning!')
//     return function() {
//         console.log('Return Function!')
//     }
// }

// goodMorning()()

// function goodMorning(name) {
//     console.log('Good Morning!')
//     console.log(name)
//     return function sayhi(age) {
//         console.log('Good Evening!')
//         console.log(age)
        
//     }
// }

// goodMorning('Siddiq')(20)


// -------------------------------- Examples --------------------------  // 

// function greet(name) {
//    console.log(`Hello I am ${name}`)     
// }

// function processUserInput(callback) {
//     const userName = 'Siddiq'
//     callback(userName)
// }

// processUserInput(greet)

// -------------------- //

// function greet(name) {
//     console.log(`Hello my name is ${name}`)
// }

// function processUserInput(callback) {
//     const userName = 'Siddiq'
//     callback(userName)
// }

// processUserInput(greet)


// --------------------    Closure  -----------------   //

// function outer() {
//   let name = "Malik";

//   function inner() {
//     console.log("Hello " + name);
//   }

//   return inner;
// }

// const greet = outer(); 
// greet();

// --------------------------  //

// function makeMultiplier(multiply) {
//     return function (num) {
//         return num * multiply
//     }
// }

// const first = makeMultiplier(2)
// const save = first(5)
// console.log(save)


// --------------------------  //

// function makeMultiplier(multiply) {
//     return function (num) {
//        console.log('inner function!') 
//        return num * multiply
//     }
// }

// const first = makeMultiplier(2)
// first() 

// const saveInnerFunction = first(8)
// console.log(saveInnerFunction)


// --------------------------  //

// function makeMultiplier(multiply) {
//     return function (num) {
//         return  num * multiply
//     }
// }

// const firstresult = makeMultiplier(3)
// console.log(firstresult)

// const save = firstresult(3)
// console.log(save)


// --------------------------  //

// function makeMultiplier(multiply) {
//     return function (num) {
//        console.log('Return Function!') 
//        return num * multiply
//     }
// }

// const  double = makeMultiplier(2)

// const save = double(4)
// console.log(save)


// --------------------------  //

// function makeMultiplier(multiply) {
//     return function (num) {
//         return num * multiply
//     }
// }

// const double = makeMultiplier(2)
// const triple = makeMultiplier(3)

// console.log(double(5))
// console.log(triple(5))


// --------------------------  //
// debugger

// function createCounter() {
//     let count = 0;
    
//     return  function () {
//     count++
//     console.log('Current Count' + ' ' + count)
//     } 
// }

// const counter1 = createCounter()
// counter1()
// counter1()


// --------------------------  //

function createCounter() {
   let count = 0;
   
   return {
       increment() {
          count++  
       }, 
       decrement() {
            count--
       } 
   }
}

