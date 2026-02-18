import { Client, Events, GatewayIntentBits } from 'discord.js';
import clientCommands from './commands/index.js';
import deployCommands from './deploy-commands.js';

export const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = clientCommands;

client.on(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
  deployCommands();
});

client.on(Events.InteractionCreate, async (interaction) => {
  if (interaction.isChatInputCommand()) {
      const command = interaction.client.commands.get(interaction.commandName);

      if (!command) {
          console.error(`No command matching ${interaction.commandName} was found.`);
          return;
      }

      try {
          await command.execute(interaction);
      } catch (error) {
          console.error(error);
          if (interaction.replied || interaction.deferred) {
              await interaction.followUp({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
          } else {
              await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
          }
      }
  }

});

client.on(Events.MessageCreate, console.log);
