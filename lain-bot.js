var init = require('./init.js');
var auth = require('./discord_auth.json');
var Log = require('./log.js');

var Logger = new Log(__filename);

// start the bot
Logger.writeLog(1,"Starting bot.",null);
lain = new init(auth.key,auth.name);
lain.readCommands();
lain.startLain();
