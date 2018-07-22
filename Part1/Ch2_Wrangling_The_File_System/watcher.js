'use strict';

//fs is js module.
const fs = require('fs'); // require mainly returns plain old js object
fs.watch('targett.txt',() => console.log('File Changed'));

console.log('Now watching target.txt for changes...');