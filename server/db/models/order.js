const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define("order");

module.exports = Order;

// orderId;
// userId;
// Amount;
// buyerEmail;
// buyerName;

// does order
