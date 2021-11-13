module.exports = ({
  name: "set-page-text",
  perms: "Manage-server ",
  usage: "set-page-text <page> / <text>",
  description: "Sets the text you specified to the page you specified",
  code: `
  $setServerVar[page$splitText[1];$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$splitText[2];{name};$username[$findUser[$authorID]];-1];{tag};$discriminator[$findUser[$authorID]];-1];{status};$getCustomStatus[$authorID];-1];{activity};$activity[$findUser[$authorID]];-1];{platform};$platform[$findUser[$authorID]];-1];{var:money};$getUserVar[money;$authorID];-1];{var:gem};$getUserVar[gem;$authorID];-1];{var:lvl};$getUserVar[lvl;$authorID];-1];{id};$authorID;-1];{nick};$nickname[$authorID];-1];{bot.ping};$ping;-1];{bot.uptime};$uptime;-1];{bot.cpu};$cpu;-1];{bot.ram};$ram;-1]]
    $onlyIf[$isNumber[$splitText[1]]==true;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:It seems to me, or you indicated a non-existent page. Available pages - \`1/5\`}]
  $title[Page Text]
  $description[Set text to page \`$splitText[1]\`]
  $addField[Text;$splitText[2]]
  $color[$getVar[color]]
  $onlyIf[5>=$splitText[1];{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:5 page - Maximum!}]
  $textSplit[$message; / ]
  $onlyIf[$checkContains[$message;/]==true;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:To set the text on the page write like this - $getServerVar[prefix]set-page-text \`<page>\` **/** \`<text>\`}]
  $onlyPerms[manageserver;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Not enough rights! Required rights - \`Admin or manage-server\`}]`
})