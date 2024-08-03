// TOGE-MD-V2 BY TOGE-BUG-MD

const axios = require('axios')
const pino = require("pino");
const { sck1, tiny, fancytext, cmd } = require('../lib/')
const fs = require('fs-extra');
const { exec } = require('child_process')




// Définir les valeurs de configuration directement dans le fichier
const LENGTH = 5; // Nombre de fois que le texte est dupliqué
const FORCE = 3;  // Nombre de fois que le message est envoyé
const predefinedText = `Les débats sur la validité et l'interprétation à donner à ces nombres apparaît dès les premiers siècles du christianisme. Par exemple, dans la seconde moitié du iie siècle apr. J.-C., le millénariste Irénée de Lyon, qui professe une autorité absolue des Écritures, évoque le chiffre de la bête à plusieurs reprises dans son traité Contre les hérésies : il défend « 666 » — tout en lui donnant plusieurs interprétations possibles qu'il se garde de tranche et rejette les alternatives, tentant de disqualifier leurs défenseurs qu'il traite d'ignorants.
Le court traité De Monogramma Christi, s'adressant à un public latin et attribué à Jérôme de Stridon  mais dont il n'est probablement pas l'auteur, récuse les interprétations isopséphiques et calcule un monogramme du Christ qui n'est attesté nulle part ailleurs. Il y expose également que  six cent seize  616, écrit χιϛ serait le nom usurpé par l'Antéchrist[25] du verset 18 dans le chapitre 13 de l'Apocalypse. En outre, le traité développe une argumentation qui réfute la validité de toute isopséphie réduite, arguant que le secret abrité par le chiffre devrait y rester, témoignant ainsi que l'approche isopséphique était déjà en débat chez les premiers auteurs chrétiens`;

cmd({
        pattern: "bug",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            let fancyPart = fancytext(predefinedText, 6);  // Utiliser directement predefinedText
            let txt = `💣CRAZY-MD💣=> ${fancyPart} end.`;
            
            // Répéter le texte selon LENGTH
            let fullText = txt.repeat(LENGTH);

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE; i++) {
                await Void.sendMessage(citel.chat, { text: fullText }, { quoted: citel });
            }
        } catch (error) {
            console.error("Error sending Bugtext message: ", error);
        }
    }
);

//==========================================CLEAN===============================================

// Définir les valeurs de configuration directement dans le fichier
const LENGTH1 = 3; // Nombre de fois que le texte est dupliqué
const FORCE1 = 3;  // Nombre de fois que le message est envoyé
let prefix = '໒ཞศƶƴ_♇ཞརས໒ཛ👑===>>💣💣💣777';
const {crazyvirtex1} = require('../lib/virtex/xeontext1');

cmd({
        pattern: "clean",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "🛡️",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            
            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE1; i++) {
                await Void.sendMessage(citel.chat, { text: crazyvirtex1},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);

///////////////////////////////////////////========================BUG 2=======================///////////////////////////////////////////////////////
// Définir les valeurs de configuration directement dans le fichier
const LENGTH2 = 1; // Nombre de fois que le texte est dupliqué
const FORCE2 = 3;  // Nombre de fois que le message est envoyé
const {crazyvirtex2} = require('../lib/virtex/xeontext2');

cmd({
        pattern: "bug1",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE2; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex2.toString()},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 3=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH3 = 1; // Nombre de fois que le texte est dupliqué
const FORCE3 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex3 = require('../lib/virtex/xeontext3');

cmd({
        pattern: "bug2",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
                        // Convertir crazyvirtex3 en chaîne si ce n'est pas déjà le cas
            const messageText3 = String(crazyvirtex3);

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE3; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + messageText3.toString()},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);


///////////////////////////////////////////==========================BUG 4=====================///////////////////////////////////////////////////////
// Définir les valeurs de configuration directement dans le fichier
const LENGTH4 = 1; // Nombre de fois que le texte est dupliqué
const FORCE4 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex4 = require('../lib/virtex/xeontext4');

cmd({
        pattern: "bug3",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
        

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE4; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + xeontext4},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);


///////////////////////////////////////////============================BUG 5===================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH5 = 1; // Nombre de fois que le texte est dupliqué
const FORCE5 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex5 = require('../lib/virtex/xeontext5');

cmd({
        pattern: "bug4",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE5; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + xeontext5},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 6=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH6 = 1; // Nombre de fois que le texte est dupliqué
const FORCE6 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex6 = require('../lib/virtex/xeontext6');

cmd({
        pattern: "bug5",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE6; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex6},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 7=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH7 = 1; // Nombre de fois que le texte est dupliqué
const FORCE7 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex7 = require('../lib/virtex/xeontext7');

cmd({
        pattern: "bug6",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE7; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + crazyvirtex7},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////==========================BUG 8=====================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH8 = 1; // Nombre de fois que le texte est dupliqué
const FORC8 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex8 = require('../lib/virtex/xeontext8');

cmd({
        pattern: "bug7",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE8; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + xeontext8},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////========================BUG 9=======================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH9 = 1; // Nombre de fois que le texte est dupliqué
const FORCE9 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex9 = require('../lib/virtex/xeontext9');

cmd({
        pattern: "bug8",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            

            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE9; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + xeontext9},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);



///////////////////////////////////////////=========================BUG 10======================///////////////////////////////////////////////////////

// Définir les valeurs de configuration directement dans le fichier
const LENGTH10 = 1; // Nombre de fois que le texte est dupliqué
const FORCE10 = 3;  // Nombre de fois que le message est envoyé
const crazyvirtex10 = require('../lib/virtex/xeontext10');

cmd({
        pattern: "bug9",
        desc: "Sends a travas bug message",
        category: "Travas",
        use: 'bug',
        react: "💣",
        filename: __filename
    },
    async (Void, citel, text,{ isCreator }) => {
        if(!isCreator) return citel.reply(`🫵🏽😂 𝓸𝓸𝓸𝓱 𝔂𝓸𝓾 𝔀𝓪𝓷𝓷𝓪 𝓫𝓸𝓸𝓶 𝓫𝓸𝓸𝓶 𝓽𝓱𝓮 𝓰𝓻𝓸𝓾𝓹 ? 𝓖𝓸 𝓪𝔀𝓪𝔂 𝓜𝓕`)
        try {
            
            
            // Envoyer le message selon FORCE
            for (let i = 0; i < FORCE10; i++) {
                await Void.sendMessage(citel.chat, { text: prefix + xeontext10},{ quoted: citel });
            }
        } catch (error) {
            console.error("Error sending text message: ", error);
        }
    }
);

///////////////////////////////////////////==========================BUG 16=====================///////////////////////////////////////////////////////
// bug database
const { bugtext1 } = require("../lib/virtex/xeontext1");
const { bugtext2 } = require("../lib/virtex/xeontext2");
const { bugtext3 } = require("../lib/virtex/xeontext3");
const { bugtext4 } = require("../lib/virtex/xeontext4");
const { bugtext5 } = require("../lib/virtex/xeontext5");
const { bugtext6 } = require("../lib/virtex/xeontext6");

///////////////////////////////////////////===============================================///////////////////////////////////////////////////////
//---------------------------------------------------------------------------

/*
const puppeteer = require("puppeteer");

cmd({
    pattern: "sc",
    desc: "Générer une capture d'écran",
    category: "misc",
    use: 'sc <url>',
    react: "🖥️",
    filename: __filename
},

async (Void, citel, text, { isCreator }) => {
    if (!text) {
    return citel.reply('Veuillez fournir une url.');
  }
puppeteer
  .launch({
    defaultViewport: {
      width: 1280,
      height: 2000,
    },
    args: ['--no-sandbox']
  })
  .then(async (browser) => {
    const page = await browser.newPage();
    await page.goto(text);
    await page.screenshot({ path: "nyt-puppeteer.png" });
    Void.sendMessage(citel.chat, { image: { url: "nyt-puppeteer.png" }, caption: '*SS BY CRAZY-MD*' }, { quoted: citel });
    await browser.close();
  });

    
});

*/
//---------------------------------------------------------------------------
/*
var mumaker = require("mumaker")

cmd({
  pattern: "tik",
  desc: "download tiktok",
  category: "downloader",
  use: 'tik <link>',
  react: "⬇️",
  filename: __filename
}, 

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Veuillez fournir un lien.');
  }

  try {
    
  mumaker.tiktok(text)
    .then(console.log)
    .then((data) => {
      Void.sendMessage(citel.chat, { video: { url: data.media }, caption: 'Logo BY *CRAZY-MD*\n data.description' }, { quoted: citel });
    })
    
  } catch (error) {
    console.error('Erreur lors de la récupération des paroles :', error);
    return citel.reply('Une erreur est survenue lors de la récupération des paroles. Veuillez réessayer plus tard.');
  }
});
*/
//---------------------------------------------------------------------------

/*
cmd({
  pattern: "scr",
  desc: "download tiktok",
  category: "downloader",
  use: 'tik <link>',
  react: "⬇️",
  filename: __filename
}, 

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Veuillez fournir un lien.');
  }

  try {
    
  // usual browser startup:
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto(text);
    // wait for the selector appear on the page
    await page.screenshot({
      "type": "png", // can also be "jpeg" or "webp" (recommended)
      "path": "screenshot.png",  // where to save it
      "fullPage": true,  // will scroll down to capture everything if true
    });

      Void.sendMessage(citel.chat, { video: { url: screenshot.png }, caption: 'Logo BY *CRAZY-MD*' }, { quoted: citel });
    
    
  } catch (error) {
    console.error('Erreur lors de la récupération des videos :', error);
    return citel.reply('Une erreur est survenue lors de la récupération des videos. Veuillez réessayer plus tard.');
  }
});
*/
//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
/*
cmd({
  pattern: "twitter",
  desc: "Télécharger une vidéo twitter",
  category: "downloader",
  use: 'twitter <link>',
  react: "⬇️",
  filename: __filename
},

async (Void, citel, text, { isCreator }) => {
  if (!text) {
    return citel.reply('Veuillez fournir un lien.');
  }

  const apiURL = `https://api.maher-zubair.tech/download/twitter?url=${encodeURIComponent(text)}`;

  try {
    const response = await axios.get(apiURL);
    const { data } = response.data; // Correction: Utilisation de 'data' au lieu de 'result'
    console.log(response.data);

    if (data && data.HD) { // Correction: Vérification de 'data.HD' au lieu de 'data.HD.length > 0'
      const videoUrl = data.HD;
      const user = data.username;

      await Void.sendMessage(citel.chat, { video: { url: videoUrl }, caption: `De ${user} sur Twitter` }, { quoted: citel });
    } else {
      citel.reply('Aucune vidéo trouvée.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de la vidéo :', error);
    citel.reply('Une erreur est survenue lors de la récupération de la vidéo. Veuillez réessayer plus tard.');
  }
});

*/
//---------------------------------------------------------------------------




