Command = new function() {
    var self = this;

    self.name = "!gs";

   // self.baseString = "https://www.google.com/search?site=&source=hp&q=hypothermia&oq=hypothermia";
    self.baseString = "https://www.google.com/search?q=";
    self.encoding = "&ie=utf&oe=utf-8";
    
    self.exec = function(e,args) {
	var search = args[1];
	self.replaceString(search," ","+");

	e.sendMessage(self.baseString + search + self.encoding);
	
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
