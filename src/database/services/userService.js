const db = require('../models');

const userService = {
  createUser: async (data) => {
    const { displayName, email, password, image } = data;
    const catchUser = await db.User.findOne({ where: { email } });

    if (catchUser) {
      const e = new Error('User already registered');
      throw e;
    }

    const user = await db.User.create({ displayName, email, password, image });
    return user;
  },

  getAllUser: async () => {
    const users = await db.User.findAll({ attributes: { exclude: 'password' } });
    return users;
  },

  getUserId: async (id) => {
    const user = await db.User.findByPk(id, { attributes: { exclude: 'password' } });
    return user;
  },
};

module.exports = userService;