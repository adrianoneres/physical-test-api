import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidPasswordConfirmationError extends AppError {
  constructor(message = 'invalid password confirmation') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
