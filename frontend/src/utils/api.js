const apiConfig = {
  URL: 'https://api.mesto.glebradnikov.nomoreparties.sbs',
  HEADERS: {
    'Content-Type': 'application/json',
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
  },
};

const handleResponse = (response) => {
  return response.ok
    ? response.json()
    : Promise.reject(`Ошибка: ${response.status}`);
};

export const getUserInfo = () => {
  return fetch(`${apiConfig.URL}/users/me`, {
    method: 'GET',
    headers: apiConfig.HEADERS,
    credentials: 'include',
  }).then(handleResponse);
};

export const setUserInfo = (data) => {
  return fetch(`${apiConfig.URL}/users/me`, {
    method: 'PATCH',
    headers: apiConfig.HEADERS,
    body: JSON.stringify({
      name: data.name,
      about: data.about,
    }),
    credentials: 'include',
  }).then(handleResponse);
};

export const getCards = () => {
  return fetch(`${apiConfig.URL}/cards`, {
    method: 'GET',
    headers: apiConfig.HEADERS,
    credentials: 'include',
  }).then(handleResponse);
};

export const addCard = (data) => {
  return fetch(`${apiConfig.URL}/cards`, {
    method: 'POST',
    headers: apiConfig.HEADERS,
    body: JSON.stringify({
      name: data.title,
      link: data.link,
    }),
    credentials: 'include',
  }).then(handleResponse);
};

export const deleteCard = (id) => {
  return fetch(`${apiConfig.URL}/cards/${id}`, {
    method: 'DELETE',
    headers: apiConfig.HEADERS,
    credentials: 'include',
  }).then(handleResponse);
};

const addLike = (id) => {
  return fetch(`${apiConfig.URL}/cards/${id}/likes`, {
    method: 'PUT',
    headers: apiConfig.HEADERS,
    credentials: 'include',
  }).then(handleResponse);
};

const deleteLike = (id) => {
  return fetch(`${apiConfig.URL}/cards/${id}/likes`, {
    method: 'DELETE',
    headers: apiConfig.HEADERS,
    credentials: 'include',
  }).then(handleResponse);
};

export const changeLikeCardStatus = (cardId, isLiked) => {
  return isLiked ? addLike(cardId) : deleteLike(cardId);
};

export const setAvatar = (data) => {
  return fetch(`${apiConfig.URL}/users/me/avatar`, {
    method: 'PATCH',
    headers: apiConfig.HEADERS,
    body: JSON.stringify({
      avatar: data.avatar,
    }),
    credentials: 'include',
  }).then(handleResponse);
};

export const checkToken = (token) => {
  return fetch(`${apiConfig.URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    credentials: 'include',
  }).then(handleResponse);
};

export const login = (email, password) => {
  return fetch(`${apiConfig.URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  }).then(handleResponse);
};

export const register = (email, password) => {
  return fetch(`${apiConfig.URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  }).then(handleResponse);
};
