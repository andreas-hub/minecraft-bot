import { SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder().setName('greet').setDescription('Greeter.'),
    async execute(interaction) {
        await interaction.reply('Hello World!');
    },
};
