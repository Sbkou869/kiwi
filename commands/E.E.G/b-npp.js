module.exports = ({
     name: "buy-npp",
        description: "Выдает тебе АЭС за 250 тысяч",
 usage: "b-npp", 
    code: `
$title[Успешно]
$description[Вы купили АЭС за 250 тысяч]
$color[$getVar[color]]
$setUserVar[np;1]
$onlyIf[$getUserVar[money]>=250000;{title: <:mg_reactno:762705435715174410> Ошибка!} {description: Недостаточно средств ($getUserVar[money]/250000)} {color: #fc0000}]
$onlyIf[$getUserVar[np]==0;{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: У вас уже есть АЭС!}]`
});