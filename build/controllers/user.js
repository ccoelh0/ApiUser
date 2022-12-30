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
const user_1 = __importDefault(require("../services/user"));
const jwt_1 = require("../middlewares/jwt");
class UserController {
    constructor() {
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            return res.status(200).send({ data: `User ${req.body.username} created successfully` });
        });
        this.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const user = { username: req.body.username, password: req.body.password };
            return (0, jwt_1.signJwt)(res, next, user);
        });
        this.getUsers = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const page = Number(req.query.page) || 0;
            const usersPerPage = 3;
            const findByUsername = req.query.username !== undefined;
            try {
                (0, jwt_1.verifyJwt)(req['token']);
                if (findByUsername) {
                    const users = yield this.userService.getAllUsersPaginated(page, usersPerPage, `${req.query.username}`);
                    return res.status(200).json(users);
                }
                else {
                    const users = yield this.userService.getAllUsersPaginated(page, usersPerPage);
                    return res.status(200).json(users);
                }
            }
            catch (err) {
                return res.status(500).json(`Internal error: ${err}`);
            }
        });
        this.userService = new user_1.default();
    }
}
exports.default = UserController;
