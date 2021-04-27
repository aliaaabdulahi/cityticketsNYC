const {
  models: { Order, Product, Order_Product },
} = require("../db");

router.get("/:userId", async (req, res, next) => {
  try {
    const email = req.body.buyerEmail;

    const orderHistory = await Order.findAll({
      where: {
        buyerEmail: email,
        userId: req.params.userId,
        isFulfilled: true,
      },
      include: {
        model: Product,
      },
    });
    res.send(orderHistory);
  } catch (error) {
    next(error);
  }
});
