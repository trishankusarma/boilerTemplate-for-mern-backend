const chalk = require('chalk')

const info = (namespace, message, object) => {
    if (object) {
        console.info(chalk.blueBright(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object));
    } else {
        console.info(chalk.blueBright(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`));
    }
};

const warn = (namespace, message, object) => {
    if (object) {
        console.warn(chalk.yellowBright(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object));
    } else {
        console.warn(chalk.yellowBright(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`));
    }
};

const error = (namespace, message, object) => {
    if (object) {
        console.error(chalk.redBright(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`, object));
    } else {
        console.error(chalk.redBright(`[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`));
    }
};

const debug = (namespace, message, object) => {
    if (object) {
        console.debug(chalk.greenBright(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object));
    } else {
        console.debug(chalk.greenBright(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`));
    }
};

const log = (namespace, message, object) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`);
    }
};

const getTimeStamp = () => {
    return new Date().toISOString();
};

module.exports = {
    info,
    warn,
    error,
    debug,
    log
};
