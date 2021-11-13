module.exports = ({
  name: "craft",
  usage: "craft <item/gem>",
  description: "Creates the item you specified",
  code: `$if[$message==gem]
  $title[Craft]
  $description[Crafted a gem for \`670\` shards]
  $color[$getVar[color]]
  $setUserVar[gem;$sum[$getUserVar[gem];1]]
  $setUserVar[shards;$sub[$getUserVar[shards];670]]
  $onlyIf[$getUserVar[shards]>=670;You don't have enough shards! Get them to \`fight\`.]
  $elseIf[$message==money]
  $title[Craft]
  $description[You got \`1000\` coins by breaking the gem.]
  $color[$getVar[color]]
  $setUserVar[money;$sum[$getUserVar[money];1000]]
  $setUserVar[gem;$sub[$getUserVar[gem];1]]
  $onlyIf[$getUserVar[gem]>=1;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:You don't have enough gems! Get them to \`fight\` or just create it.}]
  $endelseif
    $elseIf[$message==dcbreak]
  $title[Craft]
  $description[You got \`5000\` gems by breaking the death coin.]
  $color[$getVar[color]]
  $setUserVar[gem;$sum[$getUserVar[gem];5000]]
  $setUserVar[dc;$sub[$getUserVar[dc];1]]
  $onlyIf[$getUserVar[dc]>=1;{author:Error:https://cdn.discordapp.com/emojis/763469431610277918.gif } {color: $getVar[errorcol]} {description:You don't have enough death coins!}]
  $endelseif
  $endif
  `
})