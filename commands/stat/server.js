module.exports = ({
      name: "server",
          description: "Shows server statistics.",
 usage: "server",
    aliases: ['guild'],
    code: `
$title[Сервер: $serverName]
  $thumbnail[$serverIcon]
 
  $addField[Другое;• **Количество банов** - $replaceText[$replaceText[$hasPerms[$clientID;ban];false;error];true;$banCount]
• **Эмодзи** - $emojiCount
• **Ролей** - $roleCount
• **Системный канал** - $replaceText[$replaceText[$isNumber[$systemChannelID];false;none];true;<#$systemChannelID>];no]
   $addField[О сервере;• **Владелец** - $username[$ownerID]
• **Дата создания** - $djsEval[time = require("strftime")
let day = 1000 * 60 * 60 * 24
let date1 = new Date(message.createdTimestamp)
let date2 = new Date(message.guild.createdTimestamp)
let days = Math.round(Math.abs((date1.getTime()-date2.getTime())/day))
time("%d.%m.%Y - %H:%M:%S", new Date(message.guild.createdTimestamp));yes] ($djsEval[let day = 1000 * 60 * 60 * 24
let date1 = new Date(message.createdTimestamp)
let date2 = new Date(message.guild.createdTimestamp)
let days = Math.round(Math.abs((date1.getTime()-date2.getTime())/day))
days;yes] дней назад)
• **Уровень верификации** - $serverVerificationLevel
• **Регион** - $serverRegion;yes]
  $addField[Каналы (Всего: $channelCount);<:text:815564331629412352> **Текстовых** - $channelCount[text]
<:voice:815564247517626388> **Голосовых** - $channelCount[voice]
<:category:815564242550915093> **Категорий** - $channelCount[category];no]
$addField[Подробности о статусах;<:online:831843109850710036> **В сети** - $membersCount[$guildId;online]
<:idle:831843168613302292> **Не активен** - $membersCount[$guildId;idle]
<:dnd:831843229032513576> **Не беспокоить** - $membersCount[$guildId;dnd]
<:offline:831843297336492053> **Не в сети**- $membersCount[$guildId;offline];yes]
$addField[Пользователи;<:rules:815564316010217472> **Всего** - $membersCount
<:user_aue:817840607087165451> **Людей** - $sub[$membersCount;$botCount]
<:bot:815564333786464257> **Ботов** - $botCount;yes]
$color[$getVar[color]]
`
})