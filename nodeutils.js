import { sampleUrl } from './const.js';
// import os from 'os';

// console.log(os.version());

// console.log(os.freemem());

// console.log('========================')

// import { dirname } from 'path';
// import { fileURLToPath } from 'url';

// console.log('import.meta.url>>>', import.meta.url);

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// console.log('__filename>>>', __filename);
// console.log('__dirname>>>', __dirname);

// console.log('========================')

const sp = new URL(sampleUrl).searchParams;
console.log(sp.keys(), sp.values(), sp.entries(), sp.toString());
