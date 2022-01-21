const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const ProductCategory = sequelize.define("product_category", {
    product_category_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    product_category: {
      type: Sequelize.STRING,
    },

    enable: {
      type: Sequelize.BOOLEAN,
    },
  });

  return ProductCategory;
};
