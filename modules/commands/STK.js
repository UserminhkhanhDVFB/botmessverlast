const fs = require("fs");
module.exports.config = {
	name: "stk",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MINHKHANH", 
	description: "no prefix",
	commandCategory: "Noprefix",
	usages: "stk",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("stk")==0 || (event.body.indexOf("stk")==0)) {
		var msg = {
				body: "Donate qua cho mình nhé <3 iuuu\n\n\n MOMO: 0962642005 - LUONG MINH KHANH \n MB Bank: 205686789999 - LUONG MINH KHANH ",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}