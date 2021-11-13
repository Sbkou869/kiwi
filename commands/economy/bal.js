module.exports = ({
name: "bal",
description: "Показывает ваш баланс",
 usage: "bal",
code: `
$title[Баланс: $username[$findUser[$message]]]
$description[Баланс - $getUserVar[money;$findUser[$message]]$
Гемы - $getUserVar[gem]:gem:
Коины смерти - $getUserVar[dc]:eight_pointed_black_star:]
$color[$getVar[color]]`
});