import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidNameLengthError extends AppError {
  constructor(message = 'name: invalid length') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
