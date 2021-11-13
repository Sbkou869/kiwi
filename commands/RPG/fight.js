module.exports = ({
 name: "fight",
     description: "Creates a virtual boss fight.",
 usage: "fight",
    code: `
    $if[$random[1;3]!=3]
    $title[Boss]
$description[$username attacked the boss and got $sub[$getUserVar[def];$random[25;115]] shards from him
Loot - Nothing found]
$color[$getVar[color]]

$setUserVar[shards;$sum[$getUserVar[shards];$sub[$getUserVar[def];$random[25;115]]]]
$cooldown[15m;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Please wait %time%}]
$onlyIf[$getUserVar[def]>=150;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: You are not upgraded for a boss fight!}]

$else
$title[Boss]
$description[$username attacked the boss and got $sub[$getUserVar[def];$random[25;115]] shards from him
Loot - **LUCK** +$random[1;7]:gem:]
$color[$getVar[color]]

$setUserVar[shards;$sum[$getUserVar[shards];$sub[$getUserVar[def];$random[25;115]]]]
$setUserVar[gem;$sum[$getUserVar[gem];$random[1;7]]]
$cooldown[20m;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Please wait %time%}]
$onlyIf[$getUserVar[def]>=150;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: You are not upgraded for a boss fight!}]

$endif
`
});