import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidPositiveIntegerError extends AppError {
  constructor(message = 'integer: invalid positive integer') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
