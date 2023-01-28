export class InvalidUsernameLengthError extends Error {
  constructor(message = 'username: invalid length') {
    super(message);
  }
}
