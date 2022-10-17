import crypto from 'crypto';

function encryptPassword(data, salt) {
  return new Promise((res, rej) => {
    crypto.pbkdf2(data, salt, 16384, 128, 'sha512', (err, derivedKey) => {
      !err ? res(derivedKey) : rej(derivedKey);
    });
  });
}

const data = '뭘까요??';
const salt = crypto.randomBytes(64).toString('base64');
// const encryptedPassword = await encryptPassword(data, salt);
// console.log('암호화된 Password>>', encryptedPassword);

console.time('PBKDF2');
console.log(await encryptPassword(data, salt)); // 16384
console.timeEnd('PBKDF2');

console.time('SCRYPT');
console.log(crypto.scryptSync(data, salt, 128, { N: 16384 }));
console.timeEnd('SCRYPT');
