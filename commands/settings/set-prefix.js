module.exports = ({
name: "set-prefix",
 perms: "Manage-server",
    description: "Sets a new prefix for the bot.",
 usage: "set-prefix <prefix>",
code: `$title[Set-prefix]
$description[New prefix is - **$message**]
$color[$getVar[color]]
$setServerVar[prefix;$message]
$onlyIf[$checkContains[$message;@here;@everyone;<@!$mentioned[1]>;<@$mentioned[1]>]==false;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:Sorry, but I can't put the prefix that mentions @here or @everyone}]
$onlyPerms[manageserver;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Not enough rights! Required rights - \`Admin or manage-server\`}]`
});