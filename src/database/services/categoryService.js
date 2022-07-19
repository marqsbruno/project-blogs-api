const db = require('../models');

const categoryService = {
  createCategory: async (name) => {
    const category = await db.Category.create({ name });
    return category;
  },

  getAllCategory: async () => {
    const categories = await db.Category.findAll();
    return categories;
  },
};

module.exports = categoryService;