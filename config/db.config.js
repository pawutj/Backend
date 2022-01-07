module.exports = {
  HOST: "localhost",
  // USER: "root", add your username password mysql
  // PASSWORD: "123456",
  // DB: "godev",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
