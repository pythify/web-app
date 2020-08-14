export function parseSignupData(data) {
  const parsedData = {
    email: data['login-form-email'],
    password: data['login-form-password']
  }

  return parsedData
}
