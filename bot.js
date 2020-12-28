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
        msg.react("❤️")
    }

    if (msg.content === 'ping'){
        msg.channel.send("not tagged")
        // msg.reply('pong!') // tags the user
    }
})

client.login(process.env.BOT_TOKEN)