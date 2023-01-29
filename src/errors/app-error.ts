export class AppError extends Error {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message = 'Internal server error', statusCode = 500) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
