const readline = require("readline-sync");
const playerName = readline.question("What is your name? ");
let isComplete = false
const introMessage = readline.question(`Welcome ${playerName}, you are on a quest to master all 4 elements! You must find and defeat the Elementals of Fire, Water, Earth, and Air. Press 'enter' to continue. `);

var enemies = [
    {
        name: "Fire Elemental",
        health: 50,
        inventory: "Essence of the Flame",
        isAlive: true,
    },
    {
        name: "Water Elemental",
        health: 50,
        inventory: "Essence of the Tide",
        isAlive: true,
    },
    {
        name: "Earth Elemental",
        health: 50,
        inventory: "Essence of the Mountain",
        isAlive: true,
    },
    {
        name: "Air Elemental",
        health: 50,
        inventory: "Essence of the Wind",
        isAlive: true,
    },
]

var player = {
    name: playerName,
    health: 100,
    inventory: ["Soul of a Hero"],
    isAlive: true,
}
function character() {
    return " Name: " + player.name + "  Health: " + player.health +"  Inventory: " + player.inventory + "  ";
    }
var z = {}

while (isComplete === false) {
    const actions = ["Walk/Continue", "Character/Inventory", "Quit Game"]
    let theAction = readline.keyInSelect(actions, "What would you like to do?")
    decision(theAction)
    if (player.inventory.length == 5) {
        isComplete = true
        console.log(`Congratulations! You did it, you mastered all 4 of the elements and can now bring peace through balance and harmony. Thank you ${playerName}...`)
    }
}

function decision(num) {
    if (num == 0) {
        isComplete = false;
        readline.question("You continue along your quest. Press 'enter' to continue.");
        walk();
    } else if (num == 1) {
        isComplete = false;
        readline.question(`Character: ${character()} Press 'enter' to continue.`);
    } else if (num == 2) {
        isComplete = true;
        readline.question("You have given up on your quest and failed the world...");
    } else {
        readline.question("Pick an appropriate action!(1, 2, or 3)");
    }
}

function walk() {
    let x = Math.floor((Math.random() * 21) + 1)
    console.log(x)
    if (x % 3 == 0) {
        var randomIndex = Math.floor(Math.random() * enemies.length);
        var randomEnemy = enemies.splice(randomIndex, 1)
        readline.question(`You encountered the ${randomEnemy[randomEnemy.length - 1].name}!`);
        console.log(randomEnemy)
        
        battle(randomEnemy);
    } 
}


function battle(randomEnemy) {
    while (randomEnemy[0].health > 0 && isComplete == false) {
        const battleOptions = ["Attack", "Run"]
        let theOption = readline.keyInSelect(battleOptions, "Fight or Flight?")
        fightOrFlight(theOption, randomEnemy)
        enemyAttack(randomEnemy)
        
    } 
    
    if (randomEnemy[0].health <= 0) {
        console.log(`You defeated the ${randomEnemy[0].name} and mastered the element!`)
        let winningInventory = randomEnemy[0].inventory
        console.log(winningInventory + " was added to your inventory.")
        let playerInventory = player.inventory
        player.inventory.push(winningInventory)
        var defeatedEnemies = randomEnemy.splice(0 ,1)
        player.health = player.health + 50
        console.log("You are invigorated by your mastery of the element and regained 50 health points!")
    }
}

function fightOrFlight(option, randomEnemy) {
    if (option == 1) {
        let y = Math.floor((Math.random() * 20) + 1)
        if (y % 2 == 0) {
            console.log("You escaped with your life but failed your quest... Try again once you've recovered your strength.")
            isComplete = true;
        } else {
            console.log("You failed to escape.")
            return;
        };
    } else if (option == 0) {
        let z = Math.floor((Math.random() * 15) + 1)
        console.log(`You did ${z} points of damage!`)
        randomEnemy[0].health = (randomEnemy[0].health - z)
    } else {
        console.log("Please select to attack or run.")
    }
}

function enemyAttack(randomEnemy) {
    let w = Math.floor((Math.random() * 15) + 1)
    if (randomEnemy[0].health > 0 && isComplete == false) {
        player.health = (player.health - w)
        console.log(`The enemy did ${w} points of damage!`)
        console.log("Player Health: " + player.health + "  " + "Enemy Health: " + randomEnemy[0].health)
    }
    if (player.health <= 0) {
        player.isAlive = false
        isComplete = true
        console.log("The foe before you was too much, you failed to master the elements and fell into eternal darkness...")
    }
}
