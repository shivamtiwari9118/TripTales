const { paymentHandle } = require("../controller/payment.controller");

const paymentRoute = require("express").Router();

paymentRoute.post("/", paymentHandle);

module.exports = { paymentRoute };
