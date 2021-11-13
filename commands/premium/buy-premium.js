module.exports = ({
  name: "premium",
  description: "Информация о покупке премиума",
  usage: "premium",
  code: `$title[Покупка премиума]
  $description[**Покупка:** [Тап](https://www.donationalerts.com/r/kiwibotpremium)
Также можно забустить офф. сервер для получения премиума]
$addField[Помощь;**Почта:** kiwibot.sup@gmail.com]
  $addField[Бонусы;\`\`\`js
1. Получение премиальных функций
2. Ваш сервер будет добавлен в лист премиальных серверов
3. Вы бутете крутыми
\`\`\`]
$footer[Цена премиума на год: 200 RUB, на месяц 20 RUB]
$color[$getVar[color]]`
})