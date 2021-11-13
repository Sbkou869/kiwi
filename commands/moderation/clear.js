module.exports = ({
  name: "clear",
  aliases: ['purge'],
  description: "ОТчищает сообщения",
  usage: "clear/purge <кол-во>",
  perms: "Управление сообщениями",
  code: `$title[Clear]
  $description[Вы отчистили  \`$message\` сообщения]
  $color[$getVar[color]]
  $clear[$message]
  $onlyIf[$isNumber[$message]==true;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description: Укажите **число**!}]
  $argsCheck[1;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description: Укажите количество}]
  $onlyPerms[managemessages;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description:В ы не можете управлять сообщениями}]
$onlyBotPerms[managemessages;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color:$getVar[errorcol]} {description: Бот не может управлять сообщениями}]`
})