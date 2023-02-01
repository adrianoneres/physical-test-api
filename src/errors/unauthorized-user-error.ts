import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class UnauthorizedUserError extends AppError {
  constructor(message = 'user: unauthorized') {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}
