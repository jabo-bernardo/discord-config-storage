# discord-config-storage
This is a module that stores configuration and capable for pre-server config <br>
## [Support the Developer](https://www.paypal.me/codejabo)
## Usage
```js
const { DiscordConfigStorage } = require("discord-config-storage");
```
## Example
```js
const discord = require("discord.js");
const client = new discord.Client();

// Load the module
const { DiscordConfigStorage } = require("discord-config-storage");
let configStorage = new DiscordConfigStorage("./config.json"); // Takes 1 argument which is your config file

// Trigger once the bot join a guild
client.on("guildCreate", guild => {
    configStorage.data.addGuild(guild.id); // Takes 1 argument Guild ID
    // Random config that you can use
    configStorage.data.set(guild.id, "prefix", "?"); // Takes 3 arguments <guildID> <configName> <configValue>
});

// Trigger when a message has been sent
client.on("message", msg => {

    if(msg.author.bot)
        return;

    // To get a config for a guild use <config.storage.data.guild(guildID).configName>
    if(!msg.content.startsWith(configStorage.data.guild(msg.guild.id).prefix))
        return;
    
    msg.reply("Hello");

});


// Trigger once logged in
client.on("ready", () => {

    console.log(`Logged on as ${client.user.tag}`);

});

client.login("TOKEN");

```

## Data
```js
// Load the module
const { DiscordConfigStorage } = require("discord-config-storage");
let configStorage = new DiscordConfigStorage("./config.json"); // Takes 1 argument which is your config file

configStorage.data // Returns a ConfigData Object

/*

    ConfigData
    Methods:
        guild(guildID); // Returns Object
        set(guildID, configName, configValue); // No Return
        addGuild(guildID); // No return

*/

```