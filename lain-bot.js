var init = require('./init.js');
var auth = require('./discord_auth.json');

// start the bot
lain = new init(auth.key,auth.name);
lain.readCommands();
lain.startLain();
