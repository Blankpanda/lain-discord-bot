var Twit = require('twit');
var auth = require("./twitter_auth.json");
var Log = require("./log.js");
Twitter = function(name) {

    var T = new Twit(auth);
    var self = this;
    var Logger = new Log(__filename);
    
    self.getTweet = function(callback) {
	T.get('statuses/user_timeline', {screen_name:name, exclude_replies:true, count:1},function(err,data,response) {
	    Logger.writeLog(2,"Getting tweet from: " + name,null);
	    return callback(data);
	});
    }

    function getReplyNumber(callback) {
	T.get('application/rate_limit_status',function(err,data,response) {
	    return callback(data["resources"]["statuses"]['/statuses/user_timeline'].remaining);
	})
    }
}

module.exports = Twitter;
