const mongoose = require( 'mongoose' );
const logger = require( '../config/logger' );
const options = require('./options')

const {
    MONGO_URL
} = process.env

mongoose.connect(MONGO_URL, options)

const db = mongoose.connection;
  
db.on('error', (error) => {
    logger.error('SERVER', error.message, error);
})
  
db.once('open', () => {
    
    logger.info('SERVER', 'Mongo Connected');
})
