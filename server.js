
var Youtube = require('youtube-node');
// https://github.com/nodenica/youtube-node


var Yt = function() {
    var self = this;

    self.youtube = new Youtube();
    self.key = '<key>';

    self.youtube.setKey(self.key);


    self.getVideo = function(callback) {
	
	self.youtube.search("crazy cat", 10, function(error, result) {
	    if(error) {
		console.log(error);
		callback(error);
	    } else {
		callback(JSON.stringify(result,null,2));
		//(JSON.stringify(result,null,2));
	    return;
	}

	});       
    }
}


module.exports = Yt;
