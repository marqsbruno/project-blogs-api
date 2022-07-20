const db = require('../models');

const blogPostService = {
  getAllPost: async () => {
    const posts = await db.BlogPost.findAll({
      include: [
        { model: db.User, as: 'user', attributes: { exclude: 'password' } },
        { model: db.Category, as: 'categories', through: { attributes: [] } },
      ],
  });
    return posts;
  },
};

module.exports = blogPostService;