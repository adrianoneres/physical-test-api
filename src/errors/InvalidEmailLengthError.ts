export class InvalidEmailLengthError extends Error {
  constructor(message = 'email: invalid length') {
    super(message);
  }
}
