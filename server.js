// node core modules
const http = require('http');
const PORT = process.env.PORT || 5000;

http
  .createServer((req, res) => {
    console.log;
  })
  .listen(PORT);
console.log(`Server is running at port ${PORT}`);

