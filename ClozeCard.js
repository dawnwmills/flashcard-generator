//require fs
var fs = require("fs");

//Node module to export constructor for creating basic flashcard
module.exports = ClozeCard;

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