// ?n-e $replaceText[$jsonRequest[https://api.f1r3.tk/translate?to=ru?text=Lendory+is+good+coder!;res] ;+;;-1]
module.exports = ({
      name: "rank",
      description: "Your rank",
 usage: "rank (user)",
    code: `$djsEval[const canvacord = require("canvacord")
const Discord = require("discord.js")
img = message.author.avatarURL({size: 2048, dynamic: true}).replace("webp", "png")
let data = {
"avatar": "$replaceText[$userAvatar[$findUser[$message]];webp;png]",
"xp": "$getUserVar[xp;$findUser[$message]]",
"lvl": "$getUserVar[lvl;$findUser[$message]]",
"need": "$getUserVar[need;$findUser[$message]]",
"name": "$username[$findUser[$message]]",
"tag": "$discriminator[$findUser[$message]]",
"rank": "$getLeaderboardInfo[lvl;$findUser[$message[1]];user]"
}
const rank = new canvacord.Rank()
    .setRank(parseInt(data.rank))
    .setLevel(parseInt(data.lvl))
    .setAvatar(data.avatar)
    .setCurrentXP(parseInt(data.xp))
    .setRequiredXP(parseInt(data.need))
    .setProgressBar("#5865F2", "COLOR")
    .setCustomStatusColor("5865F2")
    .setBackground(
        "IMAGE", "https://i.imgur.com/qnja3OB.png"
    )
    .setUsername(data.name)
    .setDiscriminator(data.tag);
rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "RankCard.png");
        message.channel.send(attachment);
    });;no]`
})