module.exports.config = {
  name: "cutedp",
  version: "1.0.1",
  permssion: 0,
  prefix: true,
  credits: "ARIF-BABU",
  description: "",
  category: "Picture",
  cooldowns: 5,
  dependencies: {
        "axios": "",
        "fs-extra": ""
    }
}

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/9lidHFg.jpg","https://i.imgur.com/qrairnJ.jpg","https://i.imgur.com/VHjp32X.jpg","https://i.imgur.com/OzGaHPf.jpg","https://i.imgur.com/VSaGosg.jpg","https://i.imgur.com/YGbFYAj.jpg","https://i.imgur.com/Rwf3mjD.jpg","https://i.imgur.com/hrs30UR.jpg","https://i.imgur.com/k6HIZGe.jpg","https://i.imgur.com/myXdpx3.jpg","https://i.imgur.com/Z5ycqK5.jpg","https://i.imgur.com/llGEE3b.jpg","https://i.imgur.com/xjXbvsO.jpg","https://i.imgur.com/o1pKJC5.jpg ",
     ];
     var callback = () => api.sendMessage({body:`╭•┄┅════❁🌺❁════┅┄•╮\n•—»✨【﻿𝐅𝐀𝐈𝐙 𝐀𝐍𝐒𝐀𝐑𝐈】✨«—•\n╰•┄┅════❁🌺❁════┅┄•╯\n\n♥️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
}
