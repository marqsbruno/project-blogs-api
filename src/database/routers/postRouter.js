const { Router } = require('express');
const postController = require('../controllers/postController');
const { validateToken } = require('../middlewares/validations');

const router = Router();

router.post('/', validateToken, postController.getAllPost);

module.exports = router;