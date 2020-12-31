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
    if (msg.content == 'cute'){
        msg.react("❤️") // react to msg with emoji
    }

    if (msg.content === 'ping'){ // recognize a word
        msg.channel.send("pong not tagged") // sends a message
        // msg.reply('pong!') // tags the user
    }

    if (msg.content === 'image test'){
        const url = "https://cdn.discordapp.com/attachments/750859422368006204/793161995243094056/ist-chan-face.png";
        
        var embed = new Discord.MessageEmbed();
        embed.setTitle('IST-Chan');
        embed.setColor('#d64848'); // salmao escuro
        embed.setImage(url);

        msg.channel.send(embed)
    }

    if(msg.content === '+hb'){ //${BOT_PREFIX}
        const url = "https://cdn.discordapp.com/attachments/454750342731661322/788089405733732393/416e12df-620f-48ee-af44-ce1dc6f5cfa1.png";
        
        var embed = new Discord.MessageEmbed();
        embed.setTitle('Happy Birthday!');
        embed.setColor('#ffe72e'); // amarelo 
        embed.setImage(url);

        msg.channel.send(embed)
    }
})

client.login(process.env.BOT_TOKEN)