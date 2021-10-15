const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete()

    let bot = new Discord.MessageEmbed()
        .setAuthor("ComplexMC","https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")
        .setTitle("Complex - Quick Links")
        .setColor(`#FF0062`)
        .addField(`Website`,`[Website](https://Complex.net/)`, true)
        .addField(`GitHub`,`[Github](https://github.com/MattDoyle1/Complex)`, true)
        .addField(`Wiki`,`[Wiki](https://wiki.Complex.net/)`, true)
        .addField(`MC-Market`,`[MC Market](https://download.Complex.net/)`, true)
        .addField(`Marketplace`,`[Marketplace](https://www.Complex.net/resources/)`, true)
        .addField(`Discord`,`[Discord](https://discord.Complex.net/)`, true)
        .setFooter(`© Complex | Owned by NASH | Developed by NASH\nCommand ran by ${message.author.username}`,"https://cdn.discordapp.com/attachments/632238663094370366/632916675808854026/profile.png")

    message.channel.send(bot)

}

