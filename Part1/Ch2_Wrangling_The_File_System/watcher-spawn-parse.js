'use strict';

const fs = require('fs');
const spawn = require('child_process').spawn;
const filename = process.argv[2];

fs.watch(filename, () => {
    const ls = spawn('ls', ['-l', filename]);
    let output = '';

    ls.stdout.on('data', chunk => output = output + chunk);
    
    ls.on('close', ()=>{
        const parts = output.split(/\s+/);
        console.log([parts[0], parts[4], parts[8]]);//permission size filename
    });
});
