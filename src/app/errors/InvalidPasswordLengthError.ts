export class InvalidPasswordLengthError extends Error {
  constructor(message = 'password: invalid length') {
    super(message);
  }
}
