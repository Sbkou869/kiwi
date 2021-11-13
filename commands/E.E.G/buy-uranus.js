module.exports = ({
      name: "buy-uranus",
      description: "Выдает тебе 5 урана за 25 тысяч",
 usage: "b-uranus",
    code: `
$title[Успешно!]
$description[Вы купили 5 урана за 25 тысяч!]
$color[$getVar[color]]
$setUserVar[money;$sub[$getUserVar[money];25000]]
$setUserVar[uranus;$sum[$getUserVar[uranus];5]]
$onlyIf[$getUserVar[money]>=25000;{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Недостаточно средств! ($getUserVar[money]/25000)}]`
});