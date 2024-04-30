"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sequelize_1 = __importDefault(require("./infra/sequelize"));
const router_1 = __importDefault(require("./interfaces/router"));
const app = (0, express_1.default)();
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
app.use(async (_, res, next) => {
    try {
        await sequelize_1.default.authenticate();
        next();
    }
    catch (error) {
        res.status(503).json({
            message: "Problemas de conexão. Entre em contato com um administrador, ou tente novamente mais tarde.",
        });
    }
});
app.use((0, router_1.default)());
