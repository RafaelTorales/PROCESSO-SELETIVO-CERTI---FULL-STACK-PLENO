import express from "express";
import sequelize from "./infra/sequelize/sequelize";
import setupRouter from "./interfaces/router";

const app = express();

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.use(async (_, res, next) => {
  try {
    await sequelize.authenticate();
    next();
  } catch (error) {
    res.status(503).json({
      message:
        "Problemas de conexão. Entre em contato com um administrador, ou tente novamente mais tarde.",
    });
  }
});

app.use(setupRouter());
