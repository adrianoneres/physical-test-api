export class InvalidEmailLocalError extends Error {
  constructor(message = 'email: invalid local') {
    super(message);
  }
}
