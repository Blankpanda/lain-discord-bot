var request = require('request');

Command = new function() {
    var self = this;

    self.name = "!booru";

    self.description = "'My real self wanders elsewhere, far away, wanders on and on invisibly and has nothing to do with my life.' -- Hermann Hesse, Siddhartha ";

    self.exec = function(e, args) {

	let message = "https://danbooru.donmai.us/posts.json?tags="

	for(let val of args)
	    message += (" " + val)

	
	request({
	    url: message,
	    json: true
	},
	function(err, res, json) {
	    
	    console.log(json)
	    // API Returns an emtpy array if it gets nothing
	    if(json[0] == undefined) {
		e.sendMessage("Ain't nobody here but us chickens")
		e.sendMessage("https://i.ytimg.com/vi/mffhqlmuiII/maxresdefault.jpg")
	    } else {
		let image = json[Math.floor((Math.random() * json.length))].large_file_url 

		if(image == undefined) {
		    e.sendMessage("Ain't nobody here but us chickens")
		    e.sendMessage("https://i.ytimg.com/vi/mffhqlmuiII/maxresdefault.jpg")
		} else {
		    e.sendMessage("https://danbooru.donmai.us" + image)
		}
	    }
	});
    }
    
}

module.exports = Command;
