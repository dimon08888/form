export function validateLogin(login: string): string {
  const minLength = 3;
  const maxLength = 32;

  if (login.length < minLength) {
    return 'Login mast be more 3 symbols';
  }
  if (login.length > maxLength) {
    return 'Login mast be less 32 symbols';
  }

  return '';
}

export function validateEmail(email: string): string {
  if (!email.includes('@')) {
    return 'Please correct E-mail';
  }
  return '';
}

export function validatePassword(password: string): string {
  const minLength = 10;
  const maxLength = 64;

  if (password.length < minLength) {
    return `Password must be at least ${minLength} characters long.`;
  }

  if (!/\d/.test(password)) {
    return `Password must have at least one digit character.`;
  }

  if (password.length > maxLength) {
    return `Password must be at most ${maxLength} characters long.`;
  }

  if (!/[A-Z]/.test(password)) {
    return 'Password must have at least one uppercase character';
  }

  if (!/[a-z]/.test(password)) {
    return 'Password must have at least one lowercase character';
  }
  return '';
}
