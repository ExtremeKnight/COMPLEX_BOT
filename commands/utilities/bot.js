const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete()

    let bot = new Discord.MessageEmbed()
        .setAuthor("Complex","https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")
        .setTitle("ComplexMC")
        .setThumbnail("https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")
        .setColor(`#FF0062`)
        .setDescription("This server uses [Complex](https://Complex.net), a multipurpose discord bot that is built with lots of features.\n\nCheck out our [MC-Market](https://download.Complex.net) to purchase a copy for yourself.")
        .setFooter(`© Complex | Owned by NASH | Developed by NASH\nCommand ran by ${message.author.username}`,"https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")

    message.channel.send(bot)

}

