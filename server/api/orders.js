const router = require("express").Router();
const {
  models: { Order,Product },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.send(orders);
  } catch (err) {
    next(err);
  }
});

router.get("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId
    res.send(await Order.findAll({
      where:{userId:userId,
       isFulfilled: true},
      include: Product
    }))
   
  } catch (err) {
     next(err);
  }
});

module.exports = router;
