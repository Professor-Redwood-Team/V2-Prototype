const bunyan = require('bunyan');

const logger = bunyan.createLogger({ name: 'Professor-Redwood', });

module.exports = logger;
