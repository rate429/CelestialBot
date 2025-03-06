const { SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Starts embed building process.'),
    
        
        async execute(interaction) {
            console.log("using model refer to the interaction event. ")
    },
};