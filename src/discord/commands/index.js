import CountDown from './Greet.js';
import { Collection } from 'discord.js';

let clientCommands = new Collection();
clientCommands.set(CountDown.data.name, CountDown);

export default clientCommands;
