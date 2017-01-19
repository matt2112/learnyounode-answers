/*
    ...
    
    Create a program that prints a list of files in a given directory,
    filtered by the extension of the files. The first argument is the
    directory name and the second argument is the extension filter. Print the
    list of files (one file per line) to the console. You must use
    asynchronous I/O.

    ...
*/

'use strict';

const myMod = require('./06b-module');

const dir = process.argv[2];
const ext = process.argv[3];

myMod(dir, ext, (err, data) => {
    if (err) console.error(err);
    else data.forEach(file => console.log(file));
});