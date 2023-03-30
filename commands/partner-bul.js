module.exports = {
   name: "partner-bul",
   $if: "v4",
   code: `
   $author[1;$usertag;$replaceText[$serverIcon;null;$userAvatar[$clientID]]]
   $description[1;**》Sunucular aranıyor...**]
   $editIn[5s;{newEmbed:{title:$usertag}{description:$replaceText[$serverIDs[];$guildID;;-1]}{footer:$username[$clientID]}{color:BLUE}}]
   $color[1;BLUE]
   $footer[1;$username[$clientID];$userAvatar[$clientID]]
   $addTimestamp[1]
        `
}
