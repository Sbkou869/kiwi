module.exports = ({
name: "play",
description: "Adds a song to the queue.",
 usage: "play <song>",
code: `$title[Music] 
$description[
The song ($message) has been added to the player! 📻] 
$let[song;$playSong[$message]]
$footer[High-quality music!]
$color[$getVar[color]]
$onlyIf[$voiceID[$authorID]!=;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Sorry, but you are not connected to the voice channel.}]`
});