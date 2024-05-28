import { Sequelize } from "sequelize";

const db = process.env.POSTGRES_DB;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;
const adress = process.env.POSTGRES_ADRESS;
const port = process.env.POSTGRES_PORT;
const sequelize = new Sequelize(db, user, password, {
  host: adress,
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

export default sequelize;
