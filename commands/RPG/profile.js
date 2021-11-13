module.exports = ({
      name: "profile",
          description: "Shows you your profile.",
 usage: "profile",
    code: `$title[Your Profile]
$description[Shards - $getUserVar[shards]
Gems - $getUserVar[gem]
Armor - $getUserVar[armor]
Defence - $getUserVar[def]
Weapon - $getUserVar[weapor]
Damage - $getUserVar[damage]]
$color[$getVar[color]]`
});