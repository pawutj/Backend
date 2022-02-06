const db = require("../models");
const Stock = db.Stock;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  const stock = {
    quantity: req.body.quantity,
    store_id: req.body.store_id,
    product_id: req.body.product_id,
  };

  Stock.create(stock)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.update = async (req, res) => {
  const stock = {
    quantity: req.body.quantity,
    store_id: req.body.store_id,
    product_id: req.body.product_id,
  };

  try {
    const oldStock = await Stock.findOne({
      where: { stock_id: req.param("stock_id") },
    });

    oldStock.set({
      ...stock,
    });

    const data = await oldStock.save();

    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};

exports.findAll = (req, res) => {
  Stock.findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.listQuantityAdd = async (req, res) => {
  const quantityAddList = [{ stock_id: 1, add: 1 }];

  try {
    // const data = await Stock.increment("quantity", {
    //   by: 1,
    //   where: { stock_id: 1 },
    // });
    // res.send(data);

    const data = await Promise.all([
      Stock.increment("quantity", {
        by: 1,
        where: { stock_id: 1 },
      }),
      Stock.increment("quantity", {
        by: 1,
        where: { stock_id: 2 },
      }),
    ]);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};

exports.quantityAdjust = async (req, res) => {
  const adjust = {
    mode: req.body.mode,
    quantityUpdate: req.body.quantityUpdate,
  };

  try {
    const oldStock = await Stock.findOne({
      where: { stock_id: req.param("stock_id") },
    });

    newQuantity = oldStock.quantity;

    if (adjust.mode == "add") {
      const newQuantity = oldStock.quantity + +adjust.quantityUpdate;
      oldStock.set({ ...oldStock, quantity: newQuantity });
    }

    if (adjust.mode == "remove") {
      const newQuantity = oldStock.quantity - +adjust.quantityUpdate;
      oldStock.set({ ...oldStock, quantity: newQuantity });
    }

    const data = await oldStock.save();

    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};
