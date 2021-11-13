module.exports = ({
  name: "set-pers-prefix",
  aliases: ['set-my-pref', 'set-pers-pref', 's-my-pref'],
  usage: "set-my-pref <prefix>",
  description: "Sets a personal prefix to the one you specified. Standard - \`m.\`.",
  code: `$title[New Personal Prefix]
  $description[Personal prefix is ​​set to - \`$message\`]
  $color[$getVar[color]]
  $onlyIf[$checkContains[$message;@here;@everyone;<@!$mentioned[1]>;<@$mentioned[1]>]==false;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Sorry, but I can't put the prefix that mentions @here or @everyone}]
  $setGlobalUserVar[UserPrefix;$message]
  $argsCheck[1;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Please enter a new prefix!}]`
})