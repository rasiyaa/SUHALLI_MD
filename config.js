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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_27_09_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDczLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTI3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgODAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTksXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzLFxuICAgICAgICAzNixcbiAgICAgICAgMjI5LFxuICAgICAgICA4LFxuICAgICAgICA1NixcbiAgICAgICAgNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICA1NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODgsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3OSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDEzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NCxcbiAgICAgICAgNDksXG4gICAgICAgIDgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcxLFxuICAgICAgICA1OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk54QVZPM2dTMjVpZEw4K3dpbUxXeEorR3E1dGhYcWh6YU1BclUyZVB2TjA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2ODAyMzcwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjZEQzVFMkVDNUE2MDg1OTNGRTUyMzYxNTU3NjRERUFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3MjM0ODcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTE2ODAyMzcwNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzE0MERGRjc2ODM4QTM5Q0MwODVGMjFEMzMxRDgzRjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI3MjM0ODc0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZJcFJuQTBnVEZXdjUxdHRnalpEX1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiODNiODJhYzItMTVmYi00NDEzLWFmNTgtNDY0MjQzN2E3MDQ2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MSxcbiAgICAgIDgwLFxuICAgICAgMjE1LFxuICAgICAgMjI0LFxuICAgICAgMTgxLFxuICAgICAgMTIsXG4gICAgICAxOTQsXG4gICAgICAxMyxcbiAgICAgIDIwMixcbiAgICAgIDEzNixcbiAgICAgIDY2LFxuICAgICAgMTQwLFxuICAgICAgMjU1LFxuICAgICAgMjQxLFxuICAgICAgMjM1LFxuICAgICAgMTUyLFxuICAgICAgNDQsXG4gICAgICAyMTYsXG4gICAgICAyNTIsXG4gICAgICAxNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI0LFxuICAgICAgOTUsXG4gICAgICAyNDYsXG4gICAgICAxMTIsXG4gICAgICA5MSxcbiAgICAgIDAsXG4gICAgICAyNTMsXG4gICAgICAxMjMsXG4gICAgICAyNCxcbiAgICAgIDIwNyxcbiAgICAgIDIyMSxcbiAgICAgIDIyMSxcbiAgICAgIDI1MixcbiAgICAgIDE0NSxcbiAgICAgIDIwOSxcbiAgICAgIDEzOSxcbiAgICAgIDE3NixcbiAgICAgIDIzMyxcbiAgICAgIDIyMyxcbiAgICAgIDgxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZEWUQ1VDNEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTY4MDIzNzA0OjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzk2ODEwMTAzNDgyNjM6NzBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiUGFya2VyIExlZVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ04ydTBLRUhFTE9HenJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaXc4SWtrUzRkVGF2TVVaQ1ZGSjhhTndCZjF4UFgvYjd3cldpYmdkRVlTWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWVTNMZTFrNm1tNnFPK05xOWVFTU5LOWlBVHdlbDhTdXJlemIrZ0dRK0U5RkNCT1VXdTEwRjJuTU5UZ3E3QVRXbEQ1QnFDdGNjUVZTVG5vdUNjNjNBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJIR0RlcXowTHNrV3lra08yclV2ZHF3QTY2c0JuV3g5a2JlTTQwNFlMUHlXNVg0U3MxNDMvRG1ISFc1Yktla3NUeWpPbkRSamN4SEZKYVdnSngyZFRoZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTY4MDIzNzA0OjcwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNzIzNDg3MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJWbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlZsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiV0pmMG1wSUx3Z3JmaTNOK1dvcS94S0FGMGRLZzlidHQyb3kxdjliaTUyZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTQ5NTcwOTA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjcyMzQ4NzA3NjVcIn0iCn0="  // PUT your SESSION_ID 


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
