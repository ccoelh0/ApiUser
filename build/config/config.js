"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
console.log(__dirname);
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, '../../.env') });
exports.default = {
    dbConnection: process.env.DB_CONNENCTION || '',
    env: "development",
    host: process.env.HOST || "127.0.0.1",
    port: process.env.PORT || 8080,
    session: {
        secret: process.env.COOKIE_SECRET || '',
        saveUninitialized: true,
        resave: true,
        cookie: { maxAge: 6000000 },
    },
    jwtKey: process.env.JWT_KEY || ''
};
