// Importando os módulos necessários
import express from "express";

// Criando uma instância do aplicativo Express
const app = express();

// Definindo uma rota básica
app.get("/", (req, res) => {
  res.send("Olá, mundo!");
});

// Iniciando o servidor na porta 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
