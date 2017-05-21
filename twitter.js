var Twit = require('twit');
var auth = require("./twitter_auth.json");

Twitter = function(name) {

    var T = new Twit(auth);
    var self = this;

    self.getTweet = function(callback) {

	T.get('statuses/user_timeline', {screen_name:name, exclude_replies:true, count:1},function(err,data,response) {
	   return callback(data);
	});
    }
}

module.exports = Twitter;
