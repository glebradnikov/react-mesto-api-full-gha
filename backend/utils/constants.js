const {
  PORT = 3000,
  DB_URL = 'mongodb://127.0.0.1:27017/mestodb',
  NODE_ENV,
  JWT_SECRET,
} = process.env;

module.exports = {
  PORT,
  DB_URL,
  NODE_ENV,
  JWT_SECRET,
};

module.exports.URL_REGEX =
  // eslint-disable-next-line no-useless-escape
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
