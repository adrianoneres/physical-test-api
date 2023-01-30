import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidPositiveDecimalError extends AppError {
  constructor(message = 'decimal: invalid positive decimal') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
