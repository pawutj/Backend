module.exports = (app) => {
    const payments = require("../controllers/payment.controller");

    var router = require("express").Router();

    router.get("/findAll", payments.findAll);
    router.post("/create", payments.create);
    router.get("/findById/:id", payments.findById);
    app.use("/api/payments", router);
};
