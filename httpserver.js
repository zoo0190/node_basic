import { createServer } from 'http';

const server = createServer((req, res) => {
  // const { searchParams: param, pathname } = new URL(req.url || '', `http://${req.headers.host}`);
  // const router = {...}; // → → →
  // try {
  //   let body = '';  // for post body parameter
  //   req.on('data', chunk => {  body += chunk; });
  //   req.on('end', () => router[pathname]?.(Object.fromEntries(new URLSearchParams(body).entries())));
  // } catch (error) {
  //   res.writeHead(500); res.write('Error' + error);
  // }
}).listen(80, '0.0.0.0', () => console.log('start server'));
server.on('error', error => console.error('ERROR>>', error));
server.on('close', () => console.log('server closed!!'));
