var fs = require("fs");
Command = new function() {
    var self = this;

    self.name = "!help";

    self.exec = function(e,args) {
	fs.readdir(".", function(err,items) {
	    e.message.channel.sendMessage(items);
	});
    }

    self.getName = function() {
	return self.name;
    }
}

module.exports = Command;
