/* ==This file should define a Node module that exports a constructor for creating basic flashcard, e.g. 'module.exports=BasicCard;'
===== The constructor should accept two arguments: 'front' and 'back'.
===== The constructed objects should have a 'front' property that contains the text on the front of the card.
===== The constructed objects should have a 'back' property that contains the text on the back of the card.
===== ================================================*/
// require fs
var fs = require("fs");

//Node module to export constructor for creating basic flashcard
module.eports = BasicCard;

//constructor for basicCard arguments front and back
function BasicCard(front, back){
	this.front = front;
	this.back = back;

	//add a question to log.txt file
	this.add = function() {

		//objects for flashcard
		var cardInfo = {
			front: this.front,
			back: this.back,
			type: "basic",
		};

		fs.appendFile("log.txt"), JSON.stringify(data) + ':', "utf8", function(error) {
			//log errors
			if (error) {
				console.log(error);
			}
		};
	};
}