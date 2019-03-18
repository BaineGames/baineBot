const Discord = require("discord.js");
const client = new Discord.Client({
  autoReconnect: true
});
const config = require("./config.json");
const allowedChannelIds = ["456117300446232578", "553550313533997057", "553257340108013568", "458217769515876352", "519915583429541918", "456109329456562187"]; //519915583429541918 is baines test channel on his server

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (allowedChannelIds.indexOf(message.channel.id) != -1) {
    let isVIP = message.member.hasPermission("MANAGE_MESSAGES");
        if (message.attachments.size == 0 && message.embeds.length == 0 && !isVIP) {
          message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author.username}`))
            .catch(console.error);
        }
  }
});

client.on("error", (e) => console.error(e));
client.login(config.token);


    // setTimeout(function () {
    //   if (message) {
    //     console.log("POST message attachments:", message.attachments);
    //     console.log("POST message embeds:", message.embeds);
    //     // let isVIP = message.channel.permissionsFor(message.author).has('MANAGE_MESSAGES');
    //     // let isVIP = message.member.hasPermission("MANAGE_MESSAGES");
    //     // if (message.attachments.size == 0 && message.embeds.length == 0 && !isVIP) {
    //     //   message.delete()
    //     //     .then(msg => console.log(`Deleted message from ${msg.author.username}`))
    //     //     .catch(console.error);
    //     // }
    //   }
    // }, 5000);
