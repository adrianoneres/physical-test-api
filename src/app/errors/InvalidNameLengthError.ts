export class InvalidNameLengthError extends Error {
  constructor(message = 'name: invalid length') {
    super(message);
  }
}
