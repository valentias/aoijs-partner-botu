module.exports = {
  name: "sunucu-bilgi",
  $if: "v4",
  code: `
$if[$message[1]==]
$thumbnail[1;$replaceText[$serverIcon;null;$userAvatar[$clientID]]]
$author[1;$serverName;$replaceText[$serverIcon;null;$userAvatar[$clientID]]]
$addField[1;Oluşturulma Tarihi;\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildID;time];years;Yıl;-1];months;Ay;-1];week;Hafta;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye Önce Kuruldu !;-1]\`;yes]
$addField[1;Kanal sayısı ($channelCount);**》:sound: \`$channelCount[voice]\` | 》:speech_balloon: \`$channelCount[text]\`**;yes]
$addField[1;Üye sayısı ($membersCount);**》:robot: \`$botCount\` | 》:busts_in_silhouette: \`$replaceText[$sub[$membersCount;$botCount];-;;-1]\`**;yes]
$addField[1;Sunucu ID;**》\`$guildID\`**;yes]
$addField[1;Sunucu Adı;**》\`$serverName\`**;yes]
$color[1;BLUE]
$footer[1;$username;$userAvatar[$authorID]]
$addTimestamp[1]
$else
$thumbnail[1;$replaceText[$serverIcon[$message[1]];null;$userAvatar[$clientID]]]
$author[1;$serverName[$message[1]];$replaceText[$serverIcon[$message[1]];null;$userAvatar[$clientID]]]
$addField[1;Oluşturulma Tarihi;\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$message[1];time];years;Yıl;-1];months;Ay;-1];week;Hafta;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye Önce Kuruldu !;-1]\`;yes]
$addField[1;Kanal sayısı ($channelCount[$message[1]]);**》:sound: \`$channelCount[voice;$message[1]]\` | 》:speech_balloon: \`$channelCount[text;$message[1]]\`**;yes]
$addField[1;Üye sayısı ($membersCount[$message[1]]);**》:robot: \`$botCount[$message[1]]\` | 》:busts_in_silhouette: \`$replaceText[$sub[$membersCount[$message[1]];$botCount[$message[1]]];-;;-1]\`**;yes]
$addField[1;Sunucu ID;**》\`$guildID[$message[1]]\`**;yes]
$addField[1;Sunucu Adı;**》\`$serverName[$message[1]]\`**;yes]
$color[1;BLUE]
$footer[1;$username;$userAvatar[$authorID]]
$addTimestamp[1]
$onlyIf[$isNumber[$message[1]]!=false;{newEmbed:{title:$usertag}{descrption:**❌ | \`$message[1]\` Bir sayı değil.**}{footer:$username[$clientID]}{color:RANDOM}}]
$suppressErrors[{newEmbed:{title:$usertag}{description:**❌ | Böyle Bir sunucuda yokum.**}{footer:$username[$clientID]}{color:RANDOM}}]
$endif
`
}
