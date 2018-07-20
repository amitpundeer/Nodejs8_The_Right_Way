// Example of whole-file-at-once appraoch

'use strict';
const fs = require('fs');

fs.readFile('target.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('Contents of the file are:-')
    console.log(data.toString());
});