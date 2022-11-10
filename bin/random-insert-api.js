import { createServer } from '../lib/backend.js';

const app = createServer();
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '8765';
const server = app.listen(port, host);

server.on('listening', () => {
  const { address, port } = server.address();
  let url = `http://${address}:${port}`;
  if (!host && address !== '0.0.0.0') {
    url += ` (alternatively http://0.0.0.0:${port})`;
  }
  console.log(`${url}`);
});
