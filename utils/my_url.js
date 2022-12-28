import { toUnicode } from 'punycode';

export default class MyURL extends URL {
  toString({
    fragment = true,
    auth = true,
    search = true,
    unicode = false,
  } = {}) {
    const result = [];
    result.push(`${this.protocol}//`);
    if (auth) {
      result.push(`${this.username}:${this.password}@`);
    }
    result.push(unicode ? toUnicode(this.host) : this.host);
    result.push(this.pathname);
    if (search) {
      result.push(this.search);
    }
    if (fragment) {
      result.push(this.hash);
    }

    return unicode ? decodeURIComponent(result.join('')) : result.join('');
  }
}
