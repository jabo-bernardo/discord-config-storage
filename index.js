const fs = require("fs");

class ConfigData {

    constructor(data, configFile) {
        this._configFile = configFile;
        this._data = data;
    }

    guild(guildID) {
        return this._data[guildID];
    }

    set(guildID, key, value) {
        this._data[guildID][key] = value;
        fs.writeFileSync(this._configFile, JSON.stringify(this._data));
    }

    addGuild(guildID) {
        this._data[guildID] = {};
        fs.writeFileSync(this._configFile, JSON.stringify(this._data));
    }

}

class DiscordConfigStorage {

    constructor(configFile) {
        this._configFile = configFile;
        this._data = JSON.parse(fs.readFileSync(configFile, "utf-8"))
    }

    get data() {
        this._data = JSON.parse(fs.readFileSync(this._configFile, "utf-8"))
        return new ConfigData(this._data, this._configFile);
    }

}

module.exports = {
    DiscordConfigStorage,
    ConfigData
}