const { Router } = require('express');
const userController = require('../controllers/userController');
const { validateToken, validateUser } = require('../middlewares/validations');

const router = Router();

router.post('/', validateUser, userController.createUser);

module.exports = router;