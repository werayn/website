import aesjs from 'aes-js';

const key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
const createPass = (password) => {
    const textBytes = aesjs.utils.utf8.toBytes(password);
    const aesCtr = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(5));
    const encryptedText = aesCtr.encrypt(textBytes);
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedText);
    return encryptedHex;
};

const pwd = createPass('elastic_chevaleret');
console.log(pwd);
