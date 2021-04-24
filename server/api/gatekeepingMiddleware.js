const { models: { User } } = require('../db')

const requireToken = async (req, res, next) => {
   try { 
      // const token = req.headers.authorization
      const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjQsImlhdCI6MTYxOTI3OTQxN30.fEGxWDaBa9GwlrYctcbw66NENx-0SW-v8z_mJCBEgnY'
      console.log('token==>', token)
      const user = await User.findByToken(token)
      console.log('user==>', user)
      req.user = user
      
      next()
   } catch (error) {
      next(error)
   }
} 

const isAdmin = (req, res, next) => {
   console.log('here is the user ===>',req.user.isAdmin)
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
