Command = new function() {
    var self = this;
    
    self.name = "!random-video";

    self.description = "get a random recently created youtube video. argument=[text]";
    
    self.exec = function(e, args) {
	e.sendMessage("workin' on it");
    }

    self.getName = function() {
	return self.name;
    }
}

module.exports = Command;
