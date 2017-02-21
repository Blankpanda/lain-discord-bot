Command = new function() {
    var self = this;

    self.name = "!gs";

    self.baseString = "https://www.google.com/search?q=";
    self.encoding = "&ie=utf&oe=utf-8";

    self.description = "google search based on argument. argument=[text]";
    
    self.exec = function(e,args) {
	args = args.replace(" ","+");
	e.sendMessage(self.baseString + args + self.encoding);	
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
