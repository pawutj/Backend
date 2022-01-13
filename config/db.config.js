module.exports = {
  HOST: "localhost",
  USER: "godev",
  PASSWORD: "123456",
  DB: "godev",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
