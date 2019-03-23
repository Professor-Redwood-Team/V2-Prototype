const Discord = require('discord.js');
const logger = require('../utils/logger');

const client = new Discord.Client();
const token = process.env.TOKEN;

client.on('ready', () => {
  logger.info('Initialized Bot')
});

client.login(token);