import { createLogger, format, transports } from 'winston';
import 'winston-daily-rotate-file';
import moment from 'moment';

const { combine, timestamp, printf, splat, simple } = format;
const { Console, DailyRotateFile } = transports;

const myFormat = printf(info => {
    return `${moment(info.timestamp, 'YYYY-MM-DDTHH:mm:SS.Z').format('DD-MM-YYYY HH:mm:ss')} | ${info.level} | ${info.message}`;
});

const logLevel = 'info';

export default createLogger({
    format: combine(
        timestamp(),
        simple(),
        splat(),
        myFormat
    ),

    transports: [

        new Console({
            json: false,
            level: logLevel,
        }),

        new DailyRotateFile({
            level: logLevel,
            filename: 'server-%DATE%.log',
            dirname: 'logs',
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true,
        }),
    ],
});
