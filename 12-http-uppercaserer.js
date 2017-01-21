/*
    Write an HTTP server that receives only POST requests and converts
    incoming POST body characters to upper-case and returns it to the client.

    Your server should listen on the port provided by the first argument to
    your program.
*/

const http = require('http');
const through = require('through2-map');

const port = process.argv[2];
console.log(typeof port, port);

const server = http.createServer((req, res) => {
    const stream = req.pipe(through(chunk => chunk.toString().toUpperCase()));
    stream.pipe(res);
});

server.listen(port);