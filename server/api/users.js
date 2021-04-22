const router = require('express').Router()
const { models: { User } } = require('../db')
const { requireToken,} = require('./gatekeepingMiddleware')

module.exports = router

router.get("/:id", requireToken, async (req, res, next) => {
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