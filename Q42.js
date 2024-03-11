// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Array of magician's names
var magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the make_great function to modify the magician names
var great_magicians = make_great(magician_names);
// Call the show_magicians function to see the modified list
show_magicians(great_magicians);
