import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class UserNotFoundError extends AppError {
  constructor(message = 'user: not found') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
