export class InvalidEmailDomainError extends Error {
  constructor(message = 'email: invalid domain') {
    super(message);
  }
}
