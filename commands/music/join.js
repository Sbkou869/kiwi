module.exports = ({
  name: "join",
  usage: "join",
  description: "join",
  perms: "join",
  code: `$djsEval[const voiceChannel = d.message.member.voice.channel;
 voiceChannel.join()]
 $title[Захожу]
 $decription[Бот зашел в голосовой канал]
 $color[$getVar[color]]`
})