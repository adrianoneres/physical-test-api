export class InvalidEmailPatternError extends Error {
  constructor(message = 'email: invalid pattern') {
    super(message);
  }
}
