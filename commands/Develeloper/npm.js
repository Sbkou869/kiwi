module.exports = ({
name: "npm-install",
aliases: ["npm-i"],
code: `Command failed#COLON# npm i #CHAR#writeFile#RIGHT#commands/Develeloper/npm.js#SEMI#module.exports@latest
npm ERR! code ENOLOCAL
npm ERR! Could not install from "#RIGHT#commands/Develeloper/npm.js" as it does not contain a package.json file.

npm ERR! A complete log of this run can be found in#COLON#
npm ERR!     /home/runner/.npm/_logs/2021-05-29T19_39_53_812Z-debug.log
/bin/sh#COLON# 1#COLON# module.exports@latest#COLON# not found


`
})