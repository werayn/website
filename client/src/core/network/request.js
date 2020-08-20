// Lib
import HttpError from 'standard-http-error';
import axios from 'axios';
import https from 'https';
// utils
import { isDev } from '../utils/env.js';

/**
 * @function request
 * @desc Make a request with fetch
 * @param {string} url url to call
 * @param {object} options options contain the parameters, headers...
 * @returns {promise}
 * @public
 * @version 1.0
 * @since 1.0
 */
async function request(url, options) {
    if (!url) {
        throw new Error('Preflight request error: URL parameter required');
    }

    if (!options) {
        throw new Error('Preflight request error: options parameter required');
    }
    if (!isDev()) {
        return axios({
            url,
            httpsAgent: new https.Agent({ keepAlive: true,
                rejectUnauthorized: false }),
            ...options,
        }).then((response) => {
            return response.data;
        });
    }
    // Fetch returns a promise
    return axios({
        url,
        ...options,
    }).then((response) => {
        return response.data;
    });
}

/**
 * Strip baseURL from URL
 *
 * @param config Object
 * @returns String
 */
function getUrl(config) {
    if (config.baseURL) {
        return config.url.replace(config.baseURL, '');
    }
    return config.url;
}

axios.interceptors.request.use(
    (config) => {
        if (isDev()) {
            config.ts = Date.now();
            console.log('%c ' + config.method.toUpperCase() + ' - '
                        + getUrl(config) + ':', 'color: #0086b3; font-weight: bold', config);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    (response) => {
        if (isDev()) {
            try {
                const requestDuration = Number(Date.now() - response.config.ts);
                console.log('%c ' + response.status + ' - '
                            + getUrl(response.config)
                            + ' %c+' + requestDuration.toFixed() + 'ms%c :',
                'color: #008000; font-weight: bold',
                'color: #ffa500; font-weight: bold',
                'color: #008000; font-weight: bold',
                response);
            } catch (err) {
                console.log('%c ' + err, 'color: #a71d5d; font-weight: bold');
            }
        }
        return response;
    },
    (error) => {
        if (isDev()) {
            try {
                console.log('ERR: ', error);
                const requestDuration = Number(Date.now() - error.ts);
                console.log('%c ' + error.response.status + ' - '
                            + getUrl(error.config)
                            + ' %c+' + requestDuration.toFixed() + 'ms%c :',
                'color: #a71d5d; font-weight: bold',
                'color: #ffa500; font-weight: bold',
                'color: #a71d5d; font-weight: bold',
                error.response);
            } catch (err) {
                console.log('%c ' + err, 'color: #a71d5d; font-weight: bold');
            }
        }
        console.log(JSON.stringify(error.response));
        console.log(JSON.stringify(error));
        if (error.response) {
            return Promise.reject(new HttpError(
                error.response.status,
                `Server error: ${error.response.status} status`,
                { data: error.response.data.error },
            ));
        } else {
            return Promise.reject(new HttpError(
                404,
                'Server error: 404 status',
                { data: error.message },
            ));

        }
    },
);

export default request;
