const { Router } = require('express');
const router = Router();

const controller = require('../controllers/userController');

router.get('/user', controller.Get);

module.exports = router;