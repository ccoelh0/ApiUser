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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models/models");
class User {
    constructor() {
        this.save = (user) => __awaiter(this, void 0, void 0, function* () {
            const newUser = new this.collection(user);
            try {
                return yield newUser.save();
            }
            catch (err) {
                throw new Error(`Something happened: ${err}`);
            }
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.collection.find();
            }
            catch (err) {
                throw new Error(`Something happened: ${err}`);
            }
        });
        this.getAllPaginated = (page, usersPerPage, username) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (username !== undefined) {
                    return yield this.collection
                        .find({ username })
                        .skip((page * usersPerPage))
                        .limit(usersPerPage);
                }
                else {
                    return yield this.collection
                        .find()
                        .skip((page * usersPerPage))
                        .limit(usersPerPage);
                }
            }
            catch (err) {
                throw new Error(`Something happened: ${err}`);
            }
        });
        this.collection = models_1.userModel;
    }
}
exports.default = User;
