const express = require('express');

const user = express.Router();


user.get('/', (req, res) => {
    res.end('user home page');
} );


module.exports = user;