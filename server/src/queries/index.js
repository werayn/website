import fs from 'fs-sync';
import path from 'path';

const queries = {
    //User
    getUser: fs.read(path.join(__dirname, '/user/get-user.sql')),
    setUserLogStory: fs.read(path.join(__dirname, '/user/set-user-log-story.sql')),
    //Dashboard
    getMetrics: fs.read(path.join(__dirname, '/dashboard/get-metrics.sql')),
    // Record
    getRecordList: fs.read(path.join(__dirname, '/record/get-recordList.sql')),
    getRecord: fs.read(path.join(__dirname, './record/get-record.sql')),
    getAnnotation: fs.read(path.join(__dirname, './record/get-term-annote.sql')),
    deleteAnnotation: fs.read(path.join(__dirname, './record/delete-annotation.sql')),
    setAnnotation: fs.read(path.join(__dirname, './record/set-annotation.sql')),
    setValidationRapport: fs.read(path.join(__dirname, './record/set-validation-rapport.sql')),
};

export default {
    get: (queryName) => {
        return queries[queryName];
    },
};
