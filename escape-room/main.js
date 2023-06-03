const readline = require("readline-sync");
const name = readline.question("What is your name? ");
let hasKey = false
let isComplete = false
const introMessage = readline.question(`Welcome ${name}, you are trapped in a room and you must escape! There is a door, a hole in the wall, and a random box. Press 'enter' to continue. `);


while (isComplete === false) {
    const options = ["Try opening the door.", "Stick your hand in the hole and see what's inside.", "Look through the box for anything helpful."]
    let theAction = readline.keyInSelect(options, "What would you like to do?")
    decision(theAction)
}

function decision(num) {
    if (num === 0 && hasKey === false) {
        isComplete = false;
        readline.question("The door is locked, maybe it can be unlocked with a key.");
    } else if (num === 0 && hasKey === true) {
        isComplete = true;
        readline.question("Congratulations! You escaped!");
    } else if (num === 1) {
        isComplete = true;
        readline.question("You have been sucked into an abyss where you spent the rest of your days before finally succumbing to death.");
    } else if (num === 2) {
        isComplete = false;
        hasKey = true;
        readline.question("You have found the key!")
    } else {
        readline.question("Pick an appropriate action!(1, 2, or 3)");
    }
}

// Cannot figure out how to tie in the functionality of the choices the user makes. Tried a few various syntax to no avail.