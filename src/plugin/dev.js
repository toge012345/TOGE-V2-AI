import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

const developerContact = async (m, gss) => {
const developernumber = '24105114159';
const prefixMatch = m.body.match(/^[\\/!#.]/);
const prefix = prefixMatch ? prefixMatch[0] : '/';
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();
const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '/';
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
if (['dev', 'developer', 'mods'].includes(cmd)) {

if (validCommands.includes(cmd)) {
    
  if (!text) return m.reply(`Example: ${prefix + cmd} hi dev play command is not working`);

    const messageId = m.key.id;

    if (developerMessages[messageId]) {
        return m.reply("This developer number @24105114159");
  }
};
  
export default dev;
