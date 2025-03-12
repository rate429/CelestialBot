const {SlashCommandBuilder, EmbedBuilder, Embed,MessageFlags} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Starts embed building process.')
        .addStringOption(option => option
            .setName('color')

            .addChoices(
                    { name: 'Default', value: 'Default' },
                    { name: 'White', value: 'White' },
                    { name: 'Aqua', value: 'Aqua' },
                    { name: 'Green', value: 'Green' },
                    { name: 'Blue', value: 'Blue' },
                    { name: 'Yellow', value: 'Yellow' },
                    { name: 'Purple', value: 'Purple' },
                    { name: 'LuminousVividPink', value: 'LuminousVividPink' },
                    { name: 'Fuchsia', value: 'Fuchsia' },
                    { name: 'Gold', value: 'Gold' },
                    { name: 'Orange', value: 'Orange' },
                    { name: 'Red', value: 'Red' },
                    { name: 'Grey', value: 'Grey' },
                    { name: 'Navy', value: 'Navy' },
                    { name: 'DarkAqua', value: 'DarkAqua' },
                    { name: 'DarkGreen', value: 'DarkGreen' },
                    { name: 'DarkBlue', value: 'DarkBlue' },
                    { name: 'DarkPurple', value: 'DarkPurple' },
                    { name: 'DarkVividPink', value: 'DarkVividPink' },
                    { name: 'DarkGold', value: 'DarkGold' },
                    { name: 'DarkOrange', value: 'DarkOrange' },
                    { name: 'DarkRed', value: 'DarkRed' },
                    { name: 'LightGrey', value: 'LightGrey' },
                    { name: 'Blurple', value: 'Blurple' }
            )
            .setDescription('easy embed color picker refer, for custom use r,g,b options.'),

        )
        .addStringOption(option => option
            .setName('hex-color')
            .setDescription('use hex color for embed')
        ),


        
        async execute(interaction) {





        },
};