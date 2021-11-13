module.exports = ({
  name: "poll",
      description: "CСоздает голосование",
 usage: "poll <текст>",
code: `
$title[Время опросов!]
$description[$message]
$color[$getVar[color]]
$addReactions[✅;❌]
$argsCheck[>1;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Введите тему голосования!}]
`
});