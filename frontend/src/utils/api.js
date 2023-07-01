// const apiConfig = {
//   URL: 'https://api.mesto.glebradnikov.nomoreparties.sbs',
//   HEADERS: {
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${localStorage.getItem('jwt')}`,
//   },
// };

const handleResponse = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(`Ошибка: ${response.status}`);
};

export const checkToken = (token) => {
  return fetch('https://api.mesto.glebradnikov.nomoreparties.sbs/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  }).then(handleResponse);
};

export const login = (email, password) => {
  return fetch('https://api.mesto.glebradnikov.nomoreparties.sbs/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  }).then(handleResponse);
};

export const register = (email, password) => {
  return fetch('https://api.mesto.glebradnikov.nomoreparties.sbs/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  }).then(handleResponse);
};

export const getUserInfo = () => {
  return fetch('https://api.mesto.glebradnikov.nomoreparties.sbs/users/me', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    credentials: 'include',
  }).then(handleResponse);
};

export const setUserInfo = (data) => {
  return fetch('https://api.mesto.glebradnikov.nomoreparties.sbs/users/me', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
    credentials: 'include',
  }).then(handleResponse);
};

export const getCards = () => {
  return fetch('https://api.mesto.glebradnikov.nomoreparties.sbs/cards', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    credentials: 'include',
  }).then(handleResponse);
};

export const addCard = (data) => {
  return fetch('https://api.mesto.glebradnikov.nomoreparties.sbs/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    body: JSON.stringify({
      name: data.title,
      link: data.link,
    }),
    credentials: 'include',
  }).then(handleResponse);
};

export const deleteCard = (id) => {
  return fetch(`https://api.mesto.glebradnikov.nomoreparties.sbs/cards/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
    credentials: 'include',
  }).then(handleResponse);
};

const addLike = (id) => {
  return fetch(
    `https://api.mesto.glebradnikov.nomoreparties.sbs/cards/${id}/likes`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      credentials: 'include',
    }
  ).then(handleResponse);
};

const deleteLike = (id) => {
  return fetch(
    `https://api.mesto.glebradnikov.nomoreparties.sbs/cards/${id}/likes`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      credentials: 'include',
    }
  ).then(handleResponse);
};

export const changeLikeCardStatus = (cardId, isLiked) => {
  return isLiked ? addLike(cardId) : deleteLike(cardId);
};

export const setAvatar = (data) => {
  return fetch(
    'https://api.mesto.glebradnikov.nomoreparties.sbs/users/me/avatar',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      body: JSON.stringify({
        avatar: data.avatar,
      }),
      credentials: 'include',
    }
  ).then(handleResponse);
};
