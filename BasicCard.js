// require fs
var fs = require("fs");

//Node module to export constructor for creating basic flashcard
module.exports = BasicCard;

//constructor for basicCard arguments front and back
function BasicCard(front, back) {
	this.front = front;
	this.back = back;
	this.create = function() {

	var data = {
		front: this.front,
		back: this.back,
		type: "basic",
	};

		fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
			//log errors
			if (error) {
				console.log(error);
			}
		});
	};
}