// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.: 'module.exports=ClozeCard;'
// The constructor should accept two arguments: 'text' and 'cloze'.
// The constructed object should have a 'cloze' property that contains only the cloze-deleted protion of the text.
// The constructor should accept two arguments: `text` and `cloze`.

// The constructed object should have a `cloze` property that contains _only_ the cloze-deleted portion of the text.

// The constructed object should have a `partial` property that contains _only_ the partial text.

// The constructed object should have a `fullText` property that contains _only_ the full text.

// The constructor should throw or log an error when the cloze deletion does _not_ appear in the input text.

// Use prototypes to attach these methods, wherever possible.

// The bulk of this assignment is implementing `ClozeCard`. If you build a robust `ClozeCard` implementation, feel free to try your hand at implementing a front-end, as well.

//require fs
var fs = require("fs");

//Node module to export constructor for creating basic flashcard
module.eports = ClozeCard;

//constructor for basicCard arguments text and cloze
function ClozeCard(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.clozeDeleted = this.text.replace(this.cloze, "_____");
	this.create = function() {
		var data = {
			text: this.text,
			cloze: this.cloze,
			clozeDeleted: this.clozeDeleted,
			type: "cloze"
		};

		//add cloze card info to log.txt
		fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
			//log any errors that occur
			if (error) {
				console.log(error);
			}
		});
	};
}