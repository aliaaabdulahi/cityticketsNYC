const {
  models: { Order, Product, Order_Product },
} = require("../db");
const router = require("express").Router();
const { requireToken, isLoggedInUser } = require("./gatekeepingMiddleware");
const { route } = require("./order_products");

//   /cart/userId

router.get("/:userId", async (req, res, next) => {
  try {
    const email = req.body.buyerEmail;

    const existingCart = await Order.findOne({
      where: {
        buyerEmail: email,
        userId: req.params.userId,
        isFulfilled: false,
      },
      include: {
        model: Product,
      },
    });
    if (existingCart){
      res.send(existingCart);
    } else {
      res.sendStatus(401)
      return
    }
    
  } catch (error) {
    next(error);
  }
});

router.post("/addProduct", async (req, res, next) => {
  try {
    // orderId, productId, qty
    const orderId = parseInt(req.body.orderId);
    const productId = parseInt(req.body.productId);
    const qty = parseInt(req.body.qty);

    const result = await Order_Product.create({
      quantity: qty,
      productId: productId,
      orderId: orderId,
    });
    res.send(result);
  } catch (error) {}
});

router.put("/deleteProduct", async (req, res, next) => {
  try {
    // orderId, productId
    const orderId = parseInt(req.body.orderId);
    const productId = parseInt(req.body.productId);
    console.log("in delete product route -->", req.body);

    const result = await Order_Product.findOne({
      where: {
        orderId: orderId,
        productId: productId,
      },
    });
    result.destroy();

    res.send(result);
  } catch (error) {}
});

router.post("/:userId", async (req, res, next) => {
  try {
    console.log("safely arrived backend-->", req.body);
    const userId = req.params.userId;
    const email = req.body.buyerEmail;

    // const cart = await Order.findOrCreate({
    //   where: {
    //     buyerEmail: email,
    //     userId: userId,
    //     isFulfilled: false
    //   },
    //   include: {
    //     model: Product,
    //   },
    // })
    const existCart = await Order.findOne({
      where: {
        userId: userId,
        isFulfilled: false,
      },
      include: {
        model: Product,
      },
    });
    console.log("cart from backend", req.body);
    if (!existCart) {
      console.log("cart not exisit");
      const newCart = await Order.create({
        userId: userId,
        isFulfilled: false,
        buyerEmail: "xxx@gmail.com",
      });
      res.send(newCart);
    } else {
      console.log("sits");
      res.send(existCart);
    }
  } catch (error) {}
});

module.exports = router;
