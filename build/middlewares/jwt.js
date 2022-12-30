"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.signJwt = exports.ensureToken = void 0;
const config_1 = __importDefault(require("../config/config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var headers;
(function (headers) {
    headers["authorization"] = "authorization";
})(headers || (headers = {}));
const ensureToken = (req, res, next) => {
    const bearerHeader = req.headers[headers.authorization];
    if (bearerHeader !== undefined) {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }
    else {
        res.sendStatus(403);
    }
};
exports.ensureToken = ensureToken;
const signJwt = (res, next, user) => {
    jsonwebtoken_1.default.sign(user, config_1.default.jwtKey, (err, token) => {
        if (err) {
            res.sendStatus(403);
        }
        else {
            res.status(200).json({ data: 'Login confirmed' });
        }
        next();
    });
};
exports.signJwt = signJwt;
const verifyJwt = (token) => __awaiter(void 0, void 0, void 0, function* () { return jsonwebtoken_1.default.verify(token, config_1.default.jwtKey); });
exports.verifyJwt = verifyJwt;
