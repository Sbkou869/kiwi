module.exports = ({
    name: "userAvatar",
        description: "Выдает аватар юзера",
 usage: "userAvatar/ua/avatar/pfp (юзер)",
aliases: ['pfp', 'avatar', 'ua'],
code: `
$color[$getVar[color]]
 $author[Ник - $username[$findUser[$message]];$userAvatar[$clientID]]
 $description[Скачать :arrow_down: 
 \n[.PNG]($replaceText[$userAvatar[$findUser[$message]];webp;png]) | [.WEBP]($replaceText[$userAvatar[$findUser[$message]];png;webp]) | [.JPEG]($replaceText[$replaceText[$userAvatar[$findUser[$message]];webp;jpeg];png;jpeg])]
 $image[$userAvatar[$findUser[$message]]]`
});