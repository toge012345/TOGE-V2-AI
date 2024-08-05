// config.js
const fs = require("fs");
require("dotenv").config();

const config = {
  SESSION_ID: process.env.SESSION_ID || ""eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9UV3RIUkxJTHZuUXdRM2hKWCtLWUFhZ2tJY2RUTTNMc3VFOGZjU05sND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkZnSEZJcXhzaWs1SWJaNlhwNTMvOTErZjE4K1lwcktzejlUYVZvQUF3OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrSGd6RHF5dW94ZGdHT1BlYnpSSEZFRFdGL0k2ZXJTVitnRzVJZmNPYzE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJEOUZGbklJd1hVK21XS013bnZxRmJiOGM3NG1ldGpJNnVSM3llcnM4WWw4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndQd3VYM0pNeWxRZ0UvaCtDQ2I0U0MwYUdqOG9IeXNwak8wQ0habFRoVlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtSNjRGWC9WNkIzcWRuVzE3Q2ZpSHdpa2FMMzc2by9CTlVxeER0N2FPbVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0dTZlFocGZoczFwQnVZdGNnRjVWL2MxbEdvWXBYM1h1eWtkeUZqOFEyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEd0QU1sdFpGNmZCVktzUDJJRjdkeU4wT2lJUHhuNFlBcWV6Mko5MHB5WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndnamZJalNsNVVBU2JsbGpGOUxwc0g5YUgxMHBiOWlUTEhmeGFkTTZVRHNlSkMwYU5YdG5MK1hnQ0l4Q3Y1MUdKT3pDVjBOSTBuQnY0L1dEcWsxeERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTYsImFkdlNlY3JldEtleSI6IkUxYXI1VFF0Z1ZaRGNuVFE4SzVoQ1YzbndOd0NYR3ZyV2Y0QUptMVYrWXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ino5eWozTEhMU0N5VUhRRzdjeWNNaHciLCJwaG9uZUlkIjoiNTYwNzM3NTctMDE2Yi00NDAxLTkyZjMtOTM5NzUzZWFmYjlmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJkS2xKdGpFL3JSZ2N0SGowR2wzQ1ZZNlN1cz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUU9TODlOU1U1R1FKRkllZmZjdVBpcjA1N1E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTlhOM0JHWUoiLCJtZSI6eyJpZCI6IjIyNDY2MDAwMjc0MDoyNkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUhEd3RvQ0VKMzN3clVHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaC9QQUdRaTNuT0tNVDlwL1hnbjd1VDBRWUNJUTk1Ujd1RXJETmFMVU9Iaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiakdXeHZmZ25na1BCMWdOa1BHUlVrR0FXRzVveFQ5OUpIMnVFRWhRVTQyR1FFeVpvMUVPTkNnamVuVC9ML3A3MzBzQUdCclhXNUdLT3JkbW90ZkZFQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IjQ1bEpmT1pGYkhpV2h3T04xTW9XdjRuMm1qNWdyM2VzTlV6YVhiTGE2U2l3ZFN5bmg2MkJRTlpoTzBpSDRWb3pwRncwekFMQU9VbU1uaVFWU3BYYkNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI0NjYwMDAyNzQwOjI2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllmendCa0l0NXppakUvYWYxNEorN2s5RUdBaUVQZVVlN2hLd3pXaTFEaDUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4NTg0MTB9
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true, 
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  MODE: process.env.MODE || "public",
  OWNER_NAME: process.env.OWNER_NAME || "𝗧𝗢𝗚𝗘-𝗠𝗗-𝗩𝟮",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "620629694",
  GEMINI_KEY: process.env.GEMINI_KEY || "",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
  YTDL_NO_UPDATE: process.env.YTDL_NO_UPDATE !== undefined ? process.env.YTDL_NO_UPDATE === 'true' : true,
};


module.exports = config;
