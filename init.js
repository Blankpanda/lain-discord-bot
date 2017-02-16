var Discord = require('./discord.js');
var fs = require('fs');

var Init = function() {
    var self = this;
    
    self.bot = new Discord();
    self.commands = [];

    /* start Discord Server*/
    self.startLain = function startLain() {
	// error checking
	self.bot.connect(self.commands);    
    }
    
    self.readCommands = function() {
	/* TODO:
	 * build a list of commands based on commands directory, require nessecary files for commands
	 *use some sort of interface?
	 * get an object of commands with their execute functions */
	fs.readdir("./commands/", function(err,items) {
	    for(var i = 0; i < items.length; i++) {

		var command = require("./commands/" + items[i]);
		self.commands.push(command);
	    }

	});

    }


}


module.exports = Init;

