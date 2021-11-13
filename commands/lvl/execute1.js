module.exports =({
      name: "$alwaysExecute",
    code: `$setUserVar[xp;$sum[$getUserVar[xp];$random[1;10]]]
    $onlyIf[$isBot[$authorID]==false; ]
    $cooldown[8s; ]`
});