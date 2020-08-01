export function parseSignupData(data) {
  const parsedData = {
    email: data['register-form-email'],
    username: data['register-form-username'],
    password: data['register-form-password'],
    password_confirmation: data['register-form-password-confirmation'],
    first_name: data['register-form-first-name'],
    last_name: data['register-form-last-name']
  };

  return parsedData;
}

export async function sendSignupInfo(data) {
  return new Promise((resolve) => resolve(data));
}
