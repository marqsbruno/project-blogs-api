const db = require('../models');

const categoryService = {
  createCategory: async (name) => {
    const category = await db.Category.create({ name });
    return category;
  },
};

module.exports = categoryService;