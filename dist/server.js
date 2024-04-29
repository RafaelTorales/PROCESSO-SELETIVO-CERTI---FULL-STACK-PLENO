"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importando os módulos necessários
const express_1 = __importDefault(require("express"));
// Criando uma instância do aplicativo Express
const app = (0, express_1.default)();
// Definindo uma rota básica
app.get("/", (req, res) => {
    res.send("Olá, mundo!");
});
// Iniciando o servidor na porta 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
