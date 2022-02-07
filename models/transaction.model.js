const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const Transaction = sequelize.define("transaction", {
    transaction_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: Sequelize.INTEGER,
    },
    cost: {
      type: Sequelize.INTEGER,
    },
    income: {
      type: Sequelize.INTEGER,
    },
  });

  return Transaction;
};
