// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// Use prototypes to attach these methods, wherever possible.



//require modules
var BasicCard = require('./basiccard.js');
var ClozeCard = require('./clozecard.js');
var inquirer = require('inquirer');
var fs = require('fs');

//get user input
inquirer.prompt([{
	name: 'select',
	message: 'Select you option below:',
	type: 'list',
	choices: [{
		name: 'addAcard'
	},
	{	name: 'displayACard'
	}]

}].then(function(answer) {
	if (answer.select === 'addAcard') {
		addCard();
	} else if (answer.select === 'displayACard') {
		displayCards();
	}
});
)






