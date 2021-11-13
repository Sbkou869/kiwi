module.exports = ({
  name: "claim-income",
  code: `$setGlobalUserVar[clanmoney;$sum[$getGlobalUserVar[clanmoney];$math[$math[$getGlobalUserVar[clanpoints]*($getGlobalUserVar[clanusers]+0)]+$math[$getGlobalUserVar[clanpoints]*($getGlobalUserVar[clanusers]+5)]+$math[$getGlobalUserVar[clanpoints]*($getGlobalUserVar[clanusers]+20)]]]]
  $title[Успешно]
  $description[Создатель клана $getGlobalUserVar[clanname] собрал $math[$math[$getGlobalUserVar[clanpoints]*($getGlobalUserVar[clanusers]+0)]+$math[$getGlobalUserVar[clanpoints]*($getGlobalUserVar[clanusers]+5)]+$math[$getGlobalUserVar[clanpoints]*($getGlobalUserVar[clanusers]+20)]]$ с майнеров]
  $color[$getVar[color]]
  $onlyIf[$getGlobalUserVar[clanname]!=None;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:У вас нет клана!}]
  $onlyIf[$getGlobalUserVar[clanminer1]$getGlobalUserVar[clanminer2]$getGlobalUserVar[clanminer3]!=NoneNoneNone;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:У вас нет майнеров!}]
  $globalCooldown[1h;{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Ты должен подождать $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[1h;globalUser;claim-income;$authorID;no];hours;часов;-1];minutes;минут;-1];seconds;секунд;-1];and;и;-1];second;cекунда;-1];minute;минута;-1]}]
  `
})