const Discord = require('discord.js');
const client = new Discord.Client();
const keys = require('./keys');
const func = require('./func');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    const split = msg.content.split(".");
    if (split[0] === '!safkat') {
        func.getMenu()
        .then(data => {
            msg.reply("\n" + data);
        });
    } else if(split[0] === '!lukkari') {
        func.getSched(split[1])
        .then(data => {
            msg.reply("\n" + data);
        });
    }
});

client.login(keys.secret);