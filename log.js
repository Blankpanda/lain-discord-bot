var messageTypes = require("./logMessages.js");
var Log =  function(filename) {
    var self = this;
    // TODO: write to file?
    // TODO: calling file name in constructor

    self.filename = getFileName(filename);
    
    self.writeLog = function(type,message,variables) {
	var messageType = self.determineMessageType(type);
	var variableStrings = self.unpackVariables(variables);

	console.log("["+messageType+ "|" + self.filename +"] " + message + variableStrings);
    }
    
    self.determineMessageType = function(type) {
	for(messageType in messageTypes) {
	    if(type = messageTypes[messageType])
		return messageType;
	}
    }

    self.unpackVariables = function(variablesObject) {
	if(variablesObject == {} || variablesObject == null) return "";
	var varString = "";
	for(variable in variablesObject) {
	   varString += (variable + "=" + variablesObject[variable] + " ");
	}
	return "| " + varString;
    }

    function getFileName(filename) {
	var splitPath = filename.toString().split("\\");
	var len = splitPath.length;
	return splitPath[len - 1];
    }
}

module.exports = Log;
