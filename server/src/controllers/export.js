import express from 'express';
import logger from '@tools/logger';
import excel from 'node-excel-export';
import { specification } from '@tools/schemaExcel.js';

class exportController {
    constructor() {
        this.path = '/export';
        this.router = express.Router();
        this.initializeRoutes = this.initializeRoutes.bind(this);
        this.getExport = this.getExport.bind(this);
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(`${this.path}/csv/stat`, this.getExport);
    }

    getExport(req, res) {
        const { toExport } = req.body;
        logger.info('Creating file to export');
        const report = excel.buildExport(
            [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
                {
                    name: 'Report', // <- Specify sheet name (optional)
                    merges: [], // <- Merge cell ranges
                    specification: specification, // <- Report specification
                    data: toExport.cat, // <-- Report data
                },
            ]
        );
        if (report) {
            logger.info('csv ready and sent');
            return res.send(report);
        } else {
            res.status(500).json({
                error: 'cannot get data in export',
            });
            logger.error('exported stat letter error.');
        }
    }
}

export { exportController };
