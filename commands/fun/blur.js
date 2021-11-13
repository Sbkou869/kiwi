module.exports = ({
  name: "blur",
  description: "Размывает аватар",
  usage: "blur (юзер)",
  code: `$djsEval[
async function trash() {
canvacord = require("canvacord")
Discord = require("discord.js")
let user = "$findUser[$message]"
let avatar = "$replaceText[$userAvatar[$findUser[$message]];.webp;.png]"
let image = await canvacord.Canvas.blur(avatar); 
let attachment = new Discord.MessageAttachment(image, "blur.gif");
        return message.channel.send(attachment);
}
trash();no]`
})