var Discord = require('./discord.js');
var fs = require('fs');
var Log = require("./log.js");
var Init = function(token,name) {
    var self = this;
    
    self.bot = new Discord();
    self.commands = [];
    self.actions  = [];

    self.Logger = new Log(__filename);

    /* start Discord Server*/
    self.startLain = function startLain() {
	// error checking
	self.bot.connect(self.commands,self.actions,token,name);
    }
    
    self.readCommands = function() {
	self.Logger.writeLog(1,"reading commands...",null);
	var logCommandMessage = {};
	/* TODO: find a better place for this */
	fs.readdir("./commands/", function(err,items) {
	    for(var i = 0; i < items.length; i++) {
		if(items[i] != "ignore" && items[i].substr(items[i].length - 3) == ".js") { // NOTE: != ignore gets removed ???
		    var command = require("./commands/" + items[i]);
		    self.commands.push(command);
		    logCommandMessage[i] = command.name;		    
		}
	    }
	    self.Logger.writeLog(1,"Finished reading commands.",logCommandMessage);
	});

    }

    /*handlers, actions, etc.*/
    self.readActions = function() {
	self.Logger.writeLog(1,"reading actions....",null);
	var logActionMessage = {};
	fs.readdir("./actions/",function(err,items) {  // search instead of iteration
	    for(var i = 0; i < items.length; i++) {
		if (items[i] != "ignore" && items[i].substr(items[i].length - 3) == ".js") {
		    var action = require("./actions/" + items[i]);
		    self.actions.push(action);
		    logActionMessage[i] = action.name;
		}
	    }
	    self.Logger.writeLog(1,"Finished reading actions.",logActionMessage);
	});
      
    }
}

module.exports = Init;
