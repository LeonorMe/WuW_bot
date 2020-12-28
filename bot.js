require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    partials: ["MESSAGE"] 
})

const BOT_PREFIX = '+' // '${BOT_PREFIX}${MOD_ME_COMAND}'
//const MOD_ME_COMAND ='mod-me'

client.on('ready', () => {
    console.log('Bot ready to go')
})

client.on('messageDelete', msg => {
    msg.channel.send("I saw that! Stop deleting messages.")
})

client.on('message', msg => {
    if (msg.content == 'i love you'){
        msg.react("❤️") // react to msg with emoji
    }

    if (msg.content === 'ping'){ // recognize a word
        msg.channel.send("pong not tagged") // sends a message
        // msg.reply('pong!') // tags the user
    }

    if (msg.content === 'test'){
        const url = "https://cdn.discordapp.com/attachments/750859422368006204/793161995243094056/ist-chan-face.png" ({size: 500});
        
        var embed = new Discord.MessageEmbed();
        embed.setTitle('IST-Chan');
        embed.setColor('#d64848');
        embed.setImage(url);

        msg.channel.send(embed)
    }
})

client.login(process.env.BOT_TOKEN)