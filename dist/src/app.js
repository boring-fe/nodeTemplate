"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
exports.bootstrapApp = (setupConfig) => {
    const app = express_1.default();
    app.set('port', setupConfig.PORT);
    app.use(compression_1.default());
    app.use(body_parser_1.default.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(compression_1.default());
    app.use('/static', express_1.default.static('public'));
    app.get('/health-check', (req, res) => {
        console.log(req);
        res.status(200).send('Health');
    });
    return app;
};
//# sourceMappingURL=app.js.map