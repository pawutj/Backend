const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    user_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },

    email: {
      type: Sequelize.STRING,
    },

    password: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
