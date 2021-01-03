require("dotenv").config();
require("http")
  .createServer(async (req, res) => {
    res.statusCode = 200;
    res.write("ok");
    res.end();
  })
  .listen(3000, () => console.log("Now listening on port 3000"));
const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log(`BBot is online!`);
});

var B = [];

var M1 = process.env.NAME1;
var M2 = process.env.NAME2;
var M3 = process.env.NAME3;
var M4 = process.env.NAME4;
var M5 = process.env.NAME5;
var M6 = process.env.NAME6;
var M7 = process.env.NAME7;
var M8 = process.env.NAME8;
var M9 = process.env.NAME9;
var M10 = process.env.NAME10;
var M11 = process.env.NAME11;

var S = process.env.S;
var N = process.env.N;

client.on("message", (message) => {
  if (message.content === process.env.WORD) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.length > 0) {
      message.channel.send(process.env.WEEK);
      for (let i = 0; i < B.length; i++) {
        message.channel.send(i + 1 + " - " + B[i]);
      }
    } else {
      message.channel.send(process.env.NOTH);
    }
  } else if (message.content === "bc") {
    console.log(`[${message.author.tag}]: ${message.content}`);
    message.channel.send(process.env.COM);
  } else if (message.content === process.env.ADD2) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (!B.includes(M2)) {
      B.push(M2);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.ADD9) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (!B.includes(M9)) {
      B.push(M9);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.ADD5) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (!B.includes(M5)) {
      B.push(M5);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.ADD6) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (!B.includes(M6)) {
      B.push(M6);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.ADD4) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (!B.includes(M4)) {
      B.push(M4);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.ADD10) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (!B.includes(M10)) {
      B.push(M10);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.ADD3) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (!B.includes(M3)) {
      B.push(M3);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.ADD8) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (!B.includes(M8)) {
      B.push(M8);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.ADD7) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (!B.includes(M7)) {
      B.push(M7);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.ADD1) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (!B.includes(M1)) {
      B.push(M1);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.ADD11) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (!B.includes(M11)) {
      B.push(M11);
      message.channel.send("Done");
    }
  } else if (message.content === "ضيف الكل") {
    console.log(`[${message.author.tag}]: ${message.content}`);
    B = [];
    B.push(M1, M11, M2, M5, M4, M6, M3, M7, M8, M10, M9);
    message.channel.send("Done");
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  else if (message.content === process.env.DEL2) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.includes(M2)) {
      B.pop(M2);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.DEL9) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.includes(M9)) {
      B.pop(M9);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.DEL5) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.includes(M5)) {
      B.pop(M5);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.DEL6) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.includes(M6)) {
      B.pop(M6);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.DEL4) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.includes(M4)) {
      B.pop(M4);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.DEL10) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.includes(M10)) {
      B.pop(M10);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.DEL3) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.includes(M3)) {
      B.pop(M3);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.DEL8) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.includes(M8)) {
      B.pop(M8);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.DEL7) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.includes(M7)) {
      B.pop(M7);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.DEL1) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.includes(M1)) {
      B.pop(M1);
      message.channel.send("Done");
    }
  } else if (message.content === process.env.DEL11) {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.includes(M11)) {
      B.pop(M11);
      message.channel.send("Done");
    }
  } else if (message.content === "إحذف الكل") {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if (B.length > 0) {
      B = [];
      message.channel.send("Done");
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////
  else if (message.content === S) {
    console.log(`${message.content}`);
    message.channel.send("<@!187131318755131392>");
  } else if (message.content === "ازعج السيمب") {
    console.log(`${message.content}`);
    for (let i = 0; i < 10; i++) {
      setTimeout(function () {
        client.users.get("<@!183220336786014209>").send("سلام");
      }, 500);
    }
  }

  //////////////////////////////////////////////////////////////////////////////////////////////

  // 791340426372055052;

  // let channel_1 = message.guild.channels.cache.get("791340426372055052");
  // console.log(channel_1);

  // 791340556906659892;

  console.log("HERE");
  let channel_1 = client.channels.cache.get("791340426372055052");
  console.log(channel_1.name + " " + channel_1.id);

  let channel_2 = client.channels.cache.get("791340556906659892");
  console.log(channel_2.name + " " + channel_2.id);

  function moveToChannelTwo() {
    channel_1.members.forEach((e) => {
      console.log("Members moves to Channel 2 ");
      e.voice.setChannel(channel_2);

      setTimeout(moveToChannelOne, 1000);
    });
  }

  function moveToChannelOne() {
    channel_2.members.forEach((e) => {
      console.log("Members moves to chanel 1");
      setTimeout(function () {
        e.voice.setChannel(channel_1);
      }, 1000);
    });
  }

  setInterval(moveToChannelTwo, 3000);
});
//we return a message that operation went successful
//return message.channel.send("Everyone was moved!")

B.sort();
client.login(process.env.TOKEN);
