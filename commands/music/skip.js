module.exports = ({
    name: "skip",
    description: "Skips the current song.",
 usage: "skip",
  code:`$description[↪️ Skipped!]
  $color[$getVar[color]]
  $skipSong
  $onlyIf[$voiceID[$authorID]!=;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Sorry, but you are not connected to the voice channel.}]`
});