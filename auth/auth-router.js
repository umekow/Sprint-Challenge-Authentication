const router = require('express').Router();

const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken'); 

const Users = require('../users/users-model.js'); 
const {validateUser} = require('../users/users-helper.js'); 

//endpoints
router.post('/register', (req, res) => {
  let user = req.body; 

  const validatedResult = validateUser(user)
  if (validatedResult.isSuccessful === true){
    const hash = bcrypt.hashSync(user.password, 10); 
    user.password = hash; 

    Users
      .add(user)
      .then(saved => {
        res.status(201).json(saved)
      })
      .catch(error => {
        res.status(500).json(error)
      })
  }else {
    res.status(400).json({
      messag: "Invalid info about user ", 
      errors: validatedResult.errors
    })
  }
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
