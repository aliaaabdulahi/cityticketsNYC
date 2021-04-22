const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

router.get('/users', async (req, res, next) => {
  try {
    //if (req.user && req.user.isAdmin){
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

