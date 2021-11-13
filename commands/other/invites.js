module.exports = ({
  name: "invites",
  aliases: ["invite"],
  usage: "invites",
  description: "Выдает ссылки на бота и на сервер",
  code: `
  $title[Приглашения]
  $addField[Сервер:;[Tap](https://discord.gg/jA42VcNnX8)]
  $addField[Бот (без прав):;[Tap]($getBotInvite)]
  $addField[Бот (админ права):;[Tap]($getBotInvite[admin])]
  $image[https://cdn.discordapp.com/attachments/874915982009839626/888018140552904704/standard.gif]
  $color[$getVar[color]]
  `
})