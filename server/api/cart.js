const {
  models: { Order, Product },
} = require("../db");
const router = require("express").Router();
const { requireToken, isLoggedInUser } = require('./gatekeepingMiddleware');
const { route } = require("./order_products");

//   /cart/userId

router.get("/:userId", async (req, res, next) => {
  try {
    const email = req.body.buyerEmail

    const existingCart = await Order.findOne({
      where: {
        buyerEmail: email,
        userId: req.params.userId,
        isFulfilled: false
      },
      include: {
        model: Product,
      },
    })
    res.send(existingCart)
  } catch (error) {
    next(error)
  }
})

router.post("/:userId", async (req, res, next) => {
  try {
    const email = req.body.buyerEmail

    const cart = await Order.findOrCreate({
      where: {
        buyerEmail: email,
        userId: req.params.userId,
        isFulfilled: false
      },
      include: {
        model: Product,
      },
    })
    res.send(cart)
  } catch (error){
    next(error)
  }
})

module.exports = router;
