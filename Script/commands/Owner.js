module.exports.config = {
 name: "owner",
 version: "1.0.1",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
 description: "Owner information command with styled box",
 commandCategory: "Information",
 usages: "",
 cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
 const ownerInfo = 
`╔═════════════════════╗
║ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 
╠═════════════════════╣
║ 👤 𝗡𝗮𝗺𝗲 :  𝐏𝐑𝐈𝐘𝐎 𝐂𝐇𝐎𝐖𝐃𝐇𝐔𝐑𝐘
║ 🧸 𝗡𝗶𝗰𝗸 𝗡𝗮𝗺𝗲 : 𝐏𝐑𝐈𝐘𝐎 
║ 🎂 𝗔𝗴𝗲 : 𝟭𝟴+
║ 💘 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 : 𝗦𝗶𝗻𝗴𝗹𝗲
║ 🎓 𝗣𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻 : JOBS
║ 📚 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 : NOT💥
║ 🏡 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : NOAKHALI
╠═════════════════════╣
║ 𝗖𝗢𝗡𝗧𝗔𝗖𝗧 𝗟𝗜𝗡𝗞𝗦 
╠═════════════════════╣
║ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 
║ https://fb.com/61574809551672
║ 💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿 : 
║ m.me/61574809551672
║ 📞 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 : 
║ https://wa.me/01609748938
║ ✈️ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 : 
║ 
╚═════════════════════╝`;

 return api.sendMessage(ownerInfo, event.threadID, event.messageID);
};
