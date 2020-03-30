const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
const keys = require('./keys');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!safkat') {
        axios.get("http://safk.at/?json=true")
        .then(({data}) => {
            msg.reply(JSON.stringify(data));
        })
        .catch((err) => {
            msg.reply(err);
        });
    } else if(msg.content === '!lukkari') {
        axios.get("http://safk.at/19tietob?json=true")
        .then(({data}) => {
            const strin = JSON.stringify(data);
            msg.reply(strin);
        })
        .catch((err) => {
            console.log(err);
            msg.reply(err);
        });
    }
});

client.login(keys.secret);