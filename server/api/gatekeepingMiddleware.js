const { models: { User } } = require('../db')

const requireToken = async (req, res, next) => {
   try { 
      const token = req.headers.authorization
      const user = await User.findByToken(token)
      req.user = user
      next()
   } catch (error) {
      next(error)
   }
} 

const isAdmin = (req, res, next) => {
   if (!req.user.isAdmin) {
      return res.status(403).send('Not authorized')
   } else {
      next()
   }
}

const isLoggedInUser = (req, res, next) => {
   if (req.user.id !== Number(req.params.id)) {
      return res.status(403).send('Please login to correct account.')
   } else {
      next()
   }
}


module.exports = {
   requireToken,
   isAdmin, 
   isLoggedInUser
}
