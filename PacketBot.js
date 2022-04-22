const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGE_TYPING"], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })
// .env --> which stored secret data of the bot. 
const dotenv = require('dotenv');
dotenv.config();
// We gonna get chalk
const chalk = require('chalk');
// We gonna make rich embed
const embed = new Discord.MessageEmbed()
// when the fucker bot is ready :D 
client.on('ready', () => {
	// im using chalk btw
	console.log(chalk.greenBright('[SUCCESS]'), 'PacketBot is Ready to fuck!');
});

client.login(process.env.token);



client.on('messageCreate', message => {
	if(message.author.bot) return;
	// non-prefixed commands
	// fuck this packet 
	if (message.content.toLowerCase().includes('help')) {
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
		message.reply('<#961527300313219129>'); // aka #faq
	}
	if (message.content.toLowerCase().includes('uwu')) {
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
		message.reply('no ur gay');
	}
	if (message.content.toLowerCase().includes('owo')) {
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
		message.reply('no ur gay');
	}
	if (message.content.toLowerCase().includes('how')) {
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
		message.reply('<#961527300313219129>');
	}
	if (message.content.toLowerCase().includes('cock and balls')) {
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
		message.reply('my cock and balls are rotating');
	}
	if (message.content.toLowerCase().includes('dead chat')){
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
		message.reply('then make it alive');
	}
	if (message.content.toLowerCase().includes('crash')) {
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
		message.reply('skill issue');
	}

	// i think its useless, might helpful if someone pings you.
	if (message.content.toLowerCase().includes(process.env.packetId)) {
		console.log(chalk.blueBright('[NOTICE]'), message.author.username + ": " + message.content);
		message.reply('No, stop pinging me nigger. Just wait fucker.');
	}
	if (message.content.toLowerCase().includes(process.env.founderId)) {
		console.log(chalk.blueBright('[NOTICE]'), message.author.username + ": " + message.content);
		message.reply('No, stop pinging nigger. Just wait fucker.');
	}
	if (message.content.toLowerCase().includes(process.env.deqId)) {
		console.log(chalk.blueBright('[NOTICE]'), message.author.username + ": " + message.content);
		message.reply('No, stop pinging nigger. Just wait fucker.');
	}
	if (message.content.toLowerCase().includes(process.env.xqwtxonId)) {
		console.log(chalk.blueBright('[NOTICE]'), message.author.username + ": " + message.content);
		message.reply('No, stop pinging nigger. Just wait fucker.');
	}
	// TODO: Add more if you want Packet :)
	// You can comment/remove/modify this if you want.
	

	switch(message.content){
		case process.env.prefix:
		console.log(chalk.yellowBright('[NOTICE]'), message.author.username + " they want to be retarded, because they input only (.), Did you think they have aids packet?");
		message.reply('Did you think im idiot? STFU.');
			break;

		case process.env.prefix + "ping":
		message.reply({
			embeds: [
				embed.setColor('#ffffff').setTitle('Pong!').setDescription('🏓Latency is ' + Date.now() - message.createdTimestamp +'ms. API Latency is' + Math.round(client.ws.ping) + 'ms')
			]
		});
			break;

		case process.env.prefix + "test":
		message.reply({
			embeds: [
				embed.setColor('#ffffff').setTitle('Test is Working!').setDescription('Im working dumbass.').setThumbnail(process.env.logo).setFooter({ text: 'PacketBot Development' })
			]
		});
			break;




		// COMMANDS LIST
		case process.env.prefix + "cmds":
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
			message.reply({
				embeds: [
					embed.setColor('#ffffff').setTitle('Command Categories').setDescription('**TIP**: Run \`.cmd [category_name]\` to view commands each categories!').setThumbnail(process.env.logo).addFields({ name: '\`music\`', value: 'Music Commands'},{ name: '\`mods\`', value: 'Moderatation Commands!'},{ name: '\`nsfw\`', value: 'NSFW Commands' },{ name: '\`misc\`', value: 'Misc Commands'},{ name: '\`other\`', value: 'Other Commands'}).setFooter({ text: 'PacketBot Development' })
				]
			})
			break;
		// COMMAND LIST: MUSIC 
		case process.env.prefix + "cmds music":
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
			message.reply({
				embeds: [
					embed.setColor('#ffffff').setTitle('Music Commands').setDescription('Plays song or music in current user joined voice channel!').setThumbnail(process.env.logo).addFields({ name: '\`.play [song_name/music_name]\`', value: 'Plays song/music to current user joined voice channel!'},{ name: '\`.queue [song_name/music_name]\`', value: 'Add queue to music/song will next played!'},{ name: '\`.pause\`', value: 'Pause Currently Playing!'},{ name: '\`.skip\`', value: 'Skip currently playing song/music'},{ name: '\`.lyrics [song_name]\`', value: 'Search the current song/music lyrics or Finds the song/music provided.'},{ name: '.leave', value: 'Leaves the bot in current joined voice channel!'}).setFooter({ text: 'PacketBot Development'})
				]
			})
			break;
		// COMMAND LIST: MODERATION
		case process.env.prefix + "cmds mods":
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
			message.reply({
				embeds: [
					embed.setColor('#ffffff').setTitle('Moderation Commands').setDescription('Moderates the server from users!').setThumbnail(process.env.logo).addFields({ name: '\`ban <mention/userid> [time] [reason]\`', value: 'Bans user from guild.'},{ name: '\`kick <mention/userid> [reason]\`', value: 'Kicks user from guild.'}, { name: '\`mute <mention/userid> [reason]\`', value: 'Mutes user from the guild.'}).setFooter({ text: 'PacketBot Development'})
				]
			})
			break;
		// COMMAND LIST: NSFW
		case process.env.prefix + "cmds nsfw":
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
			message.reply({
				embeds: [
					embed.setColor('#ffffff').setTitle('NSFW Commands').setDescription('NSFW Pictures/GIFs\n**It can be only used only in NSFW Channels!**').setThumbnail(process.env.logo).addFields({ name: 'hentai', value: 'NSFW Henti Pictures/GIFs'},{ /* todo */ })
				]
			})
		case process.env.prefix + "devs":
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
			message.reply({
				embeds: [
					embed.setColor('#ffffff').setTitle('Developers').setDescription('Packet Client is an MCBE Utility mod made by: Packet, Deq, Founder!\nPacket Client is a fork of the Horion Client!').setThumbnail(process.env.logo).addFields({ name: 'Packet#9609', value: 'Owner of Packet Client' },{ name: 'Founder#8300', value: 'Developer of Packet Client'},{ name: 'deq#5582', value: 'Developer of Packet Client'},{ name: 'xqwtxon#0001', value: 'Developer of PacketBot!'},{ name: 'Steve\'s Noob#2585', value: 'Original Horion Developer'},{ name: 'NRG#4200', value: 'Original Horion Developers'}).setFooter({ text: 'PacketBot Development' })
				] 
			});
			break;

		case process.env.prefix + "info":
		console.log(chalk.cyanBright('[INFO]'), message.author.username + ": " + message.content);
			message.reply({
				embeds: [
					embed.setColor('#ffffff').setTitle('Information').setDescription('PacketBot was made by xqwtxon#0001\n[Discord Server](https://discord.gg/packetv2)').setThumbnail(process.env.logo).setFooter({ text: 'PacketBot Development' })
				] 
			});
			break;

		// Staff commands
		case ".ban":
			break;
		case "kick":
			break;
		case "mute":
			break; 
		default:
			message.reply('Im not dumbass, that command doesnt exist!')
			break;
	}






	// Commands (Depricated)
	// it might be not used in future ...
	/**
	if(message.content === "."){
		console.log(chalk.yellowBright('[NOTICE]'), message.author.username + " they want to be retarded, because they input only (.), Did you think they have aids packet?");
		message.channel.send('Did you think im idiot? stfu.');
	}
	if (message.content == ".ping") {
		message.channel.send('Pong.' );
	}
	if (message.content == ".test") {
		message.channel.send('Im working dumbass.');
	}
	if (message.content == ".cmds"){
		console.log(chalk.blueBright('[INFO]'), message.author.username + ": " + message.content);
			const Embed = new Discord.MessageEmbed().setColor('#ffffff').setTitle('Command List').setDescription('**TIP**: For full information about each commands, you can type \`.cmd [command_name]\` easily!').setThumbnail(process.env.logo).addFields({ name: '.cmds [command_name]', value: 'List of commands!' },{ name: '.status', value: 'Gets current status of the bot!'},{ name: '.info', value: 'Information about bot!'},{ name: '.devs', value: 'View Currently Packet Client Developers!'},).setFooter({ text: 'Packet Dev Team', iconURL: process.env.logo });
			message.channel.send({ embeds: [Embed] })
	}
	if (message.content == ".devs"){
		console.log(chalk.blueBright('[INFO]'), message.author.username + ": " + message.content);
			const BEmbed = new Discord.MessageEmbed().setColor('#ffffff').setTitle('Packet Dev Team').setDescription('**Packet Client Developers!**').setThumbnail(process.env.logo).addFields({ name: 'Packet#9609', value: 'Owner of Packet Client' },{ name: 'Founder#8300', value: 'Developer of Packet Client'},{ name: 'deq#5582', value: 'Developer of Packet Client'},{ name: 'xqwtxon#0001', value: 'Developer of PacketBot!'},).setFooter({ text: 'Packet Dev Team', iconURL: process.env.logo });
			message.channel.send({ embeds: [BEmbed] }) // dont forget to send this embed.
	}
	*/







	////////////////////////////////////////////////////////////////////
	////															////
	////				  MADE BY PACKET DEV TEAM					////
	////			   -- Please stop skidding it. --				////
	////					   Packet#9609							////
	////															////
	////////////////////////////////////////////////////////////////////
});
