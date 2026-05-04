const http = require("http");

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("custom_test_1 funcionando 🚀");
  res.end("DEPLOY AUTOMÁTICO FUNCIONANDO... 🔥");
});

server.listen(PORT, "127.0.0.1");