const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_11_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU1LFxuICAgICAgICA3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTM2LFxuICAgICAgICA1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxODYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDksXG4gICAgICAgIDI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcxLFxuICAgICAgICAyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA1MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICA4OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI5LFxuICAgICAgICA4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3LFxuICAgICAgICA2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDkxLFxuICAgICAgICAzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzLFxuICAgICAgICA5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjYsXG4gICAgICAgIDM2LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwienFqZGF3S0g5cjBuRks3MHk4NmorNXIvMDJpMnBmRVBRYjFSemt6djRrbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS2loWHVtX3VSVFMyR2trT1F2UW1lQVwiLFxuICBcInBob25lSWRcIjogXCIxYmY3MDBjNi00ODY1LTRlZDAtYmRkOS02MTk5NTBiNDk1NDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE0LFxuICAgICAgMjMxLFxuICAgICAgNCxcbiAgICAgIDEyMCxcbiAgICAgIDUsXG4gICAgICAxMzIsXG4gICAgICAxNzIsXG4gICAgICAxMjcsXG4gICAgICAxMDAsXG4gICAgICAxMTYsXG4gICAgICAxMjAsXG4gICAgICAyMzUsXG4gICAgICAxMDMsXG4gICAgICA2OCxcbiAgICAgIDIzMSxcbiAgICAgIDEyMCxcbiAgICAgIDIwNSxcbiAgICAgIDI1MSxcbiAgICAgIDE0NyxcbiAgICAgIDEwNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTgsXG4gICAgICA1MixcbiAgICAgIDEyNyxcbiAgICAgIDE3MSxcbiAgICAgIDIxOCxcbiAgICAgIDU4LFxuICAgICAgNTEsXG4gICAgICAzOCxcbiAgICAgIDQ0LFxuICAgICAgMzcsXG4gICAgICAyMjgsXG4gICAgICAyMjksXG4gICAgICAxMzksXG4gICAgICAxMzIsXG4gICAgICAyNDUsXG4gICAgICAyNDYsXG4gICAgICA3NyxcbiAgICAgIDEyNyxcbiAgICAgIDIyMixcbiAgICAgIDE0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2RUNHTTlaM1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NzEzMTA2MDY6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3MjAyNjM0MTg4ODIwNjoyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZnRxdk1HRU52czNMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImYxa3I1QUlSZnpTSzhhQXlxbCthNUpNa2lITWJnRGxMZXM0Mzd6U0tWRGc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMzFxeUNRSVZnV292TzZ4Q3FZSVVjeDc0aHdoWW1BdUh4MFZYWXVpbjVHZXpUaFFHbVM2TnhrY2RKSlN6Yi9aUGlDRGhleXozNGxZQjhhc1Z0eXFDQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidURaQTJOZkJZRDQwNEJKYzdpa3krNGlxSk5kUExrUWZCR1BFZ3NWb2RoNlBqY2tFblJ2dDJXTDdZQWY2Q043cFRvUTlQMUFYblZjYXVQa3ZWM2lNQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzEzMTA2MDY6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTE4NTg4NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZNMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRk0xLmpzb24iOiAie1wia2V5RGF0YVwiOlwiY0tMaU8rd1VYWVV1YnlPUHpGSUwrR2krS2UrZmpCb2Z3NWhxQnhGODAxQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODUyNDg3NDE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjExODU4OTE3NjRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
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
