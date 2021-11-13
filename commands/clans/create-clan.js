module.exports = ({
  name: "create-clan",
  code: `$setGlobalUserVar[clanname;$message[1]]
$setGlobalUserVar[clanusers;1]
$setGlobalUserVar[clanowner;$userTag[$authorID]]
$title[Успешно]
$description[Гильдия **$message[1]** сспешно создана!]
$color[$getVar[color]]
$onlyIf[$getUserVar[money]>=10000;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Недостаточно средств
!}]
$onlyIf[$getGlobalUserVar[clanforuser]==None;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Вы уже есть в клане!}]
$onlyIf[$getGlobalUserVar[clanname]==None;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:У вас уже есть клан!}]
$argsCheck[>1;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Укажите название для гильдии!}]`
})