import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidGenderError extends AppError {
  constructor(message = 'gender: invalid gender') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
