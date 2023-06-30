module.exports.URL_REGEX =
  /https?:\/\/(www\.)?[a-zA-Z0-9-]+\.[\w\-.~:\/?#[\]@!$&'()*+,;=]+/;

module.exports.ALLOWED_CORS = [
  'http://mesto.glebradnikov.nomoreparties.sbs',
  'https://mesto.glebradnikov.nomoreparties.sbs',
  'http://api.mesto.glebradnikov.nomoreparties.sbs',
  'https://api.mesto.glebradnikov.nomoreparties.sbs',
  'localhost:3000',
];

module.exports.DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
