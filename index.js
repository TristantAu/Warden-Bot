const Discord = require("discord.js")

const TOKEN = "OTk1MzQxNjkyMDcwODA5NjQw.GMN0FW.hxiJq7tNsqJipVDSGn72_HCNmZny60PqJh_wB0"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    console.log(message)
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(TOKEN)