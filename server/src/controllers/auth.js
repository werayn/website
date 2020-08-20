import express from 'express';
import logger from '@tools/logger';
import tokenManager from '@security/tokenManager.js';
import DBManager from '@db-manager/index.js';
import { checkAes } from '@security/aes.js';
import crypto from 'crypto-js';
import moment from 'moment-with-locales-es6';

class AuthController {
    constructor() {
        this.path = '/auth';
        this.router = express.Router();
        this.initializeRoutes = this.initializeRoutes.bind(this);
        this.auth = this.auth.bind(this);
        this.getRefreshToken = this.getRefreshToken.bind(this);
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.post(this.path, this.auth);
        this.router.post(`${this.path}/refresh`, this.getRefreshToken);
    }

    auth(req, res) {
        const {username, password} = req.body;
        logger.info('Trying to authenticate user');
        if (username && password) {
            DBManager
                .getUser(username)
                .then((result) => {
                    switch (result.length) {
                    case 0:
                        logger.error(`No user:${username} found`);
                        res.status(401).json({error: 'Utilisateur inconnu'});
                        break;
                    case 1: {
                        if (checkAes(password, result[0].pass)) {
                            logger.info('User found! Authenticating..');
                            res.status(200).json({
                                'token': tokenManager.tokenGenerator(username, password),
                                'text': 'Authentification réussi',
                                'username': result[0].user,
                                'userId': result[0].id,
                            });
                            return;
                        } else {
                            logger.error(`Wrong password user: ${username}`);
                            res.status(401).json({
                                error: 'Mauvais mot de passe',
                            });
                        }
                        break;
                    }
                    default:
                        break;
                    }
                });
        } else {
            res.status(422).json({
                error: 'wrong params',
            });
            logger.error('wrong params : auth');
        }
    }

    getRefreshToken(req, res) {
        const {token} = req.body;
        logger.info('Trying to refresh token ');
        if (token) {
            res.status(200).json({
                'token': tokenManager.tokenRefresh(token),
                'text': 'Authentification réussi',
            });
        }
    }
}

export { AuthController };
