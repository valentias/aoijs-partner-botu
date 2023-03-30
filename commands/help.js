module.exports = {
  name: "yardım",
  aliases:["help"],
  code: `
 $author[1;$usertag;$authorAvatar]
 $description[1;
 **》$getServerVar[prefix]partner-bul**
 \`Sunucu ID lerini gösterir.\`
        
 **》$getServerVar[prefix]partner**
 \`Partner sorumlusu, text v.b. şeyleri ayarlamanızı sağlar.\`
        
**》$getServerVar[prefix]ayarlar**
\`Sunucu ayarlarını gösterir.\`
        
**》$getServerVar[prefix]sunucu-bilgi**
\`Kendi sunucunuz ya da ID sini yazdığınız sunucunun bilgisinisi gösterir.\`
        
**》$getServerVar[prefix]onayla**
\`Partner onaylarsınız.\`
        
**》$getServerVar[prefix]reddet**
\`Partner reddedersiniz.\`
        
**》$getServerVar[prefix]eval**
\`Sahip komutudur.\`
        
**》$getServerVar[prefix]ping**
\`Botun pingini gösterir.\`
 ]
$footer[1;$username[$clientID];$userAvatar[$clientID]]
$addTimestamp[1]
$color[1;RANDOM]
        `
}
