import { isDev } from '../utils/env.js';

/**
 * @class Config
 * @desc All core configuration like api url
 * @public
 * @version 1.0
 * @since 1.0
 */

class Config {
    /** @type {string} - API url of our backend */
    static API_URL = isDev() ? 'http://localhost:3011' : 'https://172.17.0.6:3011';
}

export default Config;
