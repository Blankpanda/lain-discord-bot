var Discordie = require('discordie');
var Log = require('./log.js');
var Discord = function() {
    var self = this;
    
    self.Events = Discordie.Events;
    self.client = new Discordie();

    self.isConnected = false;

    self.commands = [];
    self.actions  = [];
    
    self.name = "";

    self.token = "";
    
    self.Logger = new Log(__filename);
    
    self.connect = function(commands,actions, token, name) {
	self.commands = commands;
	self.actions = actions;
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

	// command handling
	// TODO: de-obfuscate this, something much better takes this place eventually | event driven | commands could be actions
	self.client.Dispatcher.on(self.Events.MESSAGE_CREATE, e=> {
	    if(e.message.member['username'] != self.name && e.message.content.startsWith("!")) {
		self.Logger.writeLog(1,e.message.member['username'] + " invoked: " + e.message.content,null);
		for(var i = 0; i < commands.length; i++){
		    if(e.message.content == commands[i].name
			|| e.message.content.split(" ")[0] == commands[i].name)
		    {
			var args = self.seperateArgs(e.message.content.split(" "));
			self.Logger.writeLog(1,"executing command: " + e.message.content,{args:args});
			commands[i].exec(e.message.channel,args,e.message.member);
			break;
		    }
		}
	    } else {
		self.Logger.writeLog(1,"starting actions...",null);
		// log
		for(var i = 0; i < self.actions.length; i++) { // TODO: filtering
		    actions[i].start(e,e.message.member);
		}
	    }
	});
	
    }

    // Initally located in init.js, but we need to pass discordies event handler to actions
    // self.startActions = function(e) { // call after read
    // 	self.Logger.writeLog(1,"starting actions...",null);
    // 	// log
    // 	for(var i = 0; i < self.actions.length; i++) { // TODO: filtering
    // 	    self.actions[i].start(e.message.channel);
    // 	}
    // }

    self.seperateArgs = function(args) {
	args.splice(0,1);
	return args;
    }
    
    self.sendChatMessage = function(e, message) {
	e.message.channel.sendMessage(message);
    }
}

module.exports = Discord;
