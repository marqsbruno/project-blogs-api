const authService = require('../services/authService');

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const token = await authService.login(email, password);
  
      res.status(200).json({ token });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
};

module.exports = authController;