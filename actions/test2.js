Action = new function() {
    var self = this;

    self.name = "test2";
    self.description = "testing";

    self.start = function(e,name) {
	if (name == "blankpanda" || "Balsamic") { // hack job
	    e.message.channel.sendMessage("hahahahahhahah");
	}

    }

    // TODO
    self.stop = function(e,args) {
	
    }
}

module.exports = Action;
