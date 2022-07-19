const { Router } = require('express');
const userController = require('../controllers/userController');
const { validateToken, validateUser } = require('../middlewares/validations');

const router = Router();

router.post('/', validateUser, userController.createUser);

router.get('/', validateToken, userController.getAllUser);
router.get('/:id', validateToken, userController.getUserId);

module.exports = router;