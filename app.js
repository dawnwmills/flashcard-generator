//require modules
var BasicCard = require('./basicCard.js');
var ClozeCard = require('./clozeCard.js');
var inquirer = require('inquirer');
var fs = require('fs');

//user prompt options
inquirer.prompt([{
    name: "select",
    message: "Select an option below: ",
    type: "list",
    choices: [{
        name: "add-card"
    }, {
        name: "display-cards"
    }]

}]).then(function(answer) {
    if (answer.select === "add-card") {
        addCard();
    } else if (answer.select === "display-cards") {
        displayCards();
    }
});

// get user input for for the flashcards

var addCard = function() {
    
    inquirer.prompt([{
        name: "cardType",
        message: "Select the type of flashcard you want to create: ",
        type: "list",
        choices: [{
            name: "basic-flashcard"
        }, {
            name: "cloze-flashcard"
        }]

}]).then(function(answer) {
        if (answer.cardType === "basic-flashcard") {
            inquirer.prompt([{
                name: "front",
                message: "Enter your question for the front of the flashcard?",
                validate: function(input) {
                    if (input === "") {
                        console.log("Oops you forgot to enter a question!");
                        return false;
                    } else {
                        return true;
                    }
                }
            }, {
                name: "back",
                message: "Enter the answer for the back of the flashcard?",
                validate: function(input) {
                    if (input === "") {
                        console.log("Oops you forgot to enter the answer!");
                        return false;
                    } else {
                        return true;
                    }
                }

     }]).then(function(answer) {

                var newBasic = new BasicCard(answer.front, answer.back);
                newBasic.create();
                continueCards();
         

  });

        } else if (answer.cardType === "cloze-flashcard") {
            inquirer.prompt([{
                name: "fulltext",
                message: "Enter your full text statment: ",
                validate: function(input) {
                    if (input === "") {
                        console.log("Oops you forgot to enter your statment: ");
                        return false;
                    } else {
                        return true;
                    }
                }
            }, {
                name: "clozetext",
                message: "Enter the 'fill in the blank' section: ",
                validate: function(input) {
                    if (input === "") {
                        console.log("Oops you forgot to enter the blanks!");
                        return false;
                    } else {
                        return true;
                    }
                }
            }]).then(function(answer) {
                var fulltext = answer.fulltext;
                var clozetext = answer.clozetext;
                if (fulltext.includes(clozetext)) {
                    var newCloze = new ClozeCard(fulltext, clozetext);
                    newCloze.create();
                    continueCards();
                } else {
                    console.log("I'm sorry, your answer was not found. Please try again.");
                    addCard();
                }
            });
        }
    });
};     


var continueCards = function() {
   
    inquirer.prompt([{
        name: "nextEntry",
        message: "Select one of the options below: ",
        type: "list",
        choices: [{
            name: "newCard"
        }, {
            name: "display-cards"
        }, {
            name: "exit"
        }]
   

    }]).then(function(answer) {
        if (answer.nextEntry === "newCard") {
            addCard();
        } else if (answer.nextEntry === "display-cards") {
            displayCards();
        } else if (answer.nextEntry === "exit") {
            return;
        }
    });
};

var displayCards = function() {
    
    fs.readFile("./log.txt", "utf8", function(error, data) {
        if (error) {
            console.log("Something went wrong: " + error);
        }
       
    });
};

