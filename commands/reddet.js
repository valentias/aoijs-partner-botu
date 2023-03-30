module.exports = {
  name: "reddet",
  $if: "v4",
  code: `
$if[$getServerVar[ps;$message[1]]==yes]
$channelSendMessage[$getServerVar[plog;$message[1]];{newEmbed:{title:$usertag[$clientID]}{description:**❌ | \`$serverName\` sunucusuna atmış olduğunuz başvuru bir yetkili tarafından reddedildi.**}{color:RANDOM}}]
$channelSendMessage[$getServerVar[plog;$guildID];{newEmbed:{title:$usertag[$clientID]}{description:**✅ | \`$serverName[$message[1]]\` sunucusundan gelmiş olan partnerlik isteği \`$usertag\` tarafından reddedildi.**}{color:RANDOM}}]
$onlyIf[$isNumber[$message[1]]!=false;{newEmbed:{title:$usertag}{description:**❌ | \`$message[1]\` Bir sayı değil.**}{footer:$username[$clientID]}{color:RANDOM}}]
$else
$author[1;$usertag;$authorAvatar]
$description[1;**❌ | \`$message[1]\` ID'li sunucu size bir istek göndermemiş**]
$footer[1;$username[$clientID];$userAvatar[$clientID]]
$color[1;RANDOM]
$endif
$setServerVar[ps;no;$message[1]]
$setServerVar[ps;no]
$onlyIf[$message[1]!=$guildID;]
$suppressErrors[{newEmbed:{title:$usertag}{description:**❌ | Böyle Bir sunucuda yokum.**}{footer:$username[$clientID]}{color:RANDOM}}]
        `
}
