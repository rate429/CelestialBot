const { Events,ActivityType } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    async execute(client) {
        await client.user.setActivity('/help | ROK', { type: ActivityType.Playing});
    },
};