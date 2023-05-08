import { StatusCodes } from 'http-status-codes';

import { AppError } from './app-error';

export class InvalidPhysicalTestResultError extends AppError {
  constructor(message = 'result: invalid physical test result') {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
