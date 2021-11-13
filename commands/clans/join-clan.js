module.exports = ({
  name: "join-clan",
  code: `$setGlobalUserVar[clanforuser;$findUser[$message[1]];$authorID]
  $setGlobalUserVar[clanusers;$sum[$getGlobalUserVar[clanusers;$findUser[$message[1]]];1];$findUser[$message[1]]]
  $title[Успешно!]
  $description[Вы зашли в клан **$getGlobalUserVar[clanname;$findUser[$message[1]]]**]
  $color[$getVar[color]]
   $onlyIf[$getGlobalUserVar[clanforuser]==None;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Вы уже есть в клане!}]
  $onlyIf[$getGlobalUserVar[clanname]==None;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:У вас уже есть клан!}]
  $onlyIf[$getGlobalUserVar[clanname;$findUser[$message[1]]]!=None;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:У этого юзера нет клана!}]
  $onlyIf[$userExists[$findUser[$message[1]]]==true;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Юзера не существует!}]
  $onlyIf[$message[1]!=;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Укажите юзера!}]
  `
})