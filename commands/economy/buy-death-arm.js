module.exports = ({
  name: "buy-death-arm", 
  description: "Покупка брони за указаную стоимость",
 usage: "buy-death-arm <id брони>",
code: `
$setUserVar[dc;$sub[$getUserVar[money];$getServerVar[armcdc$message]]]
$setUserVar[armor;$getServerVar[armndc$message]]
$setUserVar[def;$getServerVar[armdc$message]]
$title[Покупка]
$description[Ты купил - $getServerVar[armndc$message]]
$color[$getVar[color]]
$onlyIf[$getUserVar[dc]>=$getServerVar[armcdc$message[1]];{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Недостаточно средств!}]
$onlyIf[$getUserVar[def]<$getServerVar[armdc$message[1]];{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Ваша броня лучше этой!}]
$argsCheck[>1;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Укажите ID слота!}]
$suppressErrors[{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Данного слота не существует!}]` 
});