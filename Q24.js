"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// • Tests for equality and inequality with strings
const fruitsName1 = "Mango";
const fruitsName2 = "Banana";
console.log(fruitsName1 === fruitsName2);
console.log(fruitsName1 !== fruitsName2);
// • Tests using the lower case function
const mixedCaseString = "Hello World";
console.log(mixedCaseString.toLowerCase() === "hello world");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 60;
const num2 = 50;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
// • Tests using "and" and "or" operators
const myName1 = true;
const myName2 = false;
console.log(myName1 && myName2);
console.log(myName1 || myName2);
// Test whether an item is in an array
let array = ["a", "b", "c", "d", "e"];
console.log(array.includes("e"));
console.log(array.includes("g"));
// Test whether an item is not in an array
let array2 = [2, 4, 6, 8, 10];
console.log(!array2.includes(3));
console.log(!array2.includes(8));
