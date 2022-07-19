const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const { validateToken } = require('../middlewares/validations');

const router = Router();

router.post('/', validateToken, categoryController.createCategory);

module.exports = router;