const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')

program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <number>', 'length of password', '10')
    .option('-s, --save', 'save password to password.txt')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse()

const { length, save, numbers, symbols } = program.opts()

const generatedPassword = createPassword(length, numbers, symbols)

if (save) {
    savePassword(generatedPassword)
}

clipboardy.writeSync(generatedPassword)

log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password copied to clipboard'))