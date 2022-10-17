import crypto from 'crypto';

const data = 'hihihihihihi';
const salt = crypto.randomBytes(64).toString('base64');

crypto.pbkdf2(data, salt, 100000, 128, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log('dk1>>', derivedKey.toString('base64')); // length: 256
});
