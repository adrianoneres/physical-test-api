import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidUsernameLengthError extends AppError {
  constructor(message = 'username: invalid length') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
