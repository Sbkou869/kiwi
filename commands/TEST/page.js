module.exports = ({
  name: "help",
  code: `$if[$message==]
  $let[e;$apiMessage[;{title:Помощь по командам} {description:**:hammer_pick: • Модерация:**
\`ban, kick, clear\`
**:headphones: • Музыка:**
\`play, loop, skip\`
**:moneybag: • Экономика:**
\`work, bonus, bal\`
**:gear: • Остальное:**
\`help, ping, ui, server\`
**Чтобы увидеть остальные команды нажмите на кнопки снизу**} {color:$getVar[color]}{footer:© KiwiBot Company:$userAvatar[$clientId]};{actionRow:Экономия,2,3,EconomyButton,💰:Модерация,2,3,ModeratorButton,⚒️:Остальное,2,3,OtherButton,⚙️:Музыка,2,3,MusicButton,🎧};;yes]]
$else
$onlyIf[$replaceText[$replaceText[$checkCondition[$commandInfo[$message;usage]==];true;None];false;a]==a;{author:Ошибка!:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Такой команды нет!}]
$endif
`
})