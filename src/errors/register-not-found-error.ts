import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class RegisterNotFoundError extends AppError {
  constructor(message = 'register: not found') {
    super(message, StatusCodes.NOT_FOUND);
  }
}
