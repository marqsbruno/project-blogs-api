const Joi = require('joi');
const db = require('../models');
const jwtService = require('./jtwService');

const authService = {
  validateBody: (data) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6),
    });

    const { error } = schema.validate(data);

    if (error) {
      error.message = 'Some required fields are missing';
      throw error;
    }
  },

  login: async (email, password) => {
    const user = await db.User.findOne({ where: { email, password } });

    if (!user || user.password !== password) {
      const e = new Error('Invalid fields');
      throw e;
    }

    const token = jwtService.createToken(user);

    return token;
  },
};

module.exports = authService;