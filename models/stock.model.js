const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Stock = sequelize.define("stock", {
    stock_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    quantity: {
      type: Sequelize.INTEGER,
    },
  });

  return Stock;
};
