const { Router } = require('express');
const authController = require('../controllers/authController');
const { validateLogin } = require('../middlewares/validations');

const router = Router();

router.post('/', validateLogin, authController.login);

module.exports = router;