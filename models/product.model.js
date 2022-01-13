const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "user_id",
    },
    product_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "product_id",
    },
    reorder_level: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "reorder_level",
    },
    barcode: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "barcode",
    },
    product_name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "product_name",
    },
    product_unit_in_stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "product_unit_in_stock",
    },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "category_id",
    },
    product_unit_price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "product_unit_price",
    },
    product_short_name: {
      type: Sequelize.STRING,
      allowNull: false,
      field: "product_short_name",
    },
    product_discount: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: "product_discount",
    },



  },
    {
      tableName: "product"
    }
  );

  return Product;
};
