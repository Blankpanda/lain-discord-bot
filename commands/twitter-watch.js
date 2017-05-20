var Twitter = require("..\twitter.js");
Command = new function() {
    var self = this;

    self.name = "!twitter-watch";
    self.description = "args:add(@account_name)|remove(@account_name)|list()|start()|stop()";
    self.action = ""; // add | remove | list | start | stop
    
    self.MAX_WATCH = 6;
    self.REQS_PER_PERSON = 10;
    self.numPeople = 0;
    
    self.PeopleList = [];

    self.isStarted = false;
    
    self.exec = function(e,args) {
	// TODO: fixer up! | verify twitter account ???
	if(args[0] == "add") {
	    if(self.isStarted) {
		e.sendMessage("Failed to add. Is the watcher running?")
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
		    console.log(self.PeopleList[i] +"|"+args[1]);
		    if(self.PeopleList[i] == args[1]) {
			var a = self.PeopleList.splice(i,1);
			console.log("a:" + a);
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
	    self.isStarted = true;
	    // start the watcher
	} else if(args[0] == "stop") {
	    self.isStarted = false;
	    // stop the watcher
	} else {
	    e.sendMessage("Failed to read " + self.name + " command");
	}
    }

    self.getTotalReqs = function() {
	return self.numPeople * self.REQS_PER_PERSON;
    }
}
module.exports = Command;
