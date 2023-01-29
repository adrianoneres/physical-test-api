import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidEmailDomainError extends AppError {
  constructor(message = 'email: invalid domain') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
