const postService = require('../services/postService');
const jwtService = require('../services/jwtService');

const postController = {
  getAllPost: async (req, res) => {
    const { authorization } = req.headers;
    const validate = await jwtService.validateToken(authorization);

    if (validate.error) return res.status(401).json({ message: validate.error.message });

    const result = await postService.getAllPost();
    return res.status(200).json(result);
  },
};

module.exports = postController;