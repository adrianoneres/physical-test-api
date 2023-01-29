import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidEmailLocalError extends AppError {
  constructor(message = 'email: invalid local') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
