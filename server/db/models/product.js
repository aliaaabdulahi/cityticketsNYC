const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: Sequelize.TEXT,
  image: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Walk_of_Fame_Category_Motion_Pictures.jpg",
    validate: {
      notEmpty: true,
    },
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: {
      isEmpty: false,
    },
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Product;
