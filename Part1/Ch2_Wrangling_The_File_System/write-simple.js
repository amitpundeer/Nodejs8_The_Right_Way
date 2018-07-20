// Example of whole-file-at-once appraoch 

'use strict';
const fs = require('fs');

fs.writeFile('target.txt', 'Niggas in Paradise', (err)=>{
    if(err){
        throw err;
    }
    console.log('File saved!');
});