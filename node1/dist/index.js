"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let name = 'Jonas';
if (validator_1.default.isLowercase(name)) {
    console.log(`a string ${name} é minuscula`);
}
else {
    console.log(`a string ${name} tem maiscula`);
}
