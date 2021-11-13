module.exports = ({
      name: "daily",
      description: "Получение бонуса каждые 24ч",
 usage: "bonus/daily",  
    aliases: ['bonus'],
    code: `
$setUserVar[money;$sum[$getUserVar[money];$multi[600;$getUserVar[dailybonus]]]]
$setUserVar[dailybonus;$sum[$getUserVar[dailybonus];1]]
$title[Ежедневный бонус]
$description[Вы получили $multi[600;$getUserVar[dailybonus]]$]
$color[$getVar[color]]
$cooldown[24h;{title: <:mg_reactno:762705435715174410> Задержка!} {color: $getVar[errorcol]} {description:Ты должен подождать $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[24h;user;bonus;$authorID;no];hours;часов;-1];minutes;минут;-1];seconds;секунд;-1];and;и;-1];second;cекунда;-1];minute;минута;-1]}]`
});