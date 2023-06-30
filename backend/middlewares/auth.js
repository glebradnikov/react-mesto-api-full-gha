const jsonwebtoken = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-error');

module.exports = (request, response, next) => {
  const { jwt } = request.cookies;

  if (!jwt) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  let payload;

  try {
    payload = jsonwebtoken.verify(
      jwt,
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret'
    );
  } catch (error) {
    throw new UnauthorizedError('Необходима авторизация');
  }

  request.user = payload;

  next();
};
