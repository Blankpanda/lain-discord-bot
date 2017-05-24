Command = new function() {
    var self = this;

    self.name = "!bong";
    self.description = "hehehehehhehehehehhehe";

    self.exec = function(e,args) {
	e.sendMessage("I can't believe you just said " + args.join(" ") + ". YOU ARE GOING TO MAKE ME FEEL LIK IM THE ONYL INDIAN IN THE WORLD LIKE IM THE ONLY ONE WHO DO IT FOR RUPEES.");
    }
}

module.exports = Command;
