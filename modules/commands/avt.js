module.exports.config = {
	name: "fbavt",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "DuyVuong",
	description: "l?y avt ngu?i dùng b?ng id",
	commandCategory: "system",
	cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
const request = require("request");
const fs = require("fs")
const axios = require("axios")
const prefix = global.config.PREFIX
if (!args[0]) return api.sendMessage(`» » » FB-AVATAR « « «\n\n${prefix}fbavt id [id c?n get] <get ?nh theo uid ngu?i dó>\n\n${prefix}fbavt link [link c?n get] <get theo link c?a ngu?i dó>\n\n${prefix}fbavt user <d? tr?ng là get avatar c?a chính ngu?i dùng l?nh>\n\n${prefix}fbavt user [@mentions] <get avatar ngu?i du?c tag>`,event.threadID,event.messageID);
else if (args[0] == "id") {
	try {
	var id = args[1];
  if (!id) return api.sendMessage(`Vui lòng nh?p uid c?n get avatar.`,event.threadID,event.messageID);
   var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
   return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
 }
 catch (e) {
 	api.sendMessage(`Không th? l?y ?nh ngu?i dùng.`,event.threadID,event.messageID);
 }
}
else if (args[0] == "link") {
var link = args[1];
if (!link) return api.sendMessage(`Vui lòng nh?p link c?n get avatar.`,event.threadID,event.messageID);
var tool = require("fb-tools");
try {
var id = await tool.findUid(args[1] || event.messageReply.body);
var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
}
catch(e){
    api.sendMessage("Ngu?i dùng không t?n t?i.",event.threadID,event.messageID)
}
}
else if(args[0] == "user") {
	if (!args[1]) {
		var id = event.senderID;
		var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
    return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
	}
	else if (args.join().indexOf('@') !== -1) {
		var mentions = Object.keys(event.mentions)
		var callback = () => api.sendMessage({attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
	}
	else {
		api.sendMessage("Sai l?nh. Ghi `/fbavt` d? xem các l?nh c?a module.",event.threadID,event.messageID);
	}
}
else {
	api.sendMessage("Sai l?nh. Ghi `/fbbavt` d? xem các l?nh c?a module.",event.threadID,event.messageID);
}
}