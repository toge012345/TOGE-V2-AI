import moment from 'moment-timezone';
import fs from 'fs';
import os from 'os';

import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

// Get total memory and free memory in bytes
const totalMemoryBytes = os.totalmem();
const freeMemoryBytes = os.freemem();

// Define unit conversions
const byteToKB = 1 / 1024;
const byteToMB = byteToKB / 1024;
const byteToGB = byteToMB / 1024;

// Function to format bytes to a human-readable format
function formatBytes(bytes) {
  if (bytes >= Math.pow(1024, 3)) {
    return (bytes * byteToGB).toFixed(2) + ' GB';
  } else if (bytes >= Math.pow(1024, 2)) {
    return (bytes * byteToMB).toFixed(2) + ' MB';
  } else if (bytes >= 1024) {
    return (bytes * byteToKB).toFixed(2) + ' KB';
  } else {
    return bytes.toFixed(2) + ' bytes';
  }
}
// Bot Process Time
const uptime = process.uptime();
const day = Math.floor(uptime / (24 * 3600)); // Calculate days
const hours = Math.floor((uptime % (24 * 3600)) / 3600); // Calculate hours
const minutes = Math.floor((uptime % 3600) / 60); // Calculate minutes
const seconds = Math.floor(uptime % 60); // Calculate seconds

// Uptime
const uptimeMessage = `*I am alive now since ${day}d ${hours}h ${minutes}m ${seconds}s*`;
const runMessage = `*☀️ ${day} Day*\n*🕐 ${hours} Hour*\n*⏰ ${minutes} Minutes*\n*⏱️ ${seconds} Seconds*\n`;

const xtime = moment.tz("Asia/Colombo").format("HH:mm:ss");
const xdate = moment.tz("Asia/Colombo").format("DD/MM/YYYY");
const time2 = moment().tz("Asia/Colombo").format("HH:mm:ss");
let pushwish = "";

if (time2 < "05:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "11:00:00") {
  pushwish = `Good Morning 🌄`;
} else if (time2 < "15:00:00") {
  pushwish = `Good Afternoon 🌅`;
} else if (time2 < "18:00:00") {
  pushwish = `Good Evening 🌃`;
} else if (time2 < "19:00:00") {
  pushwish = `Good Evening 🌃`;
} else {
  pushwish = `Good Night 🌌`;
}

const test = async (m, Matrix) => {
  let selectedListId;
  const selectedButtonId = m?.message?.templateButtonReplyMessage?.selectedId;
  const interactiveResponseMessage = m?.message?.interactiveResponseMessage;
  if (interactiveResponseMessage) {
    const paramsJson = interactiveResponseMessage.nativeFlowResponseMessage?.paramsJson;
    if (paramsJson) {
      const params = JSON.parse(paramsJson);
      selectedListId = params.id;
     // console.log(selectedListId);
    }
  }
  const selectedId = selectedListId || selectedButtonId;
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '.';
        const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
        let ethix = {
    public: true // or false
};

let mode = ethix.public ? 'public' : 'private';

        const validCommands = ['list', 'help', 'menu'];

  if (validCommands.includes(cmd)) {
    let msg = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: `
╭─⦿ ⏤͟͟͞͞★ 𝐁𝐎𝐓 𝐔𝐒𝐄𝐑 ꗄ➺
┃
┃★ 𝗕𝗼𝘁 : 𝗧𝗢𝗚𝗘-𝗠𝗗-𝗩𝟮
┃★ 𝗢𝘄𝗻𝗲𝗿 : ᴛᴏɢᴇ ɪɴᴜᴍᴀᴋɪ
┃★ 𝗣𝗿𝗲𝗳𝗶𝘅 : *${prefix}*
┃★ 𝗠𝗼𝗱𝗲 : *${mode}*
┃★ 𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : *${uptime}*
┃★ 𝗛𝗼𝘀𝘁 𝗡𝗮𝗺𝗲 : *TOGE SERVER*
┃★ 𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : *${os.platform()}*  
╰─────────────────⍟

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕ `
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴛᴏɢᴇ-ᴍᴅ-ᴠ2"
            }),
            header: proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./src/TOGE-MD-V2.jpg')}, { upload: Matrix.waUploadToServer})), 
                  title: ``,
                  gifPlayback: true,
                  subtitle: "",
                  hasMediaAttachment: false  
                }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  "name": "single_select",
                  "buttonParamsJson": `{"title":"🔰 𝗠𝗘𝗡𝗨 𝗟𝗜𝗦𝗧 🔰",
                 "sections":
                   [{
                    "title":"𝐀𝐋𝐋 𝐌𝐄𝐍𝐔",
                    "highlight_label":"🔰 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔 🔰",
                    "rows":[
                      {
                       "header":"",
                       "title":"ᴀʟʟ ᴍᴇɴᴜ",
                       "description":"🔰 𝐀𝐋𝐋 𝐌𝐄𝐍𝐔 🔰 ",
                       "id":"View All Menu"
                      },
                      {
                        "header":"",
                        "title":"ᴅᴏᴡɴʟᴀᴏᴅᴇʀ ᴍᴇɴᴜ",
                        "description":"🔰 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐅𝐄𝐀𝐓𝐔𝐑𝐄 🔰",
                        "id":"Downloader Menu"
                      },
                      {
                        "header":"",
                        "title":"ɢʀᴏᴜᴘ ᴍᴇɴᴜ",
                        "description":"🔰 𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 🔰",
                        "id":"Group Menu"
                      },
                      {
                        "header":"",
                        "title":"ᴛᴏᴏʟ ᴍᴇɴᴜ",
                        "description":"🔰 𝐓𝐎𝐎𝐋 𝐌𝐄𝐍𝐔 🔰",
                        "id":"Tool Menu"
                      },
                      {
                        "header":"",
                        "title":"ᴍᴀɪɴ ᴍᴇɴᴜ",
                        "description":"🔰 𝐁𝐎𝐓 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒 🔰",
                        "id":"Main Menu"
                      },
                     {
                        "header":"",
                        "title":"ᴏᴡɴᴇʀ ᴍᴇɴᴜ",
                        "description":"🔰 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 🔰",
                        "id":"Owner Menu"
                      },
                      {
                        "header":"",
                        "title":"ᴀɪ ᴍᴇɴᴜ",
                        "description":"🔰 𝐀𝐈 𝐌𝐄𝐍𝐔 🔰",
                        "id":"Ai Menu"
                      },
                      {
                        "header":"",
                        "title":"sᴇᴀʀᴄʜ ᴍᴇɴᴜ",
                        "description":"🔰 𝐒𝐄𝐀𝐑𝐂𝐇𝐄 𝐌𝐄𝐍𝐔 🔰",
                        "id":"Search Menu"
                      },
                      {
                        "header":"",
                        "title":"sᴛᴀʟᴋ ᴍᴇɴᴜ",
                        "description":"🔰 𝐒𝐓𝐀𝐋𝐊 𝐌𝐄𝐍𝐔 🔰",
                        "id":"Stalk Menu"
                      },
                      {
                        "header":"",
                        "title":"𝚌𝚘𝚗𝚟𝚎𝚛𝚝𝚎𝚛 𝚖𝚎𝚗𝚞",
                        "description":"🔰 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐄𝐑 𝐌𝐄𝐍𝐔 🔰",
                        "id":"Converter Menu"
                      }
                    ]}
                  ]}`
                },
              ],
            }),
            contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120363749960769123@newsletter',
                  newsletterName: "TOGE-MD-V2",
                  serverMessageId: 143
                }
              }
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
      messageId: msg.key.id
    });
  }
      if (selectedId == "View All Menu") {
        const mode = process.env.MODE;
        const str = `hey ${m.pushName} ${pushwish}
╭──────────────⦿
┃   *Founder:* ᴛᴏɢᴇ ɪɴᴜᴍᴀᴋɪ
┃   *Bot Name:* 𝗧𝗢𝗚𝗘-𝗠𝗗-𝗩𝟮 
┃   *Host:* Kali Linux
┃   *Prefix: all prefix* 
┃   *Uptime:* ${uptime} 
╰───────────────⍟

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕

┠┌─⦿ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ⦿
┃│❏ ${prefix}𝙰𝚃𝚃𝙿
┃│❏ ${prefix}𝙰𝚃𝚃𝙿2
┃│❏ ${prefix}𝙰𝚃𝚃𝙿3
┃│❏ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃│❏ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃│❏ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃│❏ ${prefix}𝙼𝙿3
┃│
┃└───⦿
┃
┠┌─⦿ 𝙰𝙸 ⦿
┃│❏ ${prefix}𝙰𝚒
┃│❏ ${prefix}𝙱𝚞𝚐
┃│❏ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃│❏ ${prefix}𝙶𝚙𝚝
┃│❏ ${prefix}𝙳𝚊𝚕𝚕𝚎
┃│❏ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃│❏ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
┃│
┃└───⦿
┃
┠┌─⦿ 𝚃𝙾𝙾𝙻 ⦿
┃│❏ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃│❏ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃│❏ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃│❏ ${prefix}𝚃𝚛𝚝
┃│❏ ${prefix}𝚃𝚝𝚜
┃│
┃└───⦿
┃
┠┌─⦿ 𝙶𝚁𝙾𝚄𝙿 ⦿
┃│❏ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃│❏ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃│❏ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃│❏ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃│❏ ${prefix}𝙶𝚛𝚘𝚞𝚙
┃│❏ ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
┃│❏ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃│❏ ${prefix}𝙰𝚍𝚍
┃│❏ ${prefix}𝙺𝚒𝚌𝚔
┃│❏ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃│❏ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃│❏ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃│❏ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃│❏ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃│❏ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃│❏ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
┃│
┃└───⦿
┃
┠┌─⦿ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ⦿
┃│❏ ${prefix}𝙰𝚙𝚔
┃│❏ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃│❏ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃│❏ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃│❏ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃│❏ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃│❏ ${prefix}𝙸𝚗𝚜𝚝𝚊
┃│❏ ${prefix}𝚈𝚝𝚖𝚙3
┃│❏ ${prefix}𝚈𝚝𝚖𝚙4
┃│❏ ${prefix}𝙿𝚕𝚊𝚢
┃│❏ ${prefix}𝚂𝚘𝚗𝚐
┃│❏ ${prefix}𝚅𝚒𝚍𝚎𝚘
┃│❏ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃│❏ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃│❏ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
┃│
┃└───⦿
┃
┠┌─⦿ 𝚂𝙴𝙰𝚁𝙲𝙷 ⦿
┃│❏ ${prefix}𝙿𝚕𝚊𝚢
┃│❏ ${prefix}𝚈𝚝𝚜
┃│❏ ${prefix}𝙸𝚖𝚍𝚋
┃│❏ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃│❏ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃│❏ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃│❏ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃│❏ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃│❏ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃│❏ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃│❏ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
┃│
┃└───⦿
┃
┠┌─⦿ 𝙼𝙰𝙸𝙽 ⦿
┃│❏ ${prefix}𝙿𝚒𝚗𝚐
┃│❏ ${prefix}𝙰𝚕𝚒𝚟𝚎
┃│❏ ${prefix}𝙾𝚠𝚗𝚎𝚛
┃│❏ ${prefix}𝙼𝚎𝚗𝚞
┃│❏ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
┃│
┃└───⦿
┃
┠┌─⦿ 𝙾𝚆𝙽𝙴𝚁 ⦿
┃│❏ ${prefix}𝙹𝚘𝚒𝚗
┃│❏ ${prefix}𝙻𝚎𝚊𝚟𝚎
┃│❏ ${prefix}𝙱𝚕𝚘𝚌𝚔
┃│❏ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃│❏ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃│❏ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃│❏ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃│❏ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃│❏ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃│❏ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃│❏ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃│❏ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
┃│
┃└───⦿
┃
┠┌─⦿ 𝚆𝙰𝙸𝙵𝚄 ⦿
┃│❏ ${prefix}𝚌𝚛𝚢
┃│❏ ${prefix}𝚔𝚒𝚜𝚜
┃│❏ ${prefix}𝚔𝚒𝚕𝚕
┃│❏ ${prefix}𝚔𝚒𝚌𝚔
┃│❏ ${prefix}𝚑𝚞𝚐
┃│❏ ${prefix}𝚙𝚊𝚝
┃│❏ ${prefix}𝚕𝚒𝚌𝚔
┃│❏ ${prefix}𝚋𝚒𝚝𝚎
┃│❏ ${prefix}𝚢𝚎𝚎𝚝
┃│❏ ${prefix}𝚋𝚞𝚕𝚕𝚢
┃│❏ ${prefix}𝚋𝚘𝚗𝚔
┃│❏ ${prefix}𝚠𝚒𝚗𝚔
┃│❏ ${prefix}𝚙𝚘𝚔𝚎
┃│❏ ${prefix}𝚗𝚘𝚖
┃│❏ ${prefix}𝚜𝚕𝚊𝚙
┃│❏ ${prefix}𝚜𝚖𝚒𝚕𝚎
┃│❏ ${prefix}𝚠𝚊𝚟𝚎
┃│❏ ${prefix}𝚊𝚠𝚘𝚘
┃│❏ ${prefix}𝚋𝚕𝚞𝚜𝚑
┃│❏ ${prefix}𝚜𝚖𝚞𝚐
┃│❏ ${prefix}𝚍𝚊𝚗𝚌𝚎
┃│❏ ${prefix}𝚑𝚊𝚙𝚙𝚢
┃│❏ ${prefix}𝚜𝚊𝚍
┃│❏ ${prefix}𝚌𝚛𝚒𝚗𝚐𝚎
┃│❏ ${prefix}𝚌𝚞𝚍𝚍𝚕𝚎
┃│❏ ${prefix}𝚜𝚑𝚒𝚗𝚘𝚋𝚞
┃│❏ ${prefix}𝚑𝚊𝚗𝚍𝚑𝚘𝚕𝚍
┃│❏ ${prefix}𝚐𝚕𝚘𝚖𝚙
┃│❏ ${prefix}𝚑𝚒𝚐𝚑𝚏𝚒𝚟𝚎
┃│
┃└───⦿
┃
┠┌─⦿ 𝚂𝚃𝙰𝙻𝙺 ⦿
┃│❏ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃│❏ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃│❏ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰───────────────⍟
   `;
        let fgg = {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: `TOGE-MD-V2`,
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:'TOGE-MD-V2'\nitem1.TEL;waid=${
                        m.sender.split("@")[0]
                    }:${
                        m.sender.split("@")[0]
                    }\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
            }
        };
       let { key } = await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/TOGE-MD-V2.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120463249960769123@newsletter',
                  newsletterName: "TOGE-MD-V2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: fgg
});
}
   if ( selectedId == "Downloader Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰───────────────⍟
┠┌─⦿ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 ⦿
┃│❏ ${prefix}𝙰𝚙𝚔
┃│❏ ${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
┃│❏ ${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
┃│❏ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
┃│❏ ${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
┃│❏ ${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
┃│❏ ${prefix}𝙸𝚗𝚜𝚝𝚊
┃│❏ ${prefix}𝚈𝚝𝚖𝚙3
┃│❏ ${prefix}𝚈𝚝𝚖𝚙4
┃│❏ ${prefix}𝙿𝚕𝚊𝚢
┃│❏ ${prefix}𝚂𝚘𝚗𝚐
┃│❏ ${prefix}𝚅𝚒𝚍𝚎𝚘
┃│❏ ${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
┃│❏ ${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
┃│❏ ${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
╰───────────────⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/TOGE-MD-V2.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '140363249960769123@newsletter',
                  newsletterName: "TOGE-MD-V2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if ( selectedId == "Group Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰───────────────⍟
┠┌─⦿ 𝙶𝚁𝙾𝚄𝙿 ⦿
┃│❏ ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
┃│❏ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
┃│❏ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
┃│❏ ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
┃│❏ ${prefix}𝙶𝚛𝚘𝚞𝚙
┃│❏ ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
┃│❏ ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
┃│❏ ${prefix}𝙰𝚍𝚍
┃│❏ ${prefix}𝙺𝚒𝚌𝚔
┃│❏ ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
┃│❏ ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
┃│❏ ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
┃│❏ ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
┃│❏ ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
┃│❏ ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
┃│❏ ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
╰───────────────⍟`
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/TOGE-MD-V2.jpg'), 
  caption: str, 
  contextInfo: {
    mentionedJid: [m.sender], 
    forwardingScore: 9999,
    isForwarded: true,
  }
}, {
  quoted: m
});
}
   
   if (selectedId == "Main Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰───────────────⍟
┠┌─⦿ 𝙼𝙰𝙸𝙽 ⦿
┃│❏ ${prefix}𝙿𝚒𝚗𝚐
┃│❏ ${prefix}𝙰𝚕𝚒𝚟𝚎
┃│❏ ${prefix}𝙾𝚠𝚗𝚎𝚛
┃│❏ ${prefix}𝙼𝚎𝚗𝚞
┃│❏ ${prefix}𝙸𝚗𝚏𝚘𝚋𝚘𝚝
╰───────────────⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/TOGE-MD-V2.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120463249960769123@newsletter',
                  newsletterName: "TOGE-MD-V2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Owner Menu") {
     const str = `╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰───────────────⍟
┠┌─⦿ 𝙾𝚆𝙽𝙴𝚁 ⦿
┃│❏ ${prefix}𝙹𝚘𝚒𝚗
┃│❏ ${prefix}𝙻𝚎𝚊𝚟𝚎
┃│❏ ${prefix}𝙱𝚕𝚘𝚌𝚔
┃│❏ ${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
┃│❏ ${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
┃│❏ ${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
┃│❏ ${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
┃│❏ ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
┃│❏ ${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
┃│❏ ${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
┃│❏ ${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
┃│❏ ${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
╰───────────────⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/TOGE-MD-V2.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120463249960769123@newsletter',
                  newsletterName: "TOGE-MD-V2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Search Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰───────────────⍟
┠┌─⦿ 𝚂𝙴𝙰𝚁𝙲𝙷 ⦿
┃│❏ ${prefix}𝙿𝚕𝚊𝚢
┃│❏ ${prefix}𝚈𝚝𝚜
┃│❏ ${prefix}𝙸𝚖𝚍𝚋
┃│❏ ${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
┃│❏ ${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
┃│❏ ${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝
┃│❏ ${prefix}𝚆𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛
┃│❏ ${prefix}𝚆𝚒𝚔𝚒𝚖𝚎𝚍𝚒𝚊
┃│❏ ${prefix}𝚈𝚝𝚜𝚎𝚊𝚛𝚌𝚑
┃│❏ ${prefix}𝚁𝚒𝚗𝚐𝚝𝚘𝚗𝚎
┃│❏ ${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
╰───────────────⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/TOGE-MD-V2.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120463249960769123@newsletter',
                  newsletterName: "TOGE-MD-V2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   if (selectedId == "Stalk Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰───────────────⍟
┠┌─⦿ 𝚂𝚃𝙰𝙻𝙺 ⦿
┃│❏ ${prefix}𝚃𝚛𝚞𝚎𝚌𝚊𝚕𝚕𝚎𝚛
┃│❏ ${prefix}𝙸𝚗𝚜𝚝𝚊𝚂𝚝𝚊𝚕𝚔
┃│❏ ${prefix}𝙶𝚒𝚝𝚑𝚞𝚋𝚂𝚝𝚊𝚕𝚔
╰───────────────⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/TOGE-MD-V2.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120463249960769123@newsletter',
                  newsletterName: "TOGE-MD-V2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Tool Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰───────────────⍟
┠┌─⦿ 𝚃𝙾𝙾𝙻 ⦿
┃│❏ ${prefix}𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚝𝚘𝚛
┃│❏ ${prefix}𝚃𝚎𝚖𝚙𝚖𝚊𝚒𝚕
┃│❏ ${prefix}𝙲𝚑𝚎𝚌𝚔𝚖𝚊𝚒𝚕
┃│❏ ${prefix}𝚃𝚛𝚝
┃│❏ ${prefix}𝚃𝚝𝚜
╰───────────────⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/TOGE-MD-V2.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120463249960769123@newsletter',
                  newsletterName: "TOGE-MD-V2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Ai Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰───────────────⍟
┠┌─⦿ 𝙰𝙸 ⦿
┃│❏ ${prefix}𝙰𝚒
┃│❏ ${prefix}𝙱𝚞𝚐
┃│❏ ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
┃│❏ ${prefix}𝙶𝚙𝚝
┃│❏ ${prefix}𝙳𝚊𝚕𝚕𝚎
┃│❏ ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
┃│❏ ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
╰───────────────⍟`
await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/TOGE-MD-V2.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120463249960769123@newsletter',
                  newsletterName: "TOGE-MD-V2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
   
   if (selectedId == "Converter Menu") {
     const str =`╭───❮ *s ᴇ ʀ ᴠ ᴇ ʀ* ❯
│➥ 𝚃𝙾𝚃𝙰𝙻 𝚁𝙰𝙼: ${formatBytes(totalMemoryBytes)}
│➥ 𝙵𝚁𝙴𝙴 𝚁𝙰𝙼: ${formatBytes(freeMemoryBytes)}
╰───────────────⍟
┠┌─⦿ 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁 ⦿
┃│❏ ${prefix}𝙰𝚃𝚃𝙿
┃│❏ ${prefix}𝙰𝚃𝚃𝙿2
┃│❏ ${prefix}𝙰𝚃𝚃𝙿3
┃│❏ ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
┃│❏ ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
┃│❏ ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
┃│❏ ${prefix}𝙼𝙿3
╰───────────────⍟`
     await Matrix.sendMessage(m.from, {
  image: fs.readFileSync('./src/TOGE-MD-V2.jpg'), 
  caption: str, 
  contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '120463249960769123@newsletter',
                  newsletterName: "TOGE-MD-V2",
                  serverMessageId: 143
                }
              }
}, {
  quoted: m
});
}
};

export default test;
