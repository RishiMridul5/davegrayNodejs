const path = require('path');
const fs = require('fs');
const { ifError } = require('assert');

const readfilepath = path.join(__dirname, 'files', 'file.txt')
const writefilepath = path.join(__dirname, 'files', 'writing.txt')
const rs = fs.createReadStream(readfilepath, { encoding: 'utf-8' })
const ws = fs.createWriteStream(writefilepath, { encoding: 'utf-8' })

// rs.addListener('data', (dataChunk)=>{
//     ws.write(dataChunk);
// })
// rs.pipe(ws)

if (!fs.existsSync('./db')) {
    fs.mkdir('./db', error => {
        if (error) console.log(error);
        else console.log(`Directory created`);
    })
}
else {
    fs.rmdir('./db', error => {
        if (error) console.log(error);
        else console.log(`Directory created`);
    })
}