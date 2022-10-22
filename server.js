const { msg, warn, normal } = require('./my_modules/mychalk')

const fs = require('fs').promises
const os = require('os')
const path = require('path')
const http = require('http')
console.log(os.userInfo());
const currentOS = {
    name:  os.type(),
    release: os.release(),
    totalMem:os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);
// console.log(msg(os.version()), msg(os.type()), msg(os.homedir));

// console.log(normal(__dirname), '\n', warn(__filename));
// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
const filename = 'file.txt'
let filePath = path.join(__dirname, 'files', filename)

// Read
// fs.readFile(filePath, 'utf-8', function (err, data) {
//     if(err){
//         throw(err)
//     }
//     console.log(warn(data));
// })



const fileops = async () => {
    await fs.writeFile(filePath, 'Hello my name is Hrishi and I am learning Nodejs', (e) => {
        e ? console.log(e) : console.log('Write complete!!✔')
    })


    let newData = ` but learning is fun if your health is good😟 and feels like a burden then.`

    await fs.appendFile(filePath, newData, (e) => {
        if (e) console.log(e);
    })


    // Rename
    let newfilepath = path.join(__dirname, 'files', 'new_file_new.txt')
    console.log(warn('✔',newfilepath));
    await fs.rename(filePath, newfilepath, (e) => {
        console.log(e);
    })
}
fileops()
// ninjadev999!@#
process.on('uncaughtException', function (err) {
    console.log(normal(`There was an error.`));
    process.exit(1)
})

