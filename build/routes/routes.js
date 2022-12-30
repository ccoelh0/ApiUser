"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../controllers/user"));
const passport_1 = __importDefault(require("../middlewares/passport"));
const jwt_1 = require("../middlewares/jwt");
const router = express_1.default.Router();
const controller = new user_1.default();
router.post('/register', passport_1.default.authenticate('register'), controller.register);
router.post('/login', passport_1.default.authenticate('login'), controller.login);
router.get('/users', jwt_1.ensureToken, controller.getUsers);
exports.default = router;
