const express = require('express');
const { addUser, getUser } = require('../controllers/auth-controller');

const router = express.Router();

router.post('/user/add', addUser);

module.exports = router;