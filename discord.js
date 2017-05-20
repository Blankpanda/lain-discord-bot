var Discordie = require('discordie');

var Discord = function() {

    var self = this;
    
    self.Events = Discordie.Events;
    self.client = new Discordie();

    self.isConnected = false;

    self.commands = [];

    self.name = "";

    self.token = "";

    self.connect = function(commands, token, name) {
	self.commands = commands;
        self.name = name;
        self.token = token;

	self.client.connect({
	    token: token
	});
	
	self.client.Dispatcher.on(self.Events.GATEWAY_READY, e => {
	    // log
	    console.log('Connected as: ' + self.client.User.username);
	});
	console.log('Connection to discord server was successful');
	self.isConnected = true;


	// TODO: de-obfuscate this 
	self.client.Dispatcher.on(self.Events.MESSAGE_CREATE, e=> {
	    if(e.message.member['username'] != self.name && e.message.content.startsWith("!")) {
					
		for(var i = 0; i < commands.length; i++){
		    if(e.message.content == commands[i].name
			|| e.message.content.split(" ")[0] == commands[i].name)
		    {
			var args = self.seperateArgs(e.message.content.split(" "));
//			console.log(args); //LOG args
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
