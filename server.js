const Hapi = require('hapi');
const logger = require('./utils/logger');

const port = 3000;
const server = Hapi.server({
  port
});

const init = async () => {
  try {
    await server.start();
    logger.info('Server started, listening on', port);
  } catch (err) {
    logger.error(`Error: ${err}`);
  }
};

init();
