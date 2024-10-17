import { envString, envNumber } from "../_boot/environemnt";
//
export const config = {
    http: {
        host: envString('HOST', 'localhost'),
        port: envNumber('PORT', 3000)
    },
    mongo: {
        database: envString('MONGO_URL', 'auth'),
    },
    secrets: {
        access_token: envString('ACCESS_TOKEN_SECRET', 'basisToken'),
        refresh_token: envString('REFRESH_TOKEN_SECRET', 'basisToken'),
    }
};