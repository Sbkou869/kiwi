module.exports = ({
  name: "gay",
  aliases: ["rainbow"],
  description: "Добавляет эффект \"радуги\" к аватару",
  usage: "gay (юзер)",
  code: `$djsEval[
async function gay() {
canvacord = require("canvacord")
Discord = require("discord.js")
let user = "$findUser[$message]"
let avatar = "$replaceText[$userAvatar[$findUser[$message]];.webp;.png]"
let image = await canvacord.Canvas.rainbow(avatar); 
let attachment = new Discord.MessageAttachment(image, "gay.png");
        return message.channel.send(attachment);
}
gay();no]`
})
