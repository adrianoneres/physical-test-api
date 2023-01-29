import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidTokenError extends AppError {
  constructor(message = 'token: invalid data') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
