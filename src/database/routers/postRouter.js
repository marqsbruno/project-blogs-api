const { Router } = require('express');
const postController = require('../controllers/postController');
const { validateToken } = require('../middlewares/validations');

const router = Router();

router.get('/', validateToken, postController.getAllPost);

module.exports = router;