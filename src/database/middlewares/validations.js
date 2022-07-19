require('dotenv/config');

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateUser = (req, res, next) => {
  const { displayName, email, password } = req.body;
  if (displayName.length < 8) {
    return (
      res.status(400).json({ message: '"displayName" length must be at least 8 characters long' }));
  }

  if (password.length < 6) {
    return (
      res.status(400).json({ message: '"password" length must be at least 6 characters long' }));
  }

  const re = /\S+@\S+\.\S+/;
  const validate = re.test(email);
  if (!validate) return res.status(400).json({ message: '"email" must be a valid email' });

  next();
};

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  next();
};

module.exports = {
  validateLogin,
  validateUser,
  validateToken,

};