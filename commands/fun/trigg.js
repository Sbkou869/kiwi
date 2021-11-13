module.exports = ({
  name: "triggered",
  aliases: ["trigg"],
  description: "Триггерит аватар",
  usage: "triggered (юзер)",
  code: `$djsEval[
async function trash() {
canvacord = require("canvacord")
Discord = require("discord.js")
let user = "$findUser[$message]"
let avatar = "$replaceText[$userAvatar[$findUser[$message]];.webp;.png]"
let image = await canvacord.Canvas.trigger(avatar); 
let attachment = new Discord.MessageAttachment(image, "trigg.gif");
        return message.channel.send(attachment);
}
trash();no]`
})