var fs = require('fs');

Command = new function() {
    var self = this;

    self.name = "!test-embed";

    self.description = "foo";

    self.exec = function(e,args) {
	console.log("ahahah");
	e.sendMessage("message with an embed", false, {
	    color: 0x3498db,
	    author: {name: "author name"},
	    title: "This is an embed",
	    url: "http://google.com",
	    timestamp: "2016-11-13T03:43:32.127Z",
	    fields: [{name: "some field", value: "some value"}],
	    footer: {text: "footer text"}
	});
    }
}

module.exports = Command;
 
