module.exports = ({
  name: "warn",
  usage: "warn <юзер>",
  description: "Предупредает юзера",
  perms: "Кик",
  code: `$title[Успешно]
  $description[Выдано предупреждение юзеру - $username[$findMember[$message[1]]]
Причина: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Отсутвует];false;$messageSlice[1]]]
$setUserVar[warnlist;$getUserVar[warnlist;$findMember[$message]]
**Предупреждение $getUserVar[warncount;$findMember[$message]]**
\`\`\`Причина: $replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Отсутствует];false;$messageSlice[1]]\`\`\`;$findMember[$message]]
$setUserVar[warncount;$sum[$getUserVar[warncount;$findMember[$message]];1];$findMember[$message]]
  $onlyIf[$userExists[$findMember[$message[1];no]]==true; {author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]}{description: Юзер не существует!}]
  $argsCheck[>1;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description: Укажите юзера!}]
  $onlyPerms[kick;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description: У вас нет прав на кик}]
  `
})