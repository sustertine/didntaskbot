// import * as staticFile from '../assets/static.json'
// import { Message } from "discord.js";

const botName = "El Señor No Preguntó";

const Discord = require("discord.js");

// Instance of Discord client
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "GUILD_EMOJIS_AND_STICKERS",
  ],
});

let test = true;

client.once("ready", () => {
  console.log("Ready to serve.");
});

client.on("messageCreate", (message) => {
  if (test) {
    message.channel.send("Didntask");
    test = false;
  }
});

// Last line
client.login("OTE4NTIzMzU1MDg1Mjk5ODIy.YbIfiQ.CDp-TeJldpKcjvcy82GVgpIgE-w");
// client.login(staticFile.auth.botToken)
