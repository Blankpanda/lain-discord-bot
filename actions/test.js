Action = new function() {
    var self = this;

    self.name = "test";
    self.description = "testing";

    self.start = function(e,name) {
	// if (e.message.content.startsWith("https://www.youtube.com/")) { // hack job
	//     e.sendMessage("Ploof");
//	}
    }
}

module.exports = Action;
