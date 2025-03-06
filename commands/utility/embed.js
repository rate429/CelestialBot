const { SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Starts embed building process.')
        .addNumberOption(option =>
            option
                .setName('red')
                .setDescription('set the red color amount for the rgb color. max 255')
                .setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName('green')
                .setDescription('set the green color amount for the rgb color. max 255')
                .setRequired(true)
        )
        .addNumberOption((option) =>
            option
                .setName('blue')
                .setDescription('set the blue color amount for the rgb color. max 255')
                .setRequired(true)
            )
        .addStringOption((option) =>
            option
                .setName("title")
                .setDescription('set the title of the embed')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option
            .setName('description')
            .setDescription('set the description of the embed')

        )
        .addStringOption((option) =>
            option
            .setName('footer')
            .setDescription('set the footer of the embed')
        )
        .addStringOption((option) =>
            option
            .setName('image')
            .setDescription('set the image of the embed')

        )
        .addStringOption((option) =>
            option
            .setName('thumbnail')
            .setDescription('set the thumbnail of the embed. bigger then image')
        ),
        async execute(interaction) {
            const title = interaction.options.getString('title');
            const description = interaction.options.getString('description');
            const footer = interaction.options.getString('footer');
            const image = interaction.options.getString('image');
            const thumbnail = interaction.options.getString('thumbnail');
            const r = interaction.options.getNumber('r');
            const g = interaction.options.getNumber('g');
            const b = interaction.options.getNumber('b');

            let embed = new EmbedBuilder()
                .setTitle(title)
                .setDescription(description)
                .setColor([r, g, b])
                .setImage(image)
                .setThumbnail(thumbnail);


            await interaction.reply({embeds: [embed]});
    },
};