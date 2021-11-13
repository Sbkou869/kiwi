module.exports = ({
    name: "volume",
    description: "Change the current volume in the bot.",
 usage: "vol/volume <volume>",
  aliases: ['vol'],
  code: `$volume[$message]
  $title[Volume]
  $description[Volume is set to - \`$message\`]
  $color[$getVar[color]]
  $onlyIf[$isNumber[$message]==true;Please indicate the volume in numbers!]
  $argsCheck[1;Please give number]
  $onlyIf[$voiceID[$authorID]!=;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Sorry, but you are not connected to the voice channel.}]`
});