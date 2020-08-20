import jwt from 'jwt-simple';
import moment from 'moment-with-locales-es6';
moment.locale('fr');

class TokenManager {

    tokenGenerator(username, password){
        const token = jwt.encode({'username': username, 'password': username, 'exp': moment().add(15, 'minutes')}, 'asn-webapp');
        return token;
    }

    tokenRefresh(token) {
        const refreshToken = jwt.encode({'username': 'username', 'password': 'password', 'exp': moment().add(15, 'minutes')}, 'asn-webapp');
        return refreshToken;
    }

}

export default new TokenManager();
