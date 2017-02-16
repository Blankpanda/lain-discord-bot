Command = new function() {
    var self = this;

    self.name = "!ping";

    self.exec = function(e,args){
	e.sendMessage("pong");

    }

    self.getName = function() {
	return self.name;
    }
}

module.exports = Command;
