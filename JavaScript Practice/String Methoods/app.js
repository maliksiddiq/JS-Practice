// console.log('JavaScript Connected!');

//  String Methoods Practice !

// String Methoods Without Urgument

// .toUpperCase()

// var studentName = 'malik Siddiq awan!';
// var toUpperCase = studentName.toUpperCase();

// console.log(studentName);
// console.log(toUpperCase);


// .toLowerCase()

// var studentName = ' MALIK SIDDIQ AWAN!';
// var toLowerCase = studentName.toLowerCase();
// console.log(studentName);
// console.log(toLowerCase);
// console.log(studentName);


// .trim()

// var studentName = "         Malik Siddiq Awan!                                 ";
// var removeSpaces = studentName.trim();
// console.log(studentName);
// console.log(removeSpaces);
// console.log(studentName);


// var studentName = "         Malik Siddiq Awan!                                 ";
// var removeSpacesStart = studentName.trimStart();

// console.log(studentName);
// console.log(removeSpacesStart);

// var studentName = "         Malik Siddiq Awan!                                 ";
// var removeSpacesEnd = studentName.trimEnd();

// console.log(studentName);
// console.log(removeSpacesEnd)


// String Methoods With Urgument

// indexOf()

// var studentName = 'Malik Siddiq Awan!'
// console.log(studentName);
// console.log(studentName.indexOf('k'));
// console.log(studentName.indexOf('n'));


// var  studentName = 'Malik Siddiq Awan!';
// console.log(studentName);
// console.log(studentName[4]);
// console.log(studentName[16]);

// .includes()

// var  studentName = 'Malik Siddiq Awan!';
// var chekLetter = studentName.includes('M');

// console.log(studentName);
// console.log(chekLetter);


//  replace()

// var  studentName = 'Hello I am Malik Siddiq Awan!';
// var replace = studentName.replace('Hello' , 'Hi');
// console.log(studentName);
// console.log(replace);

// var  studentName = 'Hello I am Malik Siddiq Awan!';
// var replace = studentName.replace(' Siddiq' , ' Aqib ');
// console.log(studentName);
// console.log(replace);

// var word = 'Congrats';
// var changeWord = word.replace('Congrats' , 'Congrats!');
// console.log(word); 
// console.log(changeWord);

// var sameWord = 'Malik Siddiq awan';
// var changeWords = sameWord.replace('a' , 'u');
// console.log(sameWord);
// console.log(changeWords)


// var sameWord = 'Malik Siddiq awan';
// var changeWords = sameWord.replaceAll('a' , 'u');
// console.log(sameWord);
// console.log(changeWords);

//  CharAt () ye bhi index btata hai string ka ;

// var studentName = 'Malik Siddiq';
// var CharAt = studentName.charAt(4);
// console.log(studentName);
// console.log(CharAt);

// var studentName = 'Malik Siddiq';
// var charAt = studentName.charAt(7);
// console.log(studentName);
// console.log(charAt);

// .charCodeAt() 

// var studentName = 'Malik Siddiq Awan';
// var charCodeAt = studentName.charCodeAt(13);  // returns 65
// console.log(studentName);
// console.log(charCodeAt);


// var studentName = 'Malik Siddiq Awan';
// var charCodeAt = studentName.charCodeAt(6);  // returns 83
// console.log(studentName);
// console.log(charCodeAt);

// var studentName = 'Malik Siddiq Awan';
// var charCodeAt = studentName.charCodeAt(13);  // returns 65
// console.log(studentName);
// console.log(charCodeAt);

// var studentName = 'Malik Siddiq Awan';
// var charCodeAt = studentName.charCodeAt(19);  // returns NaN
// console.log(studentName);
// console.log(charCodeAt);

// concat() merge two String !

// var userName1 = 'Malik';
// var userName2 = ' Siddiq';

// console.log(userName1);
// console.log(userName2);

// console.log(`${userName1} ${userName2}`);
// console.log(userName1 + ' ' + userName2);
// console.log(userName1.concat( userName2));


// var userName1 = 'Malik';
// var userName2 = 'Siddiq'

// var concat = userName1+ " ".concat(userName2);

// console.log(userName1);
// console.log(userName2);
// console.log(concat);

// slice()

// var fullName = 'Malik Siddiq Awan';
// var copy = fullName.slice(6,17);
// console.log(fullName);
// console.log(copy);

// var fullName = 'Malik Siddiq Awan';
// var copy = fullName.slice(6,19);
// console.log(fullName);
// console.log(copy);

// trimLeft()

//  var fullName = '               Malik Siddiq Awan';
//  console.log(fullName.trimLeft());
//  console.log(fullName);

// paddStart();

// var accountNum = 4567;
// console.log("************" +accountNum);
// console.log("************************" +accountNum);

// var accountNum = '4567';
// var start = accountNum.padStart(16 , '*');
// console.log(accountNum);
// console.log(start);

// var accountNum = '4567891011';
// var start = accountNum.padStart(16 , '*');
// console.log(accountNum);
// console.log(start);

// paddStart();

// var accountNum = '4567';
// var end = accountNum.padEnd(16 , '*');
// console.log(accountNum);
// console.log(end);

// var accountNum = '4567';
// var end = accountNum.padEnd(16 , '*');
// console.log(accountNum);
// console.log(end);

//  repeat();

// var fullName = 'Malik Siddiq Awan ';
// var repeat = fullName.repeat(2);
// console.log(fullName);
// console.log(repeat);

 
// var str = "Malik Siddiq Awan";

// console.log(str.length);   //  Output    17

// console.log(str.toUpperCase());   //  Output    "MALIK SIDDIQ AWAN"

// console.log(str.toLowerCase());     //  Output   "malik siddiq awan"


// var str = "       Malik Siddiq Awan      ";

// console.log(str.trim());    //  Output   "Malik Siddiq Awan"

// console.log(str.trimStart())     //  Output   "Malik Siddiq Awan          ";

// console.log(str.trimEnd())     //  Output   "         Malik Siddiq Awan"; 


// var str = "Malik Siddiq Awan";

// console.log(str.includes('M'));    //  Output      true
// console.log(str.includes('m'));       //  Output  false

// console.log(str.indexOf('k'));    //  Output  4

// console.log(str.slice(6))       //  Output   Siddiq Awan

// console.log(str.slice(6,12))       //  Output   Siddiq

// console.log(str.replace('Siddiq' , 'Aqib'));   //  Output    Malik Aqib Awan

// console.log(str.replace('a' , 'u'));         //  Output    Mulik Siddiq Awan

// console.log(str.replaceAll('a' , 'u'));     //  Output   Mulik Siddiq Awun

// console.log(str.repeat(3));

// var fruits = 'Apple,Orange,Banana';

// console.log(fruits)  //  Output    Apple,Orange,Banana

// console.log(typeof fruits);  //  Output  string

// console.log(fruits.split(','));    //  Output   ['Apple', 'Orange', 'Banana']

// console.log(typeof fruits.split(','));   //  Output   object


// var firstName = 'Malik';
// var secName = 'Siddiq Awan';

// console.log(firstName.concat(' ' , secName));  //  Output  Malik Siddiq Awan



//  ------------------------------------------------------------------------------------------------ 


// length (property)

// String ka total length (characters ki ginti) batata hai.

// var str = "Hello World";
// console.log(str.length);  Output: 11
// console.log(typeof str)


// toUpperCase()

// String ke sare letters ko capital bana deta hai.

// var str = "hello";
// console.log(str.toUpperCase()); // Output: "HELLO"


// toLowerCase()

// String ke sare letters ko chhota bana deta hai.

// var str = "HELLO";
// console.log(str.toLowerCase()); // Output: "hello"


// trim()

// String ke start aur end ke spaces hata deta hai.

// var str = "   Hello   ";
// console.log(str.trim()); // Output: "Hello"


// trimStart()
// String ke start Se space remove krta hai

// var str = "   Hello   ";
// console.log(str.trimStart()); // Output: "Hello     "

// trimEnd()

// var str = "   Hello   ";
// console.log(str.trimEnd()); // Output: "    Hello"


// includes()

// Check karta hai ke string me koi word ya letter present hai ya nahi. (Return Boolean)

// var str = "Hello World";
// console.log(str.includes("World")); // Output: true

// var str = "Hello World";
// console.log(str.includes("world")); // Output: false


// indexOf()

// Word ya character ka pehla index (position number) return karta hai.

// var str = "Hello World";
// console.log(str.indexOf("o"));  // Output: 4


// slice(start, end)

// String ka ek portion (part) nikalta hai. /  ya copy bnata hai 

// var str = "JavaScript";
// console.log(str.slice(0,4)); // Output: "Java"


// replace(old, new)

// String ke andar ek part ko change karta hai.

// var str = "I love Java";
// console.log(str.replace("Java", "JavaScript"));  // Output: "I love JavaScript"


// split(separator)

// String ko tod ke array me convert karta hai.

// var str = "apple,banana,orange";
// console.log(str);
// console.log(typeof str);
// console.log(str.split(",")); 

// var cityNames = 'Karachi,Islambad,Lahore';
// var convert = cityNames.split(',');
// console.log(cityNames); 
// console.log(typeof cityNames); 
// console.log(convert);
// console.log(typeof convert);
// console.log(cityNames);
// console.log(typeof cityNames);


// concat()

// Do strings ko jodta hai.

// let str1 = "Hello";
// let str2 = "World";
// console.log(str1.concat(" ", str2)); 

// let str1 = 'Java';
// let str2 = 'Script';

// console.log(str1 + " " + str2);
// console.log(`${str1} ${str2}`)
// console.log(str1.concat(' ' , str2));


// padStart(targetLength, padString)

// Ye method string ke start me padding (extra characters) add karta hai jab tak wo given length na ban jaye.

// let str = "5";
// console.log(str.padStart(4, "0")); // Output: "0005"

// var accountNum = '6789';
// var convert = accountNum.padStart(12 , '*');

// console.log(accountNum);
// console.log(convert);


// var accountNum = '67891011';
// var convert = accountNum.padStart(12 , '*');

// console.log(accountNum);
// console.log(convert);


// var accountNum = '67891011123';
// var convert = accountNum.padStart(12 , '*');

// console.log(accountNum);
// console.log(convert);


// padEnd(targetLength, padString)

// Ye method string ke end me padding add karta hai jab tak wo given length na ban jaye.

// var accountNum = '6789';
// var convert = accountNum.padEnd(12 , '*');

// console.log(accountNum);
// console.log(convert);


//   ------------------------------------

// let num = "42";

// padStart: always 5 digit ka number
// console.log(num.padStart(5, "0"));  
// Output: "00042"

// padEnd: fix length ke saath show karna
// console.log(num.padEnd(5, "."));    
// Output: "42..."



