const categoryService = require('../services/categoryService');
const jwtService = require('../services/jwtService');

const categoryController = {
  createCategory: async (req, res) => {
    const { authorization } = req.headers;
    const validate = await jwtService.validateToken(authorization);

    if (validate.error) return res.status(401).json({ message: validate.error.message });

    const { name } = req.body;
    if (!name) return res.status(400).json({ message: '"name" is required' });

    const result = await categoryService.createCategory(name);
    return res.status(201).json(result);
  },
};

module.exports = categoryController;