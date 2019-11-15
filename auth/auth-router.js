const router = require('express').Router();

const brcypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const Users = require('../users/users-model.js'); 

//endpoints
router.post('/register', (req, res) => {
  const {username, password} = req.body; 

  
});

router.post('/login', (req, res) => {
  // implement login
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
