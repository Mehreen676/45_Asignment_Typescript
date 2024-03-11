// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// Make a list of current users
var current_users = ["junaid", "juni", "zohair", "ali", "bob"];
// Make a list of new users
var new_users = ["mehr", "JUNAID", "faisal", "ALI", "sam"];
// Loop through the new_users list
new_users.forEach(function (new_user) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    var lowercase_current_users = current_users.map(function (user) { return user.toLowerCase(); });
    var lowercase_new_user = new_user.toLowerCase();
    // Check if the new username has already been used
    if (lowercase_current_users.includes(lowercase_new_user)) {
        console.log("Sorry, the username '".concat(new_user, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(new_user, "' is available."));
    }
});
