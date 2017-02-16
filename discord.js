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

	self.client.Dispatcher.on(self.Events.MESSAGE_CREATE, e => {
	    for(var i = 0; i <= self.commands.length; i++) {
		console.log(commands[i])
	    	// if(e.message.content == self.commands[i].getName()) {
	    	//     var args = e.message.content.split(" ");
	    	//     self.commands[i].exec(e,args);
	    	
	    }
	    
	    
	});	    
    }
    self.sendChatMessage = function(e, message) {
	e.message.channel.sendMessage(message);
    }
}

module.exports = Discord;


// client.Dispatcher.on(Events.MESSAGE_CREATE, e => {

//     Youtube.getVideo(function(data) {
// 	var test = JSON.parse(data);
// 	if(e.message.content == "!gs hypothermia") {
// 	    e.message.channel.sendMessage("https://www.google.com/search?q=hypothermia&ie=utf-8&oe=utf-8");
// 	}
// 	//	e.message.channel.sendMessage(s);
// 	//e.message.channel.sendMessage("https://youtube.com/watch?v=" + test.items[0].id.videoId);
// 	//console.log(test.items[0].id.videoId);
// 	    //	    e.message.channel.sendMessage(truncString(data,20));
// 	})

// });

// function sendDiscordMessage(e, message) {
//     e.message.channel.sendMessage();
// }

// //temp
// function truncString(string,n) {
//     var newS = "";
//     for(var i = 0; i <= n; i++) {
// 	newS += string[i];
//     }
//     return newS;
// }

