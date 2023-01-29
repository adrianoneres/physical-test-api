import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidPasswordLengthError extends AppError {
  constructor(message = 'password: invalid length') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
