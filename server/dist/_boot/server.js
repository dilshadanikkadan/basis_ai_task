"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../_boot/config");
exports.default = async (app) => {
    app.listen(config_1.config.http.port, () => {
        console.log('786........✨✨✨');
        console.log(`⚡  Basis_back_end is listening at ${config_1.config.http.port}`);
    });
};
