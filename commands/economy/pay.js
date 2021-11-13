module.exports = ({
  name: "pay",
  usage: "pay <юзер> <кол-во>",
  description: "Передача денег другому участнику",
  code: `
  $title[Передача средств]
  $description[Вы передали \`$message[2]\`$ юзеру - $username[$findMember[$message[1];no]]]
  $color[$getVar[color]]
  $setUserVar[money;$sum[$getUserVar[money;$findMember[$message[1];no]];$message[2]];$findMember[$message[1];no]]
  $setUserVar[money;$sub[$getUserVar[money];$message[2]]]
  $onlyIf[$isBot[$findMember[$message[1];no]]==false;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Разве у ботов есть баланс?}]
  $onlyIf[$getUserVar[money]>=$message[2];{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Недостаточно средств!}]
  $onlyIf[$findMember[$message[1]]!=$authorID;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Может передашь другому?}]
  $onlyIf[$userExists[$findMember[$message[1];no]]==true;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Юзера не существует!}]
  $onlyIf[$checkContains[$message[2];+;-;.]==false;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Ты не можешь передать отрицательное или дробное число!}]

  $onlyIf[$message[2]>0;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Число равно или меньше нуля!}]
  $onlyIf[$isNumber[$message[2]]==true;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:  Укажи число!}]
  $argsCheck[>1;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]}{description:Укажи сумму для передачи!}]
`
  })