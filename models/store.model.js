const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Store = sequelize.define("store", {
    store_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    addess: {
      type: Sequelize.STRING,
    },
  });

  return Store;
};
