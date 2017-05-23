var Discord = require('./discord.js');
var fs = require('fs');
var Log = require("./log.js");
var Init = function(token,name) {
    var self = this;
    
    self.bot = new Discord();
    self.commands = [];

    self.Logger = new Log(__filename);

    /* start Discord Server*/
    self.startLain = function startLain() {
	// error checking
	self.bot.connect(self.commands,token,name);
    }
    
    self.readCommands = function() {
	self.Logger.writeLog(1,"reading commands...",null);
	var logCommandMessage = {};
	/* TODO: find a better place for this */
	fs.readdir("./commands/", function(err,items) {
	    for(var i = 0; i < items.length; i++) {
		if(items[i] != "ignore" && items[i].substr(items[i].length - 3) == ".js") {
		    var command = require("./commands/" + items[i]);
		    self.commands.push(command);
		    logCommandMessage[i] = command.name;
		    
		}
	    }
	    self.Logger.writeLog(1,"Finished reading commands.",logCommandMessage);
	});

    }
}

module.exports = Init;

