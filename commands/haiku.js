Command = new function() {
    var self = this;

    self.name = "!haiku";

    self.exec = function(e,args) {
	// TODO: Relative path?
	var uint8arrayToString = function(data) {
	    return String.fromCharCode.apply(null,data);
	}
	var spawn = require("child_process").spawn;
	var process = spawn('py',['C:\\Users\\CalebsComp\\Documents\\haiku-master\\haiku\\main.py']);
	
	process.stdout.on('data',function(data) {
	    e.sendMessage(data);
	});

	process.stderr.on('data', (data) => {
	    console.log(uint8arrayToString(data));
	});

    }

    self.getName = function() {
	return self.name;
    }
}

module.exports = Command;
