const userService = require('../services/userService');
const authService = require('../services/authService');

const userController = {
  createUser: async (req, res) => {
    try {
      const data = req.body;
      await userService.createUser(data);
      const { email, password } = req.body;
      const token = await authService.login(email, password);
  
      res.status(201).json({ token });
    } catch (error) {
      return res.status(409).json({ message: error.message });
    }
  },
};

module.exports = userController;