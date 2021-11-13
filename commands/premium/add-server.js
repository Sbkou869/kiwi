module.exports = ({
  name: "add-server",
  usage: "add-server",
  description: "Добавленияе сервера в PSL",
  code: `$channelSendMessage[820380228278943804;{title:PSL (Premium Servers List)} {description:**Сервер:** $serverName
**ID:** $guildID
**Инвайт:** $getServerInvite} {color:$getVar[color]};no]
$onlyPerms[manageserver;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Вы не имеете прав на управление сервером!}]
$onlyIf[$getServerVar[premium]!=false; ]`
})