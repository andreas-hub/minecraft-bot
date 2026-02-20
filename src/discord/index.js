import { Client, Events, GatewayIntentBits } from 'discord.js';
import clientCommands from './commands/index.js';
import deployCommands from './deploy-commands.js';
import guildMemberAdd from './events/guildMemberAdd.js';
import interactionCreate from './events/interactionCreate.js';

export const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.MessageContent,
    ],
});

client.commands = clientCommands;

client.on(Events.ClientReady, (readyClient) => {
    console.log(`Logged in as ${readyClient.user.tag}!`);
    deployCommands();
});

client.on(Events.InteractionCreate, interactionCreate);

client.on(Events.GuildMemberAdd, guildMemberAdd);

//client.on(Events.MessageCreate, messageCreate);
