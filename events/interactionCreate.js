const {ActionRowBuilder,ModalBuilder, Events, MessageFlags,TextInputBuilder,TextInputStyle } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }

        try {
            if (interaction.commandName === "embed") {
                const modal = new ModalBuilder()
                    .setTitle("embedBuilder")
                    .setCustomId("embeddata")

                const embedTitle = new TextInputBuilder()
                    .setMaxLength(100)
                    .setStyle(TextInputStyle.Short)
                    .setRequired()
                    .setLabel("embed title")
                    .setCustomId("embedTitle")
                const embedDiscription = new TextInputBuilder() 
                    .
            }
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
            } else {
                await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
            }
        }
    },
};
