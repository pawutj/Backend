const db = require("../models");
const { Transaction } = db;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  Transaction.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};
