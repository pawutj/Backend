const db = require("../models");
const Stock = db.Stock;
const Op = db.Sequelize.Op;
const Product = db.Product;
const removeNull = require("../utils");
const Transaction = db.Transaction;
const transactionController = require("./transaction.controller");

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

exports.setIsEnable = async (req, res) => {
  const [stock, created] = await Stock.findOrCreate({
    where: { product_id: req.body.product_id },
    defaults: {
      quantity: 0,
      isEnable: true,
      store_id: 1,
    },
  });
  console.log(!created);
  if (!created) {
    try {
      const result = await Stock.update(
        { isEnable: req.body.isEnable },
        { where: { product_id: req.body.product_id } }
      );

      res.send(result);
    } catch (err) {
      res.status(500).send({
        message: err.message || "error",
      });
    }
  } else {
    res.send(stock);
  }
};

exports.createService = async (req, res) => {
  Stock.create(stock)
    .then((data) => {
      return data;
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.setIsEnableService = async (req, res) => {
  try {
    const data = await Stock.update(
      { isEnable: req.body.isEnable },
      { where: { product_id: req.body.product_id } }
    );
    return data;
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};

exports.update = async (req, res) => {
  const stock = {
    quantity: req.body.quantity,
    store_id: req.body.store_id,
    product_id: req.body.product_id,
    isEnable: req.body.isEnable,
  };

  try {
    const oldStock = await Stock.findOne({
      where: { stock_id: req.param("stock_id") },
    });

    oldStock.set({ ...oldStock, ...removeNull(stock) });

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

exports.findAllProduct = (req, res) => {
  Stock.findAll({
    include: [
      {
        model: Product,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "error",
      });
    });
};

exports.addStock = async (req, res) => {
  try {
    const data = await this.listQuantityAdjust(req, res);
    const dataTransaction = await transactionController.createList(req, res);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};

exports.missingStock = async (req, res) => {
  try {
    const data = await this.listQuantityRemove(req, res);
    const dataTransaction = await transactionController.createList(req, res);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};

exports.sellStock = async (req, res) => {
  try {
    const data = await this.listQuantityRemove(req, res);
    const dataTransaction = await transactionController.createList(req, res);
    res.send(data);
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};

exports.listQuantityRemove = async (req, res) => {
  // const quantityAddList = [
  //   { stock_id: 1, quantity: 1 },
  //   { stock_id: 1, quantity: 1 },
  // ];
  const quantityAddList = req.body;
  try {
    const data = await Promise.all(
      quantityAddList.map((quantityAdd) =>
        Stock.decrement(
          { quantity: quantityAdd.quantity },
          {
            where: { product_id: quantityAdd.product_id },
          }
        )
      )
    );

    //res.send(data);
    return data;
  } catch (err) {
    res.status(500).send({
      message: err.message || "error",
    });
  }
};

exports.listQuantityAdjust = async (req, res) => {
  // const quantityAddList = [
  //   { stock_id: 1, quantity: 1 },
  //   { stock_id: 1, quantity: 1 },
  // ];
  const quantityAddList = req.body;
  try {
    const data = await Promise.all(
      quantityAddList.map((quantityAdd) =>
        Stock.increment(
          { quantity: quantityAdd.quantity },
          {
            where: { product_id: quantityAdd.product_id },
          }
        )
      )
    );

    //res.send(data);
    return data;
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
