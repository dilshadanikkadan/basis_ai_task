"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomMedicalList = void 0;
const getRandomMedicalList = (list) => {
    return list[Math.floor(Math.random() * list.length)];
};
exports.getRandomMedicalList = getRandomMedicalList;
