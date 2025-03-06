const { REST, Routes } = require('discord.js');
const env = require('dotenv').config();

const rest = new REST().setToken(process.env.TOKEN);



// for guild-based commands
rest.put(Routes.applicationGuildCommands(process.env.clientid, process.env.guildid), { body: [] })
    .then(() => console.log('Successfully deleted all guild commands.'))
    .catch(console.error);