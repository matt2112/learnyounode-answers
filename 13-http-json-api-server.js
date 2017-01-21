const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((req, res) => {

    const query = url.parse(req.url, true);

    if (query.pathname === '/api/parsetime') {
        const time = new Date(query.query.iso);
        res.end(JSON.stringify(
            {
                hour: time.getHours(),
                minute: time.getMinutes(),
                second: time.getSeconds()
            }
        ));
    }

    if (query.pathname === '/api/unixtime') {
        const time = new Date(query.query.iso).getTime();
        res.writeHead(200, { 'Content-Type': 'application/json' });        
        res.end(JSON.stringify({ unixtime: time }));
    }
});

server.listen(port);