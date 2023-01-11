"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = require("./src/router/router");
const body_parser_1 = __importDefault(require("body-parser"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_session_1 = __importDefault(require("express-session"));
const app = (0, express_1.default)();
mongoose_1.default.connect('mongodb://127.0.0.1:27017/demo_dbC09').then(() => {
    console.log('Connect db success');
});
mongoose_1.default.set('strictQuery', true);
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use((0, express_fileupload_1.default)({
    createParentPath: true
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('./public'));
app.use((0, express_session_1.default)({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 60000 }
}));
app.use('', router_1.router);
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/users/login');
});
//# sourceMappingURL=index.js.map