import crypto from 'crypto';

// iv는 공개되어도 상관없고, KEY 값은 공개되면 안된다!!!!!!!

const KEY = Buffer.from('seniorcoding!@#$'.repeat(2)); // 256 / 8 = 32 length만 지키고 자유롭게 사용하세요.
const ALGORITHM = 'aes-256-cbc'; // 원하는 알고리즘을 입력하세요.
const DIGEST = 'base64'; // hex로 해도 무관합니다.

export class MyCipher {
  constructor() {
    this.iv = crypto.randomBytes(16);
  }

  encrypt(data) {
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, this.iv);
    const encUpdateBuffer = cipher.update(data);
    const result = Buffer.concat([encUpdateBuffer, cipher.final()]).toString(
      DIGEST
    );
    return `${this.iv.toString('hex')}:${result}`;
  }

  decrypt(encryptedData) {
    const [iv, data] = encryptedData.split(':');
    console.log(iv);
    const decipher = crypto.createDecipheriv(
      ALGORITHM,
      KEY,
      Buffer.from(iv, 'hex')
    );
    const decUpdateBuffer = decipher.update(data, DIGEST);

    const result = Buffer.concat([
      decUpdateBuffer,
      decipher.final(),
    ]).toString();

    return result;
  }
}

const processTwo = process.argv[2];

if (processTwo) {
  const myCipher = new MyCipher();

  console.log(
    processTwo === '-enc' || processTwo === '-e'
      ? myCipher.encrypt(process.argv[3])
      : myCipher.decrypt(process.argv[3])
  );
}
