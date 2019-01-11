const Discord = require("discord.js");
const client = new Discord.Client({
  autoReconnect: true
});
const config = require("./config.json");
const allowedChannelIds = ["456117300446232578", "458217769515876352", "519915583429541918", "456109329456562187", "457097244852879360"]; //519915583429541918 is baines test channel on his server


client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (allowedChannelIds.indexOf(message.channel.id) != -1) {
    setTimeout(function () {
      if (message) {
        let isVIP = message.channel.permissionsFor(message.author).has('MANAGE_MESSAGES');
        if (message.attachments.size == 0 && message.embeds.length == 0 && !isVIP) {
          message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author.username}`))
            .catch(console.error);
        }
      }
    }, 5000);
  }
});

client.on("error", (e) => console.error(e));
client.login(config.token);