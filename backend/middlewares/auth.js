const jsonwebtoken = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = require('../utils/constants');
const UnauthorizedError = require('../errors/unauthorized-error');

module.exports = (request, response, next) => {
  // const { jwt } = request.cookies;

  // if (!jwt) {
  //   throw new UnauthorizedError('Необходима авторизация');
  // }

  // let payload;

  // try {
  //   payload = jsonwebtoken.verify(
  //     jwt,
  //     NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret'
  //   );
  // } catch (error) {
  //   throw new UnauthorizedError('Необходима авторизация');
  // }

  // request.user = payload;

  // next();
  const { authorization } = request.headers;

  if (!authorization) {
    return next(new UnauthorizedError('Требуется авторизация'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jsonwebtoken.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret'
    );
  } catch (error) {
    return next(new UnauthorizedError('Требуется авторизация'));
  }
  request.user = payload;
  return next();
};
