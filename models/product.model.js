const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    product_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    product_name: {
      type: Sequelize.STRING,
    },

    price: {
      type: Sequelize.INTEGER,
    },

    barcode: {
      type: Sequelize.STRING,
    },
  });

  return Product;
};
