const router = require("express").Router();
const {
  models: { Order_Product, Product, Order },
} = require("../db");

// user submit shopping cart ---> req.body
// req.body is a [{productId,qty}, {productId,qty}] ?
// req.body ---> array method / loop  ---> call findByPk & setProducts

// router.get("/", async (req, res, next) => {
//   try {
//     // let orderProducts = await Order_Product.findAll();
//     // res.send(orderProducts);
//   } catch (err) {
//     next(err);
//   }
// });

// router.get("/:id", async (req, res, next) => {
//   try {
//     const allProducts = await Order_Product.findAll({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send(allProducts);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     // create new Order

//     const createOrderProduct = Order_Product.create(req.body);
//     const newOrder = Order.create();
//     res.send(createOrderProduct);
//   } catch (err) {
//     next(err);
//   }
// });

// router.post("/", async (req, res, next) => {
//   try {
//     // create new Order
//     // const products = req.body;
//     // let products = [{ productId: 1, quantity: 10 }];
//     const orders = [
//       { productId: 1, quantity: 1 },
//       { productId: 2, quantity: 3 },
//     ];
//     const newOrder = await Order.create(orders);

//     // await newOrder.setProducts(products);
//     console.log("newOrder __proto__==>", newOrder.__proto__);
//     console.log("newOrder prototype==>", newOrder.prototype);
//     console.log("newOrder obj==>", newOrder);
//     // products.map((product) => product.setOrder(newOrder));

//     res.send({ hi: 10 });
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
