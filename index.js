import 'dotenv/config';
import { client } from './src/discord/index.js';

await client.login(process.env.DS_TOKEN).catch(console.error);
