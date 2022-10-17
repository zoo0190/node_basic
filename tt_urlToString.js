import url from 'url';
import { sampleUrl } from './const.js';

class MyURL extends URL {
  // unicode 부분 구현하기...!
  constructor(url) {
    super(url);
  }

  toString({
    fragment = true,
    auth = true,
    search = true,
    unicode = false,
  } = {}) {
    return `${this.protocol}//${
      auth ? this.username + ':' + this.password + '@' : ''
    }${this.host}${this.pathname}${search ? this.search : ''}${
      fragment ? this.hash : ''
    }`;
  }
}

const myurl = new MyURL(sampleUrl);
// console.log(myurl);

// console.log(myurl.toString());
console.log(myurl.toString({ auth: true, search: true, unicode: false }));
// console.log(url.format(myurl, { fragment: true, auth: true, search: true }));
// // ⇒ https://jade:1234%EC%BC%80%EC%9E%8C@sub.example.com:8080/p/a/t/h?query=string#hash

console.log(myurl.toString({ fragment: false, auth: true, search: true }));
console.log(url.format(myurl, { fragment: false, auth: true, search: true }));
// ⇒ https://jade:1234%EC%BC%80%EC%9E%8C@sub.example.com:8080/p/a/t/h?query=string

console.log(myurl.toString({ fragment: false, auth: false, search: true }));
console.log(url.format(myurl, { fragment: false, auth: false, search: true }));
// ⇒ https://sub.example.com:8080/p/a/t/h?query=string

console.log(myurl.toString({ fragment: false, auth: false, search: false }));
console.log(url.format(myurl, { fragment: false, auth: false, search: false }));
// ⇒ https://sub.example.com:8080/p/a/t/h

// fragment: 해쉬
// auth: jade~~~~
// search: query~~~
