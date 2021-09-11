const cors = require('cors')
const express = require('express')
const app = express()

require('dotenv').config()

const chalk = require('chalk')

const MainRouter = require('./routes');

//middlewares
app.use(express.json({ limit: '50mb' }));

app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({ origin: true, credentials: true }));

//routes
app.use('/', MainRouter);

//error handler
app.use((error, req, res, next) => {

    console.error(chalk.red(error));

    res.status(error.statusCode || 500).json({
        error: true,
        message: error.message || 'An Error Occured',
        route: req.url,
        name: error.name || 'InteralServerError'
    });
});

module.exports = app
