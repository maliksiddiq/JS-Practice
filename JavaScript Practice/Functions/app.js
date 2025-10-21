// console.log('JS Connected!')

// Functions

// JavaScript me function ek block of code (code ka group) hota hai jo bar-bar use kiya ja sakta hai.
// Yaani ek baar likho, aur jab chaho use (call) kar lo.


// Parameter: Function ke andar likha gaya variable name hota hai jisme data aata hai.

// Argument: Function ko call karte waqt jo actual value bhejte hain, usse argument kehte hain.

// Function ke andar hum data receive karne ke liye parameters banate hain.
// Jab hum function ko call karte hain, tab hum arguments dete hain.

// return ka matlab hota hai:

// “Ye value function ke bahar wapas bhej do.”

// Function ke andar kuch bhi calculate ya generate hota hai,
// aur hum chahein us result ko bahar use karna, to hum return use karte hain.

//  ---------------------------------------------------------------------------------------------------------------


// function introduceMe(userName) {
//     console.log(`My name is ${userName}`)
//     console.log('I am a Web Developer')
//     console.log('i am 19 years old')
// } 

// introduceMe('Aqib')
// introduceMe('Qasim')
// introduceMe('Mazhar')


// function introduceMe(userName , profession , age) {
//     console.log(`My name is ${userName}`)
//     console.log(`I am  a ${profession}`)
//     console.log(`I am ${age} Years Old `)
//     console.log('***************************')
// } 

// introduceMe('Siddiq' , 'Web Developer' , 19)
// introduceMe('Aqib' , 'Ui UX Designer' , 20)
// introduceMe('Qasim' , 'Graphic Designer' , 22)


// function introduceSelf(userName = 'Procodr') {
//     console.log(`My Name is ${userName}`)
// }

// introduceSelf()


// function introduceSelf(userName ) {
//     console.log(`My Name is ${userName || 'Procodr'}`)
// }

// introduceSelf('Malik')


// function introduceMe(userName , profession , age) {
//     console.log('my name is ' + userName)
//     console.log('i am  a ' + profession)
//     console.log('i am ' + age  + ' years old')
//     console.log('**********************')
// }

// introduceMe('Aqib' , 'Frontend Developer' , 19 )
// introduceMe('Siddiq' , 'Backend devloper' , 20)
// introduceMe('Mazhar' , 'Full Stack Developer' , 21)


// function CalculateTotal(price = 30, quantity = 2) {
//     let total = price * quantity;
//     console.log('Total price = ' + total + '  PKR')
// }

// CalculateTotal(20 , 10);
// CalculateTotal(10 , 10);
// CalculateTotal(1000 , 10);
// CalculateTotal(40)
// CalculateTotal()


// function checkResult(name , marks = 55) {
//     if(marks >= 50) {
//         console.log(name + ' Passed the Exam!')
//     }else {
//         console.log(name + ' Failed the Exam!')
//     }
// }

// checkResult('Siddiq' , 80)
// checkResult('Ali' , 30)
// checkResult('Ali')


// function greet(name = 'Guest') {
//     console.log(`Welcome ${name}!`)
// }

// greet('Malik')
// greet('Awan')


// function checkResult(name , marks) {
//     if(marks >= 80) {
//         console.log(`${name || 'Siddiq'} Grade A`)
//     }
//     else if(marks >= 70) {
//         console.log(`${name  || 'Siddiq'} Grade B`)
//     }
//     else if(marks >=50) {
//         console.log(`${name  || 'Siddiq'}  Grade C`)
//     }
//     else {
//         console.log(`${name  || 'Siddiq'} is failed!`)
//     }
// }

// checkResult('' , 50)
// checkResult('Ali' , 80)
// checkResult('Rehan' , 70)


// function greetUser() {
//     console.log('Welcome to My Website!')
// }

// greetUser()


// function introduceMe(userName) {
//     console.log('My name is ' + userName)
//     console.log('I am a Web Developer')
//     console.log('I am 19 years old')
//     console.log('********************')
//     return 5 + 7
// }

// introduceMe('Siddiq')
// introduceMe('Aqib')



// function checkNumber(num) {
//     if(num > 0) return  'Positive';
//     else if(num < 0) return 'Negative';
//     else  return 'Zero';
// }

// let result = checkNumber(3)
// console.log(result)

// console.log()

// console.log(checkNumber(-3))

// console.log(checkNumber(0))


// function checkNumber(num) {
//     if(num > 0) {
//         console.log('Positive')
//         return 'Positive'
//     }
//     else if(num < 0) {
//         console.log('Negative')
//     }
//     else {
//         console.log('Zero')
//     }
// }

// checkNumber(4)
// checkNumber(0)
// checkNumber(-4)

// let result = checkNumber(4)
// console.log(result)



