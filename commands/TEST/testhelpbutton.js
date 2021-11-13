module.exports = ({
  name: "helpbutton",
  code: `$setservervar[id;$get[id]]
$setservervar[uid;$authorID]
$let[id;$apiMessage[;{title: Page 1/3}{description: -host - Host stats
-stats - статы бота
-set-prefix - установить префикс
-set-my-pref - установить свой префикс
-avatar - аватар юзера
-ui - инфо юзера
-server - сервер инфо
-help - лист команд
-poll - создание голосования
-weather - погода города
-tr - перевод текста
-config - конфиги сервера
-rank - левел юзера
} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]};{actionRow:◄,2,1,awaitPage3:►,2,1,awaitPage4};;yes]]`
})