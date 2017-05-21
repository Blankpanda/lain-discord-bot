var fs = require('fs');

Command = new function() {
    var self = this;

    self.name = "!help";

    self.description = "show this display";
    
    self.exec = function(e,args) {
	fs.readdir("./commands", function(err,items) {
	    var helpString = "";
	    for(var i = 0; i < items.length; i++) {
		if(items[i] != "./ignore" && items[i].substr(items[i].length - 3) == ".js") {
		    var command = require("./" + items[i]);
		    helpString += command.name + " | " + command.description + "\n";
		}

	    }
	    e.sendMessage(helpString);
	});

    }

    self.getName = function() {
	return self.name;
    }
}

module.exports = Command;
