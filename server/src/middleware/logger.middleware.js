import logger from '../tools/logger';

function loggerMiddleware(req, res, next) {
    logger.info(`${req.method} ${req.path}`);
    next();
}

export { loggerMiddleware };
