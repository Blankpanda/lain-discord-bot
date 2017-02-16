Command = new function() {
    var self = this;
    
    self.name = "!random-video";
    
    self.exec = function(e, args) {
	e.sendMessage("workin' on it");
    }

    self.getName = function() {
	return self.name;
    }
}

module.exports = Command;
