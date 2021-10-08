module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Mirai Team",
	description: "Khởi Động Lại Bot.",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage("🛠...Loading...🛠                        Chờ chút tui đang load lại não ████████████ 99% ",event.threadID, () =>process.exit(1))