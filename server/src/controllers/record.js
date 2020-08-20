/* eslint-disable camelcase */
import express from 'express';
import DBManager from '@db-manager/index.js';
import logger from '@tools/logger';
import url from 'url';
import queryString from 'query-string';
import fs from 'fs';

class RecordController {
    constructor() {
        this.path = '/record';
        this.router = express.Router();
        this.initializeRoutes = this.initializeRoutes.bind(this);
        this.getRecordList = this.getRecordList.bind(this);
        this.getIef = this.getIef.bind(this);
        this.getIefAnnotation = this.getIefAnnotation.bind(this);
        this.postLetterAnnotation = this.postLetterAnnotation.bind(this);
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get(`${this.path}/list`, this.getRecordList);
        this.router.get(`${this.path}/ief`, this.getIef);
        this.router.get(`${this.path}/letter-annotation`, this.getIefAnnotation);
    //    this.router.post(`${this.path}/delete-annotation`, this.deleteLetterAnnotation);
        //     this.router.post(`${this.path}/post-annotation`, this.postLetterAnnotation);
    }

    postLetterAnnotation(req, res) {
        const {docId, nom_lettre, selectedTerm, categorie, sousCategorie, selectedTermStart, selectedTermEnd, user } = req.body;
        logger.info(`loading post annotation  ${docId}, ${selectedTerm}, ${sousCategorie}`);

        if ( docId && nom_lettre && selectedTerm && categorie && sousCategorie && selectedTermStart && selectedTermEnd && user )  {
            DBManager.setAnnotation(req.body).then(() => {
                logger.info(`Successfully adding annotation  ${docId}, ${selectedTerm}, ${sousCategorie}`);
                logger.info(`Fetching all annotation ${docId}`);
                DBManager.getAnnotation(docId).then((result) => {
                    logger.info(`Successfully Fetching annotation ${docId}`);
                    if (result.length === 1) {
                        DBManager.setValidationRapport(docId).then((tmp) => {
                            logger.info(`Successfully adding true to letter ${docId}`);
                        }, (err) => {
                            logger.error('setValidationRapport error :' + err);
                        });
                    }
                    res.status(200).json({
                        annotation: result,
                    });
                }, (err) => {
                    res.status(500).json({
                        error: 'cannot get annotation',
                    });
                    logger.error('postAnnotation error :' + err);
                });
            }, (err) => {
                res.status(500).json({
                    error: 'cannot set annotation',
                });
                logger.error('postAnnotation error :' + err);
            });
        } else {
            res.status(500).json({
                error: 'wrong params',
            });
            logger.error('wrong params post annotation');
        }
    }

    getIef(req, res) {
        logger.info('Fetching ief');
        const parsedUrl = url.parse(req.url);
        const params = queryString.parse(parsedUrl.query);
        if (params.filePath && params.folderName) {
            fs.stat(params.filePath, (err, stat) => {
                if (err === null) {
                    logger.info(`found ${params.filePath}`);
                    res.download(params.filePath, (error) => {
                        if (err) {
                            logger.error('error sending pdf' + error);
                            res.status(500).json({
                                error: 'error sending pdf',
                            });
                        }
                    });
                    logger.info(`Sent ${params.filePath}`);
                } else {
                    logger.error('error pdf not found' + err);
                    res.status(404).json({
                        error: 'error pdf not found',
                    });
                }
            });
        } else {
            res.status(422).json({
                error: 'Unprocessable Entity',
            });
            logger.error('wrong params get Ief');
        }
    }

    getIefAnnotation(req, res) {
        const parsedUrl = url.parse(req.url);
        const params = queryString.parse(parsedUrl.query);
        logger.info('Fetching ief annotation');

        if (params.filePath && params.folderName) {
            DBManager.getIefAnnotation(params.filePath, params.folderName).then((result) => {
                logger.info(`Successfully Fetching IEF annotation ${params.folderName}`);
                res.status(200).json(result);
            }, (err) => {
                res.status(500).json({
                    error: 'cannot get IEF annotation',
                });
                logger.error('getIefAnnotation error :' + err);
            });
        } else {
            res.status(422).json({
                error: 'Unprocessable Entity',
            });
            logger.error('wrong params record annotation');
        }
    }


    //Get list of IEF depending annotation statut
    getRecordList(req, res) {
        const parsedUrl = url.parse(req.url);
        const params = queryString.parse(parsedUrl.query);
        logger.info('Fetching ief list');

        if (params.statut && params.statut >= 0 && params.statut < 3) {
            DBManager.getRecordList(params.statut).then((result) => {
                logger.info('Successfully Fetching IEF');
                res.status(200).json(result);
            }, (err) => {
                res.status(500).json({
                    error: 'cannot get IEF list',
                });
                logger.error('getRecordList error :' + err);
            });
        } else {
            res.status(422).json({
                error: 'Unprocessable Entity',
            });
            logger.error('wrong params record List');
        }
    }
}

export { RecordController };
