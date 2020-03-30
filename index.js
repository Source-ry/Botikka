const Discord = require('discord.js');
const client = new Discord.Client();
const keys = require('./keys');
const func = require('./func');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!safkat') {
        func.getMenu()
        .then(data => {
            msg.reply(data);
        });
    } else if(msg.content === '!lukkari') {
        func.getSched("19tietob")
        .then(data => {
            msg.reply(data);
        });
    }
});

client.login(keys.secret);