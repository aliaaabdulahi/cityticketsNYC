const router = require('express').Router()
const { models: { User } } = require('../db')
const { requireToken, isAdmin } = require('./gatekeepingMiddleware')

module.exports = router

router.get("/users", requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'isAdmin']
    })
    res.json(users)

  } catch (err) {
    next(err)
  }
})

router.put("/users/:id", requireToken, isAdmin, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    if (user){
      await user.update(req.body)
      res.json(user)
    } else {
      res.sendStatus(404)
    }
  } catch (err) {
    next(err)
  }
 } )

//router.get("/orders",        )

//router.get("/orders/:id",    )

//router.get("/products",        )

//router.get("/products/:id",   )

// router.post("/products",  )

// router.delete("/products/:id",  )
// router.delete("/users/:id",  )

