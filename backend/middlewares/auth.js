const jsonwebtoken = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = require('../utils/constants');
const UnauthorizedError = require('../errors/unauthorized-error');

module.exports = (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jsonwebtoken.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret'
    );
  } catch (error) {
    return next(new UnauthorizedError('Необходима авторизация'));
  }

  request.user = payload;

  return next();
};
