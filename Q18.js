"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has change
// Define the array of places to visit
let placesToVisit = ['Tokyo', 'Paris', 'china ', 'New York City', 'Turkey'];
// 1. Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// 2. Print the array in alphabetical order without modifying the original list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());
// 3. Show that the array is still in its original order by printing it again
console.log("\nOriginal order:");
console.log(placesToVisit);
// 4. Print the array in reverse alphabetical order without changing the original list
console.log("\nReverse alphabetical order:");
console.log([placesToVisit].sort().reverse());
// 5. Show that the array is still in its original order by printing it again
console.log("\nOriginal order:");
console.log(placesToVisit);
// 6. Reverse the order of the list and print it
console.log("\nReversed order:");
console.log(placesToVisit.slice().reverse());
// 7. Reverse the order of the list again to get back to its original order and print it
console.log("\nOriginal order:");
console.log(placesToVisit.slice().reverse());
// 8. Sort the array to store it in alphabetical order and print it
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit.slice().sort());
// 9. Sort the array to store it in reverse alphabetical order and print it
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit.slice().sort().reverse());
