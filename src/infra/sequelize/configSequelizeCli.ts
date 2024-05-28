const db: string = process.env.POSTGRES_DB;
const user: string = process.env.POSTGRES_USER;
const pass: string = process.env.POSTGRES_PASSWORD;
const address: string = process.env.POSTGRES_ADDRESS;
const port: string = process.env.POSTGRES_PORT;

module.exports = {
  local: {
    dialect: "postgres",
    username: user,
    password: pass,
    database: db,
    host: address,
    port: port,
  },
};
