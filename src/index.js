// Local dependencies
const GeneralResponseGeneartor = require('./response-generators/general-response-generator.js');

// discord.js init
const Discord = require('discord.js');

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

// Properties
const botName = 'El Señor No Preguntó';

client.once('ready', () => {
	console.log(`${botName} is now online!`);
});

client.on('messageCreate', (message) => {
	if (message.author.username !== botName) {
		const response = GeneralResponseGeneartor.getRandomResponse();
		if (response !== null) {
			message.channel.send(response);
		}
	}
});

client.login('OTE4NTIzMzU1MDg1Mjk5ODIy.YbIfiQ.1On3do4nc0-usNbDo2clQj7m9rU');
