const router = require('express').Router();
const usersModel = require('../users/usersModel')

const errorMessage = { 
  message: 'You need to include a valid username and password in your request.'
}

router.post('/register', async (req, res, next) => {
  // implement registration
  const user = req.body

  if (!user || !user.username || !user.password) {
    return res.status(401).json(errorMessage)
  }

  try {
    const saved = await usersModel.add(user)
    res.status(201).json(saved)
  } catch (err) {
    next(err)
  }
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
