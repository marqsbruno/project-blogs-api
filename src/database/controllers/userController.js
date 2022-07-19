const userService = require('../services/userService');
const authService = require('../services/authService');
const jwtService = require('../services/jwtService');

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

  getAllUser: async (req, res) => {
    const { authorization } = req.headers;
    const validate = await jwtService.validateToken(authorization);

    if (validate.error) return res.status(401).json({ message: validate.error.message });

    const users = await userService.getAllUser();
    return res.status(200).json(users);
   },

  getUserId: async (req, res) => {
    const { authorization } = req.headers;
    const validate = await jwtService.validateToken(authorization);

    if (validate.error) return res.status(401).json({ message: validate.error.message });
    
    const { id } = req.params;
    const user = await userService.getUserId(id);
    
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  },
};

module.exports = userController;