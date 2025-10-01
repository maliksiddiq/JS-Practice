// console.log('JavaScript Connected!');

//  Simple Array 
// let fruits = ['Apple' , 'Banana' , 'Orange' , 'Mango'];
// console.log(fruits)

// console.log(fruits[1]);

// 2D Array  Multidimensional Array !

// let number = [
//     [1 , 2 , 3],
//     [4 , 5 , 6],
//     [7 , 8 , 9]
// ]

// console.log(number[0][1])
// console.log(number[1][1])
// console.log(number[2][2])

//  Array methoods !

// push() → End me element add karta hai.

// pop() → Last element remove karta hai.

// unshift() → Start me element add karta hai.

// shift() → First element remove karta hai.

// join() Array ko string me convert karta hai.

// concat() Do arrays ko combine karta hai.

// slice() Array ka part copy karta hai (original ko change nahi karta).

// splice() Elements add/remove karta hai (original ko change karta hai).


//  Push ()

// let cityNames = ['Karachi' , 'Islambad' , 'Lahore'];
// cityNames.push('Quetta') 
// console.log(cityNames)

// pop()

// let cityNames = ['Karachi' , 'Islambad' , 'Lahore'];
// cityNames.pop();
// console.log(cityNames)

// unshift() 

// let cityNames = ['Karachi' , 'Islambad' , 'Lahore'];
// cityNames.unshift("Faisalabad")
// console.log(cityNames)

// shift()

// let cityNames = ['Karachi' , 'Islambad' , 'Lahore'];
// cityNames.shift()
// console.log(cityNames.length)

// join()

// let fruits = ['Apple' , 'Banana' , 'Orange'];
// console.log(typeof fruits)
// let result = fruits.join(',');
// console.log(typeof result)
// console.log(typeof fruits)
// console.log(fruits.join(','))

// concat()

// let studentName = ['Ali' , 'Usman' , 'Akram'];
// let studentMarks = [85 , 95 , 100];
// let result = studentName.concat(studentMarks)
// console.log(result)
// console.log(studentName)
// console.log(studentMarks)

// slice()

// let fruits = ['Apple' , 'Banana' , 'Orange' , 'Peach'];
// console.log(fruits)

// let copy = fruits.slice(0,4);
// console.log(copy)

//  splice()

// let fruits = ['Apple' , 'Banana' , 'Orange' , 'Peach'];
// console.log(fruits);

// fruits.splice(1,1,'Watermelon')
// console.log(fruits);

// fruits.splice(3,1,'Strawberry')
// console.log(fruits);

// fruits.splice(4,0,'Strawberry')
// console.log(fruits);

// let fruits = ['Apple' , 'Banana' , 'Peach' ];
// fruits.push('Orange');
// console.log(fruits);
// fruits.pop();
// console.log(fruits)

// fruits.unshift('Orange')
// console.log(fruits)

// fruits.shift();
// console.log(fruits)

// let result = fruits.join(',');
// console.log(result)
// console.log(typeof result);

// let studentName = ['Saad' , 'Ali' , 'Imran'];
// let studentMarks = [85 , 90 , 100];
// let result = studentName.concat(studentMarks);

// console.log(result)

// console.log(studentName);
// console.log(studentMarks);

// console.log(studentName.concat(studentMarks))

// let fruits = ['apple' , 'orange' , 'peach'];
// console.log(typeof fruits);
// console.log(typeof fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let First = [1 , 2 , 3];
// let sec = [4 , 5 , 6];
// let third = [7 , 8 , 9];

// console.log(First);
// console.log(sec);
// console.log(third);

// let multiArray = [
//     [1 , 2 , 3],
//     [4 , 5 , 6],
//     [7 , 8 ,9]
// ]

// console.log(multiArray.length);
// console.log(multiArray[0][1]);
// console.log(multiArray[1][1]);
// console.log(multiArray[2][1]);


// let threeDArray = [
//     [
//         [1 , 2 , 3],
//         [4 , 5 , 6],
//         [7 , 8 , 9],
//     ],
//     [
//         [10 , 11 , 12],
//     ],
// ];

// console.log(threeDArray.length);
// console.log(threeDArray[0][2][2]); 
// console.log(threeDArray[0][0][1]);
// console.log(threeDArray[0][1][1]);
// console.log(threeDArray[0][2][1]);
// console.log(threeDArray[1][0][1]);

// let studentName = ['Ali' , 'Saad' , 'Usman'];
// let studentMarks = [85 , 75 , 95];

// console.log(studentName);
// console.log(studentMarks);

// let join = studentName.concat(studentMarks);
// console.log(join);

// let multiArray = [
//     ['Ali' , 'Usman' , 'Amir'],
//     [85 , 75 , 65],
// ]

// console.log(multiArray);

// console.log(multiArray[0][0],multiArray[1][0]);
// console.log(multiArray[0][1],multiArray[1][1]);
// console.log(multiArray[0][2],multiArray[1][2]);

// let join = multiArray[0].concat(multiArray[1]);
// console.log(join);


// -------------------------------------------------------------------------------------------------------------------------------------


// let fruits = ['Apple' ,  'Banana' , 'Orange'];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[1]);

// let studentName = ['Ali' , 'Usman' , 'Imran'];
// let studentMarks = [50 , 60 , 70];
// console.log(studentName);
// console.log(studentMarks);


// let classResult = [
//     ["Ali" , 50],
//     ['Usman' , 60],
//     ['Imran' , 70 ]
// ]

// console.log(classResult);
// console.log(classResult[1][1]);

// let threeDArray = [

//     [
//         ['Ali' , 8],
//         ['Usman' , 9],
//         ['Rizwan' , 10]

//     ],

//     [
//         ['Amir' , 11],
//         ['Umer' , 12],
//         ['Ramzan' , 13]

//     ]

// ]

// console.log(threeDArray);
// console.log(threeDArray[0][1]);
// console.log(threeDArray[1][1]);

//   Methoods 

// let fruits = ['Apple' , 'Mango' , 'Banana'];

// console.log(fruits);
// console.log(fruits.push('Peach'));
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.shift());

// console.log(fruits);
// console.log(fruits.unshift('Peach'));
// console.log(fruits);

// console.log(fruits.indexOf('Banana'));
// console.log(fruits.indexOf('Apple'));
// console.log(fruits.indexOf('apple'));

// console.log(fruits.includes('Mango'));
// console.log(fruits.includes('cat'));

// let num = [10 , 9 , 8 , 7 ,  6  ,  5  , 4 , 3 , 2 , 1];
// console.log(num);
// console.log(num.reverse());

// let names = ['Dua' , 'Umer' , 'Ali'  , 'Amir' , 'Rizwan' , 'Ramzan' , 'Ayesha'];
// console.log(names);
// console.log(names.sort());

// let number = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14 , 100 , 200 , 300];
// console.log(number);
// console.log(number.sort());

// let fruits = ['Apple'  , 'Mango' , 'Banana' , 'Peach'];
// console.log(fruits);
// console.log(fruits.slice(1));
// console.log(fruits.slice(1 , 3));
// console.log(fruits);

// let fruits = ['Apple'  , 'Mango' , 'Banana' , 'Peach'];
// console.log(fruits);
// console.log(fruits.splice(1,1,'Watermelon', 'Strawberry'));
// console.log(fruits);

