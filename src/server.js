const app = require('./api/app')
const http = require('http')
const chalk = require('chalk')

require('./db')
const {
    PORT,
    AUTHOR
} = process.env

const server = http.createServer(app);

server.listen(PORT, () => {
    console.info(chalk.bgWhite.black.bold(`Connecting to Server on port ${PORT}`));
    console.info(chalk.bgWhite.black.bold(`Created with inspiration by ${AUTHOR}`));
});
