const http = require('http');
const port = 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Opa! Vamos codar o basico em Node.js</h1>');
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});