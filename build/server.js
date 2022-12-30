"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/config");
const express_1 = __importDefault(require("express"));
const databaseConnection_1 = __importDefault(require("./database/databaseConnection"));
const routes_1 = __importDefault(require("./routes/routes"));
const express_session_1 = __importDefault(require("express-session"));
const config_1 = __importDefault(require("./config/config"));
const app = (0, express_1.default)();
(0, databaseConnection_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, express_session_1.default)(config_1.default.session));
app.use('/api', routes_1.default);
app.listen(process.env.PORT, () => console.log(`Server is running in port ${process.env.PORT}`));
