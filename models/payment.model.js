const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Payment = sequelize.define("payment", {
        payment_order_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        user_id: {
            type: Sequelize.INTEGER,
        },

        order_date: {
            type: Sequelize.DATE,
        },

        product_id: {
            type: Sequelize.JSON,
        },

        purchase_order_quantity: {
            type: Sequelize.INTEGER,
        },

        purchase_order_sub_total: {
            type: Sequelize.INTEGER,
        },

        purchase_order_total: {
            type: Sequelize.INTEGER,
        },

        purchase_order_tax: {
            type: Sequelize.INTEGER,
        },
    });

    return Payment;
};
