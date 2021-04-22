const router = require('express').Router()
const { models: { User } } = require('../db')
const { requireToken, isAdmin } = require('./gatekeepingMiddleware')

module.exports = router

router.get("/", requireToken, isAdmin, async (req, res, next) => {
   try {
     
      const users = await User.findAll({
         attributes: ['id', 'username']
      })
      res.json(users)
      // } else {
      //   res.status(401).send('Not authorized')
      // }

   } catch (err) {
      next(err)
   }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const singleUser = await User.findByPk(id);
    res.json(singleUser);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.send(await user.update(req.body));
  } catch (err) {
    next(err);
  }
});