module.exports = ({
  name: "d.eval",
  usage: "d.eval <code>",
  description: "Выполняет D.JS код, если он не содержит символов больше чем 2000.",
  error: "$channelSendMessage[$channelId;В коде произошла ошибка \n\`\`\`$error\`\`\`;no]",
  code: `$djsEval[$message;no]
    $onlyForIDs[586969283150741524; ]`
})