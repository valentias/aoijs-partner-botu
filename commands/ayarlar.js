module.exports = {
  name: "ayarlar",
  $if: "v4",
  aliases:["a"],
  code: `
  $author[1;$serverName;$replaceText[$serverIcon;null;$userAvatar[$clientID]]]
  $addField[1;》:blue_book: - Partner -Log- Kanalı;$replaceText[$replaceText[$getServerVar[plogg];hayır;**❌ | Ayarlanmamış**;-1];evet;**✅ | <#$getServerVar[plog]>**]]
  $addField[1;》:hash: - Partner Kanalı;$replaceText[$replaceText[$getServerVar[pkanall];hayır;**❌ | Ayarlanmamış**;-1];evet;**✅ | <#$getServerVar[pkanal]>**]]
  $addField[1;》:scroll: - Partner Texti;$replaceText[$replaceText[$getServerVar[ptextt];hayır;**❌ | Ayarlanmamış**;-1];evet;**✅ | Ayarlanmış**;-1]]
  $addField[1;》:busts_in_silhouette: - Partner Sorumlusu Rolü;$replaceText[$replaceText[$getServerVar[psorumlusuu];hayır;**❌ | Ayarlanmamış**;-1];evet;**✅ |<@&$getServerVar[psorumlusu]>**];-1]
  $addField[1;》:question: - Sistem Açık Mı ?;$replaceText[$replaceText[$getServerVar[partner];açık;**✅ | Evet**;-1];kapalı;**❌ | Hayır**;-1]]
  $addField[1;》:question: - Sistem Açık Mı ?;$replaceText[$replaceText[$getServerVar[partner];açık;**✅ | Evet**;-1];kapalı;**❌ | Hayır**;-1]    oter[$us1;ername[$clientID];$userAvatar[$clientID]]
  addTimestamp[1]
`
}
