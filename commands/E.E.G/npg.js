module.exports = ({
      name: "npg",
        description: "NPG - Nuclear Plant Generation / Генерация Атомной Электростанции",
 usage: "npg",
    code: `
$if[$sum[$sub[$random[40;50]];$multi[1;$random[1;2]];$sum[$sub[$getUserVar[fuel];$random[30;$getUserVar[defence]];5]]]<80]
$thumbnail[https://thumbs.gfycat.com/ZigzagImpracticalKid-max-1mb.gif]
$title[Your NPP]
$description[$addField[Температура;$getUserVar[temp]°c(max 2500°c)]
$addField[Топливо;
$getUserVar[fuel]% (max. 100%)
**Топливные стержни:**
$getUserVar[np1]$getUserVar[np2]$getUserVar[np3]$getUserVar[np4]$getUserVar[np5]
$getUserVar[np6]$getUserVar[np7]$getUserVar[np8]$getUserVar[np9]$getUserVar[np10]
$getUserVar[np11]$getUserVar[np12]$getUserVar[np13]$getUserVar[np14]$getUserVar[np15]
$getUserVar[np16]$getUserVar[np17]$getUserVar[np18]$getUserVar[np19]$getUserVar[np20]
$getUserVar[np21]$getUserVar[np22]$getUserVar[np23]$getUserVar[np24]$getUserVar[np25]]
$addField[Радиация; $multi[$random[50;70];$getUserVar[fuel]]☢️ МКр/ч(max. 20к)]
$addField[Энергия; $sum[$sub[$multi[$getUserVar[fuel];$random[40;60]];$multi[$random[43;66];$getUserVar[fuel]]];$multi[$random[70;75];30]]⚡ (max. 18к)]
$addField[Шанс взрыва;$sum[$sub[$random[40;50]];$multi[1;$random[1;2]];$sum[$sub[$getUserVar[fuel];$random[30;$getUserVar[defence]];5]]]%(max. 80/100%)]
$addField[Доход;$multi[$random[700;10000];$multi[$random[40;60];5]]$]
]
$color[$getVar[color]]
$setUserVar[temp;$random[$multi[$getUserVar[fuel];$random[1;5]];2500]]
$setUserVar[fuel;$sub[$getUserVar[fuel];1]]
$setUserVar[money;$sum[$getUserVar[money];$multi[$random[700;10000];$multi[$random[40;60];5]]]]
$setUserVar[shans;$sum[$sub[$random[40;50]];$multi[1;$random[1;2]];$sum[$sub[$getUserVar[fuel];$random[30;70];5]]]]
$if[$getUserVar[fuel]==100]
$setUserVar[np1;:green_square:]
$setUserVar[np2;:green_square:]
$setUserVar[np3;:green_square:]
$setUserVar[np4;:green_square:]
$setUserVar[np5;:green_square:]
$setUserVar[np6;:green_square:]
$setUserVar[np7;:green_square:]
$setUserVar[np8;:green_square:]
$setUserVar[np9;:green_square:]
$setUserVar[np10;:green_square:]
$setUserVar[np11;:green_square:]
$setUserVar[np12;:green_square:]
$setUserVar[np13;:green_square:]
$setUserVar[np14;:green_square:]
$setUserVar[np15;:green_square:]
$setUserVar[np16;:green_square:]
$setUserVar[np17;:green_square:]
$setUserVar[np18;:green_square:]
$setUserVar[np19;:green_square:]
$setUserVar[np20;:green_square:]
$setUserVar[np21;:green_square:]
$setUserVar[np22;:green_square:]
$setUserVar[np23;:green_square:]
$setUserVar[np24;:green_square:]
$setUserVar[np25;:green_square:]
$elseIf[$getUserVar[fuel]<100]
$setUserVar[np1;:red_square:]
$setUserVar[np2;:red_square:]
$setUserVar[np3;:red_square:]
$setUserVar[np4;:red_square:]
$setUserVar[np5;:red_square:]
$setUserVar[np6;:green_square:]
$setUserVar[np7;:green_square:]
$setUserVar[np8;:green_square:]
$setUserVar[np9;:green_square:]
$setUserVar[np10;:green_square:]
$setUserVar[np11;:green_square:]
$setUserVar[np12;:green_square:]
$setUserVar[np13;:green_square:]
$setUserVar[np14;:green_square:]
$setUserVar[np15;:green_square:]
$setUserVar[np16;:green_square:]
$setUserVar[np17;:green_square:]
$setUserVar[np18;:green_square:]
$setUserVar[np19;:green_square:]
$setUserVar[np20;:green_square:]
$setUserVar[np21;:green_square:]
$setUserVar[np22;:green_square:]
$setUserVar[np23;:green_square:]
$setUserVar[np24;:green_square:]
$setUserVar[np25;:green_square:]
$endelseif
$elseIf[$getUserVar[fuel]<80]
$setUserVar[np1;:red_square:]
$setUserVar[np2;:red_square:]
$setUserVar[np3;:red_square:]
$setUserVar[np4;:red_square:]
$setUserVar[np5;:red_square:]
$setUserVar[np6;:red_square:]
$setUserVar[np7;:red_square:]
$setUserVar[np8;:red_square:]
$setUserVar[np9;:red_square:]
$setUserVar[np10;:red_square:]
$setUserVar[np11;:green_square:]
$setUserVar[np12;:green_square:]
$setUserVar[np13;:green_square:]
$setUserVar[np14;:green_square:]
$setUserVar[np15;:green_square:]
$setUserVar[np16;:green_square:]
$setUserVar[np17;:green_square:]
$setUserVar[np18;:green_square:]
$setUserVar[np19;:green_square:]
$setUserVar[np20;:green_square:]
$setUserVar[np21;:green_square:]
$setUserVar[np22;:green_square:]
$setUserVar[np23;:green_square:]
$setUserVar[np24;:green_square:]
$setUserVar[np25;:green_square:]
$endelseif
$elseIf[$getUserVar[fuel]<61]
$setUserVar[np1;:red_square:]
$setUserVar[np2;:red_square:]
$setUserVar[np3;:red_square:]
$setUserVar[np4;:red_square:]
$setUserVar[np5;:red_square:]
$setUserVar[np6;:red_square:]
$setUserVar[np7;:red_square:]
$setUserVar[np8;:red_square:]
$setUserVar[np9;:red_square:]
$setUserVar[np10;:red_square:]
$setUserVar[np11;:red_square:]
$setUserVar[np12;:red_square:]
$setUserVar[np13;:red_square:]
$setUserVar[np14;:red_square:]
$setUserVar[np15;:red_square:]
$setUserVar[np16;:green_square:]
$setUserVar[np17;:green_square:]
$setUserVar[np18;:green_square:]
$setUserVar[np19;:green_square:]
$setUserVar[np20;:green_square:]
$setUserVar[np21;:green_square:]
$setUserVar[np22;:green_square:]
$setUserVar[np23;:green_square:]
$setUserVar[np24;:green_square:]
$setUserVar[np25;:green_square:]
$endelseif
$elseIf[$getUserVar[fuel]<41]
$setUserVar[np1;:red_square:]
$setUserVar[np2;:red_square:]
$setUserVar[np3;:red_square:]
$setUserVar[np4;:red_square:]
$setUserVar[np5;:red_square:]
$setUserVar[np6;:red_square:]
$setUserVar[np7;:red_square:]
$setUserVar[np8;:red_square:]
$setUserVar[np9;:red_square:]
$setUserVar[np10;:red_square:]
$setUserVar[np11;:red_square:]
$setUserVar[np12;:red_square:]
$setUserVar[np13;:red_square:]
$setUserVar[np14;:red_square:]
$setUserVar[np15;:red_square:]
$setUserVar[np16;:red_square:]
$setUserVar[np17;:red_square:]
$setUserVar[np18;:red_square:]
$setUserVar[np19;:red_square:]
$setUserVar[np20;:red_square:]
$setUserVar[np21;:green_square:]
$setUserVar[np22;:green_square:]
$setUserVar[np23;:green_square:]
$setUserVar[np24;:green_square:]
$setUserVar[np25;:green_square:]
$endelseif
$elseIf[$getUserVar[fuel]<1]
$setUserVar[np1;:red_square:]
$setUserVar[np2;:red_square:]
$setUserVar[np3;:red_square:]
$setUserVar[np4;:red_square:]
$setUserVar[np5;:red_square:]
$setUserVar[np6;:red_square:]
$setUserVar[np7;:red_square:]
$setUserVar[np8;:red_square:]
$setUserVar[np9;:red_square:]
$setUserVar[np10;:red_square:]
$setUserVar[np11;:red_square:]
$setUserVar[np12;:red_square:]
$setUserVar[np13;:red_square:]
$setUserVar[np14;:red_square:]
$setUserVar[np15;:red_square:]
$setUserVar[np16;:red_square:]
$setUserVar[np17;:red_square:]
$setUserVar[np18;:red_square:]
$setUserVar[np19;:red_square:]
$setUserVar[np20;:red_square:]
$setUserVar[np21;:red_square:]
$setUserVar[np22;:red_square:]
$setUserVar[np23;:red_square:]
$setUserVar[np24;:red_square:]
$setUserVar[np25;:red_square:]
$endelseif
$endif

$cooldown[1h;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {Вам надо подождать: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getCooldownTime[1h;user;npg;$authorID;no];hours;часов;-1];minutes;минут;-1];seconds;секунд;-1];and;и;-1];second;cекунда;-1];minute;минута;-1]}]
$onlyIf[$getUserVar[fuel]>=45;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Уровень топлива -45%}]
$onlyIf[$getUserVar[fuel]>=1;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: Ваша АЭС не запавлена}]
$onlyIf[$getUserVar[np]==1;{author:Ошибка:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description: У вас нет АЭС}]

$elseif[$sum[$sub[$random[40;50]];$multi[1;$random[1;2]];$sum[$sub[$getUserVar[fuel];$random[30;$getUserVar[defence]];5]]]>80]
$thumbnail[https://cdn.discordapp.com/attachments/739164032518324235/810829289770975232/767469893766742046.gif]
$title[Взрыв!]
$description[Ваша АЭС взорвалась]
$color[$getVar[color]]
$setUserVar[np;0]
$setUserVar[temp;0]
$setUserVar[fuel;0]
$endelseif
$elseif[$getUserVar[temp]>2499]
$thumbnail[https://cdn.discordapp.com/attachments/739164032518324235/810829289770975232/767469893766742046.gif]
$title[Взрыв!]
$description[Ваша АЭС взорвалась!]
$color[$getVar[color]]
$setUserVar[np;0]
$setUserVar[temp;0]
$setUserVar[fuel;0]
$endelseif
$endif
`
});