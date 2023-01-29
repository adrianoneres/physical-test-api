import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidEmailLengthError extends AppError {
  constructor(message = 'email: invalid length') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
