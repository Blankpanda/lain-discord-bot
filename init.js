var Discord = require('./discord.js');

var Init = function() {
    var self = this;
    
    self.bot = new Discord();
    self.commands = {};

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
    }


}


module.exports = Init;


