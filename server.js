const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  res.end(`
    <h1>custom_test_1 funcionando 🚀</h1>
  `);
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Servidor en http://127.0.0.1:${PORT}`);
});