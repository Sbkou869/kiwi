module.exports = ({
  name: "battle",
  aliases: ["fight-clan"],
  usage: "battle <юзер>",
  description: "Драка с кланом",
  code: `$if[$sum[$getGlobalUserVar[clanpoints];$getGlobalUserVar[clanusers]]>$sum[$getGlobalUserVar[clanpoints;$findUser[$message[1]]];$getGlobalUserVar[clanusers;$findUser[$message[1]]]]]
  $title[WIN!]
  $description[Вы победили клан $getGlobalUserVar[clanname;$findUser[$message[1]]] и получли $random[1;100] поинтов клана!]
  $color[$getVar[color]]
  $setGlobalUserVar[clanpoints;$sum[$getGlobalUserVar[clanpoints];$random[1;100]]]
  $else
  $title[LOSE!]
  $description[Вы проиграли клану $getGlobalUserVar[clanname;$findUser[$message[1]]] и тот клан получил $random[1;200] поинтов клана!]
  $color[$getVar[color]]
  $setGlobalUserVar[clanpoints;$sum[$getGlobalUserVar[clanpoints;$findUser[$message[1]]];$random[1;200]];$findUser[$message[1]]]
  $endif
  $onlyIf[$getGlobalUserVar[clanname;$findUser[$message[1]]]!=None;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:У этого юзера нет клана!}]
  $onlyIf[$getGlobalUserVar[clanname]!=None;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:У вас нет клана!}]
  $onlyIf[$userExists[$findUser[$message[1]]]==true;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Юзера не существует!}]
  $onlyIf[$findUser[$message]!=$authorID;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Вы не можете воевать с собой!}]
  $onlyIf[$message[1]!=;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Укажите юзера!}]
  `
})