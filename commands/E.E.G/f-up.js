module.exports = ({
  name: "f-up",
  description: "Заправляет вашу АЭС на указанное кол-во урана",
 usage: "f-up <кол-во>",   
code: `
$setUserVar[fuel;$sum[$getUserVar[fuel];$multi[5;$message[1]]]]
$setUserVar[uranus;$sub[$getUserVar[uranus];$message[1]]]
$title[Успешно]
$description[Вы заправили АЭС на $multi[5;$message[1]]%]
$color[$getVar[color]]
$onlyIf[$isNumber[$message]==true;{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Аргумент не число!}]
$onlyIf[$checkContains[$message;-;+]==false;{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Символы - \`+/-\` недопустимы!}]
$onlyIf[$getUserVar[uranus]>=$message[1];{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Недостаточно урана для заправки!}]
$onlyIf[$message[1]<=20;{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Вы не можете заправить больше 20 урана!}]
$onlyIf[$getUserVar[np]!=0;{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {У вас нет АЭС!}]`
});