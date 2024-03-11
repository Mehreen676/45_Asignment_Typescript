// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}

// Original array of magician's names
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the make_great function with a copy of the original array
let great_magicians: string[] = make_great([...magician_names]);

// Call the show_magicians function with the original array and the array with "the Great" added to each name
console.log("Original Magicians:");
show_magicians(magician_names);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
