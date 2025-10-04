
console.log('JavaScript Connected!');

// length (property)

// Array me kitne elements hain, ye batata hai.

// let arr = [10, 20, 30];
// console.log(arr.length);  // Output: 3


// push()

// Array ke end me new element add karta hai.

// let arr = [1, 2];
// arr.push(3);
// console.log(arr);  // Output: [1, 2, 3]


// pop()

// Array ke last element ko remove karta hai.

// let arr = [1, 2, 3];
// arr.pop();
// console.log(arr);   // Output:    [1, 2]


// let arr = [1, 2, 3, 4, 5, 6];
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr)    // Output:      [1, 2, 3]


// shift()

// Array ke first element ko remove karta hai.

// let arr = [1, 2, 3];
// arr.shift();
// console.log(arr);  // Output:   [2, 3] 


// let arr = [0,1, 2, 3];
// arr.shift();
// arr.shift();
// console.log(arr);  // Output:  [2, 3]


// unshift()

// Array ke start me new element add karta hai.

// let arr = [2, 3];
// arr.unshift(1);
// console.log(arr);   // Output:    [1, 2, 3]


// let arr = [2, 3];
// arr.unshift(0,1);
// console.log(arr);  // Output:   [0, 1, 2, 3]


// concat()

// Do ya zyada arrays ko merge karta hai.

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// console.log(arr1.concat(arr2));   // Output:  [1, 2, 3, 4]


// let arr1 = [1, 2];
// let arr2 = [3, 4];

// console.log(arr1.concat(arr2)); // Output:  [1, 2, 3, 4]
// console.log(arr1)    // Output:  [1, 2]
// console.log(arr2)   // Output: [3, 4]

// console.log(typeof arr1.concat(arr2));   // Output:   object
// console.log(typeof arr1);   // Output:  object
// console.log(typeof arr2);   // Output: object


// join()

// Array ke elements ko string me convert karta hai (separator ke sath).

// let arr = ["Apple", "Banana", "Orange"];

// console.log(arr);  // Output  ['Apple', 'Banana', 'Orange']

// console.log(arr.join(','));   // Output  Apple,Banana,Orange

// console.log(typeof arr);   // Output  object

// console.log(typeof arr.join(','));  // Output  string


// slice(start, end)

// Array ka ek portion (copy) nikalta hai, original array change nahi hota.

// let arr = [10, 20, 30, 40];

// console.log(arr.slice(1, 3));  // Output  [20, 30]

// console.log(arr)  // Output   [10, 20, 30, 40]


// splice(start, deleteCount, newItems)

// let arr = [1, 2, 3, 4];
// arr.splice(1, 2, 99, 100); 
// console.log(arr); // Output  [1, 99, 100, 4]


// var arr = [1 , 2 , 6 , 7 , 8 , 4];

// console.log(arr);  // Output  [1 , 2 , 6 , 7 , 8 , 3];

// console.log(arr.splice(2, 3 , 3));   // Output: [6, 7, 8]   (deleted elements return hote hain)

// console.log(arr); // Output: [1, 2, 3, 4]  (original array update ho gaya)


// indexOf()

// Element ka pehla index return karta hai (agar na ho to -1).

// let arr = [10, 20, 30, 20];
// console.log(arr.indexOf(20));  // Output 1

// let arr = [10, 20, 30, 20];
// console.log(arr.indexOf(60));  // Output -1


// lastIndexOf()

// Element ka last index return karta hai.

// let arr = [10, 20, 30, 20];
// console.log(arr.lastIndexOf(20));  // Output 3

// let arr = [10, 20000, 30, 20, 20000];
// console.log(arr.lastIndexOf(20000));   // Output 4
// console.log(arr.indexOf(20000));   // Output 1


// includes()

// Check karta hai ke element array me hai ya nahi (true / false).

// let arr = [10, 20, 30];
// console.log(arr.includes(20));   // Output true
// console.log(arr.includes(40));  // Output false


//  ----- ----------------------------------------------------------

// array method

// join() convert array element to string :

// String method

// split(); convert string to array  