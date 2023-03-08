require("dotenv").config();
const fs = require("fs");
const auth_token = "MTA4Mjc4NzQwOTUxMjY0NDcyMg.Gcf8aO.iyhmkcvjhJYxhacfLqQXRZyTL9wk8rPN7MuZEA";
const {Client, Collection, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: GatewayIntentBits.Guilds })
client.commands = new Collection();
client.commandArray = [];


const function_folders = fs.readdirSync(`./src/functions`);

for(const folder of function_folders)
{
    const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));

    for(const file of functionFiles)
    {
        require(`./functions/${folder}/${file}`)(client);
    }
}

client.handle_events();
client.handle_commands();
client.login(auth_token);
