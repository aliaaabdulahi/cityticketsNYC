const router = require("express").Router();
const {
  models: { Order },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.send(orders);
  } catch (err) {
    next(err);
  }
});
// router.post("/", async (req, res, next) => {
//   try {
//     res.status(201).send(await Order.create(req.body));
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
