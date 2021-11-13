module.exports = ({
    name: "weather",
        description: "Выдает погоду города.",
 usage: "weather <город>",
  code: `
  $title[Погода]
  $image[https://api.cool-img-api.ml/weather-card?location=$message&background=https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F34%2F78%2FQMKLIc.jpg&f=1&nofb=1]
  $color[$getVar[color]]
  $argsCheck[1;{author:Ошипка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Укажите название города!}]`
});