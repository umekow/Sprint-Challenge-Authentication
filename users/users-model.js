const db = require('../database/dbConfig.js'); 

const add = user =>  db('users').insert(user); 

const find  = () => db('users').select('id', 'username', 'password');


module.exports = {
    add, 
    find
}




