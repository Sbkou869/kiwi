module.exports = ({
    name: "tr",
        description: "Перевод текста на указанный язык.",
 usage: "tr/translate <язык> <текст>",
  aliases: ['translate'],
  code:
  `
  $djsEval[const {MessageEmbed} = require ('discord.js');

const translate = require('@iamtraction/google-translate');

const idioma = d.args[0];

const texto = d.args.slice(1).join(' ');

 if(!idioma){ 

 message.channel.send(':x: Где язык для перевода');

 }

 if(!texto) {

 message.channel.send(':x: Где текст');

 }

 translate(texto , { to: idioma }).then(res => {

 let embed = new MessageEmbed()

.setAuthor('Translater', 'https://cdn.discordapp.com/avatars/776118034431213599/848df297d525d40d4e0d71bce619e73d.webp?size=2048')

 .addField('Your text:', texto)

 .addField('Translate:', res.text)

 .setColor('#ec8ea9')

.setFooter('Powered by Google Translate', 'https://media.discordapp.net/attachments/695277643360239616/772322213394120714/1492616968-18-google-translate-text-language-translation_83413.png')


 message.channel.send(embed)

 }).catch(err => {

 console.error(err);

 });
]
$blackListIds[852869186510389278; ауе ты в чс]
  `
});