var Discordie = require('discordie');
var Log = require('./log.js');
var Discord = function() {
    var self = this;
    
    self.Events = Discordie.Events;
    self.client = new Discordie();

    self.isConnected = false;

    self.commands = [];

    self.name = "";

    self.token = "";
    
    self.Logger = new Log(__filename);
    
    self.connect = function(commands, token, name) {
	self.commands = commands;
        self.name = name;
        self.token = token;

	self.client.connect({
	    token: token
	});

	self.client.Dispatcher.on(self.Events.GATEWAY_READY, e => {	    
	    self.Logger.writeLog(1,"Connected as: " + self.client.User.username,{name:self.name,token:self.token});	
//	    console.log('Connected as: ' + self.client.User.username);
	});
	self.Logger.writeLog(1,"Connection to Discord server was successful.",null);
	self.isConnected = true;


	// TODO: de-obfuscate this 
	self.client.Dispatcher.on(self.Events.MESSAGE_CREATE, e=> {
	    if(e.message.member['username'] != self.name && e.message.content.startsWith("!")) {
		self.Logger.writeLog(1,e.message.member['username'] + " invoked: " + e.message.content,null);
		for(var i = 0; i < commands.length; i++){
		    if(e.message.content == commands[i].name
			|| e.message.content.split(" ")[0] == commands[i].name)
		    {
			var args = self.seperateArgs(e.message.content.split(" "));
			self.Logger.writeLog(1,"invoking: " + e.message.content,{args:args});
			commands[i].exec(e.message.channel,args);
			break;
		    }
		}
	    }
	});
	
    }

    self.seperateArgs = function(args) {
	args.splice(0,1);
	return args;
    }
    
    self.sendChatMessage = function(e, message) {
	e.message.channel.sendMessage(message);
    }
}

module.exports = Discord;
