import { EmbedBuilder } from 'discord.js';

export default async (member) => {
    console.log(`${member.user} joined the server!`);
    console.log(member);

    if (member.guild.id === process.env.DS_MINERS_FARMERS_ID) {
        const message = new EmbedBuilder()
            .setColor(0x5ced76)
            .setTitle(`Hey ${member.user.globalName} welcome to Miners & Farmers.`)
            .setDescription('Grab a pickaxe and make yourself at home! ⛏️😄')
            .setImage(member.user.avatarURL())

        await member.client.channels.cache
            .get(process.env.DS_MINERS_FARMERS_WELCOME_CH)
            .send({ embeds: [message] });
    }
};
