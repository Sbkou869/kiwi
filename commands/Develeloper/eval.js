module.exports = ({
  name: "eval", 
   description: "Выполняет код если он составляет менее 1000 символов.",
   perms: "developer",
 usage: "eval <код>", 
code: `$sendMessage[{title:$randomText[Это точно безопасно?;Ладно...;Хммм :);Евал]}
{field:📥 Input:\`\`\`js
$message
\`\`\`} {field:📤 Output:\`\`\`js
$eval[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message;{name};$username[$findUser[$authorID]];-1];{tag};$discriminator[$findUser[$authorID]];-1];{status};$getCustomStatus[$authorID];-1];{activity};$activity[$findUser[$authorID]];-1];{platform};$platform[$findUser[$authorID]];-1];{var:money};$getUserVar[money;$authorID];-1];{var:gem};$getUserVar[gem;$authorID];-1];{var:lvl};$getUserVar[lvl;$authorID];-1];{id};$authorID;-1];{nick};$nickname[$authorID];-1];{bot.ping};$ping;-1];{bot.uptime};$uptime;-1];{bot.cpu};$cpu;-1];{bot.ram};$ram;-1];$clientToken;Nzc2MTE4MDM0NDMxMjEzNTk5.X6wOPg.OPI4bm2ZfBK1TeQIY17JcyzdCu8;-1];$lendory;кутой;-1];yes]
\`\`\`} {color:$getVar[color]} ;no]
$argsCheck[>1;{title:<:mg_reactno:762705435715174410> Ошибка!} {description:Хорошо, а код какой выполнять мне тогда...}{color: $getVar[errorcol]}]
$onlyForIDs[586969283150741524;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Эта команда только доступна только для некоторых людей!}]
$suppressErrors[{error}]`
})