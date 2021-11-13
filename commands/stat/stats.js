module.exports = ({
name: "stats",
aliases: ['bot', 'bot-info'],
    description: "Выдает статы бота",
 usage: "stats/bot/bot-info", 
code: `
$title[<:ping:844893474646130698> • Статистика бота]
  $description[Создатель бота: $username[586969283150741524]]
  $addField[Хостинг;> **RAM:** $ram mb / $maxRam mb
> **CPU:** $cpu% / 100%
> **Платформa:** $djsEval[require("os").platform;yes]]
  $addField[Кэш;> **Пользователи:** $allMembersCount
> **Сервера:** $serverCount]
   $addField[Бот;> **API:** $pingms
> **Пинг бота:** $botpingms
> **Время работы:** $uptime
> **Ссылка:** [Клик]($getBotInvite[admin])]
$color[$getVar[color]]`
})