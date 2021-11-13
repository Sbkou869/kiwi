module.exports = ({
  name: "sys",
  aliases: ["sysinfo", "system"],
  usage: "sys",
  description: "Выдает статы систимы",
  code: `
$title[Информация о системе]
  $addField[Система;**CPU:** $djsEval[require("os").cpus()[0].model;yes]
**ОС:** $djsEval[require("os").platform;yes] x64]
  $addField[Память;**Доступно:** $sub[$maxRam;$ram]mb
**Всего:** $maxRammb
**Потребление:** $rammb]
$color[$getVar[color]]`
})
// Вива молодец :)