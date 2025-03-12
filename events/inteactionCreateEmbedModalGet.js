const {ActionRowBuilder,ModalBuilder, Events, MessageFlags,TextInputBuilder,TextInputStyle, EmbedBuilder,} = require('discord.js');
const {data} = require("../commands/utility/embed");
const fs = require('fs');




// Reading and processing the JSON file

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        try {
            if (!interaction.isModalSubmit()) return;
            const title = interaction.fields.getTextInputValue('EmbedTitle');

            // Required to interact with the file system
            const userId = interaction.user.id;
            const jsonData = JSON.parse(fs.readFileSync(`${userId}-embed-packet.json`, 'utf8'));

// Access the value of "ecolor"
            let ecolor = jsonData.ecolor; // Fallback to null if "ecolor" does not exist
            const hex = jsonData.hex;


            const footer = interaction.fields.getTextInputValue('EmbedFooter');
            const thumbnail = interaction.fields.getTextInputValue('EmbedThumbnailUrl');
            const image = interaction.fields.getTextInputValue('EmbedImageUrl')


// Reading and processing the JSON file


            const embed = new EmbedBuilder()
                .setTitle(title)

                .setDescription(interaction.fields.getTextInputValue('EmbedContent'))


            if (thumbnail) {
                embed.setThumbnail(thumbnail);
            }
            if (image) {
                embed.setImage(image)
            }
            if (footer) {
                embed.setFooter({text: `${footer}`, iconURL: interaction.user.displayAvatarURL()})
            }

            switch (ecolor) {
                case 'Default':
                    embed.setColor('Default');
                    break;
                case 'White':
                    embed.setColor('White');
                    break;
                case 'Aqua':
                    embed.setColor('Aqua');
                    break;
                case 'Green':
                    embed.setColor('Green');
                    break;
                case 'Blue':
                    embed.setColor('Blue');
                    break;
                case 'Yellow':
                    embed.setColor('Yellow');
                    break;
                case 'Purple':
                    embed.setColor('Purple');
                    break;
                case 'LuminousVividPink':
                    embed.setColor('LuminousVividPink');
                    break;
                case 'Fuchsia':
                    embed.setColor('Fuchsia');
                    break;
                case 'Gold':
                    embed.setColor('Gold');
                    break;
                case 'Orange':
                    embed.setColor('Orange');
                    break;
                case 'Red':
                    embed.setColor('Red');
                    break;
                case 'Grey':
                    embed.setColor('Grey');
                    break;
                case 'Navy':
                    embed.setColor('Navy');
                    break;
                case 'DarkAqua':
                    embed.setColor('DarkAqua');
                    break;
                case 'DarkGreen':
                    embed.setColor('DarkGreen');
                    break;
                case 'DarkBlue':
                    embed.setColor('DarkBlue');
                    break;
                case 'DarkPurple':
                    embed.setColor('DarkPurple');
                    break;
                case 'DarkVividPink':
                    embed.setColor('DarkVividPink');
                    break;
                case 'DarkGold':
                    embed.setColor('DarkGold');
                    break;
                case 'DarkOrange':
                    embed.setColor('DarkOrange');
                    break;
                case 'DarkRed':
                    embed.setColor('DarkRed');
                    break;
                case 'LightGrey':
                    embed.setColor('LightGrey');
                    break;
                case 'Blurple':
                    embed.setColor('Blurple');
                    break;
                case null:
                    embed.setColor("Random")
            }
            if (hex) {
                embed.setColor(hex);
            }
            console.log(ecolor)
            interaction.reply({embeds: [embed]});


        } catch (error) {
            console.log(`Error in ${__filename}`,error);
        }
    },
};
