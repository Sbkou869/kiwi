module.exports = ({
      name: "$alwaysExecute",
    code: `$if[$getUserVar[lvlmes]==on]
    $title[Level Up!]
$description[$username Достиг нового уровня! До следуешего уровня осталось - $getUserVar[need]! Поздравляю :D]
$color[$getVar[color]]
$setUserVar[money;$sum[$getUserVar[money];$multi[250;$getUserVar[lvl]]]]
$setUserVar[xp;0]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[need;$multi[60;$sum[$getUserVar[lvl];1]]]
$onlyIf[$getUserVar[xp]>=$multi[60;$getUserVar[lvl]]; ]
$else
$setUserVar[money;$sum[$getUserVar[money];$multi[250;$getUserVar[lvl]]]]
$setUserVar[xp;0]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[need;$multi[60;$sum[$getUserVar[lvl];1]]]
$onlyIf[$getUserVar[xp]>=$multi[60;$getUserVar[lvl]]; ]
$endif`
});