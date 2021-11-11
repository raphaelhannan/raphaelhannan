const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const encrypted = CryptoJS.AES.encrypt("This is my secret message", "EncryptionKey");
const decrypted = CryptoJS.AES.decrypt(encrypted, "EncryptionKey");

let userschema = new Schema({
pseudo: {
        type: String,
        required: true,
    },
    Motdepasse: {
        type: String,
        required: true
        
       
        
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', userschema);
//rajouter le cryptage
import ncrypt from 'ncrypt-js';
const encrypted = ncrypt.encrypt('Mot de passe', 'Motdepasse');
console.log(encrypted);
const decrypted = ncrypt.decrypt(encrypted);
console.log(decrypted);