const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmpty: false,
    },
  },
  description: Sequelize.TEXT,
  image: {
    type: Sequelize.TEXT,
    allowNull: false,
    defaultValue:
      "https://upload.wikimedia.org/wikipedia/commons/3/31/Walk_of_Fame_Category_Motion_Pictures.jpg",
    validate: {
      isEmpty: false,
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
      isEmpty: false,
    },
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false,
    validate: {
      isEmpty: false,
    },
  },
});

module.exports = Product;
