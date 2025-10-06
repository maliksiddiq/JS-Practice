// console.log('JavaScript Connected!');

//   Objects !

// Object ek aisi cheez hai jisme hum data ko "key : value" pair ki form me store karte hain.

//  how to create object in js  

// 🔹 1. Object Literal (sabse simple aur zyada use hone wala)

// let person = {
//   name: "Ali",
//   age: 22,
//   city: "Karachi"
// };


// ✅ Zyada use hota hai kyunki:

// Short aur readable hai.

// Simple data rakhnay ke liye best.

// Quick testing aur real-world objects ke liye perfect.


// -----------------------------------------------------------------------------------------------

// 🔹 2. new Object() Constructor


// let car = new Object();
// car.brand = 'Toyota';
// car.model = 'Corrola';


// 👉 Ye tareeqa kam use hota hai kyunki literal zyada simple hai.
// ✅ Lekin kabhi kabhi useful hota hai jab hume object dynamically banani ho ya prototype chain ki zarurat ho.


// -----------------------------------------------------------------------------------------------

// 3 Using class (Modern JS way)

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let p1 = new Person("Ali", 22);
// let p2 = new Person("Ahmed", 25);


//   ----------------------------------------------------------


// 🔹 Class

// Class ek blueprint (naqsha) hai jisse hum similar objects bana sakte hain.

// 👉 Example: Person class se multiple persons bana sakte ho.


//   ----------------------------------------------------------


// Constructor kya hota hai?

// Constructor ek special function hai jo class ke andar hota hai.

// Jab aap new Person(...) likhte ho, to constructor automatic call hota hai.

// Constructor ka kaam hota hai naya object initialize karna — yani properties set karna (jaise name, age).

// Constructor ek special function hota hai class ke andar.
// 👉 Jab bhi new keyword ke saath object banate ho, constructor automatic call hota hai aur object ki properties set karta hai.


//   ----------------------------------------------------------


// 🔹 this

// this ka matlab hai jo object iss waqt ban raha hai ya jis pe kaam ho raha hai.
// 👉 this.name = name; ka matlab: object ki property name me constructor ka parameter name store kar do.



//   ----------------------------------------------------------


// 🔹 new

// new ek keyword hai jo naya object banata hai class se.
// 👉 Agar new na lagao to object create nahi hoga.


//   ----------------------------------------------------------


// 🔹 Simple real life socho

// {} = ek haath se likha CV (sirf ek insaan ka data).

// new Person("Ahmed", 25) = form ka template → jisme har baar nayi values bhar ke naya CV generate hota hai.


//   ----------------------------------------------------------


// class Person {
//   constructor(name, age) {
//     this.name = name; // object ki property set ho rahi
//     this.age = age;
//   }
// }

// let p1 = new Person("Ali", 22);   // naya object bana
// let p2 = new Person("Ahmed", 25); // ek aur naya object


//   ----------------------------------------------------------

// Object literal notation se

// Har student ko manually likhna pad raha hai


// let student1 = {
//     name : 'Siddiq',
//     age : 20,
//     grade : 'A'
// }

// let student2 = {
//     name : 'Aqib',
//     age : 22,
//     grade : 'B'
// }

// let student3 = {
//     name : 'Abdullah',
//     age : 18,
//     grade : 'C'
// }

// console.log(student1 , student2 , student3);


// 👉 Problem:

// Har student ke liye repeat code likhna pad raha hai.

// Agar 100 students hain to 100 objects manually likhne padenge.

// Maintain karna mushkil hai.


//   ----------------------------------------------------------

// class student {
//     constructor(name, age,  grade) {
//         this.name  = name;
//         this.age = age;
//         this.grade = grade;
//     }
// }

// Ab bas class se objects banao 

// let student1 = new student ('Siddiq', 20, 'A');
// let student2 = new student ('Aqib', 22, 'B');
// let student3 = new student ('Abdullah', 18, 'C');

// console.log(student);
// console.log(student1);
// console.log(student2);
// console.log(student3);


// 👉 Fayda:

// Sirf ek blueprint (class) likhna pada.

// Chahe 3 students ho ya 300, har ek ke liye bas new Student(...) likhna hai.

// Code clean, reusable aur easy to maintain hai


//   ----------------------------------------------------------


// let car1 = {
//    brand: "Toyota",
//    model: "Corolla",
//    year: 2020
// };


// let car2 = {
//   brand: "Honda",
//   model: "Civic",
//   year: 2021
// };


// let car3 = {
//   brand: "Suzuki",
//   model: "Alto",
//   year: 2019
// };


// console.log(car1, car2, car3);


//   ----------------------------------------------------------

// class car {
//     constructor(brand, model , year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
// }

// let car1 = new car ('Toyota', 'Corolla', 2020);
// let car2 = new car("Honda", "Civic", 2021);
// let car3 = new car("Suzuki", "Alto", 2019);

// console.log(car1 , car2 , car3);


// class Car {
//     constructor(company, modelName, releaseYear) {
//         this.brand = company;
//         this.model = modelName;
//         this.releaseYear = releaseYear;
//     }
// }

// let c1 = new Car ("Toyota", "Corolla", 2020);
// let c2 = new Car ("Honda", "Civic", 2022);

// console.log(c1);
// console.log(c2);
