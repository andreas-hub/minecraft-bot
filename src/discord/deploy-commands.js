import 'dotenv/config';
import { REST, Routes } from 'discord.js';
import clientCommands from './commands/index.js';

const rest = new REST({ version: '10' }).setToken(process.env.DS_TOKEN);
let commands = [];

clientCommands.each((command) => {
    commands.push(command.data.toJSON());
});

export default async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`);
        const data = await rest.put(Routes.applicationCommands(process.env.DS_CLIENT_ID), {
            body: commands,
        });
        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        console.error(error);
    }
};
