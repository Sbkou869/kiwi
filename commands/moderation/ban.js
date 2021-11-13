module.exports = ({
      name: "ban",
      description: "Банит юзера",
 usage: "ban <юзер>",
 perms: "Бан",
    code: `
$ban[$findMember[$message;no]]
$title[Бан!]
$color[$getVar[color]]
$description[$username[$findMember[$message;no]] забанен на сервере]
  $onlyIf[$findMember[$message;no]!=$authorID;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description: Может другого?}]
  $onlyIf[$userExists[$findMember[$message;no]]==true;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description: Юзера не существует} ]
  $onlyIf[$findMember[$message]!=$clientID; {color: $getVar[errorcol]} {description:Прости, я не могу забанить себя.}]
  $argsCheck[1;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description: Укажите юзера!}]
$onlyPerms[ban;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Вы не имеете права на бан}]
$onlyBotPerms[ban;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Бот не имеет права на бан}]
`
});