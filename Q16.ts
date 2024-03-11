// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let guestArry:string[] =["Sufyan","Maryam","Fariha","Zareen","Tooba"]
let canNotAttend:string ="Maryam"
let newGuest:string ="Zawiyar"
guestArry[guestArry.indexOf(canNotAttend)] = newGuest;
console.log(guestArry)
guestArry.map((item) =>( console.log(`Dear ${item},  i found a bigger  Dinner table.`)))


// • Add one new guest to the beginning of your array.

let guestBegin:string ="Fatima"
guestArry.unshift(guestBegin);
// console.log(guestArry)


// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let middleGuest:string ="Zeeshan"
let middleIndex = guestArry.length/2
guestArry.splice(middleIndex,0,middleGuest)
// console.log(guestArry)

// • Use append() to add one new guest to the end of your list. 
guestArry.push("kabeer")
console.log(guestArry)

// • Print a new set of invitation messages, one for each person in your list.
guestArry.map((item) =>( console.log(`Dear ${item}, You are cordially invited to a Dinner .`)))
