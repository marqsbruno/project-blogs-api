const db = require('../models');

const blogPostService = {
  getAllPost: async () => {
    const posts = await db.BlogPost.findAll();
    return posts;
  },
};

module.exports = blogPostService;