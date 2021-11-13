module.exports = ({
  name: "memory",
  aliases: ["host-memory", "mem"],
  description: "Outputs host memory",
  usage: "memory/mem/host-memory",
  code: `
  $title[Пямять хоста]
  $description[\`\`\`js
  $exec[cat /proc/meminfo]\`\`\`]
  $color[5865F2]
  $onlyForIDs[586969283150741524; ]
  `
})