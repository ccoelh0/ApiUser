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
const bcrypt_1 = __importDefault(require("bcrypt"));
const passport_1 = __importDefault(require("passport"));
const passport_local_1 = __importDefault(require("passport-local"));
const user_1 = __importDefault(require("../services/user"));
const LocalStrategy = passport_local_1.default.Strategy;
const user = new user_1.default();
passport_1.default.use("register", new LocalStrategy((username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    const userInDB = yield user.getAllUsers();
    const isUserInDB = userInDB.find((u) => u.username === username);
    if (isUserInDB)
        return done("User already exists!");
    try {
        const hash = bcrypt_1.default.hashSync(password.toString(), bcrypt_1.default.genSaltSync(10));
        const newUser = {
            username: username,
            password: hash,
        };
        const saved = yield user.register(newUser);
        return done(null, saved);
    }
    catch (err) {
        return done(err);
    }
})));
passport_1.default.use("login", new LocalStrategy((username, password, done) => __awaiter(void 0, void 0, void 0, function* () {
    const userInDB = yield user.getAllUsers();
    const find = userInDB.find((u) => u.username === username);
    if (!find || !(yield bcrypt_1.default.compare(password.toString(), find.password)))
        return done("User or password incorrect");
    done(null, find);
})));
passport_1.default.serializeUser((user, done) => done(null, user));
passport_1.default.deserializeUser((username, done) => __awaiter(void 0, void 0, void 0, function* () {
    const userdb = yield user.getAllUsers();
    const find = userdb.find((x) => x.username === username);
    done(null, find);
}));
exports.default = passport_1.default;
