"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const server_1 = __importDefault(require("../_boot/server"));
const index_1 = __importDefault(require("../index"));
const db_connection_1 = __importDefault(require("../_boot/db.connection"));
/*
   this is the main fn() in boot will be called in index file
 */
const main = async () => {
    try {
        await (0, server_1.default)(index_1.default);
        await (0, db_connection_1.default)();
        process.on('SIGTERM', async () => {
            console.info("SIGTERM received");
        });
    }
    catch (error) {
        console.log(`Oops!`, error?.message);
    }
};
exports.main = main;
