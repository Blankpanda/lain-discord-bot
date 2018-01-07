var init = require('./init.js');
var Log = require('./log.js');

var Logger = new Log(__filename);

var auth = require('./discord_auth.json');

// start the bot
Logger.writeLog(1,"Starting bot.",null);
lain = new init(auth.key,auth.name);
lain.readCommands();
lain.readActions();
lain.startLain();
