import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class DuplicateRegisterError extends AppError {
  constructor(message = 'duplicate: register') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
