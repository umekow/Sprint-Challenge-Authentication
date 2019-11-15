const router = require('express').Router();

const brcypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const Users = require('../users/users-model.js'); 

//endpoints
router.post('/register', (req, res) => {
  let user = req.body; 

  const validateResult = validateUser(user)

  
});

router.post('/login', (req, res) => {
  const {username, password} = req.body; 
});

const getJwtToken = username => {
  const payload = {
    username
  }; 

  const secret = process.env.JWT_SECRET || "secret"; 
  
  const options = {
    expiresIn: '1d'
  }

  return jwt.sign(payload, secret, options)
}
module.exports = router;
