import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
// Tools
import logger from '@tools/logger';
// Middleware
import { loggerMiddleware } from '@middleware/logger.middleware.js';
// Controller
import { AuthController } from '@controllers/auth';
import { DashController } from '@controllers/dashboard';
import { RecordController } from '@controllers/record';
//import { exportController } from '@controllers/export';

dotenv.config();
class App {

    constructor() {
        this.app = express();
        this.controllers = [
            //            new exportController(),
            new AuthController(),
            new DashController(),
            new RecordController(),
        ];
        this.initializeMiddlewares = this.initializeMiddlewares.bind(this);
        this.initializeControllers = this.initializeControllers.bind(this);
        this.initializeMiddlewares();
        this.initializeControllers();
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            logger.info('/*************** *************** ***************/');
            logger.info('/*************** STARTING SERVER ***************/');
            logger.info('/*************** *************** ***************/');
            logger.info(`App listening HTTP on the port ${process.env.PORT}`);
        }).on('error', (err) => {
            logger.error(err);
            process.exit(1);
        });
    }

    initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(bodyParser.json({limit: '50mb', extended: true}));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(loggerMiddleware);
    }

    initializeControllers() {
        this.app.get('/', (req, res) => {
            res.send('Hello in sisse api !');
        });
        this.controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
        this.app.get('*', (req, res) => {
            res.send('404 Not Found');
        });
    }

}

export { App };
