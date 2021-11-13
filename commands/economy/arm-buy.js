module.exports = ({
  name: "arm-buy", 
  description: "Покупка брони за указаную стоимость",
 usage: "arm-buy <id брони>",
code: `
$setUserVar[money;$sub[$getUserVar[money];$getServerVar[armc$message]]]
$setUserVar[armor;$getServerVar[arm$message]]
$setUserVar[def;$getServerVar[armd$message]]
$title[Успешно]
$description[Вы купили $getServerVar[arm$message]]
$color[$getVar[color]]
$onlyIf[$getUserVar[money]>=$getServerVar[armc$message[1]];{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Недостаточно средств
!}]
$onlyIf[$getUserVar[def]<$getServerVar[armd$message[1]];{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Ваша броня лучше этой!}]
$argsCheck[>1;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Укажите ID слота!}]
$suppressErrors[{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Данной брони не существует!}]`
});
