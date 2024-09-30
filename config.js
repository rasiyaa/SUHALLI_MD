const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="efeurhobobullish@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos,Nigeria";
global.github=process.env.GITHUB|| "https://github.com/efeurhobopatricia/SUHALLI_MD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VajVvpQIyPtUbYt3Oz0k";
global.website=process.env.GURL || "https://chat.whatsapp.com/J33KwFYkLERK39SEqaxYRB" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "©by ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ" 


global.devs = "2349168023704" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349168023704";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 5
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_18_09_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2NixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTksXG4gICAgICAgIDcxLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjgsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDg3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MyxcbiAgICAgICAgNzksXG4gICAgICAgIDgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA3OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDksXG4gICAgICAgIDY3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTMxLFxuICAgICAgICA1OCxcbiAgICAgICAgODQsXG4gICAgICAgIDQwLFxuICAgICAgICA4NixcbiAgICAgICAgNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNixcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxLFxuICAgICAgICAxNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MixcbiAgICAgICAgNDMsXG4gICAgICAgIDc0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDczLFxuICAgICAgICAxMixcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExLFxuICAgICAgICAxOCxcbiAgICAgICAgMTE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzLFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1OSxcbiAgICAgICAgODgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NixcbiAgICAgICAgMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNCxcbiAgICAgICAgNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm03REFEL1FLOFIvODVwclQzOUdZR1pvK1RUQlAzbEpuWmhlbFMzVWxlRFU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2ODAyMzcwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRjc5ODAyNTRGQTk2NTk3NjYwRDgxNzYyNjdCQzBBRjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3NzA5NDg3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlF1U25hNU1zUmxXeUZJUWdVbllIa3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjhkZTc5ZDYtMmQ0Ny00OThlLWFmMjEtMWUyY2YwMDZkMzY0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMTk4LFxuICAgICAgMTk4LFxuICAgICAgODYsXG4gICAgICAxNTQsXG4gICAgICA3MCxcbiAgICAgIDE4OCxcbiAgICAgIDUyLFxuICAgICAgMjQxLFxuICAgICAgMTUxLFxuICAgICAgNTMsXG4gICAgICAyOCxcbiAgICAgIDQzLFxuICAgICAgMTcxLFxuICAgICAgMTk5LFxuICAgICAgNzUsXG4gICAgICAxOTYsXG4gICAgICAxMzMsXG4gICAgICA2OSxcbiAgICAgIDE5OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAxNjQsXG4gICAgICA5OCxcbiAgICAgIDI1NSxcbiAgICAgIDEzNixcbiAgICAgIDEwMixcbiAgICAgIDIxNyxcbiAgICAgIDIxNixcbiAgICAgIDIwOSxcbiAgICAgIDExNCxcbiAgICAgIDI1MSxcbiAgICAgIDcyLFxuICAgICAgMTUsXG4gICAgICAxNyxcbiAgICAgIDk1LFxuICAgICAgMjM5LFxuICAgICAgMzksXG4gICAgICAyMDUsXG4gICAgICAxOTMsXG4gICAgICAxMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNURDM0UzWldcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNjgwMjM3MDQ6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzOTY4MTAxMDM0ODI2Mzo4NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOK3UwS0VIRUthQzY3Y0dHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIml3OElra1M0ZFRhdk1VWkNWRko4YU53QmYxeFBYL2I3d3JXaWJnZEVZU1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicVdxVWt6Yis0aEpoM0VtbEpaNVdrVjFzUVo3T0E1L3FzR1VKV2EzajdsMHh3aFNGaDQ5eUljWTRrdWZBVDhCK01MR3JxWGZXbnZuUVVrR1pmNXMrQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibGRGYURXbE5JRStucG02WEY3YnRZMFNleDliTlJIOGhxQTVWY3RsQXlqTjlaREpmM04zWUVWVzIvRUdoMWpLS002TkVtYXZqT3hoSGxPaVdsMVRVaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE2ODAyMzcwNDo4NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjc3MDk0ODIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBNzZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUE3Ni5qc29uIjogIntcImtleURhdGFcIjpcIkhDUFAraGd0Z3dDMkN1OGZma2dPMjBGZjZnUjEzMUxiTEluUDhzMVZqL1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk0OTU3MDkxMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ©ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ 』```", //*『sᴜʙsᴄʀɪʙᴇ • SUHALLI_MD』*\n youtube.com/only_one_empire"),
 
  author : process.env.PACK_AUTHER|| "ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "SUHALLI_MD",
  ownername:process.env.OWNER_NAME|| "ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "kUSnarK3Xxue73tRHxzrd9sb",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
