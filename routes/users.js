const express = require('express');
const router = express.Router();

const usersHandler = require('./handler/user')


/* GET users listing. */
router.post('/register', usersHandler.register);
router.post('/logout', usersHandler.logout);
router.post('/login', usersHandler.login);
router.put('/:id', usersHandler.update);
router.get('/:id', usersHandler.getUser);
router.get('/', usersHandler.getUserList);

module.exports = router;
