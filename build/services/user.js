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
const container_1 = __importDefault(require("../database/container"));
const userDTO_1 = __importDefault(require("../dto/userDTO"));
class UserService {
    constructor() {
        this.register = (newUser) => __awaiter(this, void 0, void 0, function* () {
            try {
                const created = yield this.user.save(newUser);
                return new userDTO_1.default(created);
            }
            catch (err) {
                throw new Error(`Something happened: ${err}`);
            }
        });
        this.getAllUsers = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.user.getAll();
            }
            catch (err) {
                throw new Error(`Something happened: ${err}`);
            }
        });
        this.getAllUsersPaginated = (page, usersPerPage, username) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.user.getAllPaginated(page, usersPerPage, username);
                const dto = users.map((u) => new this.userDTO(u));
                return dto;
            }
            catch (err) {
                throw new Error(`Something happened: ${err}`);
            }
        });
        this.user = new container_1.default();
        this.userDTO = userDTO_1.default;
    }
}
exports.default = UserService;
