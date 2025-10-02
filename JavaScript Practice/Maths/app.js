console.log('JavaScript Connected!');

// var a = 12;

// console.log(a);
// console.log(a + 12);
// console.log(a - 2);
// console.log(a / 2);
// console.log(a % 2);
// console.log(a * 2);
// console.log(a ** 2);

// var num = 2;
// var result = num % 2 === 0;
// console.log(result);

// var total = 500;
// var got = 300;

// var percentage  = ( got / total ) * 100;
// console.log(percentage);

// var total = 1000;
// var got = 500;

// var percentage = (got / total) * 100;
// console.log(percentage);

// var total = 1500;
// var got = 700;

// var percentage = (got / total) * 100;
// console.log(percentage);

// var total = 1500;
// var got = 750;

// var percentage = (got / total) * 100;
// console.log(percentage);


// var total = 3000;
// var got = 1000;

// var percentage = (got / total) * 100;
// console.log(percentage);


// var total = 3000;
// var got = 1500;

// var percentage = (got / total)*100;
// console.log(percentage);

// ----------------------------------------------------------------------------- 

// Property = value  ===>  Propert jo kisi value ko store kre  ===> (Math.PI) // 3.14159...   

// Function = code (independent) 

// Method = function inside object  ===>  Math.sqrt (16) //  ===> 4

//  ------------------------- Math Round ------------------------  

// Math.round() 

// Nearest integer par round karta hai.

// 0.5 aur usse zyada ho to upar round

// 0.5 se kam ho to neeche round

// console.log(Math.round(4.3));
// console.log(Math.round(4.4));
// console.log(Math.round(4.5));
// console.log(Math.round(4.8));
// console.log(Math.round(4.08));


// Math.floor() 

// Hamesha neeche (down) round karega.

// console.log(Math.floor(4.9));
// console.log(Math.floor(4.12));
// console.log(Math.floor(-4.5));
// console.log(Math.floor(-7.5));


// Math.ceil() 

// Hamesha upar (up) round karega.

// console.log(Math.ceil(4));
// console.log(Math.ceil(4.1));
// console.log(Math.ceil(-4.1));
// console.log(Math.ceil(-4.12));

// Math.min() aur Math.max()

// Min: sabse chhoti value nikalta hai
// Max: sabse badi value nikalta hai.

// console.log(Math.min(20 , 40 , 10 , 5));
// console.log(Math.max(20 , 40 , 10 , 5));

// Math.random()

// 0 se 1 ke beech ek random number deta hai. (kabhi 1 nahi aayega)

// console.log(Math.random());
// console.log(Math.floor(Math.random()));

// Random integer banana (apna number):

// let num = Math.floor(Math.random() * 10) + 1;
// console.log(num)

// let num = Math.floor(Math.random() * 10);
// console.log(num)

// let num = Math.floor(Math.random() * 11);
// console.log(num)


// let num = Math.floor(Math.random() * 11)  + 1;
// console.log(num)

// let num = Math.floor(Math.random() * 11)  + 5;
// console.log(num);

// Math.sqrt()
// Square root deta hai (√).

// console.log(Math.sqrt(16));
// console.log(Math.sqrt(36));
// console.log(Math.sqrt(100));
// console.log(Math.sqrt(9));

// Math.SQRT2 (property)

// √2 ki constant value deta hai (~1.414...).

// console.log(Math.SQRT2);
// console.log(Math.SQRT2);

// ----------------------------------------------------------------------------------------------------------- 

// Math.random();

// var num = Math.random();
// console.log(num)


// var num = Math.floor(Math.random());
// console.log(num)


// var num = Math.floor(Math.random() * 10);
// console.log(num)


// var num = Math.floor(Math.random() * 10) + 5;
// console.log(num)

// ------------------------------------------------------------------------------------------------- 


//  Random num Genreate !

// var num = Math.random();
// console.log(num);


// var num = Math.floor(Math.random());
// console.log(num);



//  Formula : General Formula (Apna number generate karne ka)

// Math.floor(Math.random() * (max - min + 1)) + min


// var num = Math.floor(Math.random() *  ( 20 - 5 + 1 ) );
// console.log(num);


// var num = Math.floor(Math.random()  * (16));
// console.log(num);

// var num = Math.floor(Math.random() * 11);
// console.log(num);


// var num = Math.floor(Math.random() * (10 -  5 + 1)  + 5);
// console.log(num);


// var num = Math.floor(Math.random() * (20  - 10 + 1 ) + 10);
// console.log(num);


// var num = Math.floor(Math.random() * (30 - 15 + 1) + 15);
// console.log(num);


// var userInput = parseInt(prompt("Type a num between 5 to 15 "));

// var num = Math.floor(Math.random() * (15 - 5 + 1) + 5 );


// if(userInput === num) {
//     console.log("Congratulations You Guess the num!");
// }else {
//     console.log('Please Try a again!');
// }


// var userInput = parseInt(prompt("Type a number between 5 to 10"));
// console.log(`Your num is this ${userInput}`);
// var num = Math.floor(Math.random() * (10 - 5 + 1) + 5);
// console.log(`Actual num is this ${num}`);

// if (userInput === num) {
//     console.log("Congratulations You Guess The Number!");
// }
// else{
//     console.log("Please try again!");
// }


// var userInput = parseInt(prompt('Type a num between 15 to 20'));
// console.log(`Your num is  ${userInput}`);

// var num = Math.floor(Math.random()* (20 - 15 + 1) + 15);
// console.log(`Actual num is ${num}`);

// if(userInput === num) {
//     console.log('Congratulation you Guess the Number!');
// }
// else {
//     console.log('Please try again!');
// }


// Round → nearest

// Floor → hamesha neeche

// Ceil → hamesha upar

// Min/Max → sabse chhoti / sabse badi

// Random → 0–1 random number

// Formula se apna range ban jaata hai

// Sqrt → square root

// SQRT2 → constant √2