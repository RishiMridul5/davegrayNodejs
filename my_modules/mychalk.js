const chalk = require('chalk')
const msg = chalk.bgCyanBright.blackBright.bold;
const warn = chalk.red.underline;
const normal = chalk.bgYellowBright.redBright.italic;

module.exports = {
    msg, warn, normal
}