module.exports = ({
  name: "set-lvl-message",
  usage: "set-lvl-message <on/off>",
  description: "Sets permission for the bot to drop the level update message.",
  perms: "Manage-server",
  code: `$if[$message==on]
  $title[Lvl Message]
  $description[The bot can now send messages about level updates!]
  $color[$getVar[color]]
  $setServerVar[lvlmes;on]
  $onlyPerms[manageserver;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Not enough rights! Required rights - \`Admin or manage-server\`}]
   $onlyIf[$checkContains[$message;on;off]==true;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Specify an argument! (off/on)}]
  $elseIf[$message==off]
  $title[Lvl Message]
  $description[The bot can't now send messages about level updates!]
  $color[$getVar[color]]
  $setServerVar[lvlmes;off]
  $onlyPerms[manageserver;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Not enough rights! Required rights - \`Admin or manage-server\`}]
  $onlyIf[$checkContains[$message;on;off]==true;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Specify an argument! (off/on)}]
  $endelseif
  $elseIf[$message==]
  Please enter your text! (on/off)
  $endelseif
  $endif
  `
})