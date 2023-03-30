const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
    token: process.env.token,
    prefix:"$getServerVar[prefix]",
    intents: "all"
})
bot.onMessage()       

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

bot.command({
  name:"ping",
  code:`
  Gecikmem : $ping | Bot gecikmesi : $botPing
  `
})

bot.status({
    text: `Valentia ❤️ Lyrox`,
    type: "PLAYING",
    status: "dnd",
    time: 12
})

bot.status({
    text: "Valentia ❤️ Partner",
    type: "PLAYİNG",
    status: "dnd"
    time: 12
})

bot.variables({
  prefix: ".",
  psorumlusu:"",
  psorumlusuu:"hayır",
  ptext:"",
  ptextt:"hayır",
  pkanal:"",
  pkanall:"hayır",
  plog:"",
  plogg:"hayır",
  partner:"kapalı",
  ps:"no",
  
  })
