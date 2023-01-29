import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidEmailPatternError extends AppError {
  constructor(message = 'email: invalid pattern') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
