module.exports = ({
    name: "ascii",
    usage: "ascii <Teкст>",
    description: "Переводит текст в аscii",
    code: `$title[Ascii текст!] $description[\`\`\`$jsonRequest[https://artii.herokuapp.com/make?text=$message]\`\`\`]
    $color[$getVar[color]]
    $onlyIf[$message!=;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]}{description:Укажите текст!}]`
})