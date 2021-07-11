const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')
const now = new Date();

const savePassword = (password) => {
    fs.open(path.join(__dirname, '../', 'passwords.txt'), 'a', 666, (e, id) => {
        fs.write(id, password + "   " + now.getFullYear() + "-"+ now.getMonth() + "-" + now.getDate() + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.green('Password saved to passwords.txt'))
            })
        })
    })
}

module.exports = savePassword