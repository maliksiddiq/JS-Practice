// console.log('JavaScript Connected!');

//   Variables in JavaScript 

//  Variable ek container hota hai jisme hum value store karte hain (number, string, array, object, etc.).

// Keywords jo variables banate hain: var, let, const.

//  Important terms

//  Declaration = variable ka naam banana  ------- is me legal or illegal hote hain   let x;

// Assignment = variable ko value dena    x = 5;

// Reassignment = existing variable ki value change karna  x = 10

// Redeclaration = same scope mein phir se var/let/const ke sath variable declare karna.


//  ----------------------------------------------------------------------------------------

//  Variables naming legal  and illegal 

//   ✅ Legal (sahi)

// Shuru ho sakte hain: letter (a–z, A–Z), _ (underscore), $

// Baad mein include kar sakte hain: letters, digits (0–9), _, $

// Case-sensitive (e.g., name ≠ Name)

// ❌ Illegal (ghalat)

// Number se start (e.g., 1name)

// Space ya hyphen (e.g., first name, user-name)

// Special chars (except _ aur $) jaise @, !, #, %, ^, &, *

// JavaScript reserved keywords let var const


// -----------------------------------------------------------

// let a;        // declaration

// a = 5;        // assignment

// console.log(a);    // Output: 5

// a = 10;  // reassignment

// console.log(a);   // Output: 10


// Redeclaration ( difference between var / let / const );

// var allows redeclaration in same scope  error nhi deta 

// var name = "Ali";
// var name = "Usman";
// console.log(name);  // Output: "Usman"


// let redeclare in same scope → error

// let x = 1;
// let x = 2; 

// console.log(x);  // Output: // Error (SyntaxError): Identifier 'x' has already been declared


// const redeclare → error (also must initialize)

// const y = 5;
// const y = 6;

// console.log(y);   // Output:   // Error (SyntaxError): Identifier 'y' has already been declared


// before initilization  

// var a;   // Output:   undefined
// let b;  // Output:   undefined
// const;  // Output:  Error!


// var — kya hota hai (detail + code + output)

// Scope: function-scoped (block se bahar access ho sakta agar same function me). kahi bhi access

// Redeclare: allowed. 

// Reassign: allowed.


// var v = "first";
// var v = "second";   // redeclare allowed
// console.log(v); 
// Output: "second"


// v = "third";        // reassign allowed
// console.log(v);
// Output: "third"


// ----------------------------------------------------------------------------------------


// let — kya hota hai (detail + code + output)

// Scope: block-scoped ({ ... }).

// Redeclare: same scope me not allowed.

// Reassign: allowed.

//  Blocked

// {
//   let x = 2;
//   console.log(x); 
   // Output: 2
// }

// console.log(x); Error!


//  ----------------------------------------------------------------

// const — kya hota hai (detail + code + output)

// Scope: block-scoped.

// Initialization: Must initialize at declaration (const x = value;).

// Reassign: Not allowed (you cannot change binding).


// const arr = [1,2,3];
// arr.push(4);
// console.log(arr);
// Output: [1, 2, 3, 4]

// arr = []; 
// Error: TypeError: Assignment to constant variable.

// ----------------------------------------------------------------------------------


// Keywords

// var

// let

// const

// --------------------------------------------

// 🔹 var

// Function-scoped

// Redeclare ✅

// Reassign ✅

// Hoisting (value = undefined)


// ----------------------------------------- 

// 🔹 let

// Block-scoped

// Redeclare ❌

// Reassign ✅

// Hoisting (error before declare = TDZ)


//  =---------------------------------- 

// 🔹 const

// Block-scoped

// Redeclare ❌

// Reassign ❌

// Initialize zaroori hai

// Objects/Arrays mutate ho sakte hain


// ------------------------------------------------------ 

// ✅ Use

// Default → const

// Jab value change hogi → let

// var → avoid


// -----------------------------------------------------------------------------------------

//  Practice

// var a;
// console.log(a)  ===> undefined


// let b;
// console.log(b)  ===> undefined

// const c;
// console.log(c); ===>  Missing initializer in const declaration


// var name = 'Siddiq';
// var name = 'Aqib';

// console.log(name);  ===> Aqib


// let name = 'Aqib'
// let name = 'Qasim'
// console.log(name)   ===> Identifier 'name' has already been declared


// const perfect = 100;
// const perfect = 200;
// console.log(perfect); ===> Identifier 'perfect' has already been declared
 

// var  name = 'Qasim';
// name = 'Aqib';

// console.log(name);  ===> Aqib


// let name = 'Saad Ali';
// name = 'Aqib'
// console.log(name)  ===> Aqib


// const a = 100;
// a = 200;
// console.log(a)  ===.Assignment to constant variable.


//  Scoped

//  ------------------------------------------

// {
//     var name = 'Saad Ali'
    // console.log(name);    ===> Saad Ali
// }

// console.log(name)  ===> Saad Ali


//  ------------------------------------------

// {

//    let userName = 'Mazhar';
//    console.log(userName)  ===> Mazhar

// }
   
// console.log(userName); ===>  userName is not defined


// -------------------------------

// {

//     const num = 100;
    // console.log(num) ===> 100

// }

// console.log(num);  ===>  num is not defined


//  --------------------------------------------------

//  Console Before declare the variables;


//  Using Var

// console.log(userName);  ===> undefined
// var  userName = 'Malik';


//  Using let

// console.log(userName) ===> Cannot access 'userName' before initialization
// let userName = 'Malik';


//  Using const

// console.log(num) === > Cannot access 'num' before initialization
// const  num = 10;


// -------------------------------------------

//  Variables naming

// var userName1    ===> true
// var user_Name1    ===> true
// var user$Name1    ===> true
// var $userName1    ===> true


//  1userName    ===> false
//  -userName    ===> false
//  user Name    ===> false
