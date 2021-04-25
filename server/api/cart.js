const {
  models: { Order, Order_Product },
} = require("../db");
const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    res.send(
      // await Order.findOne({
      //   where: {
      //     userId: 2,
      //   },
      //   include: {
      //     model: Order_Product,
      //   },
      // })
      await Order_Product.findAll()
    );
  } catch (err) {
    next(err);
  }
});

module.exports = router;
