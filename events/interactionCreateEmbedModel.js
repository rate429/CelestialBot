const {ActionRowBuilder,ModalBuilder, Events, MessageFlags,TextInputBuilder,TextInputStyle } = require('discord.js');



module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        try {
            if (!interaction.isChatInputCommand()) return;


            if (interaction.commandName === "embed") {


                const modal = new ModalBuilder()
                    .setTitle("Embed Builder")
                    .setCustomId("embedTextModal")


                const title = new TextInputBuilder()
                    .setLabel("embed title")
                    .setPlaceholder("set the embed title")
                    .setCustomId("EmbedTitle")
                    .setStyle(TextInputStyle.Short)
                    .setMaxLength(60)
                    .setRequired(true)
                const content = new TextInputBuilder()
                    .setLabel("embed content")
                    .setPlaceholder("content")
                    .setStyle(TextInputStyle.Paragraph)
                    .setCustomId("EmbedContent")
                    .setRequired(false)
                const footer = new TextInputBuilder()
                    .setLabel("embed footer")
                    .setPlaceholder("set the embed footer. the text on the bottom; not required")
                    .setCustomId("EmbedFooter")
                    .setStyle(TextInputStyle.Short)
                    .setRequired(false)
                const imageurl = new TextInputBuilder()
                    .setLabel("embed image url")
                    .setPlaceholder("set the embed image. large image on the bottom; not required ")
                    .setCustomId("EmbedImageUrl")
                    .setStyle(TextInputStyle.Short)
                    .setRequired(false)
                const thumbnailurl = new TextInputBuilder()
                    .setLabel("embed thumbnail url")
                    .setPlaceholder("set the embed thumbnail url. small image in top right; not required ")
                    .setCustomId("EmbedThumbnailUrl")
                    .setStyle(TextInputStyle.Short)
                    .setRequired(false)

                modal.addComponents(new ActionRowBuilder().addComponents(title))
                modal.addComponents(new ActionRowBuilder().addComponents(content))
                modal.addComponents(new ActionRowBuilder().addComponents(footer))
                modal.addComponents(new ActionRowBuilder().addComponents(imageurl))
                modal.addComponents(new ActionRowBuilder().addComponents(thumbnailurl))

                await interaction.showModal(modal);

                const fs = require('fs'); // Required to write JSON to a file

// Retrieving values from interaction options
                const color = interaction.options.getString("color") || null;
                const hex = interaction.options.getString("hex-color") || null;

// Creating the JSON object
                const embedPacket = {
                    ecolor: color,
                    hex: hex
                };
                const userId = interaction.user.id;
// Writing the JSON object to a file
                fs.writeFile(   `${userId}-embed-packet.json`, JSON.stringify(embedPacket, null, 4), (err) => {
                    if (err) {
                        console.error('Error writing file:', err);
                    } else {
                        console.log('JSON file has been created successfully.');
                    }
                });

            }
        } catch (error) {
            console.log(`Error in ${__filename}`,error);
        }
    },
};
