module.exports = ({
  name: "ui",
  usage: "ui/user/userinfo (юзер)",
  description: "Выдает инфо об юзере",
  aliases: ['user', 'userinfo'],
  code: `
  $thumbnail[$userAvatar[$findUser[$message[1]]]]
  $title[Юзер - $username[$findUser[$message[1]]]]
  $description[**Имя** - $username[$findUser[$message[1]]] $replaceText[$replaceText[$checkCondition[$nickname[$findUser[$message]]==$username[$findUser[$message]]];true; ];false;($nickname[$findUser[$message]])]
**Статус** - $replaceText[$replaceText[$replaceText[$replaceText[$status[$findUser[$message[1]]];online;<:online:831843109850710036> Онлайн];offline;<:offline:831843297336492053> Оффлайн];idle;<:idle:831843168613302292> АФК];dnd;<:dnd:831843229032513576> Не беспокоить]
**Платформа** - $replaceText[$replaceText[$replaceText[$replaceText[$platform[$findUser[$message[1]]];none;:question: (Не в сети)];web;:page_facing_up: Браузер];mobile;:mobile_phone: Телефон];desktop;:desktop: Компьютер]
**Зашел** - $djsEval[time = require("strftime")
let user = "$findUser[$message]"
let day = 1000 * 60 * 60 * 24
let date1 = new Date(message.createdTimestamp)
let date2 = new Date(message.guild.member(user).joinedTimestamp)
let days = Math.round(Math.abs((date1.getTime()-date2.getTime())/day))
time("%d.%m.%Y - %H:%M:%S", new Date(message.guild.member(user).joinedTimestamp));yes] ($djsEval[let day = 1000 * 60 * 60 * 24
let user = "$findUser[$message]"
let date1 = new Date(message.createdTimestamp)
let date2 = new Date(message.guild.member(user).joinedTimestamp)
let days = Math.round(Math.abs((date1.getTime()-date2.getTime())/day))
days;yes] дней назад) 
**Дата создания** - $djsEval[time = require("strftime")
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get("$message[1]"))
            let user
    if (member) user = member.user
    else user = message.author
let day = 1000 * 60 * 60 * 24
let date1 = new Date(message.createdTimestamp)
let date2 = new Date(user.createdTimestamp)
let days = Math.round(Math.abs((date1.getTime()-date2.getTime())/day))
time("%d.%m.%Y - %H:%M:%S", new Date(user.createdTimestamp));yes] ($djsEval[let day = 1000 * 60 * 60 * 24
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get("$message[1]"))
            let user
    if (member) user = member.user
    else user = message.author
let date1 = new Date(message.createdTimestamp)
let date2 = new Date(user.createdTimestamp)
let days = Math.round(Math.abs((date1.getTime()-date2.getTime())/day))
days;yes] дней назад)]
$footer[ID: $findUser[$message]]
  $color[$getVar[color]]

  `
})