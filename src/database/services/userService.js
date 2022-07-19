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
};

module.exports = userService;