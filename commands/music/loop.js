module.exports = ({  
  name: "loop",
  description: "Loops the entire line of songs.",
 usage: "loop",
  code: `$title[🔄 Loop]
  $description[Loop Status - $loopQueue]
  $color[$getVar[color]]
  $onlyIf[$voiceID[$authorID]!=;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Sorry, but you are not connected to the voice channel.}]`
  });