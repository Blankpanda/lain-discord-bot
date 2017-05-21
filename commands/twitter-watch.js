var Twitter = require("..\\twitter.js");
Command = new function() {
    var self = this;

    self.name = "!twitter-watch";
    self.description = "args:add(@account_name)|remove(@account_name)|list()|start()|stop()";
    self.action = ""; // add | remove | list | start | stop
    
    self.MAX_WATCH = 6;
    self.numPeople = 0; // use this ?
    
    self.PeopleList = [];
    self.requestInterval = 0;

    self.isStarted = false;

    self.userPrev = [];
    self.TWITTER_LINK_STUB = "https://twitter.com/"; // https://twitter.com/@name/status/@id
    self.TWITTER_LINK_GET = "/status/";
    self.prevPosts = [];
    
    self.exec = function(e,args) {
	// TODO: fixer up! | verify twitter account ???
	if(args[0] == "add" && self.numPeople != self.MAX_WATCH) {
	    if(self.isStarted) {
		e.sendMessage("Failed to add. Is the watcher running? does the list exceed 6?")
	    } else {
		self.PeopleList.push(args[1]);
		self.numPeople++;
		e.sendMessage("Added: " + args[1]);
	    }

	} else if(args[0] == "remove" && self.numPeople != 0) {
	    if(self.isStarted) {
		e.sendMessage("Failed to remove. Is the watcher running? are there any people in the list?")
	    } else {		
		for(var i = 0; i < self.PeopleList.length; i++) {
		    if(self.PeopleList[i] == args[1]) {
			var a = self.PeopleList.splice(i,1);
		    }
		}
		self.numPeople--;
	    }
	} else if(args[0] == "list") {
	    if(self.numPeople == 0) {
		e.sendMessage("Nobody here. try adding someone.")
	    } else {
		var msg = "";
		for(var i = 0; i < self.PeopleList.length; i++) {
		    msg += self.PeopleList[i] + "\n";
		}
		e.sendMessage(msg);
	    }
	} else if(args[0] == "start") {
	    if(self.isStarted){
		e.sendMessage("watcher is already running");
	    } else {

		// NOTE: could remember posts and iteravely catch up on tweets
		// NOTE: or just get the most recent tweet over a certain interval, if its the same then we step away.
		// NOTE: could lose out on some tweets that way with opt2.
		self.isStarted = true;

		// start the watcher
		var min = 1;
		self.requestInterval = min * 60 * 1000;

	//	setInterval(function() {
		    // for(var i = 0; i < self.PeopleList; i++) {
		    // 	console.log("I'ma post: " + self.PeopleList[i]);
		    // 	self.postTweet(e,self.PeopleList[i]);
		// }
		setInterval(function() {
		    for(var i = 0; i < self.PeopleList.length; i++) {
			self.postTweet(e,self.PeopleList[i]);
		    }
		},self.requestInterval);
//		},interval); 
	    }
	   
	} else if(args[0] == "stop") {
	    self.isStarted = false;
	} else {
	    e.sendMessage("Failed to read " + self.name + " command");
	}
    }

    //TODO: REFACTOR
    self.parseTweet = function(name,callback) {
	console.log("parsing:" + name)
	var t = new Twitter(name);
	t.getTweet(function(response) {
	    var udata = response[0];
	    var screen_name = udata['user']['screen_name'];
	    var id = udata['id_str'];	    
	    
	    if(!self.inPreviousPost(id)) {
		self.prevPosts.push(id);
		return callback(self.TWITTER_LINK_STUB + screen_name + self.TWITTER_LINK_GET + id);
	    } else {
		console.log("Got tweet, but was already posted.");
		return null;
	    }

	    // remove the first two from previous posts ?queue?"
	    if(self.prevPosts > self.numPeople) {
		self.prevPosts.splice(0,self.numPeople);
	    }
	});
    }

    self.inPreviousPost = function(id) {
	for(var i = 0; i < self.prevPosts.length; i++) {
	    if(id == self.prevPosts[i])		   
		return true;
	}
	return false;
    }

    self.postTweet = function(e, name) {
	self.parseTweet(name,function(response) {
	    if(response != null)
		e.sendMessage(response);
	})
    }
}
module.exports = Command;
