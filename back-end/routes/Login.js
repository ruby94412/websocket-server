const {Router} = require('express');
const {
  validateUser,
} = require('../controllers/loginController');
const loginRouter = Router();


loginRouter.get('/test', (req, res) => {
  res.status(200).send({
    foo: 'bar',
  });
});

loginRouter.post('/', (req, res) => {
  const isValidUser = validateUser(req.body);
  res.status(200).send({
    status: isValidUser ? 'success' : 'failure',
    user: isValidUser,
  });
});

module.exports = loginRouter;
