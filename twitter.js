var twit = require('twit');
var auth = require("./twitter_auth.json");
Twitter = function(usersList) {

    var T = new Twit(auth);
    var self = this;

    self.numPeople = userList.length;
    
    self.start = function() {
	
    }

    self.stop = function() {
	
    }
}
module.exports = Twitter;
