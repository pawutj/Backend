const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = { Sequelize, sequelize };
db.User = require("./user.model.js")(sequelize, Sequelize);
db.Product = require("./product.model.js")(sequelize, Sequelize);
db.User.hasMany(db.Product, {
  foreignKey: "product_id",
});
db.Product.belongsTo(db.User, { foreignKey: "user_id" });

module.exports = db;
