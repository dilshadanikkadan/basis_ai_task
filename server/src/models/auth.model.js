"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const password_service_1 = require("../services/password/password.service");
const userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "healthProvider"
    },
}, {
    timestamps: true,
});
userSchema.pre("save", async function (done) {
    if (this.isModified("password")) {
        const hashed = await password_service_1.Password.toHash(this.get("password"));
        this.set("password", hashed);
    }
    done();
});
exports.UserModel = (0, mongoose_1.model)("users", userSchema);
