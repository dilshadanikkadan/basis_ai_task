"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../.."));
it('returns 200 if credential ok with login', async () => {
    await (0, supertest_1.default)(__1.default)
        .post("/auth/register")
        .send({
        userName: "dilshad",
        password: "dilshad4321@",
    })
        .expect(200);
    await (0, supertest_1.default)(__1.default).post('/auth/login').send({
        userName: "dilshad",
        password: "dilshad4321@",
    }).expect(200);
});
