const fs = require("fs");
 
module.exports = (client) => 
{
    client.handle_commands = async() => 
    {
        const commandFolders = fs.readdirSync('./src/commands');
        for(const folder of commandFolders)
        {
            const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(f => f.endsWith('.js'));
            for(const file of commandFiles)
            {
                const command = require(`../../commands/${folder}/${file}`);
                client.commands.set(command.data.name, command);
                client.commandArray.push(command.data.toJSON());
                console.log("Command added: " + command.data.name);
            }
        }
    }
}