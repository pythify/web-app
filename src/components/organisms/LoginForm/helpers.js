export function parseSignupData(data) {
  const parsedData = {
    email: data['login-form-email'],
    password: data['login-form-password']
  };

  return parsedData;
}

export async function sendSignupInfo(data) {
  return new Promise((resolve) => resolve(data));
}
