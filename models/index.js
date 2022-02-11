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
db.ProductCategory = require("./productCategory.model")(sequelize, Sequelize);
db.Store = require("./store.model")(sequelize, Sequelize);
db.Stock = require("./stock.model")(sequelize, Sequelize);
db.Transaction = require("./transaction.model")(sequelize, Sequelize);

db.User.hasMany(db.Product, {
  foreignKey: "product_id",
});

db.Product.belongsTo(db.User, { foreignKey: "user_id" });
db.Product.belongsTo(db.ProductCategory, {
  foreignKey: "product_category_id",
});
db.Product.hasMany(db.Stock, { foreignKey: "stock_id" });
db.Product.hasMany(db.Transaction, { foreignKey: "transaction_id" });

db.ProductCategory.hasMany(db.Product, {
  foreignKey: "product_id",
});

db.Stock.belongsTo(db.Product, { foreignKey: "product_id" });
db.Stock.belongsTo(db.Store, { foreignKey: "store_id" });

db.Store.hasMany(db.Stock, { foreignKey: "stock_id" });

db.Transaction.belongsTo(db.Product, { foreignKey: "product_id" });

module.exports = db;
