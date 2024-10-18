"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const environemnt_1 = require("../_boot/environemnt");
/*
  booting the env file to ensure that non of them didn't miss
*/
exports.config = {
    http: {
        host: (0, environemnt_1.envString)('HOST', 'localhost'),
        port: (0, environemnt_1.envNumber)('PORT', 3000)
    },
    mongo: {
        database: (0, environemnt_1.envString)('MONGO_URL', 'auth'),
    },
    secrets: {
        access_token: (0, environemnt_1.envString)('ACCESS_TOKEN_SECRET', 'basisToken'),
        refresh_token: (0, environemnt_1.envString)('REFRESH_TOKEN_SECRET', 'basisToken'),
    }
};
