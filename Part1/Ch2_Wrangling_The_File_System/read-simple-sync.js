const fs = require('fs');
const data = fs.readFileSync('target.txt');
process.stdout.write('Contents:-\n');
process.stdout.write(data.toString());