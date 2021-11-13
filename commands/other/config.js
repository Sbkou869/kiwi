module.exports = ({
      name: "config",
          description: "Выдает конфиги сервера",
 usage: "config",
    code: `
$title[Серверные настройки]
$description[Префикс - \`$getServerVar[prefix]\`
Премиум - \`$getServerVar[premium]\`
Канал логов - $replaceText[<#$getServerVar[logschann]>;<#>;отсутствует;-1]]
$color[$getVar[color]]`
});