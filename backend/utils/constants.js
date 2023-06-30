module.exports.PORT = process.env.PORT = 3000;
module.exports.DB_URL = process.env.DB_URL =
  'mongodb://127.0.0.1:27017/mestodb';
module.exports.NODE_ENV = process.env.NODE_ENV;
module.exports.JWT_SECRET = process.env.JWT_SECRET;

module.exports.URL_REGEX =
  /https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[\w\-.~:\/?#[\]@!$&'()*+,;=]+/;

module.exports.ALLOWED_CORS = [
  'http://mesto.glebradnikov.nomoreparties.sbs',
  'https://mesto.glebradnikov.nomoreparties.sbs',
  'http://api.mesto.glebradnikov.nomoreparties.sbs',
  'https://api.mesto.glebradnikov.nomoreparties.sbs',
  'http://localhost:3000',
  'https://localhost:3000',
];

module.exports.DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
