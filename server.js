const Aoijs = require("aoi.js")
const canvacord = require("canvacord")
const bot = new Aoijs.Bot({
token: process.env.TOKEN,
prefix: ["$getServerVar[prefix]","&&","$getGlobalUserVar[UserPrefix]", "<@776118034431213599>", "<@!776118034431213599>"],

})

bot.onMessage()

bot.loadCommands(`./commands/`)

bot.variables({
    uid: "",
    id: "",
    color: "9EDE73",
    prefix: "-",
    money: "0",
    armor: "none",
    arm1: "Lapis Armor",
    arm2: "Miner Armor",
    arm3: "Holy Dragon Armor",
    arm4: "Old Dragon Armor",
    arm5: "Young Dragon Armor",
    arm6: "Wise Dragon Armor",
    armc1: "6000",
    armc2: "7000",
    armc3: "13000",
    armc4: "20000",
    armc5: "35000",
    armc6: "50000",
    armcdc1: "5",
    armcdc2: "10",
     armndc1: "Mithril Armor",
    armndc2: "Titanium Armor",
     armdc1: "2000",
    armdc2: "3500",
    def: "0",
    armd1: "150",
    armd2: "500",
    armd3: "750",
    armd4: "950",
    armd5: "1300",
    armd6: "1650",
    weapor: "fists",
    damage: "20",
    werc1: "60",
    werc2: "70",
    werc3: "130",
    werc4: "200",
    werc5: "3500",
    werc6: "5000",
    werd1: "60",
    werd2: "70",
    werd3: "130",
    werd4: "200",
    werd5: "350",
    werd6: "500",
    wer1: "Diamond Sword",
    wer2: "Weather Bow",
    wer3: "Raider Axe",
    wer4: "Ink Wand",
    wer5: "Midas Sword",
    wer6: "Aspect of the Dragon",
    msg: "0",
    xp: "0",
    lvl: "1",
    need: "60",
    shards: "0",
    wise: "0",
    young: "0",
    old: "0",
    ach1: "<:serdce:763820042176954488>",
    achs1: "",
    achs2: "",
    autorole: "",
    channeljoin: "",
    logschann: "",
    uranus: "0",
    fuel: "0",
    shans: "0",
    np: "0",
    defence: "70",
    np1: "🟥",
    np2: "🟥",
    np3: "🟥",
    np4: "🟥",
    np5: "🟥",
    np6: "🟥",
    np7: "🟥",
    np8: "🟥",
    np9: "🟥",
    np10: "🟥",
    np11: "🟥",
    np12: "🟥",
    np13: "🟥",
    np14: "🟥",
    np15: "🟥",
    np16: "🟥",
    np17: "🟥",
    np18: "🟥",
    np19: "🟥",
    np20: "🟥",
    np21: "🟥",
    np22: "🟥",
    np23: "🟥",
    np24: "🟥",
    np25: "🟥",
    channelleave: "",
    premium: "false",
    potion: "0",
    potioncost: "255",
    hp: "100",
    // Other
    UserPrefix: "m.",
    MSGprem: "0",
    Case: "0",
    vers: "0.4.5",
    status: "member",
    stat1: "hacker",
    temp: "0",
    gem: "0",
    dailybonus: "1",
    bonusmoney: "0",
    boxluck: "1",
    errorcol: "#fc0000",
    dc: "0",
    bllvl2: "60",
    bllvl3: "100",
    bllvl4: "120",
    bllvl5: "150",
    lvlmes: "off",
    page: "2",
    upage: "1",
    bio: "None",
    role1: "none",
    cost1: "none",
    lg: "en",
    warnlist: "",
    warncount: "0",
    // Clans:
    clanname: "None",
    clanusers: "0",
    clanpoints: "0",
    clanowner: "None",
    clanavatar: "",
    clanbanner: "",
    clanminer1: "None",
    clanminer2: "None",
    clanminer3: "None",
    clanminerincome1: "0",
    clanminerincome2: "0",
    clanminerincome3: "0",
    clanmoney: "0",
    clanforuser: "None"
    })

bot.status({
  text: "competition | -help | Servers - $serverCount!",
  type: "COMPETING",
  time: 6
})

bot.status({
  text: "competition | -help | Uptime - $uptime!",
  type: "COMPETING",
  time: 6
})

bot.status({
  text: "competition | -help | Users - $allMembersCount!",
  type: "COMPETING",
  time: 6
})

bot.leaveCommand({
        channel: "$getServerVar[channelleave]", 
        code: `$username has left the server`
})
bot.onLeave()

bot.onInteractionCreate()
bot.interactionCommand({
 name: "GeneralButton",
 prototype:"button",
 code: `$interactionReply[;{title:Помощь по командам} {description:**⚒️ Модерация**
**⚔️ RPG**
**🎧 Музыка (Не работает)**
**💰 Экономика**
**⚙️ Остальное**} {color:$getVar[color]};;64;4]`
})

bot.interactionCommand({
  name: "MusicButton",
  prototype: "button",
  code: `$interactionReply[;{title:Музыка}{description:
**-play** - проигроание песни
**-skip** - пропуск песни
**-loop** - цикл очереди
**-volume** - установка громкости
**-ds** - отключение от гс 
**-join** - присоединение к гс} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]};;64;4]`
})
 
bot.interactionCommand({
 name: "EconomyButton",
 prototype:"button",
 code:`$interactionReply[;{title:Экономика} {description:**-work** - работа
**-bonus** - ежедн. бонус
**-bal** - баланс юзера
**-arm-buy** - покупка брони
**-armor-shop** - магазин брони
**-wer-buy** - покупка оружия
**-weapon-shop** - магазин оружия
**-buy-npp** - покупка АЭС
**-b-uranus** - покупка урана
**-f-up** - заправка АЭС
**-npg** - NPG - Производство атомной электростанции
**-fight** - сражение с боссом
**-profile** - профиль юзера
**-craft** - крафт
**-pay** - передача денег} {color:$getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]};;64;4]`
})
 
bot.interactionCommand({
 name: "FunButton",
 prototype:"button",
 code:`$interactionReply[; {title:Экономия} {description:**-work** - работа
**-bonus** - ежедн. бонус
**-bal** - баланс юзера
**-arm-buy** - покупка брони
**-armor-shop** - магазин брони
**-wer-buy** - покупка оружия
**-weapon-shop** - магазин оружия
**-buy-npp** - покупка АЭС
**-b-uranus** - покупка урана
**-f-up** - заправка АЭС
**-npg** - NPG - Производство атомной электростанции
**-fight** - сражение с боссом
**-profile** - профиль юзера
**-craft** - крафт
**-pay** - передача денег} {color:$getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]};;64;4]`
})
 
bot.interactionCommand({
 name: "ModeratorButton",
 prototype:"button",
 code:`$interactionReply[;{title:Модерация}{description:**-set-lvl-message** - настройка сообщений об новом уровне
 **-set-prefix** - установить префикс
**-set-my-pref** - установить свой префикс
**-ban** - бан участника
**-kick** - кик участника
**-clear** - очистка сообщений} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]};;64;4]`
})
 
bot.interactionCommand({
 name: "OtherButton",
 prototype: "button",
 code:`$interactionReply[;{title:Остальное} {description:**-stats** - статы бота
**-avatar** - аватар юзера
**-ui** - инфо юзера
**-server** - сервер инфо
**-help** - лист команд
**-poll** - создание голосования
**-weather** - погода города
**-tr** - перевод текста
**-config** - конфиги сервера
**-rank** - левел юзера} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]};;64;4]`
})
 
//second help command
bot.command({
name: "second",
code: `
$let[e;$apiMessage[;{color:#5865F2}{thumbnail:$authorAvatar}{title:Help Command}{description:Click the button to see all my commands};{actionRow:help,2,1,HelpButton,🎟|0|false};;yes]]
`
})
 
bot.interactionCommand({
 name: "HelpButton",
 prototype: "button",
 code:`
$interactionDelete
$wait[5s]
$interactionEdit[;{color:#2f3136}{title:Other Commands}{description:Your commands here}]
$wait[5s]
$interactionEdit[;{color:#2f3136}{title:Moderation Commands}{description:Your commands here}]
$wait[5s]
$interactionEdit[;{color:#2f3136}{title:Fun Commands}{description:Your commands here}]
$wait[5s]
$interactionEdit[;{color:#2f3136}{title:Economy Commands}{description:Your commands here}]
$wait[5s]
$interactionEdit[;{color:#2f3136}{title:General Commands}{description:Your commands here}]
$wait[5s]
$interactionReply[I'm loading all my commands;;;0;4]
`
 })

bot.awaitedCommand({
  name: "awaitEval",
  code: `$deleteMessage[$message[1]]`
})

bot.awaitedCommand({
  name: "work",
  code: `$setUserVar[money;$sum[$getUserVar[money];100]]`
})

bot.awaitedCommand({
  name: "awaitReact1",
  code: `$editMessage[$message[1];{color:$getVar[color]}
 {title:Configuration module}{description:**Other**
  \`\`\`avatar, config, help, ping, poll, tr, weather, invites, ui, page, embed\`\`\`
  **Stats**
  \`\`\`stats, server\`\`\`}]`})

bot.awaitedCommand({
  name: "awaitPage3",
  code: `$if[$getEmbed[$channelID;$message[1];title]==Page 3/3]
  $editMessage[$message[1];{title:Page 2/3}{description:**-set-lvl-message** - настройка сообщений об новом уровне
**-ban** - бан участника
**-kick** - кик участника
**-clear** - очистка сообщений
**-play** - проигроание песни
**-skip** - пропуск песни
**-loop** - цикл очереди
**-volume** - установка громкости
**-ds** - отключение от гс 
**-join** - присоединение к гс} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
$elseif[$getEmbed[$channelID;$message[1];title]==Page 2/3]
  $editMessage[$message[1];{title:Page 1/3}{description:**-stats** - статы бота
**-set-prefix** - установить префикс
**-set-my-pref** - установить свой префикс
**-avatar** - аватар юзера
**-ui** - инфо юзера
**-server** - сервер инфо
**-help** - лист команд
**-poll** - создание голосования
**-weather** - погода города
**-tr** - перевод текста
**-config** - конфиги сервера
**-rank** - левел юзера} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
$endelseif
$elseIf[$getEmbed[$channelID;$message[1];title]==Page 1/3]
  $editMessage[$message[1]; {title:Page 3/3} {description:**-work** - работа
**-bonus** - ежедн. бонус
**-bal** - баланс юзера
**-arm-buy** - покупка брони
**-armor-shop** - магазин брони
**-wer-buy** - покупка оружия
**-weapon-shop** - магазин оружия
**-buy-npp** - покупка АЭС
**-b-uranus** - покупка урана
**-f-up** - заправка АЭС
**-npg** - NPG - Производство атомной электростанции
**-fight** - сражение с боссом
**-profile** - профиль юзера
**-craft** - крафт
**-pay** - передача денег} {color:$getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
   $endelseif
   $endif
  `
})

bot.awaitedCommand({
  name: "awaitPage4",
  code: `
$if[$getEmbed[$channelID;$message[1];title]==Page 1/3]
  $editMessage[$message[1];{title:Page 2/3}{description:
**-set-lvl-message** - настройка сообщений об новом уровне
**-ban** - бан участника
**-kick** - кик участника
**-clear** - очистка сообщений
**-play** - проигроание песни
**-skip** - пропуск песни
**-loop** - цикл очереди
**-volume** - установка громкости
**-ds** - отключение от гс 
**-join** - присоединение к гс} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
  $elseIf[$getEmbed[$channelID;$message[1];title]==Page 2/3]
  $editMessage[$message[1]; {title:Page 3/3} {description:**-work** - работа
**-bonus** - ежедн. бонус
**-bal** - баланс юзера
**-arm-buy** - покупка брони
**-armor-shop** - магазин брони
**-wer-buy** - покупка оружия
**-weapon-shop** - магазин оружия
**-buy-npp** - покупка АЭС
**-b-uranus** - покупка урана
**-f-up** - заправка АЭС
**-npg** - NPG - Производство атомной электростанции
**-fight** - сражение с боссом
**-profile** - профиль юзера
**-craft** - крафт
**-pay** - передача денег} {color:$getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
  $endelseif
$elseif[$getEmbed[$channelID;$message[1];title]==Page 3/3]
  $editMessage[$message[1];{title:Page 1/3} {description:**-stats** - статы бота
**-set-prefix** - установить префикс
**-set-my-pref** - установить свой префикс
**-avatar** - аватар юзера
**-ui** - инфо юзера
**-server** - сервер инфо
**-help** - лист команд
**-poll** - создание голосования
**-weather** - погода города
**-tr** - перевод текста
**-config** - конфиги сервера
**-rank** - левел юзера} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
   $endelseif
   $endif
  `
})

bot.interactionCommand({
  name: "awaitPage3",
  prototype:"button",
  code: `$if[$getEmbed[$channelID;$getservervar[id];title]==Page 3/3]
  $editMessage[$getservervar[id];{title:Page 2/3}{description:**-set-lvl-message** - настройка сообщений об новом уровне
**-ban** - бан участника
**-kick** - кик участника
**-clear** - очистка сообщений
**-play** - проигроание песни
**-skip** - пропуск песни
**-loop** - цикл очереди
**-volume** - установка громкости
**-ds** - отключение от гс 
**-join** - присоединение к гс} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
$elseif[$getEmbed[$channelID;$getservervar[id];title]==Page 2/3]
  $editMessage[$getservervar[id];{title:Page 1/3}{description:**-stats** - статы бота
**-set-prefix** - установить префикс
**-set-my-pref** - установить свой префикс
**-avatar** - аватар юзера
**-ui** - инфо юзера
**-server** - сервер инфо
**-help** - лист команд
**-poll** - создание голосования
**-weather** - погода города
**-tr** - перевод текста
**-config** - конфиги сервера
**-rank** - левел юзера} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
$endelseif
$elseIf[$getEmbed[$channelID;$getservervar[id];title]==Page 1/3]
  $editMessage[$getservervar[id]; {title:Page 3/3} {description:**-work** - работа
**-bonus** - ежедн. бонус
**-bal** - баланс юзера
**-arm-buy** - покупка брони
**-armor-shop** - магазин брони
**-wer-buy** - покупка оружия
**-weapon-shop** - магазин оружия
**-buy-npp** - покупка АЭС
**-b-uranus** - покупка урана
**-f-up** - заправка АЭС
**-npg** - NPG - Производство атомной электростанции
**-fight** - сражение с боссом
**-profile** - профиль юзера
**-craft** - крафт
**-pay** - передача денег} {color:$getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
   $endelseif
   $endif
   $onlyIf[$getServerVar[uid]==$authorId; ]
  `
})

bot.interactionCommand({
  name: "awaitPage4",
  prototype:"button",
  code: `
$if[$getEmbed[$channelID;$getservervar[id];title]==Page 1/3]
  $editMessage[$getservervar[id];{title:Page 2/3}{description:
**-set-lvl-message** - настройка сообщений об новом уровне
**-ban** - бан участника
**-kick** - кик участника
**-clear** - очистка сообщений
**-play** - проигроание песни
**-skip** - пропуск песни
**-loop** - цикл очереди
**-volume** - установка громкости
**-ds** - отключение от гс 
**-join** - присоединение к гс} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
  $elseIf[$getEmbed[$channelID;$getservervar[id];title]==Page 2/3]
  $editMessage[$getservervar[id]; {title:Page 3/3} {description:**-work** - работа
**-bonus** - ежедн. бонус
**-bal** - баланс юзера
**-arm-buy** - покупка брони
**-armor-shop** - магазин брони
**-wer-buy** - покупка оружия
**-weapon-shop** - магазин оружия
**-buy-npp** - покупка АЭС
**-b-uranus** - покупка урана
**-f-up** - заправка АЭС
**-npg** - NPG - Производство атомной электростанции
**-fight** - сражение с боссом
**-profile** - профиль юзера
**-craft** - крафт
**-pay** - передача денег} {color:$getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
  $endelseif
$elseif[$getEmbed[$channelID;$getservervar[id];title]==Page 3/3]
  $editMessage[$getservervar[id];{title:Page 1/3} {description:**-stats** - статы бота
**-set-prefix** - установить префикс
**-set-my-pref** - установить свой префикс
**-avatar** - аватар юзера
**-ui** - инфо юзера
**-server** - сервер инфо
**-help** - лист команд
**-poll** - создание голосования
**-weather** - погода города
**-tr** - перевод текста
**-config** - конфиги сервера
**-rank** - левел юзера} {color: $getVar[color]} {footer:Сделано командой бота Kiwi • Всего команд → $commandsCount:$userAvatar[$clientID]}]
   $endelseif
   $endif
   $onlyIf[$getServerVar[uid]==$authorId; ]
  `
})

bot.loopCommand({
  code: `$editMessage[835435357767991316;{description:**Пользователи:** $allMembersCount
**RAM:** $ram MB / 3000 MB
**CPU:** $cpu% / 100%
**Задержка:** $pingms}]
  $textSplit[$uptime; ]`,
channel: "835234480222240778",
executeOnStartup: true,
every: 12000
})
  
bot.updateCommand({
        channel: "$getServerVar[logschann]", 
        code: `$title[Message edited] $description[From $username in <#$channelUsed>:
$message, old message - $oldmessage]
$color[$getVar[color][`
}) 

bot.deletedCommand({
channel:"$getServerVar[logschann]",
code:`$title[Message deleted] $description[Message was deleted in <#$channelUsed>: $message]
$color[$getVar[color]]`
})
bot.onMessageDelete()
