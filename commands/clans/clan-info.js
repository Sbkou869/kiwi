module.exports = ({
  name: "clan",
  code: `$if[$getGlobalUserVar[clanforuser]==None]
$title[Инфо о гильдии: $getGlobalUserVar[clanname]]
$description[Создатель: $getGlobalUserVar[clanowner]]
$addField[:moneybag: Деньги в гильдии:;$getGlobalUserVar[clanmoney]$]
$addField[:sparkles: Опыт гильдии:;$getGlobalUserVar[clanpoints] :sparkles:]
$addField[:bust_in_silhouette: Участники гильдии:;$getGlobalUserVar[clanusers] :bust_in_silhouette:]
$addField[:moneybag: Майнеры:;**Майнер 1:** $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[clanminer1]==None];true;отсутствует;-1];false;$math[$getGlobalUserVar[clanpoints]*$getGlobalUserVar[clanusers]];-1]$/час
**Майнер 2:** $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[clanminer2]==None];true;отсутствует;-1];false;$math[$getGlobalUserVar[clanpoints]*($getGlobalUserVar[clanusers]+5)];-1]$/час
**Майнер 3:** $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[clanminer3]==None];true;отсутствует;-1];false;$math[$getGlobalUserVar[clanpoints]*($getGlobalUserVar[clanusers]+20)];-1]$/час]
$color[$getVar[color]]
 $onlyIf[$getGlobalUserVar[clanname]!=None;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:У вас нет клана!}]
$else 
$title[Инфо о гильдии: $getGlobalUserVar[clanname;$getGlobalUserVar[clanforuser]]]
$description[Создатель: $getGlobalUserVar[clanowner;$getGlobalUserVar[clanforuser]]]
$addField[:sparkles: Опыт гильдии:;$getGlobalUserVar[clanpoints;$getGlobalUserVar[clanforuser]] :sparkles:]
$addField[:bust_in_silhouette: Участники гильдии:;$getGlobalUserVar[clanusers;$getGlobalUserVar[clanforuser]] :bust_in_silhouette:]
$color[$getVar[color]]
$endif
`
})