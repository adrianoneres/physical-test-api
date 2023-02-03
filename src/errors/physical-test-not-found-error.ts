import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class PhysicalTestNotFoundError extends AppError {
  constructor(message = 'physical test: not found') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
