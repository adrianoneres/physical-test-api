export class InvalidEmailDomainSegmentError extends Error {
  constructor(message = 'email: invalid domain segment') {
    super(message);
  }
}
