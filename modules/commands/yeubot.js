const fs = require("fs");
module.exports.config = {
	name: "Y�u bot",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon", 
	description: "no prefix",
	commandCategory: "Noprefix",
	usages: "Y�u bot",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("y�u bot")==0 || (event.body.indexOf("Y�u bot")==0)) {
		var msg = {
				body: "thanks hihi, bot cung y�u bot",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}