var Discordie = require('discordie');

var Discord = function() {
    
    var self = this;
    
    self.Events = Discordie.Events;
    self.client = new Discordie();

    self.isConnected = false;

    self.commands = [];

    self.connect = function(commands) {
	self.commands = commands;
	
	self.client.connect({
	    token:'Mjc5ODU4Njg1NTYyMzIyOTQ0.C4BAdQ.wp2vCgL1vDhEUZUa12QD8Jix47A'
	});
	
	self.client.Dispatcher.on(self.Events.GATEWAY_READY, e => {
	    // log
	    console.log('Connected as: ' + self.client.User.username);
	});
	console.log('Connection to discord server was successful');
	self.isConnected = true;


	// TODO: de-obfuscate this 
	self.client.Dispatcher.on(self.Events.MESSAGE_CREATE, e=> {
	    if(e.message.member['username'] != 'lain' && e.message.content.startsWith("!")) {
					
		for(var i = 0; i < commands.length; i++){
		    if(e.message.content == commands[i].name
			|| e.message.content.split(" ")[0] == commands[i].name)
		    {
			var args = e.message.content.split(" ");
			args.splice(0,1);
			args = args.join(' ');
			console.log(args);
			commands[i].exec(e.message.channel,args);
			break;
		    }
		}
	    }
	});
	
    }
    self.sendChatMessage = function(e, message) {
	e.message.channel.sendMessage(message);
    }
}

module.exports = Discord;
