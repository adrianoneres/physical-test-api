import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidRegistrationLengthError extends AppError {
  constructor(message = 'registration: invalid length') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
