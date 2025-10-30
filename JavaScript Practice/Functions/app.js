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

// --------------------------------------------------


// function checkResult(marks) {

//     let total = 0;

//    for(let i = 0; i < marks.length; i++) {
//     total += marks[i]
//    }

//    let average = total / marks.length

//   console.log("Total Marks:", total);
//   console.log("Average Marks:", average);

//    if(average >= 50) 
//     return 'Passed!'
//   else 
//    return 'Failed!'  
// }

// let result = checkResult([10 , 20 , 30 , 30])

// console.log(`Result ${result}`)


// function checkResult(marks) {

//     let total = 0;

//     for(let i = 0; i < marks.length; i++ ) {
//         total += marks[i]
//     }

//     let average = total / marks.length

//     console.log(`${marks.length}`)
//     console.log(`Total Marks : ${total}`)
//     console.log(`Average Marks : ${average}`)

//     if(average >= 50) {
//         return 'Passed'
//     }
//     else return 'Failed!'

// }

// let result = checkResult([50 , 50 , 100 , 20])
// console.log(result)


// function CalculateTotal(marks) {

//     let total = 0;

//     for(let i = 0; i < marks.length;i++) {
//         total += marks[i]     
//     }

//     let average = total / marks.length

//     console.log('Length of sub : ' + marks.length)
//     console.log('Total Marks : ' + total)
//     console.log('Average : ' + average)

//     if(average >= 50) {
//         return 'Passed!'
//     }
//     else {
//         return 'Failed!'
//     } 
// }

// let subjectsMarks = [50 , 70 , 80 , 100];
// let checkResult = CalculateTotal(subjectsMarks)

// console.log('Result : ' + checkResult);



// --------------------------------------------------

// function sayHello(name) {
//     console.log(`Hello ${name}`)
// }

// sayHello('Malik')
// sayHello('Malik Siddiq')

// let save = sayHello('Awan');


// function add(a , b) {
//     console.log(a + b)
// } 

// add()  result NaN


// function add(a , b) {
//     console.log(a + b)
//     return a + b
// }

// let save = add(5 , 5)
// console.log(save)

// function sub(a , b) {
//     return a - b
// }

// let save = sub(15 , 3)
// console.log(save)


// function add(a , b) {
//     console.log(a + b)
//     return a + b
// }

// add(5 , 5)

// let save = add(10 , 10);
// console.log(save)


// function add(a , b) {
//     return a + b
// }

// let save = add(12 , 12)
// console.log(save)

// function total(price , quantity) {
//     return price * quantity
// }

// let save = total(50 , 2)
// console.log(save)

// function total(price = 50 , quantity = 2) {
//     return price * quantity
// }

// let save = total()
// console.log(save)


// function total(price , quantity) {
    
//     if(price === undefined) {
//         price = 150
//     }else if(quantity === undefined) {
//         quantity = 2
//     } 

//     return price * quantity
// }

// let save = total(undefined , 5)
// console.log(save)


