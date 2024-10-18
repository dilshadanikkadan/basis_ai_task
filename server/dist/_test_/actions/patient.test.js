"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const __1 = __importDefault(require("../.."));
it("can fetch a list of patients", async () => {
    const response = await (0, supertest_1.default)(__1.default).post("/patients").send({
        name: "dilshad",
        age: 20,
        gender: "male",
    });
    expect(response.status).toBe(201);
    expect(response.body.name).toEqual("dilshad");
    expect(response.body.age).toEqual(20);
});
