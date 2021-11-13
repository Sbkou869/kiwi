module.exports = ({
  name: "leave",
  aliases: ['ds', 'disconnect'],
  usage: "ds/leave",
  description: "Bot leaves the voice channel",
  code: `$djsEval[message.member.voice.channel.leave();]
  $description[Retiring]
  $color[$getVar[color]]
  $onlyIf[$voiceID[$authorID]!=;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Sorry, but you are not connected to the voice channel.}]`
})