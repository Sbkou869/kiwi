module.exports = ({
   name: "8ball",
   description: "Ответ на ваш вопрос",
 usage: "8ball <вопрос>",
  code: `$title[8ball]
  $description[$randomText[**Нет**!;Хмм... Звезды говорят "Нет".;Нет, нет, нет и еще раз **нет!**;Хмм.... Да!;Lendory думает - даЗвезды думают "да"!]]
  $color[$getVar[color]]
  $argsCheck[>1;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]}{description:Укажи вопрос!}]`
});