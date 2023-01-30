import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidIntegerError extends AppError {
  constructor(message = 'integer: not valid') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
