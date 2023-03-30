module.exports = {
  name: "partner",
  $if: "v4",
  aliases:["p"],
  code: `
  $if[$message[1]==sorumlusu]
  $author[1;$usertag;$authorAvatar]
  $setServerVar[psorumlusu;$mentionedRoles[1]]
  $setServerVar[psorumlusuu;evet]
  $description[1;**Partner sorumlusu başarılı bir şekilde ayarlandı.**]
  $footer[1;$username[$clientID];$userAvatar[$clientID]]
  $addTimestamp[1]
  $color[1;BLUE]
  $onlyIf[$mentionedRoles[1]!=;{newEmbed:{title:!!HATA!!}{description:**❌ |Bir rol etiketle!**}{color: BLUE}}]
  $onlyIf[$hasPerms[$authorID;admin]!=false;{newEmbed:{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color: BLUE}}]
  $onlyIf[$checkContains[$toLowercase[$message];sorumlusu]==true;{newEmbed:{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
  \`(sorumlusu | text | kanal | log | aç | kapat)\`
 }}] 
  $endif
  $if[$message[1]==text]
  $author[$usertag;$authorAvatar]
  $setServerVar[ptext;$messageSlice[1]]
  $setServerVar[ptextt;evet]
  $description[1;**Partner text başarılı bir şekilde ayarlandı.**]
  $footer[1;$username[$clientID];$userAvatar[$clientID]]
  $addTimestamp[1]
  $color[1;BLUE]
  $onlyIf[$messageSlice[1]!=;{newEmbed:{title:!!HATA!!}{description:**❌ |Bir partner texti ayarla!**}{color:BLUE}}]
  $onlyIf[$hasPerms[$authorID;admin]!=false;{newEmbed:{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color:BLUE}}]
  $onlyIf[$checkContains[$toLowercase[$message];text]==true;{newEmbed:{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
  \`(sorumlusu | text | kanal | log | aç | kapat)\`
  {color:BLUE}}}] 
  $endif
  $if[$message[1]==ol]
  $channelSendMessage[$channelID;{newEmbed:{title:$usertag}{description:**✅ | Başvuru isteği $serverName[$message[2]] sunucusundaki ayarlanmış olan partner kanalına Gönderildi. Yetkililerin cevabı bekleniyor...**}{footer:$username[$clientID]}{color:BLUE}}]
        
  $useChannel[$getServerVar[plog;$message[2]]]
  $author[1;$usertag;$authorAvatar]
  $description[1;**》Partnerlik İsteği!**
\`$serverName[$guildID]\` Sunucusundan bir yetkili olan \`$usertag\` kullanıcısı \`$serverName[$message[2]]\` sunucusu için partnet olmak istedi.

Bilgileri;

**》Sunucu Adı**
\`$serverName[$guildID]\`

**》Sunucu Oluşturma Tarihi**
\`$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$creationDate[$guildID;time];years;Yıl;-1];months;Ay;-1];week;Hafta;-1];days;Gün;-1];hours;Saat;-1];minutes;Dakika;-1];and;ve;-1];seconds;Saniye Önce Kuruldu !;-1]\`

**》Partner Başvurusu Yapan**
\`$usertag\`

**》Sunucudaki BOT Sayısı**
\`$botCount\`
  
**》Sunucudaki İnsan Sayısı**
\`$replaceText[$sub[$membersCount;$botCount];-;;-1]\`

**》Sunucudaki Üye Sayısı**
\`$membersCount (BOTLAR DAHİ)\`

**》Onaylamak İçin**
\`$getServerVar[prefix]onayla $guildID\`

**》Reddetmek İçin**
\`$getServerVar[prefix]reddet $guildID <sebep>\`]
$footer[1;$username[$clientID];$userAvatar[$clientID]]
$color[1;BLUE]
$addTimestamp[1]
$setServerVar[ps;yes;$message[2]]
$setServerVar[ps;yes]
$onlyIf[$message[2]!=$guildID;{newEmbed:{title:!!HATA!!}{description:**❌ | Kendi sunucuna partner olamazsın..**}{color:BLUE}}]
$onlyIf[$message[2]!=;{newEmbed:{title:!!HATA!!}{description:**❌ | Bir sunucu ID gir.**}{color:BLUE}}]
$onlyIf[$hasRoles[$authorID;$getServerVar[psorumlusu]]!=false;{newEmbed:{title:$usertag}{description:**❌ | Partner soumlusu rolün yok.**}{color:BLUE}}]
$onlyIf[$checkContains[$toLowercase[$message];sorumlu;ol]==true;{newEmbed:{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
\`(sorumlusu | text | kanal | log | aç | kapat)\`
{color:BLUE}}}]
$onlyIf[$getServerVar[plog;$message[2]]!=;{newEmbed:{title:!!HATA!!}{description:**❌ | Partner olmak istediğiniz sunucunun partner logu kurulu değil.**}{color:BLUE}}]
$cooldown[180s;{newEmbed:{title:!!HATA!!}{description:**❌ | 3 dakika beklemelisin. Kalan süre: \`%time%\`**}{color:BLUE}}]
$endif
$if[$message[1]==kanal]
$setServerVar[pkanal;$mentionedChannels[1]]
$setServerVar[pkanall;evet]
$description[1;**Partner kanalı başarılı bir şekilde ayarlandı.**]
$footer[1;$username[$clientID];$userAvatar[$clientID]]
$addTimestamp[1]
$color[1;BLUE]
$onlyIf[$mentionedChannels[1]!=;{newEmbed:{title:!!HATA!!}{description:**❌ |Bir kanal etiketle!**}{color:BLUE}}]
$onlyIf[$hasPerms[$authorID;admin]!=false;{newEmbed:{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color:BLUE}}]
$onlyIf[$checkContains[$toLowercase[$message];kanal]==true;{newEmbed:{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
\`(sorumlusu | text | kanal | log | aç | kapat)\`
{color:BLUE}}}] 
$endif
$if[$message[1]==log]
$author[1;$usertag;$authorAvatar]
$setServerVar[plog;$mentionedChannels[1]]
$setServerVar[plogg;evet]
$description[1;**Partner log başarılı bir şekilde ayarlandı.**]
$footer[1;$username[$clientID];$userAvatar[$clientID]]
$addTimestamp[1]
$color[1;BLUE]
$onlyIf[$mentionedChannels[1]!=;{newEmbed:{title:!!HATA!!}{description:**❌ |Bir kanal etiketle!**}{color:BLUE}}]
$onlyIf[$hasPerms[$authorID;admin]!=false;{newEmbed:{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color:BLUE}}]
$onlyIf[$checkContains[$toLowercase[$message];log]==true;{newEmbed:{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
\`(sorumlusu | text | kanal | log | aç | kapat)\`
{color:BLUE}}}] 
$endif
$if[$message==aç]
$author[1;$usertag;$authorAvatar]
$setServerVar[partner;açık]
$description[1;**Partner sistemi başarılı bir şekilde açıldı.**]
$footer[1;$username[$clientID];$userAvatar[$clientID]]
$addTimestamp[1]
$color[1;BLUE]
$onlyIf[$getServerVar[partner]!=açık;{newEmbed:{title:!!HATA!!}{description:**❌ |Sistem zaten açık!**}{color:BLUE}}]
$onlyIf[$hasPerms[$authorID;admin]!=false;{newEmbed:{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color:BLUE}}]
$onlyIf[$checkContains[$toLowercase[$message];ç]==true;{newEmbed:{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
\`(sorumlusu | text | kanal | log | aç | kapat)\`
{color:BLUE}}}] 
$endif
$if[$message==kapat]
$author[$usertag;$authorAvatar]
$setServerVar[partner;kapalı]
$description[1;**Partner sistemi başarılı bir şekilde kapatıldı.**]
$footer[1;$username[$clientID];$userAvatar[$clientID]]
$addTimestamp[1]
$color[1;BLUE]
$onlyIf[$getServerVar[partner]!=kapalı;{newEmbed:{title:!!HATA!!}{description:**❌ |Sistem zaten kapalı!**}{color:BLUE}}]
$onlyIf[$hasPerms[$authorID;admin]!=false;{newEmbed:{title:$usertag}{description:**❌ | Yetkin yetersiz.**}{color:BLUE}}]
$onlyIf[$checkContains[$toLowercase[$message];kapat]==true;{newEmbed:{title:$usertag}{description:**❌ | Hata! Lütfen seçenek seçin.**
\`(sorumlusu | text | kanal | log | aç | kapat)\`
{color:BLUE}}}] 
$endif
$if[$message==]
$author[1;$usertag;$authorAvatar]
$description[1;**❌ | Hata! Lütfen seçenek seçin.**
 \`(sorumlusu | text | kanal | log | aç | kapat)\`]
$image[1;https://images-ext-2.discordapp.net/external/J1G0eQbVixGLEQbrVZNMee3WuX7G-fSWSTBFfoxuRUg/https/yt3.googleusercontent.com/YX9udfCVJUSpPfAomc7mypBEp0Hu7pwTXZVYHQUrlgcyBNHVGcTAgX4qAmXXtK4KMZ_ahSPGJ4c%3Ds88-c-k-c0x00ffffff-no-rj]
$footer[1;$username[$clientID];$userAvatar[$clientID]]
$addTimestamp[1]
        
          
`
}
