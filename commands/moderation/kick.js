module.exports = ({
  name: "kick",
  usage: "kick <юзер>",
  description: "Кикает юзера",
  perms: "Кик",
  code: `$kick[$findMember[$message;no]]
  $title[Kick]
  $description[\`$findMember[$message;no]\` был кикнут]
  $color[$getVar[color]]
  $onlyIf[$findMember[$message;no]!=$authorID;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description: Может другого?}]
  $onlyIf[$userExists[$findMember[$message;no]]==true;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description: Юзера не существует} ]
  $onlyIf[$findMember[$message]!=$clientID; {color: $getVar[errorcol]} {description:Прости, я не могу кикнуть себя.}]
  $argsCheck[1;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description: Укажите юзера!}]
$onlyPerms[kick;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Вы не имеете права на кикк}]
$onlyBotPerms[kick;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Бот не имеет права на ОкикК}]
  `
})