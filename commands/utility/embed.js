const {SlashCommandBuilder, EmbedBuilder, Embed,MessageFlags} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Starts embed building process.'),

        
        async execute(interaction) {
            interaction.channel
            interaction.deferReply({ephemeral: true});
            const embed = new EmbedBuilder()
            .setName('Make a new embed!')
            .setDescription('')

        },
};