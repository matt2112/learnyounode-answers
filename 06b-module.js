const fs = require('fs');

const myMod = (dir, ext, callback) => {
    fs.readdir(dir, (err, fileArr) => {
        if (err) callback(err);
        else {
            const filtered = fileArr.filter(file => file.endsWith('.' + ext));
            callback(null, filtered);
        }
    });
};

module.exports = myMod;