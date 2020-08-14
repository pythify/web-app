/* eslint-disable camelcase */
const API_BASE_URL = 'https://ceolapi.xyz'

export const register = ({
  email,
  username,
  password,
  password_confirmation,
  first_name,
  last_name
}) =>
  fetch(`${API_BASE_URL}/users/signup/`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify({
      email,
      username,
      password,
      password_confirmation,
      first_name,
      last_name
    })
  })
    .then((response) => response.json())
    .catch((err) => err)

export const verify = ({ token }) => {
  const formData = new FormData()
  formData.append('token', token)
  return fetch(`${API_BASE_URL}/users/verify/`, {
    method: 'POST',
    body: formData
  })
    .then((response) => response.json())
    .catch((err) => err)
}

export const login = ({ email, password }) =>
  fetch(`${API_BASE_URL}/users/login/`, {
    method: 'POST',
    body: JSON.stringify({ email, password })
  })
    .then((response) => response.json())
    .catch((err) => err)
