/*
  Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

  After sending the string, close the connection.
*/

const net = require('net');

const port = process.argv[2];

const zeroFill = num => ('00' + num).slice(-2);

const server = net.createServer(socket => {
    const dateObj = new Date();
    const year = dateObj.getFullYear();
    const month = zeroFill(dateObj.getMonth() + 1);
    const day = zeroFill(dateObj.getDate());
    const hours = zeroFill(dateObj.getHours());
    const minutes = zeroFill(dateObj.getMinutes());
    const date = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
    socket.end(date + '\n');
});

server.listen(port);