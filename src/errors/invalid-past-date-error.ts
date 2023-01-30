import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidPastDateError extends AppError {
  constructor(message = 'date: is not a past date') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
