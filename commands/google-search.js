Command = new function() {
    var self = this;

    self.name = "!gs";

    self.baseString = "https://www.google.com/search?ie=utf-8&oe=utf-8"
    self.encoding = "&ie=utf&oe=utf-8";
    
    self.exec = function(e,args) {
	var search = args[1];
	replaceString(search," ","+");

	e.message.channel.sendMessage(self.baseString + search + self.encoding);
	
    }

    self.replaceString = function(string, oldc,newc) {
	for(var i = 0; i <= string; i++) {
	    if(string[i] == oldc) {
		string[i] = newc;
	    }
	    return string;
	}
    }

    self.getName = function() {
	return self.name;
    }
}

module.exports = Command;
