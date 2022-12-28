import MyURL from './utils/my_url.js';
const sampleUrl =
  'https://jade:1234케잌@도메인.com:8080/p/a/한글/h?query=string&city=서울#hash';

// const parsedUrl = url.parse(sampleUrl);
const surl = new MyURL(sampleUrl);
console.log(
  surl.toString({ fragment: true, auth: true, search: true, unicode: false })
); // all default
// ⇒ https://jade:1234%EC%BC%80%EC%9E%8C@xn--5u5b99k.com:8080/p/a/%ED%95%9C%EA%B8%80/h?query=string&city=%EC%84%9C%EC%9A%B8#hash

console.log(
  surl.toString({ fragment: false, auth: true, search: true, unicode: false })
);
// ⇒ https://jade:1234%EC%BC%80%EC%9E%8C@xn--5u5b99k.com:8080/p/a/%ED%95%9C%EA%B8%80/h?query=string&city=%EC%84%9C%EC%9A%B8

console.log(
  surl.toString({ fragment: false, auth: true, search: true, unicode: true })
);
// ⇒ https://jade:1234케잌@도메인.com:8080/p/a/한글/h?query=string&city=서울

console.log(
  surl.toString({ fragment: false, auth: false, search: true, unicode: true })
);
// ⇒ https://도메인.com:8080/p/a/한글/h?query=string&city=서울

console.log(surl.toString({ fragment: false, auth: false, search: false }));
// ⇒ https://xn--5u5b99k.com:8080/p/a/%ED%95%9C%EA%B8%80/h

console.log(
  surl.toString({ fragment: false, auth: false, search: false, unicode: true })
);
// ⇒ https://도메인.com:8080/p/a/한글/h
