const mongoose = require( 'mongoose' );
const logger = require( '../config/logger' );
const options = require('./options')

const {
    MONGO_URL
} = process.env

function connection() {
    return mongoose
        .connect(MONGO_URL, options)
        .then((result) => {
            logger.info("SERVER", 'Mongo Connected');
        })
        .catch((error) => {
            logger.error("SERVER", error.message, error);
        });
}

module.exports = connection;