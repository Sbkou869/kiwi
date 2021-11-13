module.exports  = ({
name: "lyrics",
description: "Shows (sometimes not) the lyrics of the song.",
 usage: "lyrics (song)",
code: `
$title[$jsonRequest[https://some-random-api.ml/lyrics?title=$get[song] ;author] - $jsonRequest[https://some-random-api.ml/lyrics?title=$get[song] ;title];$jsonRequest[https://some-random-api.ml/lyrics?title=$get[song];links.genius]]
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$get[song] ;lyrics]]
$thumbnail[$jsonRequest[https://some-random-api.ml/lyrics?title=$get[song]; thumbnail.genius]]
$color[$getVar[color]]
$let[song;$replaceText[$message; ;+;-1]]`
});