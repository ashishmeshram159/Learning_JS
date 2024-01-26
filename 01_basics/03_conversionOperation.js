let score = "Ashish" 

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score) 
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// Type conversions to number:
// "33" => 33
// "33abc", undefined => NaN
//  true => 1; false,null => 0
// 'Asjhihs' => NaN

let isLoggedIn = "Ashishsh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "Ashishsh",123 => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);
// converting to string kuch bhi chalega

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " aSHISHsh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); // Execution: str + num + num = str + num = str // Final Output: 122
// console.log(1 + 2 + "2"); // Execution: num + num + str = num + str = str // Final Output: 32

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); //  increment to true => converted to 1
// console.log(true+); //  error
// console.log(+"");  // is 0
// In boolean conversion of "" we get false. console.log(+Boolean('')) is 0.

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion