module.exports = ({
 name: "work",
 description: "Получение рандомного кол-во монет",
 usage: "work",
 code: `
$title[Работа]
$description[Вы заработали $sum[$getUserVar[bonusmoney];$random[100;1500]]$]
$color[$getVar[color]]
$setUserVar[money;$sum[$getUserVar[money];$sum[$getUserVar[bonusmoney];$random[100;1500]]]]
$cooldown[25m;{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Ты должен подождать $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[20m;user;work;$authorID;no];hours;часов;-1];minutes;минут;-1];seconds;секунд;-1];and;и;-1];second;cекунда;-1];minute;минута;-1]}]`
});