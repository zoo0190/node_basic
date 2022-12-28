import { __ } from './utils/my_path.js';
const { __dirname, __filename } = __(import.meta.url);

console.log(__dirname);
console.log(__filename);
